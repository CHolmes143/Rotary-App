import Link from "next/link";

const publicLinks = [
  { href: "/event", label: "Event" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/vendor-opportunity", label: "Vendor Opportunity" },
  { href: "/a-look-back", label: "A Look Back" }
];

export function PublicNav() {
  return (
    <nav className="flex flex-wrap gap-2">
      {publicLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-primary hover:border-primary/30 hover:bg-primarySoft"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
