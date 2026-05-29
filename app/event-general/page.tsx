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
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              General Professional Flyer
            </h3>
            <div className="mt-3 flex flex-col items-start gap-2">
              <a
                href="/general-professional.pdf"
                download
                className="inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Download General Flyer
              </a>
              <a
                href="/general-professional.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Share General Flyer
              </a>
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
