import { Prisma, OutreachCategory, OutreachMethod, OutreachStatus } from "@prisma/client";
import { companyCategories } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

export type CompanyFilters = {
  query?: string;
  companyCategory?: string;
  category?: string;
  status?: string;
  memberId?: string;
  sort?: string;
};

const companyInclude = {
  primaryOwner: true,
  outreachItems: {
    include: {
      assignedMember: true
    },
    orderBy: [{ updatedAt: "desc" }]
  }
} satisfies Prisma.CompanyInclude;

const categoryMap = {
  "Silent Auction donation": OutreachCategory.SILENT_AUCTION_DONATION,
  SILENT_AUCTION_DONATION: OutreachCategory.SILENT_AUCTION_DONATION,
  silent_auction_donation: OutreachCategory.SILENT_AUCTION_DONATION,
  Vendor: OutreachCategory.VENDOR,
  VENDOR: OutreachCategory.VENDOR,
  vendor: OutreachCategory.VENDOR,
  Sponsorship: OutreachCategory.SPONSORSHIP,
  SPONSORSHIP: OutreachCategory.SPONSORSHIP,
  sponsorship: OutreachCategory.SPONSORSHIP,
  "Marketing support": OutreachCategory.MARKETING_SUPPORT,
  MARKETING_SUPPORT: OutreachCategory.MARKETING_SUPPORT,
  marketing_support: OutreachCategory.MARKETING_SUPPORT,
  "Sign in window": OutreachCategory.SIGN_IN_WINDOW,
  SIGN_IN_WINDOW: OutreachCategory.SIGN_IN_WINDOW,
  sign_in_window: OutreachCategory.SIGN_IN_WINDOW,
  "Rotary Member": OutreachCategory.ROTARY_MEMBER,
  ROTARY_MEMBER: OutreachCategory.ROTARY_MEMBER,
  rotary_member: OutreachCategory.ROTARY_MEMBER
} as const;

const statusMap = {
  "no contact attempted": OutreachStatus.NOT_STARTED,
  "No contact attempted": OutreachStatus.NOT_STARTED,
  "Not started": OutreachStatus.NOT_STARTED,
  Assigned: OutreachStatus.ASSIGNED,
  "unable to reach will try again": OutreachStatus.CONTACT_ATTEMPTED,
  "Unable to reach will try again": OutreachStatus.CONTACT_ATTEMPTED,
  "Contact attempted": OutreachStatus.CONTACT_ATTEMPTED,
  "In conversation": OutreachStatus.IN_CONVERSATION,
  "participation committed": OutreachStatus.CONFIRMED_YES,
  "Participation committed": OutreachStatus.CONFIRMED_YES,
  "Confirmed yes": OutreachStatus.CONFIRMED_YES,
  "participation declined": OutreachStatus.DECLINED,
  "Participation declined": OutreachStatus.DECLINED,
  Declined: OutreachStatus.DECLINED,
  unreachable: OutreachStatus.NO_RESPONSE,
  Unreachable: OutreachStatus.NO_RESPONSE,
  "unable to reach": OutreachStatus.NO_RESPONSE,
  "Unable to reach": OutreachStatus.NO_RESPONSE,
  "No response": OutreachStatus.NO_RESPONSE,
  "Follow up needed": OutreachStatus.FOLLOW_UP_NEEDED,
  "follow up needed": OutreachStatus.FOLLOW_UP_NEEDED,
  Closed: OutreachStatus.CLOSED
} as const;

const methodMap = {
  "phone/text": OutreachMethod.PHONE_TEXT,
  "phone": OutreachMethod.PHONE_TEXT,
  "text": OutreachMethod.PHONE_TEXT,
  email: OutreachMethod.EMAIL,
  Email: OutreachMethod.EMAIL,
  "social media/dm": OutreachMethod.SOCIAL_MEDIA_DM,
  "social media": OutreachMethod.SOCIAL_MEDIA_DM,
  "Social media": OutreachMethod.SOCIAL_MEDIA_DM,
  dm: OutreachMethod.SOCIAL_MEDIA_DM,
  "in person": OutreachMethod.IN_PERSON,
  "In person": OutreachMethod.IN_PERSON,
  other: OutreachMethod.OTHER,
  Other: OutreachMethod.OTHER
} as const;

export async function getMembers() {
  return prisma.member.findMany({
    include: {
      _count: {
        select: {
          outreachAssignments: true,
          ownedCompanies: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });
}

export async function getDashboardData() {
  const [companies, outreachItems] = await Promise.all([
    prisma.company.findMany({
      include: companyInclude,
      orderBy: {
        updatedAt: "desc"
      }
    }),
    prisma.outreachItem.findMany({
      include: {
        company: {
          include: {
            primaryOwner: true
          }
        }
      },
      orderBy: {
        updatedAt: "desc"
      }
    })
  ]);

  const statusCounts = outreachItems.reduce<Record<string, number>>((acc, item) => {
    const label = readableStatus(item.status);
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  const categoryCounts = outreachItems.reduce<Record<string, number>>((acc, item) => {
    const label = readableCategory(item.category);
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  return {
    companiesCount: companies.length,
    outreachCount: outreachItems.length,
    statusCounts,
    categoryCounts,
    followUps: outreachItems
      .filter(
        (item) =>
          item.status === OutreachStatus.FOLLOW_UP_NEEDED ||
          (item.nextStepDueDate && item.nextStepDueDate <= addDays(new Date(), 7))
      )
      .slice(0, 8),
    recentlyUpdated: outreachItems.slice(0, 8)
  };
}

export async function getCompanies(filters: CompanyFilters) {
  const andClauses: Prisma.CompanyWhereInput[] = [];

  if (filters.query) {
    andClauses.push({
      OR: [
        { name: { contains: filters.query } },
        { contactName: { contains: filters.query } },
        { email: { contains: filters.query } },
        { description: { contains: filters.query } }
      ]
    });
  }

  // Company search should remain resilient even if optional category metadata
  // drifts across environments, so category is not used in the query filter.

  if (filters.memberId) {
    andClauses.push({ primaryOwnerId: filters.memberId });
  }

  if (filters.category || filters.status) {
    const category = filters.category ? normalizeCategory(filters.category) : undefined;
    const status = filters.status ? normalizeStatus(filters.status) : undefined;

    andClauses.push({
      outreachItems: {
        some: {
          ...(category ? { category } : {}),
          ...(status ? { status } : {})
        }
      }
    });
  }

  const orderBy = resolveSort(filters.sort);

  return prisma.company.findMany({
    where: andClauses.length > 0 ? { AND: andClauses } : undefined,
    include: companyInclude,
    orderBy
  });
}

export async function getCompany(id: string) {
  return prisma.company.findUnique({
    where: { id },
    include: companyInclude
  });
}

export async function exportCompaniesWithOutreach() {
  const companies = await prisma.company.findMany({
    include: {
      primaryOwner: true,
      outreachItems: true
    },
    orderBy: [{ name: "asc" }]
  });

  return companies.flatMap((company) => {
    if (company.outreachItems.length === 0) {
      return [
        {
          companyName: company.name,
          contactName: company.contactName || "",
          email: company.email || "",
          phone: company.phone || "",
          socialMediaHandles: company.socialMediaHandles || "",
          description: company.description || "",
          companyCategory: company.companyCategory || "",
          address: company.address || "",
          companyNotes: company.notes || "",
          participated2024: company.participated2024 ? "true" : "false",
          participated2025: company.participated2025 ? "true" : "false",
          primaryOwner: company.primaryOwner?.name || "",
          outreachCategory: "",
          targetAmount: "",
          outreachStatus: "",
          outreachMethod: "",
          dateLastContacted: "",
          nextStep: "",
          nextStepDueDate: "",
          outreachNotes: "",
          companyUpdatedAt: company.updatedAt.toISOString()
        }
      ];
    }

    return company.outreachItems.map((item) => ({
      companyName: company.name,
      contactName: company.contactName || "",
      email: company.email || "",
      phone: company.phone || "",
      socialMediaHandles: company.socialMediaHandles || "",
      description: company.description || "",
      companyCategory: company.companyCategory || "",
      address: company.address || "",
      companyNotes: company.notes || "",
      participated2024: company.participated2024 ? "true" : "false",
      participated2025: company.participated2025 ? "true" : "false",
      primaryOwner: company.primaryOwner?.name || "",
      outreachCategory: readableCategory(item.category),
      targetAmount: item.targetAmount || "",
      outreachStatus: readableStatus(item.status),
      outreachMethod: item.outreachMethod ? readableMethod(item.outreachMethod) : "",
      dateLastContacted: item.dateLastContacted?.toISOString() || "",
      nextStep: item.nextStep || "",
      nextStepDueDate: item.nextStepDueDate?.toISOString() || "",
      outreachNotes: item.notes || "",
      companyUpdatedAt: company.updatedAt.toISOString()
    }));
  });
}

function resolveSort(sort?: string): Prisma.CompanyOrderByWithRelationInput[] {
  switch (sort) {
    case "updated-asc":
      return [{ updatedAt: "asc" }];
    case "name-desc":
      return [{ name: "desc" }];
    case "updated-desc":
    default:
      return [{ updatedAt: "desc" }];
  }
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function readableCategory(value: OutreachCategory) {
  return {
    SILENT_AUCTION_DONATION: "Silent Auction donation",
    VENDOR: "Vendor",
    SPONSORSHIP: "Sponsorship",
    MARKETING_SUPPORT: "Marketing support",
    SIGN_IN_WINDOW: "Sign in window",
    ROTARY_MEMBER: "Rotary Member"
  }[value];
}

export function readableStatus(value: OutreachStatus) {
  return {
    NOT_STARTED: "no contact attempted",
    ASSIGNED: "no contact attempted",
    CONTACT_ATTEMPTED: "unable to reach will try again",
    IN_CONVERSATION: "follow up needed",
    CONFIRMED_YES: "participation committed",
    DECLINED: "participation declined",
    NO_RESPONSE: "unreachable",
    FOLLOW_UP_NEEDED: "follow up needed",
    CLOSED: "participation declined"
  }[value];
}

export function readableMethod(value: OutreachMethod) {
  return {
    PHONE_TEXT: "phone/text",
    EMAIL: "email",
    IN_PERSON: "in person",
    SOCIAL_MEDIA_DM: "social media/dm",
    OTHER: "other"
  }[value];
}

export function normalizeCategory(label: string) {
  const normalizedLabel = label.trim();
  const canonicalKey = normalizedLabel.replace(/\s+/g, "_").toLowerCase();
  return (
    categoryMap[normalizedLabel as keyof typeof categoryMap] ||
    categoryMap[canonicalKey as keyof typeof categoryMap]
  );
}

export function normalizeStatus(label: string) {
  return statusMap[label as keyof typeof statusMap];
}

export function normalizeMethod(label: string) {
  return methodMap[label as keyof typeof methodMap];
}

export function normalizeCompanyCategory(label: string) {
  return companyCategories.find((category) => category === label);
}
