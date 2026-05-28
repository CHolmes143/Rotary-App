# AI Context

Primary source of truth: `README.md`, created in the initial commit `36701fa` ("Initial version of Rotary app"). Use it as the project brief when resuming work.

## Project Goal

Rotary Rodeo Outreach Tracker is a lightweight internal web app for Rotary Club members to coordinate local business outreach in one shared place. It keeps companies, member ownership, and support requests visible so sponsorship, vendor, silent auction, Rotary member, and marketing outreach do not overlap.

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Prisma + SQLite
- Papa Parse for CSV import and export
- Node.js 20 or newer is recommended

## Core Features

- Dashboard with status counts, category counts, follow-up list, and recently updated outreach.
- Searchable, sortable, filterable companies table.
- Company detail page with editable company info and multiple outreach items per company.
- Rotary member management for assignment dropdowns.
- CSV import for existing company and outreach data.
- CSV export for all company and outreach records in a flattened report.
- Seed data and a reusable import template.
- Mobile-friendly layout with simple, large controls.

## Data Model

Company records include name, contact details, category, social handles, description, address, notes, 2024/2025 participation flags, and primary outreach owner.

Member records currently store member names for ownership and assignment.

Outreach items include category type, status, primary Rotary owner, outreach method, date last contacted, next step, next step due date, and notes. The company-level primary owner is the visible assignment used throughout the app.

## Project Structure

```text
app/
  api/
    companies/import/route.ts
    export/route.ts
  companies/
  members/
  page.tsx
components/
lib/
  actions.ts
  csv.ts
  data.ts
  prisma.ts
  constants.ts
prisma/
  schema.prisma
  seed.ts
public/templates/
```

Domain logic is centralized in `lib/data.ts`, mutations in `lib/actions.ts`, and persistence in Prisma. Keep future additions layered on top of the existing Company, Member, and OutreachItem model boundaries where possible.

## Local Workflow

Install dependencies:

```bash
npm install
```

Set up the local environment:

```bash
cp .env.example .env
npx prisma generate
npx prisma db push
```

Seed sample data when needed:

```bash
npm run db:seed
```

Run locally:

```bash
npm run dev
```

Open `http://localhost:3000`.

After schema changes, rerun:

```bash
npx prisma generate
npx prisma db push
```

For outreach method standardization on existing local data, also run:

```bash
npx prisma db execute --file prisma/update-outreach-methods.sql --schema prisma/schema.prisma
```

To remove old `SERVICE_PROVIDER` engagement rows cleanly, run:

```bash
npx prisma db execute --file prisma/remove-service-provider-category.sql --schema prisma/schema.prisma
npx prisma generate
npx prisma db push
```

## Future-Friendly Direction

The README identifies three natural future additions:

- Login and roles by adding a `User` model plus authenticated route guards.
- Event tracking by adding `Event` and `EventParticipation` models linked to companies and outreach items.
- Sponsor fulfillment workflows such as invoice status, logo collection, benefit delivery, and steward assignments.

