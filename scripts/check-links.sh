#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════
# check-links.sh — Find broken internal links in MDX/MD docs
# ═══════════════════════════════════════════════════════════════════
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$(cd "$SCRIPT_DIR/../content/docs" && pwd)"

GREEN='\033[0;32m'; RED='\033[0;31m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'

results=$(mktemp)
trap 'rm -f "$results"' EXIT

echo -e "${CYAN}Scanning docs in${NC} $DOCS_DIR"
echo ""

# Extract all markdown links: file:line:link
grep -rnoE '\[[^]]*\]\([^)]+\)' "$DOCS_DIR" --include='*.md' --include='*.mdx' \
    | sed -E 's/^(.*):([0-9]+):.*\]\(([^)]+)\)$/\1:\2:\3/' \
    | while IFS=: read -r file lineno link; do
    # Strip anchor
    target="${link%%#*}"

    # Skip external, empty, images
    case "$target" in
        http://*|https://*|mailto:*|"") continue ;;
        *.png|*.jpg|*.jpeg|*.gif|*.svg|*.webp) continue ;;
    esac

    dir="$(dirname "$file")"

    # Resolve path
    if [[ "$target" == /* ]]; then
        clean="${target#/docs/}"
        clean="${clean#/}"
        base="$DOCS_DIR/$clean"
    else
        base="$dir/$target"
    fi
    base="${base%/}"

    # Check existence
    found=false
    for c in "$base" "${base}.md" "${base}.mdx" \
             "$base/index.md" "$base/index.mdx" \
             "$base/README.md" "$base/README.mdx"; do
        [ -e "$c" ] && { found=true; break; }
    done

    rel="${file#$DOCS_DIR/}"
    if [ "$found" = true ]; then
        echo "OK" >> "$results"
    else
        echo -e "  ${RED}BROKEN${NC}  ${rel}:${lineno}  ${YELLOW}→${NC} $link"
        echo "BROKEN" >> "$results"
    fi
done

ok=$(grep -c '^OK$' "$results" 2>/dev/null || true)
broken=$(grep -c '^BROKEN$' "$results" 2>/dev/null || true)

echo ""
echo -e "  ${GREEN}OK${NC}     ${ok:-0}"
echo -e "  ${RED}BROKEN${NC} ${broken:-0}"
echo ""
[ "${broken:-0}" -eq 0 ]
