export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: "REAL ESTATE" | "CAPITAL" | "INVESTMENTS" | "INSURANCE" | "BUSINESS" | "STRATEGY" | "MARKETS";
  publicationDate: string;
  readingTime: string;
  author: string;
}

export const originalInsights: InsightItem[] = [
  {
    id: "insight-1",
    slug: "capital-allocation-in-volatile-real-estate-cycles",
    title: "Capital Allocation & Yield Preservation in Volatile Real Estate Cycles",
    excerpt: "An executive perspective on navigating macroeconomic shifts, credit liquidity, and prime asset positioning across CEE hubs.",
    content: "Strategic real estate investments require a disciplined focus on location scarcity and tenant credit quality...",
    coverImage: "/residence/command.png",
    category: "CAPITAL",
    publicationDate: "2026-08-01",
    readingTime: "5 min read",
    author: "Cristian Văduva",
  },
  {
    id: "insight-2",
    slug: "bucharest-prime-residential-outlook-2026",
    title: "Bucharest Prime Residential Outlook: Structural Scarcity & Equity Growth",
    excerpt: "Analyzing the supply-side constraints and institutional appetite driving capital appreciation in Bucharest's northern corridor.",
    content: "Northern Bucharest residential developments continue to outperform broader regional market averages...",
    coverImage: "/residence/living.png",
    category: "REAL ESTATE",
    publicationDate: "2026-07-20",
    readingTime: "4 min read",
    author: "Cristian Văduva",
  },
];

export function getOriginalInsights(): InsightItem[] {
  return originalInsights;
}
