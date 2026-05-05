import { MemberRow } from "@/components/member-row";
import { getMembers } from "@/lib/data";
import { SectionCard } from "@/components/ui";

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className="space-y-6">
      <SectionCard title="Rotary Members">
        <div className="space-y-3">
          {members.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
              No Rotary members yet.
            </div>
          ) : (
            members.map((member) => <MemberRow key={member.id} member={member} />)
          )}
        </div>
      </SectionCard>
    </div>
  );
}
