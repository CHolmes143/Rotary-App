import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function VendorPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Vendor Marketing Materials and Additional Information"
        description="This page is ready for vendor packets, event details, booth information, and other supporting materials."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for vendor forms, setup details, outreach talking points, and downloadable materials.
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
