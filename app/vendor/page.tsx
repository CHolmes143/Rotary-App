import { SectionCard } from "@/components/ui";

export default function VendorPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Vendor Marketing Materials"
        description="DOWNLOAD or COPY/PASTE URL to send/share"
      >
        <div className="space-y-4">
          <a
            href="https://tally.so/r/q4MMeG"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-primary shadow-sm transition hover:bg-accent/90 sm:w-auto"
          >
            Link to Vendor Registration
          </a>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/vendor-flyer-print.pdf"
              download
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-primary/40 hover:bg-primarySoft/40"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                FLYER: DOWNLOAD TO PRINT
              </h3>
            </a>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
