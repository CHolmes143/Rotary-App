"use client";

import { useRef } from "react";

type MemberOption = {
  id: string;
  name: string;
};

export function NewCompanyForm({
  members,
  action
}: {
  members: MemberOption[];
  action: (formData: FormData) => Promise<void>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const bypassRef = useRef<HTMLInputElement>(null);

  return (
    <form
      ref={formRef}
      action={action}
      className="grid gap-4 md:grid-cols-2"
      onSubmit={async (event) => {
        const bypass = bypassRef.current;
        if (bypass?.value === "1") {
          bypass.value = "0";
          return;
        }

        event.preventDefault();
        const form = formRef.current;
        const nameInput = form?.elements.namedItem("name") as HTMLInputElement | null;
        const name = nameInput?.value.trim() || "";
        if (!name) return;

        const response = await fetch(`/api/companies/check-duplicate?name=${encodeURIComponent(name)}`);
        const payload = (await response.json()) as { match: { id: string; name: string } | null };

        if (payload.match) {
          const openExisting = window.confirm(
            `Are you thinking of ${payload.match.name}? Click OK to open the existing company, or Cancel to create a new one anyway.`
          );

          if (openExisting) {
            window.location.href = `/companies/${payload.match.id}`;
            return;
          }
        }

        if (bypass) bypass.value = "1";
        form?.requestSubmit();
      }}
    >
      <input ref={bypassRef} type="hidden" name="bypassDuplicateCheck" defaultValue="0" />
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Company name</span>
        <input name="name" required />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Primary outreach owner</span>
        <select name="primaryOwnerId" defaultValue="">
          <option value="">Unassigned</option>
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Contact name</span>
        <input name="contactName" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input name="email" type="email" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
        <input name="phone" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Social media handles</span>
        <input name="socialMediaHandles" placeholder="@business, facebook.com/business" />
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-slate-700">Business description</span>
        <input name="description" />
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-slate-700">Address</span>
        <input name="address" />
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
              className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
            />
            <span>2024</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              name="participated2025"
              className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
            />
            <span>2025</span>
          </label>
        </div>
      </fieldset>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-slate-700">Notes</span>
        <textarea name="notes" />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
        >
          Create company
        </button>
      </div>
    </form>
  );
}
