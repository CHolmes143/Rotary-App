import { NextResponse } from "next/server";
import { createCsv } from "@/lib/csv";
import { exportCompaniesWithOutreach } from "@/lib/data";

export async function GET() {
  const rows = await exportCompaniesWithOutreach();
  const csv = createCsv(rows);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="rotary-outreach-export.csv"'
    }
  });
}
