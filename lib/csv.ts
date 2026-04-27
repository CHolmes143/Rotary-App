import Papa from "papaparse";
import { prisma } from "@/lib/prisma";
import {
  normalizeCategory,
  normalizeCompanyCategory,
  normalizeMethod,
  normalizeStatus
} from "@/lib/data";

type CsvRow = {
  companyName?: string;
  companyCategory?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  socialMediaHandles?: string;
  description?: string;
  address?: string;
  companyNotes?: string;
  participated2024?: string;
  participated2025?: string;
  primaryOwner?: string;
  outreachCategory?: string;
  targetAmount?: string;
  outreachStatus?: string;
  outreachAssignedMember?: string;
  outreachMethod?: string;
  dateLastContacted?: string;
  nextStep?: string;
  nextStepDueDate?: string;
  outreachNotes?: string;
};

export async function importCompaniesFromCsv(csvText: string) {
  const parsed = Papa.parse<CsvRow>(csvText, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim()
  });

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0]?.message || "CSV import failed.");
  }

  for (const row of parsed.data) {
    const companyName = row.companyName?.trim();
    if (!companyName) continue;

    const primaryOwner = row.primaryOwner?.trim()
      ? await prisma.member.upsert({
          where: { name: row.primaryOwner.trim() },
          update: {},
          create: { name: row.primaryOwner.trim() }
        })
      : null;

    const company = await prisma.company.upsert({
      where: { name: companyName },
      update: {
        companyCategory: row.companyCategory?.trim()
          ? normalizeCompanyCategory(row.companyCategory.trim()) || null
          : null,
        contactName: nullish(row.contactName),
        email: nullish(row.email),
        phone: nullish(row.phone),
        socialMediaHandles: nullish(row.socialMediaHandles),
        description: nullish(row.description),
        address: nullish(row.address),
        notes: nullish(row.companyNotes),
        participated2024: parseBoolean(row.participated2024),
        participated2025: parseBoolean(row.participated2025),
        primaryOwnerId: primaryOwner?.id || null
      },
      create: {
        name: companyName,
        companyCategory: row.companyCategory?.trim()
          ? normalizeCompanyCategory(row.companyCategory.trim()) || null
          : null,
        contactName: nullish(row.contactName),
        email: nullish(row.email),
        phone: nullish(row.phone),
        socialMediaHandles: nullish(row.socialMediaHandles),
        description: nullish(row.description),
        address: nullish(row.address),
        notes: nullish(row.companyNotes),
        participated2024: parseBoolean(row.participated2024),
        participated2025: parseBoolean(row.participated2025),
        primaryOwnerId: primaryOwner?.id || null
      }
    });

    const category = row.outreachCategory?.trim()
      ? normalizeCategory(row.outreachCategory.trim())
      : undefined;

    if (!category) continue;

    const assignedMember = row.outreachAssignedMember?.trim()
      ? await prisma.member.upsert({
          where: { name: row.outreachAssignedMember.trim() },
          update: {},
          create: { name: row.outreachAssignedMember.trim() }
        })
      : null;

    const status = normalizeStatus(row.outreachStatus?.trim() || "no contact attempted");
    const outreachMethod = row.outreachMethod?.trim()
      ? normalizeMethod(row.outreachMethod.trim()) || null
      : null;

    if (!status) continue;

    await prisma.outreachItem.create({
      data: {
        companyId: company.id,
        category,
        targetAmount: nullish(row.targetAmount),
        status,
        assignedMemberId: assignedMember?.id || null,
        outreachMethod,
        dateLastContacted: parseDate(row.dateLastContacted),
        nextStep: nullish(row.nextStep),
        nextStepDueDate: parseDate(row.nextStepDueDate),
        notes: nullish(row.outreachNotes)
      }
    });
  }
}

export function createCsv(rows: Record<string, string>[]) {
  return Papa.unparse(rows);
}

function nullish(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function parseDate(value?: string) {
  if (!value?.trim()) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseBoolean(value?: string) {
  const normalized = value?.trim().toLowerCase();
  return normalized === "true" || normalized === "yes" || normalized === "1";
}
