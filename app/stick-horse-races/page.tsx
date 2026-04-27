import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function StickHorseRacesPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Stick Horse Races Materials and Additional Information"
        description="This page is ready for race details, signage, outreach notes, and supporting event materials."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for race instructions, promotional materials, registration details, and downloadable assets.
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
