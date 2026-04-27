import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { normalizeCompanyName } from "@/lib/utils";

function levenshtein(a: string, b: string) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

function similarityScore(input: string, candidate: string) {
  if (!input || !candidate) return 0;
  if (input === candidate) return 1;
  if (input.includes(candidate) || candidate.includes(input)) return 0.94;

  const inputTokens = new Set(input.split(" "));
  const candidateTokens = new Set(candidate.split(" "));
  const overlap = [...inputTokens].filter((token) => candidateTokens.has(token)).length;
  const union = new Set([...inputTokens, ...candidateTokens]).size || 1;
  const jaccard = overlap / union;

  const distance = levenshtein(input, candidate);
  const maxLen = Math.max(input.length, candidate.length) || 1;
  const editSimilarity = 1 - distance / maxLen;

  return Math.max(jaccard, editSimilarity * 0.9);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const rawName = url.searchParams.get("name")?.trim() || "";
  if (rawName.length < 3) {
    return NextResponse.json({ match: null });
  }

  const normalizedInput = normalizeCompanyName(rawName);
  const companies = await prisma.company.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" }
  });

  let bestMatch: { id: string; name: string; score: number } | null = null;

  for (const company of companies) {
    const score = similarityScore(normalizedInput, normalizeCompanyName(company.name));
    if (!bestMatch || score > bestMatch.score) {
      bestMatch = { id: company.id, name: company.name, score };
    }
  }

  if (!bestMatch || bestMatch.score < 0.72) {
    return NextResponse.json({ match: null });
  }

  return NextResponse.json({ match: bestMatch });
}
