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
          <Link href="/companies" className="text-sm font-semibold text-primary hover:text-accent">
            Back to companies
          </Link>
        }
      >
        <NewCompanyForm members={members} action={createCompany} />
      </SectionCard>
    </div>
  );
}
