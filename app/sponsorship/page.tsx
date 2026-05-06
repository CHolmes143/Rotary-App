import Link from "next/link";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionCard } from "@/components/ui";

const benefits = [
  "Brand visibility before, during, and after the event",
  "Recognition alongside a respected Rotary community initiative",
  "Connection with local families, leaders, and supporters",
  "An opportunity to invest in scholarship and student-support impact"
];

export default function SponsorshipPage() {
  return (
    <PublicPageShell
      eyebrow="Public Sponsorship Page"
      title="Sponsor the Back to School Rotary Rodeo"
      description="Partner with the Rotary Club of Dripping Springs to support a high-visibility community event that helps local students while building meaningful goodwill for your business."
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <SectionCard title="Why sponsor?">
          <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              Sponsorship connects your business to a family-friendly event with real community
              purpose. Sponsors are not only supporting a memorable day for attendees, but also the
              broader Rotary mission of helping students and strengthening local connections.
            </p>
            <ul className="ml-5 list-disc space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard title="Community-focused visibility">
          <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              Sponsorship helps position your business in front of local families, event attendees,
              and community leaders in a setting that feels positive, energetic, and rooted in
              service.
            </p>
            <p>
              Whether you want to build goodwill, strengthen brand awareness, or show visible local
              support, the Rotary Rodeo offers a strong platform for meaningful community presence.
            </p>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Sponsorship Opportunities">
        <div className="space-y-6 py-2">
          <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <img
              src="/sponsorship-tiers.png"
              alt="Back to School Rotary Rodeo sponsorship tiers for local businesses"
              className="block h-auto w-full"
            />
          </div>

          <div className="flex flex-col items-center gap-4 pb-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVLQb1yKl909e2RWuh_ydyM8PNlSW7YbQSAdOSq2-j7-mxvg/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Become a Sponsor
            </Link>

            <a
              href="/sponsorship-packet.pdf"
              download
              className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
            >
              Download Sponsorship Packet
            </a>
          </div>
        </div>
      </SectionCard>
    </PublicPageShell>
  );
}
