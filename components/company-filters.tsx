"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { outreachCategories, outreachStatuses } from "@/lib/constants";

export function CompanyFilters({
  members
}: {
  members: Array<{ id: string; name: string }>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [memberId, setMemberId] = useState(searchParams.get("memberId") || "");

  useEffect(() => {
    setQuery(searchParams.get("query") || "");
    setCategory(searchParams.get("category") || "");
    setStatus(searchParams.get("status") || "");
    setMemberId(searchParams.get("memberId") || "");
  }, [searchParams]);

  function applyFilters() {
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (category) params.set("category", category);
    if (status) params.set("status", status);
    if (memberId) params.set("memberId", memberId);
    router.push(params.toString() ? `${pathname}?${params.toString()}` : pathname);
  }

  function clearFilters() {
    setQuery("");
    setCategory("");
    setStatus("");
    setMemberId("");
    router.push(pathname);
  }

  return (
    <form
      className="grid gap-3 md:grid-cols-6"
      onSubmit={(event) => {
        event.preventDefault();
        applyFilters();
      }}
    >
      <input
        placeholder="Search companies, contacts, email..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All engagement categories</option>
        {outreachCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="">All statuses</option>
        {outreachStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <select
        value={memberId}
        onChange={(event) => setMemberId(event.target.value)}
      >
        <option value="">All primary owners</option>
        {members.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-accent hover:text-slate-900"
        >
          Search
        </button>
        <button
          type="button"
          onClick={clearFilters}
          className="rounded-xl border border-slate-200 bg-accent px-4 py-2 text-sm font-medium text-slate-900 hover:bg-accent/85"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
