import Link from "next/link";
import { SectionCard } from "@/components/ui";

const helpVideos = [
  {
    title: "View Assigned Company List",
    thumbnail: "/help/view-assigned-company-list-thumbnail.png",
    video: "/help/view-assigned-company-list.mp4"
  },
  {
    title: "Add a new company",
    thumbnail: "/help/add-a-new-company-thumbnail.png",
    video: "/help/add-a-new-company.mp4"
  },
  {
    title: "Update vendor engagement status",
    thumbnail: "/help/updating-a-vendor-engagement-status-thumbnail.png",
    video: "/help/updating-a-vendor-engagement-status.mp4"
  },
  {
    title: "Marketing materials access and sharing guide",
    thumbnail: "/help/marketing-materials-access-and-sharing-guide-thumbnail.png",
    video: "/help/marketing-materials-access-and-sharing-guide.mp4"
  }
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <SectionCard
        title="Help"
        description="Watch quick how-to videos for common Rotary Rodeo tasks."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {helpVideos.map((item) => (
            <article
              key={item.video}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card"
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={item.thumbnail}
                  alt={`${item.title} video thumbnail`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-4 sm:p-5">
                <h3 className="text-base font-semibold leading-snug text-primary sm:text-lg">{item.title}</h3>
                <div className="grid gap-3 sm:flex sm:flex-wrap">
                  <a
                    href={item.video}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
                  >
                    Watch Video
                  </a>
                  <a
                    href={item.video}
                    download
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-primary hover:border-primary/30 hover:bg-primarySoft sm:w-auto"
                  >
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
