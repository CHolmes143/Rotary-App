"use client";

import Link from "next/link";
import { deleteCompany } from "@/lib/actions";
import { readableCategory, readableStatus } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";

type CompanyListRowProps = {
  company: {
    id: string;
    name: string;
    companyCategory: string | null;
    contactName: string | null;
    email: string | null;
    updatedAt: Date | string;
    primaryOwner: {
      name: string;
    } | null;
    outreachItems: Array<{
      id: string;
      category: Parameters<typeof readableCategory>[0];
      status: Parameters<typeof readableStatus>[0];
    }>;
  };
};

export function CompanyListRow({ company }: CompanyListRowProps) {
  const outreachCount = company.outreachItems.length;

  return (
    <tr className="border-t border-slate-100 align-top">
      <td className="px-4 py-4">
        <Link href={`/companies/${company.id}`} className="block">
          <p className="font-semibold text-primary hover:text-accent">{company.name}</p>
          <p className="mt-1 text-sm text-slate-600">
            {company.contactName || "No contact"} {company.email ? `• ${company.email}` : ""}
          </p>
          {company.companyCategory ? (
            <p className="mt-2 inline-flex rounded-full bg-primarySoft px-2.5 py-1 text-xs font-semibold text-primary">
              {company.companyCategory}
            </p>
          ) : null}
        </Link>
      </td>
      <td className="px-4 py-4 text-sm text-slate-700">
        {company.primaryOwner?.name || "Unassigned"}
      </td>
      <td className="px-4 py-4">
        <div className="space-y-3">
          {company.outreachItems.length === 0 ? (
            <span className="text-sm text-slate-500">No engagement types</span>
          ) : (
            company.outreachItems.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primarySoft px-2.5 py-1 text-xs font-semibold text-primary">
                  {readableCategory(item.category)}
                </span>
                <StatusBadge status={readableStatus(item.status) as never} />
              </div>
            ))
          )}
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-slate-600">{formatDate(company.updatedAt)}</td>
      <td className="px-4 py-4">
        <div className="flex flex-col gap-2">
          <Link
            href={`/companies/${company.id}`}
            className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
          >
            Open
          </Link>
          <form>
            <input type="hidden" name="id" value={company.id} />
            <button
              type="submit"
              formAction={deleteCompany}
              onClick={(event) => {
                const message =
                  outreachCount > 0
                    ? `Delete ${company.name}? This will also remove ${outreachCount} associated engagement type${
                        outreachCount === 1 ? "" : "s"
                      }.`
                    : `Delete ${company.name}?`;

                if (!window.confirm(message)) {
                  event.preventDefault();
                }
              }}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 hover:border-rose-200 hover:text-rose-700"
            >
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
}


export function CompanyListCard({ company }: CompanyListRowProps) {
  const outreachCount = company.outreachItems.length;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3">
        <div>
          <Link href={`/companies/${company.id}`} className="block">
            <h3 className="text-base font-semibold leading-snug text-primary hover:text-accent">
              {company.name}
            </h3>
          </Link>
          <p className="mt-1 break-words text-sm text-slate-600">
            {company.contactName || "No contact"}
            {company.email ? ` • ${company.email}` : ""}
          </p>
          {company.companyCategory ? (
            <p className="mt-2 inline-flex rounded-full bg-primarySoft px-2.5 py-1 text-xs font-semibold text-primary">
              {company.companyCategory}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-slate-500">Owner</span>
            <span className="text-right font-semibold text-slate-800">
              {company.primaryOwner?.name || "Unassigned"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="font-medium text-slate-500">Updated</span>
            <span className="text-right">{formatDate(company.updatedAt)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Engagements
          </p>
          {company.outreachItems.length === 0 ? (
            <span className="text-sm text-slate-500">No engagement types</span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {company.outreachItems.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primarySoft px-2.5 py-1 text-xs font-semibold text-primary">
                    {readableCategory(item.category)}
                  </span>
                  <StatusBadge status={readableStatus(item.status) as never} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/companies/${company.id}`}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
          >
            Open
          </Link>
          <form>
            <input type="hidden" name="id" value={company.id} />
            <button
              type="submit"
              formAction={deleteCompany}
              onClick={(event) => {
                const message =
                  outreachCount > 0
                    ? `Delete ${company.name}? This will also remove ${outreachCount} associated engagement type${
                        outreachCount === 1 ? "" : "s"
                      }.`
                    : `Delete ${company.name}?`;

                if (!window.confirm(message)) {
                  event.preventDefault();
                }
              }}
              className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 hover:border-rose-200 hover:text-rose-700"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
