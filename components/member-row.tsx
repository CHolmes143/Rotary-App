"use client";

import { deleteMember, updateMember } from "@/lib/actions";
import { formatDate } from "@/lib/utils";

type MemberRowProps = {
  member: {
    id: string;
    name: string;
    createdAt: Date | string;
    _count: {
      outreachAssignments: number;
      ownedCompanies: number;
    };
  };
};

export function MemberRow({ member }: MemberRowProps) {
  const assignmentCount = member._count.outreachAssignments;
  const companyCount = member._count.ownedCompanies;
  const impactParts = [];

  if (companyCount > 0) {
    impactParts.push(`${companyCount} company owner${companyCount === 1 ? "" : "s"}`);
  }

  if (assignmentCount > 0) {
    impactParts.push(`${assignmentCount} outreach assignment${assignmentCount === 1 ? "" : "s"}`);
  }

  const impactText =
    impactParts.length > 0
      ? `Deleting will unassign ${impactParts.join(" and ")}.`
      : "This member has no current assignments.";

  return (
    <form className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 md:flex-row md:items-center">
      <input type="hidden" name="id" value={member.id} />
      <div className="flex-1">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
          <input name="name" defaultValue={member.name} required />
        </label>
        <p className="mt-2 text-xs text-slate-500">{impactText}</p>
      </div>
      <div className="md:w-40">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Added</p>
        <p className="mt-1 text-sm text-slate-600">{formatDate(member.createdAt)}</p>
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          formAction={updateMember}
          className="rounded-xl border border-slate-200 bg-accent px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-accent/85"
        >
          Save
        </button>
        <button
          type="submit"
          formAction={deleteMember}
          onClick={(event) => {
            const confirmed = window.confirm(
              `Remove ${member.name}? This will keep all outreach records but unassign this member from any companies or engagement types.`
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
    </form>
  );
}
