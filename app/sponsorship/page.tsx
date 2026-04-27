import { FacebookPostDownloads } from "@/components/facebook-post-downloads";
import { SectionCard } from "@/components/ui";

export default function SponsorshipPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Acquiring Sponsorships"
        description="This page is ready for sponsorship one-pagers, pricing sheets, logos, and other marketing materials."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for sponsorship packets, downloadable assets, and talking points for outreach.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/sponsorship-packet.pdf"
              download
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Download Sponsorship Packet
            </a>
            <FacebookPostDownloads />
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
