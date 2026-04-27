import { createMember } from "@/lib/actions";
import { MemberRow } from "@/components/member-row";
import { getMembers } from "@/lib/data";
import { SectionCard } from "@/components/ui";

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className="space-y-6">
      <SectionCard
        title="Rotary Members"
      >
        <div className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
          <form action={createMember} className="rounded-2xl border border-slate-200 bg-accentSoft p-4">
            <h3 className="text-base font-semibold text-primary">Add member</h3>
            <p className="mt-1 text-sm text-slate-600">Use full names for clearer assignment history.</p>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Member name</span>
              <input name="name" required />
            </label>
            <button
              type="submit"
              className="mt-4 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
            >
              Add member
            </button>
          </form>

          <div className="space-y-3">
            {members.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
                No Rotary members yet.
              </div>
            ) : (
              members.map((member) => <MemberRow key={member.id} member={member} />)
            )}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
