import { PublicPageShell } from "@/components/public-page-shell";
import { SectionCard } from "@/components/ui";

const highlights = [
  "Scholarship and student-support funding generated through community participation",
  "Local sponsors, vendors, and volunteers working together around a shared cause",
  "Family-centered event experiences that strengthen community trust and visibility",
  "A growing tradition that celebrates service, generosity, and local connection"
];

export default function LookBackPage() {
  return (
    <PublicPageShell
      eyebrow="Community Impact"
      title="A Look Back"
      description="The Back to School Rotary Rodeo is more than a one-day event. It is a community effort that helps create opportunity, celebrates local involvement, and supports students in meaningful ways."
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <SectionCard title="Why this event matters">
          <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              Every sponsor, vendor, volunteer, and attendee helps make the event stronger. The
              rodeo creates a visible way for the Dripping Springs community to invest in students,
              celebrate local businesses, and deepen the sense of belonging that makes the town so
              special.
            </p>
            <p>
              Rotary’s goal is not only to host a memorable event, but to turn community energy into
              support that can be felt long after the event ends.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Impact highlights">
          <div className="space-y-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-slate-200 bg-accentSoft px-4 py-4 text-sm leading-7 text-slate-700"
              >
                {highlight}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Photo moments and community memories">
        <div className="grid gap-4 md:grid-cols-3">
          {["Event crowd photo placeholder", "Scholarship moment placeholder", "Sponsor and vendor photo placeholder"].map(
            (label) => (
              <div
                key={label}
                className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center text-sm text-slate-500"
              >
                {label}
              </div>
            )
          )}
        </div>
      </SectionCard>
    </PublicPageShell>
  );
}
