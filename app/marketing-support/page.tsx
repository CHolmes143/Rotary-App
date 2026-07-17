import { SectionCard } from "@/components/ui";
import {
  createRotaryLearningRecord,
  deactivateRotaryLearningRecord
} from "@/lib/actions";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MarketingSupportPage() {
  const learningRecords = await prisma.rotaryLearningRecord.findMany({
    where: { isActive: true },
    orderBy: { updatedAt: "desc" }
  });

  return (
    <div className="space-y-6">
      <SectionCard
        title="Marketing Support Materials"
        description="DOWNLOAD or COPY/PASTE URL to send/share"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Download
            </h3>
            <div className="mt-3 flex flex-col items-start gap-2">
              <a
                href="/print-publication-support.pdf"
                download
                className="inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Print Publication Outreach
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Share
            </h3>
            <div className="mt-3 flex flex-col items-start gap-2">
              <a
                href="https://online.fliphtml5.com/carissaholmesrealestate/Print-Publication-Support/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Print Publication Sharing/Outreach
              </a>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Rotary Marketing Learning"
        description="Save reusable guidance so future Rotary marketing work is not stuck in one browser or one conversation."
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <div className="space-y-3">
            {learningRecords.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                No active Rotary marketing learnings have been saved yet.
              </p>
            ) : (
              learningRecords.map((record) => (
                <article
                  key={record.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        {record.topic}
                      </h3>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-800">
                        {record.guidance}
                      </p>
                    </div>
                    <form action={deactivateRotaryLearningRecord}>
                      <input type="hidden" name="id" value={record.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-10 items-center rounded-full border border-slate-300 px-3 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary"
                      >
                        Retire
                      </button>
                    </form>
                  </div>
                  {record.context || record.source ? (
                    <dl className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-2">
                      {record.context ? (
                        <div>
                          <dt className="font-semibold text-slate-700">Context</dt>
                          <dd className="mt-1 whitespace-pre-wrap">{record.context}</dd>
                        </div>
                      ) : null}
                      {record.source ? (
                        <div>
                          <dt className="font-semibold text-slate-700">Source</dt>
                          <dd className="mt-1 whitespace-pre-wrap">{record.source}</dd>
                        </div>
                      ) : null}
                    </dl>
                  ) : null}
                </article>
              ))
            )}
          </div>

          <form action={createRotaryLearningRecord} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Topic</span>
                <select name="topic" required defaultValue="" className="w-full">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="Audience">Audience</option>
                  <option value="Tone">Tone</option>
                  <option value="Sponsor messaging">Sponsor messaging</option>
                  <option value="Vendor messaging">Vendor messaging</option>
                  <option value="Silent auction messaging">Silent auction messaging</option>
                  <option value="CTA">CTA</option>
                  <option value="Design/materials">Design/materials</option>
                  <option value="Local context">Local context</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Guidance</span>
                <textarea
                  name="guidance"
                  required
                  rows={5}
                  placeholder="Example: Lead sponsor outreach with student impact first, then business visibility."
                  className="w-full"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Context</span>
                <textarea
                  name="context"
                  rows={3}
                  placeholder="Where this applies, who said it, or what prompted the lesson."
                  className="w-full"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Source</span>
                <input
                  name="source"
                  placeholder="Meeting, sponsor feedback, finalized flyer, etc."
                  className="w-full"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90"
              >
                Save learning
              </button>
            </div>
          </form>
        </div>
      </SectionCard>
    </div>
  );
}
