# Engineering Exercise — Employee Visa Tracking

## Context

Concord is a platform for managing visas and global mobility. Two groups use it:

- **Employees** complete a profile with the information needed to prepare a visa filing.
- **HR managers** track the visa status of the employees at their company — who's on top of things, who's stuck, and whose work authorisation is about to lapse.

You've been handed a CSV (`concord_employees.csv`) containing employee data exported from an upstream system. It is real-world-shaped: it spans multiple companies and several visa types across different countries, and it is not perfectly clean.

## Your task

1. **Design a data model** for this domain.
2. **Build a read-only dashboard** that lets an HR manager track the employees at their company.

That's the whole brief. How you interpret "track" — what an HR manager most needs to see, and what you'd surface first — is part of what we're looking at.

## Scope & constraints

This is a **time-boxed: aim for ~3 hours.** We are not expecting a production system, and we'd rather see a smaller thing done thoughtfully than a large thing done sloppily.

To keep the focus on data modelling and the dashboard, you can **skip**:

- **Authentication / authorisation.** Assume the HR manager is already signed in. (You may still want to *model* who-sees-what — that's your call.)
- **Data creation / editing.** Reading and viewing the data is enough; you don't need create/update/delete flows.
- **Pixel-perfect UI.** Clear and usable beats polished.

**Stack is your choice** — use whatever lets you move fastest and show your strengths.

**Use AI tools freely** (Claude, Copilot, Cursor, etc.). We use them daily and want to see how you work with them.

## What to submit

- The code, runnable from a short README (a couple of commands to get it going is fine).
- A brief **notes file** (a page is plenty) covering:
  - **Assumptions** you made about the domain and the data.
  - **Questions** you'd have asked us if this were a live project — and what you assumed in their absence so you could keep moving.
  - **Trade-offs and shortcuts** — what you deliberately cut, what you'd do with more time, and why.

## What we're looking at

We care more about judgment than completeness. In particular:

- How you **model the domain** — including data that doesn't fit a single tidy shape.
- How you handle **messy and incomplete data** without grinding to a halt.
- How you **prioritise**: what you decided matters for an HR manager, and what you chose to leave out.
- How clearly you **communicate** your assumptions and trade-offs.

There's no single right answer, and we don't expect you to handle everything in the data. Decide what's worth your time, do that well, and tell us about the rest.