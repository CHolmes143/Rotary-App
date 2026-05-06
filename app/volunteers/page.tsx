import Link from "next/link";
import { SectionCard } from "@/components/ui";

export default function VolunteersPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Volunteers Materials"
        description="This page is ready for volunteer details, signup information, schedules, and supporting materials."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Use this space for volunteer instructions, shift details, outreach notes, and downloadable resources.
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
