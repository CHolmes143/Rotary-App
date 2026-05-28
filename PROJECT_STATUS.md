# Project Status

Last updated: 2026-05-28

## Repository

- Current repo: `CHolmes143/Rotary-App`
- Local checkout: `/Users/carissaholmes/Documents/Codex_Projects/Rotary/Rotary App`
- Current branch: `main`

## Project Direction

- This repository is the backend/internal operations repository for the Rotary app/website.
- The public-facing frontend will now be called the Rotary Event Website and will be built in Squarespace.
- The domain `rotaryrodeo.com` has been purchased through GoDaddy for the public Rotary Event Website.

## Vercel

- Current Vercel project: `rotary-app`
- Vercel team/scope: `carissaholmesrealestate-6124s-projects`
- Live URL: `https://rotary-app-nine.vercel.app`
- Latest production deployment checked: `https://rotary-8h4aplonv-carissaholmesrealestate-6124s-projects.vercel.app`

## Already Built

- Internal Rotary Rodeo outreach tracker built with Next.js App Router, React, TypeScript, Tailwind CSS, Prisma, SQLite, and Papa Parse.
- Dashboard with outreach totals, category counts, sponsorship pledge tracking, follow-ups, and recently updated outreach.
- Company list with search, sorting, filtering, ownership, status/category visibility, duplicate-check flow, CSV import, and CSV export.
- Company detail pages with editable company data and multiple engagement/outreach items.
- Rotary member management for ownership and assignment dropdowns.
- Public-facing Rotary Rodeo pages for event overview, sponsorship, vendor opportunity, silent auction donations, stick horse races, volunteer information, marketing support, and look-back content.
- Sponsorship resources page with downloadable PDFs, flipbook/share links, and Facebook post downloads.
- Help page with quick-start PDF/HTML and how-to videos.
- Public marketing assets and PDFs stored under `public/`.

## Updating Next

- Continue updating backend/internal Rotary app assets and workflows that support sponsorship operations, downloadable packets, flipbook/share links, event page imagery, and other public downloads.
- Coordinate future public website content and calls to action with the separate Squarespace Rotary Event Website at `rotaryrodeo.com`.
- Keep `AI_CONTEXT.md` and this status file updated as repo ownership, deployment URLs, or project priorities change.

## Known Issues

- The worktree currently contains uncommitted app and public asset changes unrelated to these documentation files. Do not stage them unless they are intentionally part of a marketing asset update.
- The root `README.md` is the only tracked Markdown brief currently in the repo; it serves as the initial project brief/source of truth.
- Local Prisma/SQLite setup can fall out of sync after schema changes. Run `npx prisma generate` and `npx prisma db push` after pulling schema updates.
- Some existing public copy contains typos such as "socical" in share-link labels.

