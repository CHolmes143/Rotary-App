import Link from "next/link";
import { CompanyListCard, CompanyListRow } from "@/components/company-list-row";
import { CompanyFilters } from "@/components/company-filters";
import { outreachCategories } from "@/lib/constants";
import { SectionCard } from "@/components/ui";
import { getCompanies, getMembers } from "@/lib/data";

export default async function CompaniesPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filters = {
    query: asString(params.query),
    category: asString(params.category),
    status: asString(params.status),
    memberId: asString(params.memberId)
  };

  const [companies, members] = await Promise.all([getCompanies(filters), getMembers()]);

  return (
    <div className="space-y-6">
      <SectionCard
        title="Companies Including: for profit, non-profits and individuals"
        description="Search, filter, and open records to see exactly who is handling each relationship."
        action={
          <Link
            href="/companies/new"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent hover:text-slate-900 sm:w-auto"
          >
            Add new company
          </Link>
        }
      >
        <div className="space-y-4">
          <CompanyFilters members={members} />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-primary">Download company lists by engagement type</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {outreachCategories.map((category) => (
                <a
                  key={category}
                  href={`/api/export?category=${encodeURIComponent(category)}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-primary hover:border-primary/30 hover:bg-primarySoft"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-3 md:hidden">
            {companies.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center text-sm text-slate-500">
                No companies match the current filters.
              </div>
            ) : (
              companies.map((company) => <CompanyListCard key={company.id} company={company} />)
            )}
          </div>
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 md:block">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Owner</th>
                    <th className="px-4 py-3">Engagements</th>
                    <th className="px-4 py-3">Updated</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-500">
                        No companies match the current filters.
                      </td>
                    </tr>
                  ) : (
                    companies.map((company) => <CompanyListRow key={company.id} company={company} />)
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

function asString(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}
