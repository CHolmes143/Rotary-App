import { FacebookPostDownloads } from "@/components/facebook-post-downloads";
import { SectionCard } from "@/components/ui";

export default function SponsorshipResourcesPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Acquiring Sponsorships"
        description="DOWNLOAD or COPY/PASTE URL to send/share"
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVLQb1yKl909e2RWuh_ydyM8PNlSW7YbQSAdOSq2-j7-mxvg/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
            >
              Link to Sponsorship Registration Form
            </a>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                General
              </h3>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href="/sponsorship-packet-print-email.pdf"
                  download
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  General Sponsorship Packet - Download PDF for email or print
                </a>
                <a
                  href="https://online.fliphtml5.com/carissaholmesrealestate/okdv/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  General Sponsorship - SHARE this link via email, text or socical
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <FacebookPostDownloads />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Education
              </h3>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href="/sponsorship-packet-edu.pdf"
                  download
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Edu Sponsorship Packet - Download PDF for email or print
                </a>
                <a
                  href="https://online.fliphtml5.com/carissaholmesrealestate/arkh/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Edu Sponsorship - SHARE this link via email, text or socical
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Development
              </h3>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href="/sponsorship-packet-development.pdf"
                  download
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Dev Sponsorship Packet - Download PDF for email or print
                </a>
                <a
                  href="https://online.fliphtml5.com/carissaholmesrealestate/arkh/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Dev Sponsorship - SHARE this link via email, text or socical
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
