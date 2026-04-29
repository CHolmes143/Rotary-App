export const companyCategories = [] as const;

export const outreachCategories = [
  "Silent Auction donation",
  "Vendor",
  "Sponsorship",
  "Marketing support",
  "Stick Horse Sponsor",
  "Rotary Member"
] as const;

export const outreachStatuses = [
  "no contact attempted",
  "unable to reach will try again",
  "participation committed",
  "follow up needed",
  "participation declined",
  "unreachable"
] as const;

export const outreachMethods = [
  "phone/text",
  "email",
  "social media/dm",
  "in person",
  "other"
] as const;

export const sponsorshipTargetAmounts = [
  "Friend $500",
  "Rider $1000",
  "Royality $2500",
  "Racer $100"
] as const;

export type CompanyCategory = (typeof companyCategories)[number];
export type OutreachCategory = (typeof outreachCategories)[number];
export type OutreachStatus = (typeof outreachStatuses)[number];
export type OutreachMethod = (typeof outreachMethods)[number];
export type SponsorshipTargetAmount = (typeof sponsorshipTargetAmounts)[number];

export const statusTone: Record<OutreachStatus, string> = {
  "no contact attempted": "bg-slate-100 text-slate-700",
  "unable to reach will try again": "bg-accentSoft text-slate-900",
  "participation committed": "bg-primary text-white",
  "follow up needed": "bg-accent text-slate-900",
  "participation declined": "bg-rose-100 text-rose-700",
  "unreachable": "bg-slate-200 text-slate-700",
};
