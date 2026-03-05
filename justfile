# terp-docs — development & operations
# usage: just <recipe>    or    just --list

set dotenv-load := false
set shell := ["bash", "-euo", "pipefail", "-c"]

docs_dir := justfile_directory()

# ─── Development ────────────────────────────────────────────────

# install dependencies
install:
    pnpm install

# start the dev server
dev:
    pnpm dev

# ─── Build & Validate ──────────────────────────────────────────

# production build
build:
    pnpm build

# typecheck
typecheck:
    pnpm types:check

# lint
lint:
    pnpm lint

# check for broken internal markdown links
check-links:
    ./scripts/check-links.sh

# run all checks
check: check-links lint

# ─── Utilities ──────────────────────────────────────────────────

# start production server (after build)
start:
    pnpm start

# clean build artifacts
clean:
    rm -rf {{docs_dir}}/.next {{docs_dir}}/.source

# show git status
status:
    git status -sb
