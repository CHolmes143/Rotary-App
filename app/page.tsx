import Link from "next/link";
import { getDashboardData, readableCategory, readableStatus } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { SectionCard, StatCard, StatusBadge } from "@/components/ui";

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Companies" value={dashboard.companiesCount} />
        <StatCard label="Engagement types" value={dashboard.outreachCount} tone="bg-white text-primary border border-slate-200" />
        <StatCard
          label="participation committed"
          value={dashboard.statusCounts["participation committed"] || 0}
          tone="bg-primary text-white"
        />
        <StatCard
          label="follow up needed"
          value={dashboard.statusCounts["follow up needed"] || 0}
          tone="bg-accent text-slate-900"
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Status summary"
          description="A quick pulse on all outreach activity across the club."
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {Object.entries(dashboard.statusCounts).map(([status, count]) => (
              <div key={status} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <StatusBadge status={status as never} />
                  <span className="text-2xl font-semibold text-primary">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Category totals"
          description="See where sponsor and vendor outreach volume is stacking up."
        >
          <div className="space-y-3">
            {Object.entries(dashboard.categoryCounts).map(([category, count]) => (
              <Link
                key={category}
                href={`/companies?category=${encodeURIComponent(category)}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-accentSoft px-4 py-3"
              >
                <span className="font-medium text-primary">{category}</span>
                <span className="text-lg font-semibold text-primary">{count}</span>
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard
          title="follow up needed"
          description="Items that are due soon or explicitly marked for follow-up."
          action={
            <Link
              href="/companies"
              className="text-sm font-semibold text-primary hover:text-accent"
            >
              Open companies list
            </Link>
          }
        >
          <div className="space-y-3">
            {dashboard.followUps.length === 0 ? (
              <p className="text-sm text-slate-600">No active follow-up items right now.</p>
            ) : (
              dashboard.followUps.map((item) => (
                <Link
                  key={item.id}
                  href={`/companies/${item.companyId}`}
                  className="block rounded-2xl border border-slate-200 p-4 hover:border-primary/25 hover:bg-primarySoft/30"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-semibold text-primary">{item.company.name}</p>
                      <p className="text-sm text-slate-600">{readableCategory(item.category)}</p>
                    </div>
                    <StatusBadge status={readableStatus(item.status) as never} />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Next step: {item.nextStep || "No next step noted"}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                    Due {formatDate(item.nextStepDueDate)}
                  </p>
                </Link>
              ))
            )}
          </div>
        </SectionCard>

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
