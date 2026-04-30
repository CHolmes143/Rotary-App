"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { OutreachCategory } from "@prisma/client";
import { companyCategories } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { normalizeCategory, normalizeMethod, normalizeStatus } from "@/lib/data";
import { normalizeCompanyName, parseCheckbox, parseOptionalDate, parseOptionalString } from "@/lib/utils";

export async function createCompany(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const normalizedInput = normalizeCompanyName(name);
  const existing = (await prisma.company.findMany({
    select: { id: true, name: true }
  })).find((company) => normalizeCompanyName(company.name) === normalizedInput);

  if (existing) {
    redirect(`/companies/${existing.id}`);
  }

  const company = await prisma.company.create({
    data: {
      name,
      contactName: parseOptionalString(formData.get("contactName")),
      email: parseOptionalString(formData.get("email")),
      phone: parseOptionalString(formData.get("phone")),
      socialMediaHandles: parseOptionalString(formData.get("socialMediaHandles")),
      description: parseOptionalString(formData.get("description")),
      address: parseOptionalString(formData.get("address")),
      notes: parseOptionalString(formData.get("notes")),
      participated2024: parseCheckbox(formData.get("participated2024")),
      participated2025: parseCheckbox(formData.get("participated2025")),
      primaryOwnerId: parseOptionalString(formData.get("primaryOwnerId"))
    }
  });

  revalidatePath("/");
  revalidatePath("/companies");
  redirect(`/companies/${company.id}`);
}

export async function updateCompany(formData: FormData) {
  const id = String(formData.get("id"));
  const name = String(formData.get("name") || "").trim();
  const companyCategory = parseCompanyCategory(formData.get("companyCategory"));
  const normalizedInput = normalizeCompanyName(name);
  const existing = (await prisma.company.findMany({
    select: { id: true, name: true }
  })).find(
    (company) =>
      company.id !== id && normalizeCompanyName(company.name) === normalizedInput
  );

  if (existing) {
    redirect(`/companies/${existing.id}`);
  }

  await prisma.company.update({
    where: { id },
    data: {
      name,
      companyCategory,
      contactName: parseOptionalString(formData.get("contactName")),
      email: parseOptionalString(formData.get("email")),
      phone: parseOptionalString(formData.get("phone")),
      socialMediaHandles: parseOptionalString(formData.get("socialMediaHandles")),
      description: parseOptionalString(formData.get("description")),
      address: parseOptionalString(formData.get("address")),
      notes: parseOptionalString(formData.get("notes")),
      participated2024: parseCheckbox(formData.get("participated2024")),
      participated2025: parseCheckbox(formData.get("participated2025")),
      primaryOwnerId: parseOptionalString(formData.get("primaryOwnerId"))
    }
  });

  revalidatePath("/");
  revalidatePath("/companies");
  revalidatePath(`/companies/${id}`);
}

export async function deleteCompany(formData: FormData) {
  const id = String(formData.get("id") || "");
  if (!id) return;

  await prisma.company.delete({
    where: { id }
  });

  revalidatePath("/");
  revalidatePath("/companies");
}

export async function addOutreachItem(formData: FormData) {
  const companyId = String(formData.get("companyId"));
  const categoryLabel = String(formData.get("category"));
  const category = parseOutreachCategory(String(formData.get("category")));
  const statusLabel = String(formData.get("status")) || "no contact attempted";
  const status = normalizeStatus(statusLabel);
  const targetAmount =
    category === "SPONSORSHIP" && statusLabel === "participation committed"
      ? parseOptionalString(formData.get("targetAmount"))
      : null;

  if (!category) {
    throw new Error("A valid outreach category is required.");
  }

  if (!status) {
    throw new Error("A valid outreach status is required.");
  }

  await prisma.outreachItem.create({
    data: {
      companyId,
      category,
      targetAmount,
      status,
      outreachMethod: null,
      dateLastContacted: parseOptionalDate(formData.get("dateLastContacted")),
      nextStep: parseOptionalString(formData.get("nextStep")),
      nextStepDueDate: parseOptionalDate(formData.get("nextStepDueDate")),
      notes: parseOptionalString(formData.get("notes"))
    }
  });

  revalidatePath("/");
  revalidatePath("/companies");
  revalidatePath(`/companies/${companyId}`);
}

export async function updateOutreachItem(formData: FormData) {
  const id = String(formData.get("id"));
  const companyId = String(formData.get("companyId"));
  const categoryLabel = String(formData.get("category"));
  const category = parseOutreachCategory(categoryLabel);
  const statusLabel = String(formData.get("status")) || "no contact attempted";
  const status = normalizeStatus(statusLabel);
  const targetAmount =
    category === "SPONSORSHIP" && statusLabel === "participation committed"
      ? parseOptionalString(formData.get("targetAmount"))
      : null;

  if (!category) {
    throw new Error("A valid outreach category is required.");
  }

  if (!status) {
    throw new Error("A valid outreach status is required.");
  }

  await prisma.outreachItem.update({
    where: { id },
    data: {
      category,
      targetAmount,
      status,
      outreachMethod: null,
      dateLastContacted: parseOptionalDate(formData.get("dateLastContacted")),
      nextStep: parseOptionalString(formData.get("nextStep")),
      nextStepDueDate: parseOptionalDate(formData.get("nextStepDueDate")),
      notes: parseOptionalString(formData.get("notes"))
    }
  });

  revalidatePath("/");
  revalidatePath("/companies");
  revalidatePath(`/companies/${companyId}`);
}

export async function deleteOutreachItem(formData: FormData) {
  const id = String(formData.get("id") || "");
  const companyId = String(formData.get("companyId") || "");
  if (!id || !companyId) return;

  await prisma.outreachItem.delete({
    where: { id }
  });

  revalidatePath("/");
  revalidatePath("/companies");
  revalidatePath(`/companies/${companyId}`);
}

export async function createMember(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  if (!name) return;

  await prisma.member.create({
    data: { name }
  });

  revalidatePath("/members");
  revalidatePath("/companies");
}

export async function updateMember(formData: FormData) {
  const id = String(formData.get("id"));
  const name = String(formData.get("name") || "").trim();
  if (!name) return;

  await prisma.member.update({
    where: { id },
    data: { name }
  });

  revalidatePath("/members");
  revalidatePath("/companies");
}

export async function deleteMember(formData: FormData) {
  const id = String(formData.get("id") || "");
  if (!id) return;

  await prisma.$transaction([
    prisma.company.updateMany({
      where: { primaryOwnerId: id },
      data: { primaryOwnerId: null }
    }),
    prisma.outreachItem.updateMany({
      where: { assignedMemberId: id },
      data: { assignedMemberId: null }
    }),
    prisma.member.delete({
      where: { id }
    })
  ]);

  revalidatePath("/", "layout");
}

function parseCompanyCategory(value: FormDataEntryValue | null) {
  const category = parseOptionalString(value);
  if (!category) return undefined;
  return companyCategories.includes(category as (typeof companyCategories)[number])
    ? category
    : undefined;
}

function parseOutreachCategory(value: string): OutreachCategory | null {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();

  const map: Record<string, OutreachCategory> = {
    vendor: OutreachCategory.VENDOR,
    sponsorship: OutreachCategory.SPONSORSHIP,
    "silent auction": OutreachCategory.SILENT_AUCTION_DONATION,
    "silent auction donation": OutreachCategory.SILENT_AUCTION_DONATION,
    marketing: OutreachCategory.MARKETING_SUPPORT,
    "marketing support": OutreachCategory.MARKETING_SUPPORT,
    "stick horse sponsor": OutreachCategory.STICK_HORSE_SPONSOR,
    "rotary member": OutreachCategory.ROTARY_MEMBER
  };

  return map[normalized] || null;
}
