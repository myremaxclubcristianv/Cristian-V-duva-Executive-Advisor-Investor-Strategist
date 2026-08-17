export interface DataSourceRegistryItem {
  id: string;
  institution: string;
  domain: string;
  dataset: string;
  updateFrequency: string;
  verificationStatus: "VERIFIED_OFFICIAL" | "STATUTORY_RELEASE" | "CURATED_FEED";
  officialUrl?: string;
}

export const DATA_PROVENANCE_REGISTRY: DataSourceRegistryItem[] = [
  {
    id: "bnr-macro",
    institution: "National Bank of Romania (BNR)",
    domain: "Macroeconomic & Monetary Policy",
    dataset: "Official reference exchange rates, monetary policy key rate, inflation metrics, and ROBOR benchmark rates.",
    updateFrequency: "Daily / Monthly statutory releases",
    verificationStatus: "VERIFIED_OFFICIAL",
    officialUrl: "https://www.bnr.ro",
  },
  {
    id: "ancpi-cadastre",
    institution: "National Agency for Cadastre and Land Registration (ANCPI)",
    domain: "Real Estate Transaction Volume",
    dataset: "Monthly statistics on real estate deeds, individual property transfers, and mortgage registrations across Romania.",
    updateFrequency: "Monthly official reporting",
    verificationStatus: "VERIFIED_OFFICIAL",
    officialUrl: "https://www.ancpi.ro",
  },
  {
    id: "ins-statistics",
    institution: "National Institute of Statistics (INS)",
    domain: "Demographics & Construction Activity",
    dataset: "Residential building permits, construction cost indices, and regional demographic data.",
    updateFrequency: "Monthly / Quarterly bulletins",
    verificationStatus: "VERIFIED_OFFICIAL",
    officialUrl: "https://insse.ro",
  },
  {
    id: "bvb-capital",
    institution: "Bucharest Stock Exchange (BVB) & Public Filings",
    domain: "Capital Markets & Listed RE Funds",
    dataset: "Official filings, financial statements, and market capitalizations of listed real estate entities.",
    updateFrequency: "Continuous / Quarterly filings",
    verificationStatus: "VERIFIED_OFFICIAL",
    officialUrl: "https://www.bvb.ro",
  },
  {
    id: "curated-dispatches",
    institution: "Curated European Financial Dispatches",
    domain: "Commercial & Cross-Border Trends",
    dataset: "Intelligence feeds from Ziarul Financiar, Financial Times, and Profit.ro with primary source attribution.",
    updateFrequency: "Curated daily dispatches",
    verificationStatus: "CURATED_FEED",
  },
  {
    id: "youtube-official",
    institution: "Official YouTube Channel (@CristianVaduvaCV)",
    domain: "Executive Video & Broadcast Archive",
    dataset: "Official channel RSS and verified video metadata for executive briefings and property walkthroughs.",
    updateFrequency: "Continuous channel sync",
    verificationStatus: "VERIFIED_OFFICIAL",
    officialUrl: "https://www.youtube.com/@CristianVaduvaCV",
  },
];

export function getAllDataSources(): DataSourceRegistryItem[] {
  return DATA_PROVENANCE_REGISTRY;
}
