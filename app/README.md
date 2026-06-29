# Visa Tracking — HR Dashboard

A read-only HR dashboard for tracking employees' visa status, built on a messy
employee export (`public/concord_employees.csv`). React + TypeScript + Vite.

> **This is a scaffold, not a product.** It dumps a few raw columns into a table
> with a hand-rolled status badge, and shows one design-system `Card` as a sample
> of the component library. No decisions have been made about what an HR manager
> needs to see, how to order or group it, or what "status" should mean — there's
> a design system behind it, but no design thought in front of it yet. Deciding
> all that is part of the exercise.

## Running it

From this `app/` directory:

```bash
bun install      # install dependencies
bun run dev      # start the dev server (prints a localhost URL)
```

Open the printed `localhost` URL in your browser.

> No bun? `npm install && npm run dev` works too.

## Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Start the Vite dev server with hot reload. |
| `bun run build` | Type-check (`tsc`) and produce a production build in `dist/`. |
| `bun run preview` | Serve the production build locally. |
| `bun run check` | Lint + format check (Biome via [ultracite](https://github.com/haydenbleasel/ultracite)). |
| `bun run fix` | Auto-fix lint/format issues. |

## Layout

```
src/
  main.tsx                 # app entry point
  app.tsx                  # the scaffold page (table + status badge + one Card)
  components/card.tsx      # design-system sample component
  data/load-employees.ts   # reads the CSV into rows (every column, raw)
public/
  concord_employees.csv    # the employee export the dashboard renders
```

## Where to work

The files under `src/` (and the CSV) are the exercise — that's where your attention
should go. Everything else (`index.html`, `vite.config.ts`, `tsconfig.json`,
`biome.jsonc`, `vite-env.d.ts`, `package.json`, `bun.lock`, `.gitignore`) is
boilerplate; each carries a one-line header saying so. **You're not expected to find
problems hidden in the config** — if you do spot something genuinely off, great, but
don't go hunting there.

Adding a dependency is fine if it helps — `bun add <pkg>` — just be ready to say why.

## Stack notes

- **Vite + `@vitejs/plugin-react`** for dev/build and React Fast Refresh. (The
  SWC-based `@vitejs/plugin-react-swc` is an alternative we don't use.)
- **Biome + ultracite** for linting and formatting — config in `biome.jsonc`,
  matching the conventions in the main `concord-next` repo.
- **TypeScript** in `Bundler`-resolution mode with an `@/` → `src/` alias.
