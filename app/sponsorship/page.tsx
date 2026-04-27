import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function SponsorshipPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Sponsorship Page"
        description="This page is ready for sponsorship one-pagers, pricing sheets, logos, and other marketing materials."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for sponsorship packets, downloadable assets, and talking points for outreach.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Back to Dashboard
          </Link>
        </div>
      </SectionCard>
    </div>
  );
}
