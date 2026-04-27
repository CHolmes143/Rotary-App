import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function MarketingSupportPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Marketing Support Materials and Additional Information"
        description="This page is ready for social assets, messaging guidance, and supporting marketing information."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for graphics, post copy, brand notes, outreach talking points, and downloadable materials.
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
