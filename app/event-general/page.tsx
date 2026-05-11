import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function EventGeneralPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Event (general) Materials"
        description="This page is ready for general event details, promotional links, talking points, and supporting materials."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for event overview materials, general outreach notes, shareable links, and downloadable resources.
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
