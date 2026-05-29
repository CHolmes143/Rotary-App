import { statusTone } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SectionCard({
  title,
  description,
  action,
  children
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:rounded-3xl sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold leading-snug text-primary sm:text-lg">{title}</h2>
          {description ? <p className="mt-1 text-sm text-slate-600">{description}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function StatCard({
  label,
  value,
  tone = "bg-primarySoft text-primary"
}: {
  label: string;
  value: number;
  tone?: string;
}) {
  return (
    <div className={cn("rounded-2xl p-4", tone)}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em]">{label}</p>
      <p className="mt-3 text-3xl font-semibold">{value}</p>
    </div>
  );
}

export function StatusBadge({ status }: { status: keyof typeof statusTone }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
        statusTone[status]
      )}
    >
      {status}
    </span>
  );
}
