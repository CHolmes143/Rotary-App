import Link from "next/link";
import { CompanyListRow } from "@/components/company-list-row";
import { CompanyFilters } from "@/components/company-filters";
import { ImportForm } from "@/components/import-form";
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
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
          >
            Add new company
          </Link>
        }
      >
        <div className="space-y-4">
          <CompanyFilters members={members} />
          <ImportForm />
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Primary owner</th>
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
