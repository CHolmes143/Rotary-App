import Link from "next/link";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionCard } from "@/components/ui";

const vendorTypes = [
  "Boutique retail and handmade goods",
  "Food, beverage, and specialty snacks",
  "Family services and community resources",
  "Home, lifestyle, and seasonal products"
];

export default function VendorOpportunityPage() {
  return (
    <PublicPageShell
      eyebrow="Public Vendor Page"
      title="Vendor Opportunity"
      description="Join a community-centered event that puts local businesses in front of engaged families, neighbors, and Rotary supporters from across Dripping Springs."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Why become a vendor?">
          <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              Vendors gain face-to-face access to a high-energy local audience while participating
              in an event that supports the broader mission of the Rotary Club of Dripping Springs.
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Build visibility with local families and community supporters.</li>
              <li>Create in-person connections that can turn into long-term customers.</li>
              <li>Associate your business with a trusted, service-minded community event.</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard title="Vendor details">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-accentSoft px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                Expected audience
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Families, community supporters, local leaders, and event guests from across the
                Dripping Springs area.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-primarySoft/40 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                Table fee
              </p>
              <p className="mt-2 text-lg font-semibold text-primary">$100 placeholder fee</p>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Ideal vendor types">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {vendorTypes.map((type) => (
            <div key={type} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              {type}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="#"
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Vendor Form
          </Link>
        </div>
      </SectionCard>
    </PublicPageShell>
  );
}
