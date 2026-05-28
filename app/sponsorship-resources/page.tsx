import { FacebookPostDownloads } from "@/components/facebook-post-downloads";
import { SectionCard } from "@/components/ui";

export default function SponsorshipResourcesPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="SPONSORSHIPS: Marketing Materials & General Information"
        action={
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVLQb1yKl909e2RWuh_ydyM8PNlSW7YbQSAdOSq2-j7-mxvg/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-primary shadow-sm transition hover:bg-accent/90"
          >
            Sponsorship Registration Form
          </a>
        }
      >
        <div className="space-y-4">
          <div className="grid gap-4 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                General Audience
              </h3>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href="/sponsorship-packet-print-email.pdf"
                  download
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Click To Download
                </a>
                <a
                  href="https://online.fliphtml5.com/carissaholmesrealestate/zwcd/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Copy This Link to share on social media or by text
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <FacebookPostDownloads />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Education Audience
              </h3>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href="/sponsorship-packet-edu.pdf"
                  download
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Click To Download
                </a>
                <a
                  href="https://online.fliphtml5.com/carissaholmesrealestate/kmte/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Copy This Link to share on social media or by text
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Development Audience
              </h3>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href="/sponsorship-packet-development.pdf"
                  download
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Click To Download
                </a>
                <a
                  href="https://online.fliphtml5.com/carissaholmesrealestate/oxsx/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                >
                  Copy This Link to share on social media or by text
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
