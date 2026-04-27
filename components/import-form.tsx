"use client";

import { useState } from "react";

export function ImportForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-accentSoft p-4">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
      >
        Import companies from CSV
      </button>

      {isOpen ? (
        <form
          action="/api/companies/import"
          method="post"
          encType="multipart/form-data"
          className="mt-3 flex flex-col gap-3 md:flex-row md:items-center"
        >
          <div className="flex-1">
            <p className="text-sm text-slate-600">
              Use the sample template to bring in past vendors and sponsors with optional outreach
              history.
            </p>
          </div>
          <input name="file" type="file" accept=".csv,text/csv" className="md:max-w-xs" />
          <button
            type="submit"
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-slate-900"
          >
            Import CSV
          </button>
          <a
            href="/templates/companies-import-template.csv"
            className="rounded-xl border border-slate-200 bg-accent px-4 py-2.5 text-center text-sm font-semibold text-slate-900 hover:bg-accent/85"
          >
            Download template
          </a>
        </form>
      ) : null}
    </div>
  );
}
