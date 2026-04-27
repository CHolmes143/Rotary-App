import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/companies", label: "Companies" },
  { href: "/members", label: "Rotary Members" }
];

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div className="flex items-start gap-5">
              <Image
                src="/rotary-rodeo-logo.png"
                alt="Rotary Rodeo logo"
                width={220}
                height={100}
                className="mt-1 h-24 w-auto shrink-0 sm:h-28 md:h-32"
                priority
              />
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-primary/70">
                  Rotary Club of Dripping Springs Internal Member Tool
                </p>
                <h1 className="font-serif text-3xl text-primary">Rotary Rodeo Outreach Tracker</h1>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">
                  Keep one shared view of local company outreach so members can coordinate
                  sponsorship, vendor, donation, and marketing requests without overlap.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <a
                href="/api/export"
                className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
              >
                Download Company List & All Assignments
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-primarySoft hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
