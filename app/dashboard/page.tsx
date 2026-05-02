import Link from "next/link";
import { getDashboardData, readableCategory, readableStatus } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { SectionCard, StatCard, StatusBadge } from "@/components/ui";

const dashboardOpportunityOrder = [
  "Sponsorship",
  "Silent Auction donation",
  "Vendor",
  "Marketing support",
  "Stick Horse Sponsor",
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

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Sponsorship Thermometer">
          <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-end">
            <div className="flex items-end justify-center">
              <div className="relative flex h-72 w-20 items-end justify-center">
                <div className="absolute bottom-0 h-16 w-16 rounded-full border-4 border-primary bg-accentSoft" />
                <div className="absolute bottom-10 h-52 w-8 overflow-hidden rounded-full border-4 border-primary bg-slate-100">
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
                  <span>Progress toward $19,000</span>
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
                  <p className="mt-2 text-2xl font-semibold text-primary">$19,000</p>
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
                  <p className="mt-2 text-2xl font-semibold text-primary">
                    {dashboard.sponsorshipCommittedCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Opporunity Totals">
          <div className="space-y-3">
            {dashboardOpportunityOrder.map((category) => (
              <Link
                key={category}
                href={`/companies?category=${encodeURIComponent(category)}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-accentSoft px-4 py-3"
              >
                <span className="font-medium text-primary">{category}</span>
                <span className="text-lg font-semibold text-primary">
                  {dashboard.categoryCounts[category] || 0}
                </span>
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>

      <div>
        <SectionCard title="Marketing Materials and Additional Information">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/sponsorship"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Sponsoroships
            </Link>
            <Link
              href="/vendor"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Vendors
            </Link>
            <Link
              href="/silent-auction-donations"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Silent Auction Donations
            </Link>
            <Link
              href="/marketing-support"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Marketing Support
            </Link>
            <Link
              href="/stick-horse-races"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Stick Horse Races
            </Link>
            <Link
              href="/volunteers"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Volunteers
            </Link>
          </div>
        </SectionCard>
      </div>

      <div>
        <SectionCard title="Recently updated" description="Latest outreach activity and notes.">
          <div className="space-y-3">
            {dashboard.recentlyUpdated.length === 0 ? (
              <p className="text-sm text-slate-600">No outreach records yet.</p>
            ) : (
              dashboard.recentlyUpdated.map((item) => (
                <Link
                  key={item.id}
                  href={`/companies/${item.companyId}`}
                  className="block rounded-2xl border border-slate-200 p-4 hover:border-primary/25 hover:bg-primarySoft/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-primary">{item.company.name}</p>
                      <p className="text-sm text-slate-600">{readableCategory(item.category)}</p>
                    </div>
                    <StatusBadge status={readableStatus(item.status) as never} />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Primary owner: {item.company.primaryOwner?.name || "Unassigned"}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                    Updated {formatDate(item.updatedAt)}
                  </p>
                </Link>
              ))
            )}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
