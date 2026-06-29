# Concord Engineering Exercise — Visa Tracking

## Scenario

Concord helps organisations manage visas and global mobility. Several parties rely
on the platform: **advisors** who move each case forward, the **client
organisations** (e.g. an HR team) whose people are being sponsored, and the
**beneficiaries** — the employees themselves — who want to know where their case
stands.

You've been given a small, **already-running** dashboard, thrown together on top of
a messy employee export (`public/concord_employees.csv`). It runs, but it was built
in a hurry — **treat the implementation as rough and provisional.** Your job isn't
to rebuild or polish it; it's to look at it with us and talk through where you'd
take it.

> **It's a scaffold, not a product.** It dumps a few raw columns into a table with a
> hand-rolled status badge and one design-system `Card` — there's a design system
> behind it, but no design thought in front of it yet. Deciding what an HR manager
> needs is the exercise.

## What the session is

**An in-person, collaborative session**. Together we'll:

- **Read it together** — open the app and the code and tell us what you notice.
- **Work the problems below** — decide what matters and sketch what you'd build.
- **Extend it together** — pair with us on a slice or two.

**You don't have to fix everything you spot.** For an existing problem in the code
or data, dropping a `// TODO:` that names it — and, ideally, how you'd approach it
— is enough. Focus your effort on your contributions.

**AI tools (Claude, Copilot, Cursor, etc.) and the internet are encouraged.** We use
them daily — please narrate how you use them and how you check their output.

## Problem statements

These are the kinds of needs the product exists to serve. We'll use them to steer
the conversation — pick what you'd take on, and tell us why:

- **Advisors need to prioritise their work** — who needs attention first, who's at
  risk, what's blocked or waiting on someone.
- **Clients and beneficiaries need to see how their case(s) are progressing** —
  where a case is, what happens next, what's overdue.
- **Everyone needs to trust what they're looking at** — the export is messy, so
  what would it take to turn it into data you'd model and rely on?

You won't get to all of these. Choose, prioritise, and be ready to say what you'd
deliberately leave out.

## What we ARE looking at

- How you **communicate** your thinking.
- How you **prioritise** and reason about messy, real-world data.
- How you **work with us** — collaboration, and how you react when something new
  lands mid-conversation.
- The **point of view** you bring or form about what these users most need.
- How you **model the domain** — including data that doesn't fit a single tidy shape.

## What we are NOT looking at (please don't spend time on these)

- Authentication.
- Pixel-perfect UI.
- Completeness — you will not "finish", and that's fine.
- Visa-domain trivia — you don't need to be an immigration expert.
- Knowing our exact stack, or any particular library or technique off the top of
  your head — reasoning aloud about how you'd approach something is the point.

## What to submit

- The code, runnable from a short README (a couple of commands to get it going is fine).
- A brief **notes file** (a page is plenty) covering:
  - **Assumptions** you made about the domain and the data.
  - **Questions** you'd have asked us if this were a live project — and what you assumed in their absence so you could keep moving.
  - **Trade-offs and shortcuts** — what you deliberately cut, what you'd do with more time, and why.

> [!NOTE]
> There's no single right answer, and we don't expect you to handle all of it. Decide what's worth your time, do a satisficing job of it, and tell us about the rest.

## Running it

Two commands:

```bash
bun install
bun run dev
```

Then open the printed `localhost` URL. (No bun? `npm install && npm run dev` works too.)

| Command | What it does |
|---|---|
| `bun run dev` | Vite dev server with hot reload. |
| `bun run build` | Type-check (`tsc`) + production build into `dist/`. |
| `bun run preview` | Serve the production build. |
| `bun run check` | Lint + format check (Biome via [ultracite](https://github.com/haydenbleasel/ultracite)). |
| `bun run fix` | Auto-fix lint/format issues. |

## Where to work

The files under `src/` (and the CSV) are the exercise — that's where your attention
should go:

```
src/
  main.tsx               # entry point
  app.tsx                # the scaffold page (table + status badge + one Card)
  components/card.tsx    # design-system sample component
  data/load-employees.ts # reads the CSV into rows (every column, raw)
public/
  concord_employees.csv  # the export the dashboard renders
```

Everything else (`index.html`, `vite.config.ts`, `tsconfig.json`, `biome.jsonc`,
`vite-env.d.ts`, `package.json`, `bun.lock`, `.gitignore`, `.editorconfig`) is
boilerplate; each carries a one-line header saying so. **You're not expected to find
problems hidden in the config** — if you do spot something genuinely off, great, but
don't go hunting there. Adding a dependency is fine if it helps — `bun add <pkg>` —
just be ready to say why.

## Stack

**React + TypeScript + Vite** — a deliberately boring, widely-readable stack so we
can work in it together. Most of what we pay attention to (reading the code,
prioritising, sketching a data model, directing AI) doesn't need fluent stack code,
and AI is available for the part that does — so don't worry if React/TS isn't your
daily driver. Linting/formatting is Biome via ultracite (`biome.jsonc`); TypeScript
runs in `Bundler` mode with an `@/` → `src/` alias.
