"use client";

import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    title: "Facebook Post V1",
    src: "/sponsorship-facebook-post-v1.png"
  },
  {
    title: "Facebook Post V2",
    src: "/sponsorship-facebook-post-v2.png"
  }
] as const;

export function FacebookPostDownloads() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
      >
        Download and post to Facebook
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-primary">Facebook Posts</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Download and post on your personal and professional Facebook pages.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {posts.map((post) => (
                <div key={post.src} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-3 text-sm font-semibold text-primary">{post.title}</p>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <Image
                      src={post.src}
                      alt={post.title}
                      width={1200}
                      height={630}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="mt-4">
                    <a
                      href={post.src}
                      download
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
                    >
                      Download {post.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
