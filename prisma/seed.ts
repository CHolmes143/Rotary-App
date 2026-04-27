import { OutreachCategory, OutreachMethod, OutreachStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.outreachItem.deleteMany();
  await prisma.company.deleteMany();
  await prisma.member.deleteMany();

  const [amelia, bryan, chloe, daniel] = await Promise.all([
    prisma.member.create({ data: { name: "Amelia Johnson" } }),
    prisma.member.create({ data: { name: "Bryan Lee" } }),
    prisma.member.create({ data: { name: "Chloe Ramirez" } }),
    prisma.member.create({ data: { name: "Daniel Brooks" } })
  ]);

  const companies = await Promise.all([
    prisma.company.create({
      data: {
        name: "Hill Country Floral",
        contactName: "Nina Patel",
        email: "nina@hillcountryfloral.com",
        phone: "(512) 555-0110",
        socialMediaHandles: "@hillcountryfloral",
        description: "Local florist supporting event installations and gift baskets.",
        address: "101 Main St, San Marcos, TX",
        notes: "Past donor for table centerpieces. Prefers weekday outreach.",
        participated2024: true,
        participated2025: false,
        primaryOwnerId: amelia.id
      }
    }),
    prisma.company.create({
      data: {
        name: "Riverbend Coffee",
        contactName: "Marco Silva",
        email: "marco@riverbendcoffee.com",
        phone: "(512) 555-0191",
        socialMediaHandles: "@riverbendcoffee",
        description: "Coffee shop and roaster with strong community following.",
        address: "244 Hopkins St, San Marcos, TX",
        notes: "Interested in social promotion tie-ins.",
        participated2024: true,
        participated2025: true,
        primaryOwnerId: bryan.id
      }
    }),
    prisma.company.create({
      data: {
        name: "Summit Printing Co.",
        contactName: "Janelle Park",
        email: "hello@summitprintingco.com",
        phone: "(512) 555-0148",
        socialMediaHandles: "@summitprintco",
        description: "Print shop for signage, flyers, and event collateral.",
        address: "85 Centerpoint Rd, San Marcos, TX",
        notes: "Already familiar with club event branding.",
        participated2024: false,
        participated2025: true,
        primaryOwnerId: chloe.id
      }
    })
  ]);

  await prisma.outreachItem.createMany({
    data: [
      {
        companyId: companies[0].id,
        category: OutreachCategory.SILENT_AUCTION_DONATION,
        status: OutreachStatus.IN_CONVERSATION,
        assignedMemberId: amelia.id,
        outreachMethod: OutreachMethod.EMAIL,
        dateLastContacted: new Date("2026-04-01"),
        nextStep: "Send final donation request letter with event date.",
        nextStepDueDate: new Date("2026-04-12"),
        notes: "Positive response to gift basket concept."
      },
      {
        companyId: companies[1].id,
        category: OutreachCategory.SPONSORSHIP,
        targetAmount: "Rider: $1,000",
        status: OutreachStatus.FOLLOW_UP_NEEDED,
        assignedMemberId: bryan.id,
        outreachMethod: OutreachMethod.IN_PERSON,
        dateLastContacted: new Date("2026-03-29"),
        nextStep: "Follow up on sponsorship tier sheet after owner review.",
        nextStepDueDate: new Date("2026-04-10"),
        notes: "Owner requested more detail about signage visibility."
      },
      {
        companyId: companies[1].id,
        category: OutreachCategory.MARKETING_SUPPORT,
        status: OutreachStatus.ASSIGNED,
        assignedMemberId: chloe.id,
        outreachMethod: OutreachMethod.SOCIAL_MEDIA_DM,
        dateLastContacted: new Date("2026-04-03"),
        nextStep: "Coordinate co-branded Instagram giveaway idea.",
        nextStepDueDate: new Date("2026-04-15"),
        notes: "Separate from sponsorship ask."
      },
      {
        companyId: companies[2].id,
        category: OutreachCategory.VENDOR,
        status: OutreachStatus.CONFIRMED_YES,
        assignedMemberId: daniel.id,
        outreachMethod: OutreachMethod.PHONE_TEXT,
        dateLastContacted: new Date("2026-04-02"),
        nextStep: "Send vendor booth setup details.",
        nextStepDueDate: new Date("2026-04-18"),
        notes: "Confirmed as an event-day print vendor."
      }
    ]
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
