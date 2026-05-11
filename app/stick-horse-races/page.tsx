import { SectionCard } from "@/components/ui";

const flyerAudiences = [
  { name: "General", href: "/stick-horse-general-flyer.pdf" },
  { name: "Banks", href: "/stick-horse-bank-flyer.pdf" },
  { name: "Pre Schools", href: "/stick-horse-preschool-flyer.pdf" },
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
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <a
              href="https://forms.gle/ov2ExEhfp6oKSBpi6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
            >
              Link to Stick Horse Race Registration Form
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {flyerAudiences.map((audience) => (
              <div
                key={audience.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {audience.name}
                </h3>
                <div className="mt-3 flex flex-col items-start gap-2">
                  <a
                    href={audience.href}
                    download
                    className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                  >
                    Download Showdown Flyer
                  </a>
                  <a
                    href={audience.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                  >
                    Share Showdown Flyer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
