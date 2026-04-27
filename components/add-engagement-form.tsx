"use client";

import { useState } from "react";
import { addOutreachItem } from "@/lib/actions";
import { outreachCategories, outreachStatuses, sponsorshipTargetAmounts } from "@/lib/constants";

type AddEngagementFormProps = {
  companyId: string;
};

export function AddEngagementForm({ companyId }: AddEngagementFormProps) {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("no contact attempted");
  const showSponsorshipLevel =
    category === "Sponsorship" && status === "participation committed";

  return (
    <form action={addOutreachItem} className="mt-4 grid gap-4 md:grid-cols-2">
      <input type="hidden" name="companyId" value={companyId} />
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Category</span>
        <select
          name="category"
          required
          defaultValue=""
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>
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
          defaultValue="no contact attempted"
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
          <select name="targetAmount" defaultValue="">
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
        <input name="dateLastContacted" type="date" />
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-slate-700">Next step</span>
        <input name="nextStep" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Next step due date</span>
        <input name="nextStepDueDate" type="date" />
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-slate-700">Notes</span>
        <textarea name="notes" />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
        >
          Add Engagement
        </button>
      </div>
    </form>
  );
}
