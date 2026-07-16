"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Event Dashboard" },
  { href: "/companies", label: "Companies" },
  { href: "/members", label: "Rotary Members" },
  { href: "/api/export", label: "Download Company List & All Assignments" }
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute =
    pathname === "/event" ||
    pathname === "/sponsorship" ||
    pathname === "/vendor-opportunity" ||
    pathname === "/a-look-back";

  if (isPublicRoute) {
    return (
      <div className="min-h-screen bg-canvas">
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5 lg:items-center">
            <Image
              src="/rotary-rodeo-logo.png"
              alt="Rotary Rodeo logo"
              width={220}
              height={100}
              className="hidden w-auto shrink-0 sm:block sm:h-24 lg:h-28"
              priority
            />
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-primary/70">
                Rotary Club of Dripping Springs Internal Member Tool
              </p>
              <h1 className="font-serif text-2xl leading-tight text-primary sm:text-3xl">Rotary Rodeo 2026</h1>
            </div>
          </div>
          <nav className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap lg:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-11 items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-primarySoft hover:text-primary sm:inline-flex"
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
