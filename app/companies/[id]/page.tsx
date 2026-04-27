import Link from "next/link";
import { notFound } from "next/navigation";
import { updateCompany } from "@/lib/actions";
import { AddEngagementForm } from "@/components/add-engagement-form";
import { OutreachItemCard } from "@/components/outreach-item-card";
import { companyCategories } from "@/lib/constants";
import { getCompany, getMembers } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { SectionCard } from "@/components/ui";

export default async function CompanyDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [company, members] = await Promise.all([getCompany(id), getMembers()]);

  if (!company) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <SectionCard
        title={company.name}
        description="Keep company details and ownership up to date so members can quickly see who is handling what."
        action={
          <div className="text-right">
            <Link href="/companies" className="text-sm font-semibold text-primary hover:text-accent">
              Back to companies
            </Link>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">
              Last updated {formatDate(company.updatedAt)}
            </p>
          </div>
        }
      >
        <form action={updateCompany} className="grid gap-4 md:grid-cols-2">
          <input type="hidden" name="id" value={company.id} />
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Company name</span>
            <input name="name" defaultValue={company.name} required />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Primary outreach owner</span>
            <select name="primaryOwnerId" defaultValue={company.primaryOwnerId || ""}>
              <option value="">Unassigned</option>
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>
{company.outreachItems.some((item) => item.category === "VENDOR") && (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-slate-700">Vendor Type</span>
    <select name="companyCategory" defaultValue={company.companyCategory || ""}>
      <option value="">Not set</option>
      <option value="For Profit">For Profit</option>
      <option value="Non Profit">Non Profit</option>
      <option value="Service Provider">Service Provider</option>
    </select>
  </label>
)}
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Contact name</span>
            <input name="contactName" defaultValue={company.contactName || ""} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input name="email" type="email" defaultValue={company.email || ""} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
            <input name="phone" defaultValue={company.phone || ""} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Social media handles</span>
            <input
              name="socialMediaHandles"
              defaultValue={company.socialMediaHandles || ""}
            />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Address</span>
            <input name="address" defaultValue={company.address || ""} />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Business description</span>
            <input name="description" defaultValue={company.description || ""} />
          </label>
          <fieldset className="block md:col-span-2">
            <legend className="mb-2 block text-sm font-medium text-slate-700">
              Past Year Participation
            </legend>
            <div className="flex flex-wrap gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="participated2024"
                  defaultChecked={company.participated2024}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
                />
                <span>2024</span>
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="participated2025"
                  defaultChecked={company.participated2025}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
                />
                <span>2025</span>
              </label>
            </div>
          </fieldset>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Company notes</span>
            <textarea name="notes" defaultValue={company.notes || ""} />
          </label>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
            >
              Save company details
            </button>
          </div>
        </form>
      </SectionCard>

      <SectionCard
        title="Engagements"
        description="Each company can have multiple active asks. Keep every category visible here to avoid overlap."
      >
        <div className="space-y-5">
          {company.outreachItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
              No engagement types yet. Add the first category below.
            </div>
          ) : (
            company.outreachItems.map((item) => (
              <OutreachItemCard key={item.id} companyId={company.id} item={item} />
            ))
          )}

          <div className="rounded-2xl border border-dashed border-slate-300 bg-accentSoft p-4">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-2">
              <h3 className="text-base font-semibold text-primary">Add Engagement</h3>
              <p className="text-sm text-primary">
                Use this when the same company is being contacted for another type of support.
              </p>
            </div>
            <AddEngagementForm companyId={company.id} />
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
