"use client";

import { useState } from "react";
import type { OutreachItem } from "@prisma/client";
import { deleteOutreachItem, updateOutreachItem } from "@/lib/actions";
import { outreachCategories, outreachStatuses, sponsorshipTargetAmounts } from "@/lib/constants";
import { readableCategory, readableStatus } from "@/lib/data";
import { formatDate, formatDateInput } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";

type OutreachItemWithRelations = OutreachItem & {
  assignedMember: { id: string; name: string } | null;
};

type OutreachItemCardProps = {
  companyId: string;
  item: OutreachItemWithRelations;
};

export function OutreachItemCard({ companyId, item }: OutreachItemCardProps) {
  const initialCategory = readableCategory(item.category);
  const initialStatus = readableStatus(item.status);
  const [category, setCategory] = useState(initialCategory);
  const [status, setStatus] = useState(initialStatus);
  const showSponsorshipLevel =
    category === "Sponsorship" && status === "participation committed";

  return (
    <form className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <input type="hidden" name="id" value={item.id} />
      <input type="hidden" name="companyId" value={companyId} />
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-primary">{readableCategory(item.category)}</p>
          <p className="text-sm text-slate-600">Last updated {formatDate(item.updatedAt)}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={readableStatus(item.status) as never} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Category</span>
          <select
            name="category"
            defaultValue={initialCategory}
            onChange={(event) => setCategory(event.target.value)}
          >
            {outreachCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Status</span>
          <select
            name="status"
            defaultValue={initialStatus}
            onChange={(event) => setStatus(event.target.value)}
          >
            {outreachStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        {showSponsorshipLevel ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Sponsorship level</span>
            <select name="targetAmount" defaultValue={item.targetAmount || ""}>
              <option value="">Select sponsorship level</option>
              {sponsorshipTargetAmounts.map((amount) => (
                <option key={amount} value={amount}>
                  {amount}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <input type="hidden" name="targetAmount" value="" />
        )}
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Date last contacted</span>
          <input
            name="dateLastContacted"
            type="date"
            defaultValue={formatDateInput(item.dateLastContacted)}
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-700">Next step</span>
          <input name="nextStep" defaultValue={item.nextStep || ""} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Next step due date</span>
          <input
            name="nextStepDueDate"
            type="date"
            defaultValue={formatDateInput(item.nextStepDueDate)}
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-700">Notes</span>
          <textarea name="notes" defaultValue={item.notes || ""} />
        </label>
        <div className="md:col-span-2 flex flex-wrap gap-2">
          <button
            type="submit"
            formAction={updateOutreachItem}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
          >
            Update Engagement
          </button>
          <button
            type="submit"
            formAction={deleteOutreachItem}
            onClick={(event) => {
              const confirmed = window.confirm(
                `Delete the ${readableCategory(item.category)} engagement type? This will only remove this engagement type and will keep the rest of the company unchanged.`
              );

              if (!confirmed) {
                event.preventDefault();
              }
            }}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 hover:border-rose-200 hover:text-rose-700"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  );
}
