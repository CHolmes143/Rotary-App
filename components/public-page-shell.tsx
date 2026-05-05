import Link from "next/link";
import { PublicNav } from "@/components/public-nav";

type PublicPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PublicPageShell({
  eyebrow,
  title,
  description,
  children
}: PublicPageShellProps) {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="bg-gradient-to-br from-primarySoft via-white to-accentSoft px-6 py-10 sm:px-8">
          <div className="mx-auto max-w-5xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              {eyebrow}
            </p>
            <div className="space-y-3">
              <h1 className="font-serif text-4xl text-primary sm:text-5xl">{title}</h1>
              <p className="max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
                {description}
              </p>
            </div>
            <PublicNav />
          </div>
        </div>
      </section>
      {children}
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-6 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#"
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Main Event Info
          </Link>
          <Link
            href="#"
            className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-primary hover:border-primary/30 hover:bg-primarySoft"
          >
            Sponsorship Form
          </Link>
          <Link
            href="#"
            className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-primary hover:border-primary/30 hover:bg-primarySoft"
          >
            Vendor Form
          </Link>
        </div>
      </section>
    </div>
  );
}
