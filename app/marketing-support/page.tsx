import { SectionCard } from "@/components/ui";

export default function MarketingSupportPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Marketing Support Materials and Additional Information"
        description="DOWNLOAD or COPY/PASTE URL to send/share"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Download
            </h3>
            <div className="mt-3 flex flex-col items-start gap-2">
              <a
                href="/print-publication-support.pdf"
                download
                className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Print Publication Outreach
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Share
            </h3>
            <div className="mt-3 flex flex-col items-start gap-2">
              <a
                href="https://online.fliphtml5.com/carissaholmesrealestate/Print-Publication-Support/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Print Publication Sharing/Outreach
              </a>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
