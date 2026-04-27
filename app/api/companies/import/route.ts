import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { importCompaniesFromCsv } from "@/lib/csv";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.redirect(new URL("/companies", request.url));
  }

  const text = await file.text();
  await importCompaniesFromCsv(text);

  revalidatePath("/");
  revalidatePath("/companies");
  return NextResponse.redirect(new URL("/companies", request.url));
}
