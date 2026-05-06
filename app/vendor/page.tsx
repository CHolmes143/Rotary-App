import { SectionCard } from "@/components/ui";

export default function VendorPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Vendor Marketing Materials"
        description="DOWNLOAD or COPY/PASTE URL to send/share"
      >
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Download
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Share
              </h3>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
