import Link from "next/link";

type MemberRowProps = {
  member: {
    id: string;
    name: string;
    createdAt: Date | string;
    committedEngagementsCount: number;
    _count: {
      outreachAssignments: number;
      ownedCompanies: number;
    };
  };
};

export function MemberRow({ member }: MemberRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4">
      <p className="text-base text-slate-900">{member.name}</p>
      <div className="flex items-center gap-6 text-sm text-slate-600">
        <Link
          href={`/companies?memberId=${member.id}`}
          className="font-medium text-primary underline underline-offset-4 hover:text-accent"
        >
          Relationships owned: {member._count.ownedCompanies}
        </Link>
        <p>Engagements committed: {member.committedEngagementsCount}</p>
      </div>
    </div>
  );
}
