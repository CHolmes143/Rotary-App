import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function SilentAuctionDonationsPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Silent Auction Donations Marketing Materials and Additional Information"
        description="This page is ready for donation request materials, item intake details, and supporting outreach information."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for donation request letters, item guidelines, pickup notes, and downloadable materials.
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
