import Link from "next/link";
import { RotaryBoosterSocialAssets } from "@/components/rotary-booster-social-assets";
import { SectionCard } from "@/components/ui";

export default function RotaryBoosterPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Rotary Booster Materials"
        description="Download or share Rotary Booster materials."
      >
        <div className="space-y-4">
          <a
            href="/rotary-booster-flyer-print.pdf"
            download
            className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-primary/40 hover:bg-primarySoft/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              FLYER: DOWNLOAD TO PRINT
            </h3>
          </a>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Social media assets
            </h3>
            <div className="mt-3">
              <RotaryBoosterSocialAssets />
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
          >
            Back to Dashboard
          </Link>
        </div>
      </SectionCard>
    </div>
  );
}
