import { SectionCard } from "@/components/ui";

const flyerAudiences = [
  { name: "General", href: "/stick-horse-general-flyer.pdf" },
  { name: "Banks", href: "/stick-horse-bank-flyer.pdf" },
  { name: "Preschool", href: "/stick-horse-preschool-flyer.pdf" },
  { name: "Tutoring Organizations", href: "/stick-horse-tutor-flyer.pdf" },
  { name: "Real Estate Agents", href: "/stick-horse-real-estate-flyer.pdf" },
  { name: "Insurance Agents", href: "/stick-horse-insurance-agent-flyer.pdf" }
] as const;

export default function StickHorseRacesPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Stick Horse Showdown Materials"
        description="DOWNLOAD or COPY/PASTE URL to send/share"
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Download Flyer
          </h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {flyerAudiences.map((audience) => (
              <a
                key={audience.name}
                href={audience.href}
                download
                className="inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                {audience.name}
              </a>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
