"use client";

import Image from "next/image";
import { useState } from "react";

const facebookStaticPost = {
  title: "Facebook Static Post",
  src: "/rotary-booster-facebook-static-post.png"
} as const;

export function RotaryBoosterSocialAssets() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
      >
        {facebookStaticPost.title}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  {facebookStaticPost.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image
                  src={facebookStaticPost.src}
                  alt={facebookStaticPost.title}
                  width={940}
                  height={788}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-4">
                <a
                  href={facebookStaticPost.src}
                  download
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90 sm:w-auto"
                >
                  Download {facebookStaticPost.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
