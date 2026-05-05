import Link from "next/link";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionCard } from "@/components/ui";

export default function EventPage() {
  return (
    <PublicPageShell
      eyebrow="Rotary Club of Dripping Springs"
      title="Back to School Rotary Rodeo"
      description="A family-friendly community event that brings neighbors together, celebrates local businesses, and helps fund meaningful student support and scholarship efforts in Dripping Springs."
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard title="A Dripping Springs tradition built for families">
          <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              The Back to School Rotary Rodeo is designed to be welcoming, energetic, and rooted in
              community. Families can enjoy local vendors, sponsor activations, youth-centered fun,
              and a memorable event atmosphere while helping Rotary create impact that lasts beyond
              one day.
            </p>
            <p>
              This event creates a shared space where local businesses, schools, nonprofit
              supporters, and families all participate in giving back to the Dripping Springs
              community.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Main Event Info
            </Link>
            <Link
              href="/sponsorship"
              className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-primary hover:border-primary/30 hover:bg-primarySoft"
            >
              Explore Sponsorships
            </Link>
            <Link
              href="/vendor-opportunity"
              className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-primary hover:border-primary/30 hover:bg-primarySoft"
            >
              Explore Vendor Opportunities
            </Link>
          </div>
        </SectionCard>

        <SectionCard title="Event snapshot">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-accentSoft px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                Date
              </p>
              <p className="mt-2 text-lg font-semibold text-primary">Saturday, September 5</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-primarySoft/40 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold text-primary">Dripping Springs Distilling</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                Event feel
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Community-focused, family-friendly, and built to connect local residents with the
                businesses and supporters who help keep Dripping Springs strong.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>
    </PublicPageShell>
  );
}
