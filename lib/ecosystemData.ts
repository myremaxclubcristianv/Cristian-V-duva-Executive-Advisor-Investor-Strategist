export interface EcosystemPlatform {
  id: string;
  name: string;
  role: string;
  badge: string;
  domain: string;
  url: string;
  description: string;
  keyCapabilities: string[];
  audience: string;
  synergyWithExecutive: string;
}

export const ecosystemPlatforms: EcosystemPlatform[] = [
  {
    id: "aix-os",
    name: "AiX OS™",
    role: "Proprietary Property Intelligence & Neural Operating System",
    badge: "CORE ENGINE",
    domain: "aixos.cristianvaduva.com",
    url: "https://homefind.cristianvaduva.com",
    description: "Centralized analytical infrastructure leveraging advanced neural algorithms and OSINT data gathering to unify market analytics, CRM deal pipelines, and predictive pricing across the Monaco · Dubai · Bucharest axis.",
    keyCapabilities: [
      "Dynamic AI match algorithms aligning qualified institutional buyers with off-market assets",
      "Advanced yield analytics (Cap Rate, Cash-on-Cash, debt amortization, and VAT fiscal impact)",
      "Secure encrypted document processing under strict non-disclosure covenants",
      "Real-time macro surveillance of national cadastre data (ANCPI), central bank rates, and liquidity indices",
    ],
    audience: "Institutional investors, family offices, private equity principals",
    synergyWithExecutive: "Provides the quantitative foundation and velocity needed to stress-test valuations before direct principal negotiations commence.",
  },
  {
    id: "homefind",
    name: "HomeFind",
    role: "Verified B2B & B2C Real Estate Marketplace",
    badge: "VERIFIED PORTAL",
    domain: "homefind.cristianvaduva.com",
    url: "https://homefind.cristianvaduva.com",
    description: "The dedicated digital gateway for verified real estate transactions in Romania and key European markets. Features the qualified Reverse Marketplace for vetted buyer mandates and an exclusive portfolio of masterplanned residential developments.",
    keyCapabilities: [
      "Property listings forensically audited for title integrity and physical build quality before release",
      "Reverse Marketplace: directly connecting verified sellers with pre-screened capital and confirmed budgets",
      "Signature residential masterplans (Pipera, Herăstrău, Kiseleff, Primăverii enclaves)",
      "Tiered corporate subscription access (Starter, Professional, Business, and Private Enterprise)",
    ],
    audience: "Qualified buyers, property owners, master developers, and leading advisory agencies",
    synergyWithExecutive: "Filters open market liquidity and transactional demand, supplying qualified pipelines for confidential advisory mandates.",
  },
  {
    id: "aixluxury",
    name: "AiXLuxury.com",
    role: "Ultra-Prime Portal & International Private Placement Network",
    badge: "ULTRA-PRIME AXIS",
    domain: "aixluxury.com",
    url: "https://www.aixluxury.com",
    description: "International portal dedicated to trophy real estate assets across Monaco, Dubai, the French Riviera, and Bucharest. Operating predominantly off-market, connecting iconic penthouses, historic estates, and waterfront developments with UHNW capital.",
    keyCapabilities: [
      "Exclusive curation of architectural penthouses, historic mansions, and sovereign waterfront estates",
      "Direct origination access to landmark international projects (Dubai Islands, Palm Jumeirah, BRABUS Island)",
      "Exclusive representation mandates for sovereign buyers and legacy estate owners",
      "Private placements executed under Swiss-grade non-disclosure agreements",
    ],
    audience: "UHNW principals, trophy property collectors, sovereign wealth and family office managers",
    synergyWithExecutive: "Provides international scale, cross-border jurisdictional mobility, and direct access to high-finance circles in Monaco and Zurich.",
  },
  {
    id: "insurance",
    name: "Insurance by Cristian Văduva",
    role: "Sovereign Asset Protection & Generali România Partnership",
    badge: "ASSET PROTECTION",
    domain: "insurance.cristianvaduva.com",
    url: "https://insurance.cristianvaduva.com",
    description: "Fiduciary asset defense division securing high-value residential estates, automotive collections, executive health, and corporate management liabilities in authorized partnership with Generali România and bespoke Private Client underwriting.",
    keyCapabilities: [
      "Bespoke CASCO coverage for exotics, supercars, and electric vehicles (including high-voltage battery arrays)",
      "Comprehensive estate insurance at true reconstruction replacement cost without depreciation penalties",
      "Corporate executive health packages with Romanian fiscal optimization (€400/yr/employee deductible)",
      "Directors & Officers (D&O) liability, NIS 2 Cyber Risk defense, and cross-border Cargo insurance",
      "Private Client Division: all-risks agreed-value coverage for fine art, horology collections, yachts, and private aircraft",
    ],
    audience: "High-net-worth estate owners, established family offices, corporate boards and managing directors",
    synergyWithExecutive: "Completes the fiduciary lifecycle: following capital structuring and acquisition, guarantees long-term asset value insulation against catastrophic downside risk.",
  },
  {
    id: "doar-inchirieri",
    name: "doar-inchirieri.ro",
    role: "Specialized Rental Yield & Institutional Portfolio Management",
    badge: "UNDER DEVELOPMENT",
    domain: "doar-inchirieri.ro",
    url: "https://cristianvaduva.com",
    description: "Proprietary software platform currently in advanced development, engineered to maximize net rental yields and automate the fiduciary administration of residential and commercial property portfolios.",
    keyCapabilities: [
      "Automated lease contract administration with automatic annual inflation indexation",
      "Rigorous fiduciary tenant screening and credit verification protocols",
      "Real-time monitoring of net operating income (NOI) and cash-on-cash performance",
    ],
    audience: "Yield-focused residential portfolio investors, corporate expatriates, institutional landlords",
    synergyWithExecutive: "Protects and compounds the recurring cash flow generated by real estate assets under advisory management.",
  },
];
