import { FacebookPostDownloads } from "@/components/facebook-post-downloads";
import { SectionCard } from "@/components/ui";

export default function SponsorshipPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Acquiring Sponsorships"
        description="DOWNLOAD and utilize these assets for acquiring sponsors."
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/sponsorship-packet.pdf"
              download
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Sponsorship Packet
            </a>
            <a
              href="/sponsorship-packet-development.pdf"
              download
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Sponsorship Packet: Development
            </a>
            <a
              href="/sponsorship-packet-edu.pdf"
              download
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Sponsorship Packet: EDU
            </a>
            <FacebookPostDownloads />
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
