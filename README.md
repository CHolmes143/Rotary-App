# Rotary Rodeo Outreach Tracker

Rotary Rodeo Outreach Tracker is a lightweight internal web app for Rotary Club members to coordinate local business outreach in one shared place. It keeps companies, member ownership, and support requests visible so sponsorship, vendor, silent auction, and marketing outreach do not overlap.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Prisma + SQLite
- Papa Parse for CSV import and export

## Features

- Dashboard with status counts, category counts, follow-up list, and recently updated outreach
- Searchable, sortable, filterable companies table
- Company detail page with editable company info and multiple outreach items per company
- Simple Rotary member management for assignment dropdowns
- CSV import for existing company and outreach data
- CSV export for all company and outreach records in a flattened report
- Seed data and a reusable import template
- Mobile-friendly layout with simple, large controls

## Getting started

1. Install dependencies:

```bash
npm install
```

Node.js 20 or newer is recommended.

2. Copy the environment file and confirm the database path:

```bash
cp .env.example .env
```

3. Generate the Prisma client and create the SQLite database:

```bash
npx prisma generate
npx prisma db push
```

If you are updating an existing local copy after pulling schema changes, run these commands again so Prisma applies the latest relation behavior.

For this company delete update, the existing schema already uses cascading deletes from `Company` to `OutreachItem`, so no new schema change is required. You should still restart the dev server after pulling the latest code.

For this outreach-item delete update, no database migration is needed. Restart the dev server after pulling the latest code so the updated company detail UI and server action are loaded.

For the outreach category update, Prisma does need to pick up the new enum values. Run:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

For the secondary member notes removal, update the Prisma client and local database schema with:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

For the past year participation update, run the same commands so the new company boolean fields are added locally:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

If Prisma throws `Unknown argument participated2024` or `Unknown argument participated2025`, your local Prisma client is out of sync with the schema. Run these exact commands again:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

For the outreach method standardization update, you do need to refresh Prisma and update existing local data so older values like `PHONE` and `SOCIAL_MEDIA` are remapped to the current enum values. Run these exact commands:

```bash
npx prisma generate
npx prisma db push
npx prisma db execute --file prisma/update-outreach-methods.sql --schema prisma/schema.prisma
```

Then restart the dev server.

For the sponsorship target amount update, run:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

For the company category update, run:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

For the engagement type update that adds `Service Provider`, run:

```bash
npx prisma generate
npx prisma db push
```

Then restart the dev server.

To remove the `Service Provider` engagement type cleanly from an existing local database, first remap any old `SERVICE_PROVIDER` rows, then refresh Prisma:

```bash
npx prisma db execute --file prisma/remove-service-provider-category.sql --schema prisma/schema.prisma
npx prisma generate
npx prisma db push
```

Then restart the dev server.

4. Seed the app with sample members, companies, and outreach data:

```bash
npm run db:seed
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000).

## CSV import and export

- Import from the Companies screen using the built-in upload form.
- A sample import file is available at `public/templates/companies-import-template.csv`.
- Export all records from the header "Export CSV" button.
- The export is flattened so each outreach item becomes one row alongside its company details.

## Data model

### Company

- Name
- Contact details
- Company category
- Social handles
- Description
- Address
- Notes
- Participated in 2024
- Participated in 2025
- Primary outreach owner

### Member

- Name

### Outreach item

- Category type
- Status
- Primary Rotary owner
- Outreach method
- Date last contacted
- Next step
- Next step due date
- Notes

The company-level primary owner is the visible assignment used throughout the app. Outreach items no longer show their own separate member assignment in the UI.

## Project structure

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

## Future-friendly structure

The current structure keeps domain logic centralized in `lib/data.ts`, mutation logic in `lib/actions.ts`, and persistence in Prisma. That makes it straightforward to add:

- Login and roles by introducing a `User` model plus authenticated route guards without rewriting the company and outreach domain.
- Event tracking by adding `Event` and `EventParticipation` models linked to companies and outreach items.
- Sponsor fulfillment by adding post-confirmation workflows such as invoice status, logo collection, benefit delivery, and steward assignments.

Because the app already separates companies, members, and outreach items cleanly, those additions can layer on top of the existing models instead of replacing them.
