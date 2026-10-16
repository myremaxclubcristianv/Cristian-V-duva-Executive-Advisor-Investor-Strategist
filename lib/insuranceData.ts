export interface InsuranceDivision {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  items: string[];
  externalPath: string;
}

export interface InsurancePillar {
  title: string;
  subtitle: string;
  description: string;
  coveragePoints: string[];
  regulatoryBasis?: string;
}

export const insuranceOverview = {
  title: "Asset Sovereignty & Strategic Underwriting",
  subtitle: "Authorized Fiduciary Advisory · Generali România Partnership",
  corePhilosophy: "Acquiring high-value real estate or physical assets is only the initial milestone. Insulating balance sheets against catastrophic asymmetric risk is integral to generational family wealth governance.",
  externalPortalUrl: "https://insurance.cristianvaduva.com",
  partnerName: "Generali România",
  partnerRole: "Authorized Premium Insurance & Financial Risk Advisory Partner",
};

export const insuranceDivisions: InsuranceDivision[] = [
  {
    id: "auto-casco",
    title: "CASCO & Strategic Automotive Underwriting",
    category: "Automotive & Fleet",
    tagline: "Comprehensive protection for exotic vehicles, electric fleets, and performance machinery",
    description: "Tailored CASCO underwriting for high-performance exotics and electric vehicles. Encompasses extreme weather events, high-voltage traction battery arrays, private charging stations, rapid digital claims settlement, and bonus-malus optimization.",
    items: [
      "Full CASCO coverage for BEV & plug-in hybrids (including traction battery integrity)",
      "Special endorsements for extreme weather events (severe hail, flash floods, storms)",
      "Streamlined digital claim reporting via the official Amiabila platform",
      "Bonus-Malus optimization securing discounts up to 50% for disciplined operators",
      "Pan-European breakdown assistance and executive replacement vehicle guarantees",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/crestere-despagubiri-casco-fenomene-meteo-extreme-romania",
  },
  {
    id: "locuinta-patrimoniu",
    title: "Residential Estates & Architectural Assets",
    category: "Real Estate & Estates",
    tagline: "Statutory PAD limits vs. Comprehensive agreed replacement cost coverage",
    description: "Auditing real estate policies to eliminate under-insurance gaps. Clarifying the critical distinction between the statutory Romanian PAD ceiling (€20,000 / €10,000) and comprehensive private coverage protecting actual reconstruction costs, custom finishes, and valuable contents.",
    items: [
      "Agreed full replacement cost underwriting without arbitrary depreciation factors",
      "Integrated coverage for seismic, flood, and geological subsidence risks",
      "Accidental damage to advanced HVAC, plumbing, hydronic, and electrical systems",
      "Third-party civil liability protection covering adjacent property indemnities",
      "Equivalent luxury temporary accommodation during repairs or remediation",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/asigurarea-obligatorie-pad-vs-facultativa-protectie-completa-locuinte",
  },
  {
    id: "viata-sanatate",
    title: "Life, Executive Health & Family Governance",
    category: "Life & Health",
    tagline: "Family capital continuity and guaranteed accumulation with tax advantages",
    description: "Structured life protection policies with guaranteed capital accumulation combined with private international healthcare coverage for executives and family members, leveraging corporate deductible thresholds.",
    items: [
      "Mixed life policies balancing death benefit liquidity with guaranteed capital growth",
      "Corporate executive health schemes optimizing the Romanian €400/yr/employee tax allowance",
      "Direct billing access to elite European hospital networks and private clinics",
      "Critical illness coverage with worldwide second medical opinion protocols",
      "Financial continuity mechanisms shielding family living standards against unforeseen adversity",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/sanatate-corporate-beneficii-fiscale-deductibilitate-angajatori",
  },
  {
    id: "business-cyber-do",
    title: "Corporate Governance, D&O & Cyber Risk",
    category: "Corporate & Executive Liability",
    tagline: "Managerial liability transfer and European NIS 2 Directive compliance",
    description: "Institutional solutions protecting corporate balance sheets and managing directors: D&O (Directors & Officers) coverage on claims-made forms with retroactive protection, European NIS 2-compliant Cyber Risk insurance, and international Cargo transit security.",
    items: [
      "Directors & Officers (D&O) liability shielding personal assets of board members and executives",
      "Cyber Risk underwriting aligned with the EU NIS 2 Directive (incident response & interruption)",
      "Marine Cargo vs. CMR carrier liability optimization for high-value logistics",
      "Professional indemnity and commercial fiduciary malpractice defense",
      "Independent contractual audit and policy renegotiation on fiduciary terms",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/directiva-europeana-nis2-asigurare-cyber-riscuri-imm",
  },
  {
    id: "private-client-extraordinary",
    title: "Private Client Division — Extraordinary Assets",
    category: "Ultra-High-Net-Worth Portfolios",
    tagline: "Supercars, superyachts, private aviation, fine horology, and museum collections",
    description: "Dedicated underwriting for extraordinary collectibles where standard retail policies fail. Independent appraisals and agreed-value endorsements without depreciation deductions for rare watches, private art collections, fine jewelry, and maritime vessels.",
    items: [
      "Supercars & Track Exotics: transit and closed-circuit storage coverage via AiX Luxury Garage",
      "Yachts & Superyachts: hull and machinery underwriting across international waters",
      "Private Aviation: hull agreed value and aviation third-party legal liability",
      "Haute Horlogerie & Jewelry: scheduled agreed-value coverage without market depreciation",
      "Fine Art & Antiquities: seamless all-risks wall-to-wall transit and exhibition protection",
    ],
    externalPath: "https://insurance.cristianvaduva.com/private-client",
  },
];
