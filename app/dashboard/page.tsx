import Link from "next/link";
import { getDashboardData } from "@/lib/data";
import { SectionCard, StatCard } from "@/components/ui";

const dashboardOpportunityOrder = [
  "Sponsorship",
  "Silent Auction donation",
  "Vendor",
  "Marketing support",
  "Stick Horse Showdown",
  "Rotary Member"
] as const;

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2">
        <StatCard label="Companies" value={dashboard.companiesCount} />
        <Link href="/companies?status=participation%20committed" className="block">
          <StatCard
            label="participation commitments"
            value={dashboard.statusCounts["participation committed"] || 0}
            tone="bg-primary text-white"
          />
        </Link>
      </section>

      <SectionCard
        title="Help"
        description="How-To videos for tasks like adding and updating participation information"
      >
        <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center">
          <Link
            href="/help"
            className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-accent/90"
          >
            Open Help Videos
          </Link>
        </div>
      </SectionCard>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Sponsorship Thermometer">
          <div className="grid gap-5 lg:grid-cols-[180px_1fr] lg:items-end">
            <div className="flex items-end justify-center">
              <div className="relative flex h-56 w-20 items-end justify-center sm:h-72">
                <div className="absolute bottom-0 h-16 w-16 rounded-full border-4 border-primary bg-accentSoft" />
                <div className="absolute bottom-10 h-40 w-8 overflow-hidden rounded-full border-4 border-primary bg-slate-100 sm:h-52">
                  <div
                    className="absolute inset-x-0 bottom-0 rounded-full bg-gradient-to-t from-accent via-accent to-[#ffd978]"
                    style={{ height: `${dashboard.sponsorshipThermometerPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-primarySoft/40 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Sponsorship pledged
                </p>
                <p className="mt-2 text-4xl font-semibold text-primary">
                  ${dashboard.sponsorshipCommittedTotal.toLocaleString()}
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>Progress toward $10,000</span>
                  <span>{dashboard.sponsorshipThermometerPercent}%</span>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                    style={{ width: `${dashboard.sponsorshipThermometerPercent}%` }}
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Goal
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-primary">$10,000</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Remaining
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-primary">
                    $
                    {Math.max(
                      0,
                      dashboard.sponsorshipGoal - dashboard.sponsorshipCommittedTotal
                    ).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Committed sponsors
                  </p>
                  <Link
                    href="/companies?category=Sponsorship&status=participation%20committed"
                    className="mt-2 inline-flex text-2xl font-semibold text-primary underline underline-offset-4 hover:text-accent"
                  >
                    {dashboard.sponsorshipCommittedCount}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Opportunity Totals">
          <div className="space-y-3">
            {dashboardOpportunityOrder.map((category) => (
              <Link
                key={category}
                href={`/companies?category=${encodeURIComponent(category)}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-accentSoft px-4 py-3"
              >
                <span className="font-medium text-primary">{category}</span>
                <span className="text-lg font-semibold text-primary">
                  {dashboard.categoryCounts[category === "Stick Horse Showdown" ? "Stick Horse Sponsor" : category] || 0}
                </span>
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>

      <div>
        <SectionCard title="Marketing Materials">
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <Link
              href="/sponsorship-resources"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Sponsorships
            </Link>
            <Link
              href="/stick-horse-races"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Stick Horse Showdown
            </Link>
            <Link
              href="/vendor"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Vendors
            </Link>
            <Link
              href="/silent-auction-donations"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Silent Auction Donations
            </Link>
            <Link
              href="/marketing-support"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Marketing Support
            </Link>
            <Link
              href="/volunteers"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Volunteers
            </Link>
            <Link
              href="/event-general"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
            >
              Event (general)
            </Link>
          </div>
        </SectionCard>
        <div className="mt-4">
          <Link
            href="/carissas-meeting-updates.pdf"
            className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
          >
            Carissa&apos;s meeting updates
          </Link>
        </div>
      </div>
    </div>
  );
}
