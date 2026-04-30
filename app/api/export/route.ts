import { NextResponse } from "next/server";
import { createCsv } from "@/lib/csv";
import { exportCompaniesWithOutreach } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || undefined;
  const rows = await exportCompaniesWithOutreach(category);
  const csv = createCsv(rows);
  const filename = category
    ? `rotary-outreach-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.csv`
    : "rotary-outreach-export.csv";

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`
    }
  });
}
