"use client";

import { useState } from "react";
import { addOutreachItem } from "@/lib/actions";
import { outreachCategories, outreachStatuses, sponsorshipTargetAmounts } from "@/lib/constants";

type AddEngagementFormProps = {
  companyId: string;
};

export function AddEngagementForm({ companyId }: AddEngagementFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("no contact attempted");
  const showSponsorshipLevel =
    category === "Sponsorship" && status === "participation committed";

  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-accentSoft p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
          <h3 className="text-base font-semibold text-primary">Add Engagement</h3>
          <p className="text-sm text-primary">
            Use this when the same company is being contacted for another type of support.
          </p>
        </div>
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((current) => !current)}
          className="inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-primarySoft sm:w-auto"
        >
          {isExpanded ? "Hide form" : "Add Engagement"}
        </button>
      </div>

      {isExpanded ? (
        <form action={addOutreachItem} className="mt-4 grid gap-4 lg:grid-cols-2">
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
          <label className="block lg:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Next step</span>
            <input name="nextStep" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Next step due date</span>
            <input name="nextStepDueDate" type="date" />
          </label>
          <label className="block lg:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Notes</span>
            <textarea name="notes" />
          </label>
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900 sm:w-auto"
            >
              Add Engagement
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
