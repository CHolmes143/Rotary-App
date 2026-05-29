import Link from "next/link";
import { createCompany } from "@/lib/actions";
import { NewCompanyForm } from "@/components/new-company-form";
import { getMembers } from "@/lib/data";
import { SectionCard } from "@/components/ui";

export default async function NewCompanyPage() {
  const members = await getMembers();

  return (
    <div className="space-y-6">
      <SectionCard
        title="Add new company"
        description="Create a company record first, then add one or more engagement types on the detail page."
        action={
          <Link href="/companies" className="inline-flex min-h-11 items-center rounded-xl border border-primary/20 bg-primarySoft px-4 py-2 text-sm font-semibold text-primary hover:bg-accentSoft hover:text-primary sm:min-h-0 sm:border-0 sm:bg-transparent sm:p-0 sm:hover:text-accent">
            Back to companies
          </Link>
        }
      >
        <NewCompanyForm members={members} action={createCompany} />
      </SectionCard>
    </div>
  );
}
