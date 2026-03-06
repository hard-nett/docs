# Contributing

We are thankful for you helping build the Terp Network docs. This guide covers the project layout, how to add things, and what we expect from contributions.

## Expectations

- Run `pnpm dev` and check your changes render before opening a PR.
- Every MDX file needs valid frontmatter. At minimum: `title` (string). Empty files or null fields break the build.
- Interactive components must be `'use client'` and wrapped in `not-prose` when used inside MDX.
- Keep PRs focused. One feature or fix per branch.

## Project Layout

```
app/
  layout.tsx       — root layout, providers (QueryProvider + RootProvider)
  global.css       — all CSS: Tailwind imports, fumadocs + shadcn vars, brand theme
  docs/            — Next.js route for doc pages

lib/
  queries/         — TanStack Query client, fetchers, provider (see its README)
  hooks/           — React Query hooks, one file per domain (see its README)
  openapi.ts       — OpenAPI spec config and source generation
  source.ts        — fumadocs source loader (MDX + OpenAPI combined)
  utils.ts         — cn() via clsx + twMerge (used by shadcn components)
  cn.ts            — cn() via twMerge only (older code)

components/
  ui/              — shadcn primitives, managed by CLI (don't hand-edit)
  calendar/        — community calendar feature
  ai/              — AI page actions (copy, open-in-Claude, etc.)

content/docs/      — MDX documentation pages
static/api/        — OpenAPI YAML specs
```

Each `lib/` subfolder has its own README with usage examples and conventions. Start there when working on data fetching or hooks.

## Adding Things

### New hook

Create `lib/hooks/use-<domain>.ts`. See `lib/hooks/README.md` for the pattern.

### New interactive component

1. Create a folder under `components/` for your feature.
2. Use shadcn primitives from `components/ui/` for common UI.
3. Export a composite component from `index.tsx`.
4. Register it in `mdx-components.tsx` so MDX pages can use `<YourComponent />`.
5. Wrap the outermost element in `not-prose` to prevent fumadocs prose styles from bleeding in.

### New shadcn primitive

```bash
pnpm dlx shadcn@latest add <component-name>
```

Config lives in `components.json` (style: new-york, icons: lucide).

### New docs page

Add a `.mdx` file under `content/docs/<section>/`. Update the section's `meta.json` to include the new slug.

### New API spec

1. Drop the YAML file in `static/api/`.
2. Add entries to `OPENAPI_INPUT` and `OPENAPI_SPECS` in `lib/openapi.ts`.
3. Pages generate at `/docs/api/<slug>` on next build.

## Brand & Styles

### Two color systems

Both live in `app/global.css` and are branded to the same Terp palette:

| System | Prefix | Used by |
|--------|--------|---------|
| Fumadocs | `--color-fd-*` | Docs chrome: sidebar, nav, page layout |
| shadcn | `--background`, `--primary`, etc. | Interactive components: buttons, cards, selects |

If you change a color, update both sets.

### Terp palette

| Role | Light | Dark |
|------|-------|------|
| Primary (purple) | `hsl(265, 50%, 45%)` | `#bd93f9` |
| Accent (lavender) | `hsla(265, 45%, 40%, 0.2)` | `hsla(265, 50%, 55%, 0.25)` |
| Destructive (coral) | `#FA5757` | `#fe7d7d` |
| Green (neon lime) | `#cfffcf` | `#cfffcf` |
| Green (mint) | `#98e8c1` | `#98e8c1` |

### Dark mode

Fumadocs handles the toggle via `.dark` on `<html>`. Both variable systems define dark overrides in `global.css`. Always check both modes.

### Two `cn()` utilities

- `lib/utils.ts` — `clsx` + `twMerge`. Preferred for new code.
- `lib/cn.ts` — re-exports `twMerge` directly. Used by older code.

## Quick Reference

```bash
pnpm dev              # start dev server
pnpm build            # production build (catches frontmatter + type errors)
pnpm dlx shadcn@latest add <name>   # add a shadcn component
```

| Task | Where |
|------|-------|
| Add a query hook | `lib/hooks/use-<domain>.ts` |
| Add query infra | `lib/queries/` |
| Add a shadcn primitive | `pnpm dlx shadcn@latest add <name>` |
| Add an interactive feature | `components/<feature>/index.tsx` + `mdx-components.tsx` |
| Add a docs page | `content/docs/<section>/<slug>.mdx` + `meta.json` |
| Add an API spec | `static/api/<name>.yaml` + `lib/openapi.ts` |
| Change brand colors | both `--color-fd-*` and `--*` in `app/global.css` |
