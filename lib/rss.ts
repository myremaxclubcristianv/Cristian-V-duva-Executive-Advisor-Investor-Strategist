export interface NewsItem {
  id: string;
  title: string;
  source: string;
  publicationDate: string;
  originalUrl: string;
  excerpt: string;
  imageUrl?: string;
  category: "MARKET" | "RESIDENTIAL" | "COMMERCIAL" | "INVESTMENT" | "BUCHAREST" | "ROMANIA" | "GLOBAL";
  tags: string[];
  ingestionTimestamp: string;
}

// In-memory data store with fallback curated intelligence feeds
export const mockNewsData: NewsItem[] = [
  {
    id: "news-1",
    title: "Bucharest Prime Residential Index Shows Continued Capital Growth",
    source: "Real Estate Intelligence Desk",
    publicationDate: "2026-08-10",
    originalUrl: "https://www.zf.ro",
    excerpt: "Institutional investors increase allocation in Northern Bucharest developments amidst rising demand for high-performance residential assets.",
    category: "BUCHAREST",
    tags: ["Bucharest", "Residential", "Prime"],
    ingestionTimestamp: "2026-08-11T12:00:00Z",
  },
  {
    id: "news-2",
    title: "European Commercial Real Estate Liquidity Normalizing Across Core Hubs",
    source: "Financial Times Advisory",
    publicationDate: "2026-08-09",
    originalUrl: "https://www.ft.com",
    excerpt: "Cross-border capital transactions recover in Q3, driven by logistics and office repositioning strategies across Central & Eastern Europe.",
    category: "GLOBAL",
    tags: ["Global", "Commercial", "Capital"],
    ingestionTimestamp: "2026-08-11T12:00:00Z",
  },
  {
    id: "news-3",
    title: "Romania Tax Infrastructure & Real Estate Investment Opportunities 2026",
    source: "Property Investor Journal",
    publicationDate: "2026-08-08",
    originalUrl: "https://www.profit.ro",
    excerpt: "Comprehensive outlook on regulatory updates, mortgage liquidity, and private equity yields in key Romanian urban hubs.",
    category: "ROMANIA",
    tags: ["Romania", "Investment", "Tax"],
    ingestionTimestamp: "2026-08-11T12:00:00Z",
  },
];

export async function getLatestNews(): Promise<NewsItem[]> {
  return mockNewsData;
}
