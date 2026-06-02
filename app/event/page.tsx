import Image from "next/image";
import Link from "next/link";

export default function EventPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-[1366px]">
          <div className="relative aspect-[1366/359] bg-white">
            <div
              aria-hidden="true"
              className="absolute left-[3.2%] top-[10%] aspect-square w-[12.3%]"
            >
              <Image src="/dshs-paw-logo.png" alt="" fill sizes="13vw" className="object-contain" />
            </div>
            <div
              aria-hidden="true"
              className="absolute right-[2.8%] top-[8%] aspect-square w-[13.5%]"
            >
              <Image
                src="/rotary-rodeo-logo-clean.png"
                alt=""
                fill
                sizes="14vw"
                className="object-contain"
              />
            </div>
            <span className="absolute left-[15.4%] top-[1.5%] -rotate-[16deg] whitespace-nowrap text-[clamp(1.05rem,2.45vw,1.95rem)] font-semibold text-primary">
              3rd Annual
            </span>
            <div
              aria-hidden="true"
              className="absolute left-[20%] top-[13%] flex h-[18%] w-[60%] items-center justify-center"
            >
              <span className="whitespace-nowrap text-[clamp(1.15rem,3.85vw,3.1rem)] font-black leading-none text-primary">
                Back-To-School Rotary Rodeo
              </span>
            </div>
            <div className="absolute left-[20%] top-[33%] flex h-[25%] w-[60%] flex-col items-center justify-center text-primary">
              <p className="whitespace-nowrap text-[clamp(1rem,3.05vw,2.65rem)] leading-none">
                Saturday 9/5 <span className="px-[0.7em]">|</span> 12pm - 6pm
              </p>
              <p className="mt-[0.12em] whitespace-nowrap text-[clamp(1.1rem,3.25vw,2.9rem)] leading-none">
                Dripping Springs Distilling
              </p>
            </div>
            <div className="absolute left-[8%] top-[66%] flex h-[24%] w-[84%] items-center justify-center px-3 text-center">
              <p className="max-w-[1110px] text-[clamp(0.72rem,1.95vw,1.55rem)] font-medium leading-tight text-black">
                A fun filled afternoon benefiting Rotary and the{" "}
                <strong>DSHS Scholarship Fund</strong> featuring vendors, a silent auction,
                stick-horse races, live music, and a lot more Hill Country Family-Fun!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="bg-white">
        <h1 className="sr-only">Back-To-School Rotary Rodeo 2026</h1>
        <div className="relative mx-auto max-w-[1366px]">
          <div
            className="relative aspect-[1366/1094] overflow-hidden"
          >
            <Image
              src="/rodeo-2026-home-design.png"
              alt="Back-To-School Rotary Rodeo event photo with navigation buttons"
              fill
              priority
              sizes="(max-width: 1366px) 100vw, 1366px"
              className="object-cover object-bottom"
            />
            <HomeJumpLink
              href="#general"
              label="General Event Information"
              className="left-[12.7%] top-[66.9%] h-[6.8%] w-[75.8%]"
            />
            <HomeJumpLink
              href="#sponsorships"
              label="Sponsorships"
              className="left-[2.9%] top-[78.9%] h-[10.2%] w-[20.5%]"
            />
            <HomeJumpLink
              href="#stick-horse"
              label="Stick Horse Showdown"
              className="left-[27.1%] top-[78.9%] h-[10.2%] w-[20.5%]"
            />
            <HomeJumpLink
              href="#silent-auction"
              label="Silent Auction"
              className="left-[51.8%] top-[78.9%] h-[10.2%] w-[20.5%]"
            />
            <HomeJumpLink
              href="#vendors"
              label="Vendors"
              className="left-[75.7%] top-[78.9%] h-[10.2%] w-[20.5%]"
            />
          </div>
        </div>
      </section>

      <PublicSection
        id="general"
        eyebrow="General Event Information"
        title="A fun afternoon for families, students of all ages, and local businesses to benefit the Dripping Springs H.S. Scholarship Fund!"
        eyebrowClassName="text-2xl sm:text-3xl"
      >
        <div className="space-y-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <InfoTile label="Date" value="Saturday, September 5" detail="Rain or shine" />
            <InfoTile label="Time" value="12pm - 6pm" detail="Vendor setup 10:30am" />
            <InfoTile
              label="Location"
              value="Dripping Springs Distilling"
              detail="5330 Bell Springs Road Dripping Springs, Texas"
            />
            <InfoTile label="Family Fun" value="Fun for kids of all ages" detail="Even older kiddos" />
            <InfoTile label="Admission" value="Free parking + admission" />
            <InfoTile label="Accessibility" value="Handicap accessible" />
          </div>
        </div>
      </PublicSection>

      <section id="sponsorships" className="scroll-mt-80 border-t border-primary/10 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <h2 className="font-bold uppercase tracking-[0.18em] text-accent text-2xl sm:text-3xl">
            Sponsorships
          </h2>
          <p className="mt-3 max-w-5xl text-4xl font-black leading-tight text-primary sm:text-5xl">
            Connect your brand with Rotary&apos;s credibility, community leadership and lasting
            goodwill.
          </p>
        </div>
        <div className="relative mx-auto max-w-[1366px]">
          <Image
            src="/rodeo-2026-sponsorship-section.png"
            alt="Back-To-School Rotary Rodeo sponsorship information, event photos, and sponsorship benefits"
            width={1366}
            height={1552}
            sizes="(max-width: 1366px) 100vw, 1366px"
            className="aspect-[1366/1552] w-full object-cover object-bottom"
          />
          <a
            href="https://forms.gle/GebcdPjKBbV6HCnn9"
            target="_blank"
            rel="noreferrer"
            aria-label="Secure your sponsorship"
            className="absolute left-[26.2%] top-[90.2%] h-[4.6%] w-[47.5%] rounded-sm outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          />
        </div>
        <div className="mx-auto mt-8 flex max-w-[1366px] flex-wrap justify-center gap-4 text-center">
          <a
            href="/rotary-rodeo-sponsorship-packet.pdf"
            download
            className="inline-flex rounded-lg border-2 border-primary bg-white px-8 py-4 text-lg font-bold text-primary shadow-[6px_6px_0_rgba(23,69,143,0.22)] transition hover:-translate-y-0.5 hover:bg-primarySoft hover:shadow-[8px_8px_0_rgba(23,69,143,0.25)] active:translate-y-0 active:shadow-[3px_3px_0_rgba(23,69,143,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/45"
          >
            Download Sponsorship Packet
          </a>
          <a
            href="https://online.fliphtml5.com/carissaholmesrealestate/okdv/#p=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border-2 border-primary bg-white px-8 py-4 text-lg font-bold text-primary shadow-[6px_6px_0_rgba(23,69,143,0.22)] transition hover:-translate-y-0.5 hover:bg-primarySoft hover:shadow-[8px_8px_0_rgba(23,69,143,0.25)] active:translate-y-0 active:shadow-[3px_3px_0_rgba(23,69,143,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/45"
          >
            View Sponsorship Packet
          </a>
        </div>
      </section>

      <PublicSection
        id="stick-horse"
        eyebrow="Stick Horse Showdown"
        title="Be Seen. Have Fun. Give Back"
        eyebrowClassName="text-2xl sm:text-3xl"
        titleClassName="text-center text-3xl sm:text-4xl lg:text-[2.65rem]"
      >
        <p className="mx-auto mb-8 max-w-4xl text-center text-xl font-semibold leading-8 text-slate-700">
          A playful race designed to put you and your brand front and center for hundreds of
          local families while competing for bragging rights among your friendly neighborhood
          competition.
        </p>
        <div className="relative mx-auto mb-10 max-w-[1366px]">
          <Image
            src="/stick-horse-showdown-section.png"
            alt="Stick Horse Showdown race photos, registration steps, registration fee, and register for the race button"
            width={1366}
            height={941}
            sizes="(max-width: 1366px) 100vw, 1366px"
            className="aspect-[1366/941] w-full object-cover object-bottom"
          />
          <a
            href="https://forms.gle/D9SJsEF2o8isV9kV6"
            target="_blank"
            rel="noreferrer"
            aria-label="Register for the Stick Horse Showdown race"
            className="absolute left-[25.4%] top-[86.2%] h-[7.9%] w-[47.6%] rounded-sm outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          />
        </div>
        <FeatureGrid
          variant="info"
          items={[
            "Showdown Races will be scheduled to start every 30 minutes between 1pm and 5pm.",
            <>
              Can&apos;t race? That&apos;s okay!
              <br />
              Send someone in your place or we&apos;ll select a member of the audience to represent
              you.
            </>,
            "Create lots of fun, engaging social media content before, during, and after the event."
          ]}
        />
      </PublicSection>

      <PublicSection
        id="silent-auction"
        eyebrow="Silent Auction"
        title="A simple way for local businesses to contribute in a big way!"
        eyebrowClassName="text-2xl sm:text-3xl"
      >
        <div className="relative mx-auto mb-10 aspect-[1366/1010] max-w-[1366px] overflow-hidden">
          <Image
            src="/silent-auction-section.png"
            alt="Silent auction donation example, donation deadline, bidding dates, and pickup information"
            fill
            sizes="(max-width: 1366px) 100vw, 1366px"
            className="object-cover object-bottom"
          />
        </div>
        <FeatureGrid
          variant="info"
          items={[
            "Auction proceeds support the Dripping Springs H.S. Scholarship Fund, helping local students attend college or trade school!",
            "Donors receive marketing exposure from commitment, during and following the event!",
            "Gift cards/baskets, products, services and experiences are welcome and appreciated!"
          ]}
        />
      </PublicSection>

      <PublicSection
        id="vendors"
        eyebrow="Vendors"
        title="Bring your local business to an engaged family audience"
        eyebrowClassName="text-2xl sm:text-3xl"
      >
        <FeatureGrid
          variant="info"
          items={[
            "Connect face-to-face with Dripping Springs families",
            "Showcase products, services, food, or community resources",
            "Participate in a positive, service-minded community event"
          ]}
        />
        <div className="mt-8">
          <Link
            href="https://forms.gle/AE9kbRUXNsPzaznx8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border-2 border-primary bg-primary px-8 py-4 font-serif text-3xl font-bold text-white shadow-[8px_8px_0_rgba(247,168,27,0.55)] transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[10px_10px_0_rgba(247,168,27,0.6)] active:translate-y-0 active:shadow-[4px_4px_0_rgba(247,168,27,0.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/45"
          >
            Reserve Your Space Now
          </Link>
        </div>
      </PublicSection>

      <footer className="bg-white">
        <Image
          src="/rodeo-2026-footer.png"
          alt="Join us Saturday September 5th from 12pm to 6pm at Dripping Springs Distilling, 5330 Bell Springs Road Dripping Springs Texas. Questions email rotaryclubds@gmail.com"
          width={1366}
          height={768}
          sizes="(max-width: 1366px) 100vw, 1366px"
          className="mx-auto h-auto w-full max-w-[1366px]"
        />
      </footer>
    </main>
  );
}

function HomeJumpLink({
  href,
  label,
  className
}: {
  href: string;
  label: string;
  className: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`absolute rounded-[1.35rem] outline-none focus-visible:ring-4 focus-visible:ring-primary/40 ${className}`}
    />
  );
}

function PublicSection({
  id,
  eyebrow,
  title,
  eyebrowClassName = "text-sm",
  titleClassName = "text-4xl sm:text-5xl",
  align = "left",
  action,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  const headerAlignment = align === "center" ? "items-center justify-center text-center" : "";

  return (
    <section id={id} className="scroll-mt-80 border-t border-primary/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className={`mb-10 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between ${headerAlignment}`}>
          <div className="max-w-5xl">
            <p className={`font-bold uppercase tracking-[0.18em] text-accent ${eyebrowClassName}`}>
              {eyebrow}
            </p>
            <h2 className={`mt-3 font-black leading-tight text-primary ${titleClassName}`}>
              {title}
            </h2>
          </div>
          {action ? <div className="shrink-0 lg:pt-2">{action}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoTile({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-primary/20 bg-white shadow-[0_10px_24px_rgba(23,69,143,0.1)]">
      <div className="h-1.5 bg-primary" />
      <div className="p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/70">{label}</p>
      <p className="mt-2 text-2xl font-bold text-primary">{value}</p>
      {detail ? <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{detail}</p> : null}
      </div>
    </div>
  );
}

function FeatureGrid({
  items,
  variant = "default"
}: {
  items: React.ReactNode[];
  variant?: "default" | "info";
}) {
  const itemClassName =
    variant === "info"
      ? "rounded-xl border border-primary/20 bg-white p-5 text-lg font-semibold leading-7 text-primary shadow-[0_10px_24px_rgba(23,69,143,0.1)]"
      : "rounded-2xl border border-primary/15 bg-accentSoft p-5 text-lg font-semibold leading-7 text-primary";

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div key={index} className={itemClassName}>
          {variant === "info" ? <div className="-mx-5 -mt-5 mb-5 h-1.5 bg-primary" /> : null}
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}
