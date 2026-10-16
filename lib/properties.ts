export interface PropertySpec {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  price: string;
  type: string;
  category: "penthouse" | "villa" | "development" | "international" | "marine";
  area: string;
  rooms: string;
  status: "Available" | "Private Deal" | "Acquired" | "Under Development" | "Custom Order";
  description: string;
  advisoryPerspective: string;
  heroImage: string;
  galleryImages?: string[];
  specs: PropertySpec[];
  features: string[];
  sourceUrl: string;
  sourceName: string;
}

export const selectedProperties: Property[] = [
  {
    id: "prop-plevnei",
    title: "Signature Penthouse with 220 sqm Panoramic Terrace",
    subtitle: "114.13 sqm Usable · 220 sqm Terrace · 12 sqm Balcony · Floor 5/5",
    location: "Calea Plevnei, Sector 1 / Central Diplomatic Corridor, Bucharest",
    price: "Price upon qualified inquiry",
    type: "Penthouse / Rooftop Residence",
    category: "penthouse",
    area: "114.13 sqm usable (372 sqm total footprint)",
    rooms: "4 Rooms (3 Bedrooms, Grand Living, 2 Bathrooms, Enclosed Kitchen)",
    status: "Available",
    description: "Occupying the entire top floor of a modern residential structure completed in 2014, this penthouse offers an exceptional balance of complete privacy, open cardinal exposure, and an expansive 220 sqm landscaped terrace suited for outdoor executive salons, wellness facilities, and suspended gardens.",
    advisoryPerspective: "High capital preservation resilience driven by the extreme rarity of rooftop terraces exceeding 200 sqm in Bucharest's central urban core.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/031cfc74-ee3b-4b5e-952f-f6070a78d183.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/ba66e691-3413-438e-9c14-f7a4fe6c32a4.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/55b7652c-a7ee-434e-af6f-dccf5934f165.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/96baa6d9-c0db-4a05-ade8-390f90b81d86.jpg",
    ],
    specs: [
      { label: "Usable Interior Area", value: "114.13 sqm" },
      { label: "Panoramic Terrace", value: "220.00 sqm" },
      { label: "Additional Balcony", value: "12.00 sqm" },
      { label: "Gross Built Footprint", value: "372.00 sqm" },
      { label: "Floor Level", value: "5 of 5 (Setback Penthouse)" },
      { label: "Year Completed", value: "2014" },
      { label: "Floorplan Division", value: "Detached / Flow-Through" },
      { label: "Climate Infrastructure", value: "Autonomous Heating & Central A/C" },
    ],
    features: [
      "220 sqm wraparound rooftop terrace with unobstructed 360° skyline vistas",
      "Reinforced concrete structural frame with premium stone and glass finishes",
      "Fully segregated chef's kitchen and two naturally ventilated full bathrooms",
      "Boutique low-density building with biometric security access",
      "Direct transit arterial to Victoriei Square, Cotroceni Palace, and CBD hub",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com × HomeFind",
  },
  {
    id: "prop-pipera-villas",
    title: "Pipera Modern Architectural Villas Residential Enclave",
    subtitle: "36 Modern Villas (G+2) · 135–162 sqm Usable · Private Grounds · 2 Parking Bays",
    location: "Pipera – Voluntari Residential Axis, Northern Metropolitan Belt",
    price: "Price upon qualified inquiry",
    type: "Modern Architectural Villas / Residential Development",
    category: "development",
    area: "135 – 162 sqm usable interior per residence",
    rooms: "5 Rooms (4 Bedrooms + Open-Plan Living & Dining)",
    status: "Available",
    description: "A private masterplanned community comprising 14 Type 1 residences and 22 Type 2 residences across G+2 floors. Designed for executive families prioritizing generous spatial proportions, paved access avenues, comprehensive municipal utility connections, and direct proximity to Northern Bucharest's elite international academies.",
    advisoryPerspective: "High-absorption micro-location driven by constant diplomatic and multinational executive demand, guaranteeing steady rental yields and superior asset liquidity.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3198-2-1024x547.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3198-2-1024x547.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3200-1024x576.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3211.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3212-1024x576.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3185-1024x1024.jpg",
    ],
    specs: [
      { label: "Total Community Inventory", value: "36 Villas (14 Type 1 + 22 Type 2)" },
      { label: "Elevation Profile", value: "Ground + 2 Upper Floors (G+2)" },
      { label: "Usable Internal Areas", value: "135 sqm – 162 sqm" },
      { label: "Private Parking", value: "2 Designated Bays per Villa" },
      { label: "External Grounds", value: "Private Landscaped Rear Garden" },
      { label: "Utility Connections", value: "Municipal Water, Sewer, Gas, Fiber" },
    ],
    features: [
      "Two dedicated on-site parking bays integrated within each residential boundary",
      "Individual private garden courtyards engineered for acoustic and visual discretion",
      "High thermal envelope efficiency with triple-glazed minimalist joinery",
      "Secure gated access control along wide paved residential roads",
      "Immediate transit access to Cambridge School, American International School, and BSB",
    ],
    sourceUrl: "https://homefind.cristianvaduva.com",
    sourceName: "HomeFind Developments Hub",
  },
  {
    id: "prop-royal-mansion",
    title: "The Royal Protocol Mansion & Private Estate",
    subtitle: "3,050 sqm Private Grounds · 783 sqm Built Footprint · 16 Grand Rooms · 3-SUV Garage",
    location: "Northern Prime Diplomatic Enclave, Bucharest Metropolitan Area",
    price: "Price upon confidential inquiry",
    type: "Sovereign Estate / Protocol Mansion",
    category: "villa",
    area: "783 sqm built footprint · 3,050 sqm private parkland",
    rooms: "16 Rooms (Grand Reception Hall, Formal Salons, Master Wings)",
    status: "Private Deal",
    description: "A monumental neoclassical residence designed for diplomatic representation, family office headquarters, or multi-generational private living. The estate features 3,050 sqm of mature landscaped parkland, high-volume ceremonial salons, an enclosed 3-SUV vehicle salon, and advanced perimeter security infrastructure.",
    advisoryPerspective: "A legacy trophy asset offering structural inflation defense, tailored for confidential off-market disposition under strict unilateral fiduciary representation.",
    heroImage: "/images/architecture/executive-study.jpg",
    galleryImages: [
      "/images/architecture/executive-study.jpg",
      "/images/architecture/hero-monument.jpg",
      "/images/architecture/monaco-cliffside.jpg",
    ],
    specs: [
      { label: "Private Land Area", value: "3,050.00 sqm" },
      { label: "Gross Built Area", value: "783.00 sqm" },
      { label: "Room Count", value: "16 High-Volume Chambers" },
      { label: "Integrated Garage", value: "Capacity for 3 Full-Size SUVs" },
      { label: "Surveillance Architecture", value: "Dedicated Operations & Security Room" },
      { label: "Transaction Protocol", value: "Private Placement / Single-Client NDA" },
    ],
    features: [
      "Private grounds with mature specimen trees and architectural lighting axes",
      "Reception salons featuring monumental ceiling heights and carved natural stone",
      "Integrated Building Management System (BMS) with redundant generator backups",
      "Segregated staff wing with dedicated security and service access corridors",
      "Corporate holding entity structure optimized for tax neutrality and swift transfer",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com Sovereign Portfolio",
  },
  {
    id: "prop-nautical-home",
    title: "NAUTICAL HOME 11 — Autonomous Marine Waterfront Residence",
    subtitle: "11m Length · 3.7m Beam · >50 sqm Usable Living · Rooftop Sun Deck",
    location: "Yacht Marina / Danube Delta / Coastal Archipelagos & Lakes",
    price: "€74,000 + VAT (Base Model Configuration)",
    type: "Floating Marine Residence / Houseyacht",
    category: "marine",
    area: ">50 sqm usable interior + upper observation deck",
    rooms: "Living Lounge, Master Stateroom, Galley, Bathroom, Rooftop Sun Deck",
    status: "Custom Order",
    description: "A floating marine villa engineered in full compliance with modern naval CE standards for four-season autonomous living, maritime leisure, or boutique hospitality deployment. Constructed on marine galvanized steel framing with unsinkable high-density polyethylene pontoons with expanded polystyrene (EPS) cores.",
    advisoryPerspective: "An innovative asset mobility concept free of conventional real estate land property taxes, generating superior yields in prime maritime hospitality.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/031cfc74-ee3b-4b5e-952f-f6070a78d183.jpg",
    ],
    specs: [
      { label: "Length Overall (LOA)", value: "11.00 m (36.1 ft)" },
      { label: "Beam Overall", value: "3.70 m (12.1 ft)" },
      { label: "Usable Living Space", value: "> 50.00 sqm (incl. rooftop deck)" },
      { label: "Guest Capacity", value: "2 – 6 Persons" },
      { label: "Freshwater Capacity", value: "400 Liters" },
      { label: "Blackwater Tank", value: "400 Liters with Integrated Sensors" },
      { label: "Power Grid", value: "220V / 12V Grid + Deep-Cycle Battery Bank" },
      { label: "Propulsion Option", value: "Outboard Combustion or Electric Pod Engine" },
    ],
    features: [
      "High-efficiency thermal insulation package engineered for all four climatic seasons",
      "HDPE marine pontoons with unsinkable high-buoyancy EPS inner cores",
      "Full-beam panoramic rooftop deck configured for lounging and observation",
      "Fully integrated helm console equipped for navigational ease",
      "Turnkey delivery with designer furnishings and galley equipment ready for launch",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com Maritime Desk",
  },
  {
    id: "prop-schei-brasov",
    title: "Historic Schei Villa Apartment with 30 sqm Panoramic Terrace",
    subtitle: "3 Rooms · 30 sqm Terrace · Direct Mount Tâmpa & Historic Center Vistas",
    location: "Schei Historic Heritage Quarter, Brașov, Foot of Mount Tâmpa",
    price: "Price upon qualified inquiry",
    type: "Historic Heritage Residence / Restored Villa",
    category: "penthouse",
    area: "3 Rooms · 30 sqm private terrace",
    rooms: "3 Rooms (2 Bedrooms, Grand Living, Bathroom, Kitchen)",
    status: "Available",
    description: "Positioned on the first floor of an aristocratic interwar villa within Brașov's protected Schei heritage district. This residence unites preserved neoclassical architecture with contemporary comforts and an extraordinary 30 sqm terrace overlooking Mount Tâmpa and the medieval town towers.",
    advisoryPerspective: "Strict historic zoning protections prohibit new residential permits in Schei, cementing supply scarcity and long-term capital appreciation.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/c436e74f-28b3-4f1d-bcf3-ce9f05b2aa04-1024x768.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c436e74f-28b3-4f1d-bcf3-ce9f05b2aa04-1024x768.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/9fb0d43c-76b3-4b44-a38e-94134491beae-1024x768.jpg",
    ],
    specs: [
      { label: "Property Type", value: "First Floor in Restored Historic Villa" },
      { label: "Room Count", value: "3 Detached Living Chambers" },
      { label: "Private Terrace", value: "30 sqm with Mount Tâmpa Exposure" },
      { label: "Architectural Style", value: "Restored Neoclassical Interwar" },
      { label: "Optimal Purpose", value: "Private Mountain Residence / Trophy Retreat" },
    ],
    features: [
      "30 sqm panoramic terrace with southwest solar orientation toward Mount Tâmpa",
      "Noble ceiling heights with restored artisanal wooden floors and joinery",
      "Private off-street vehicle parking within a gated courtyard",
      "Tranquil historic street setting a short 5-minute walk from Council Square",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com Heritage Curation",
  },
  {
    id: "prop-monaco-coast",
    title: "Travertine Cliffside Pavilion — Cap d’Ail / Monaco Border",
    subtitle: "480 sqm Living · 1,400 sqm Cliffside Grounds · Cantilevered Infinity Pool",
    location: "Cap d'Ail / Principality of Monaco Sovereign Border",
    price: "Price upon confidential inquiry",
    type: "Ultra-Luxury Villa / Mediterranean Cliffside Estate",
    category: "international",
    area: "480 sqm usable living · 1,400 sqm landscaped grounds",
    rooms: "6 Master Suites · Formal Entertaining Salons",
    status: "Private Deal",
    description: "A sculptural architectural achievement in honed travertine and structural glass commanding open panoramas over the Mediterranean Sea. The mandate involved cross-border zoning due diligence, corporate vehicle tax optimization, and direct principal-to-principal negotiations under a Swiss non-disclosure covenant.",
    advisoryPerspective: "The most liquid ultra-prime enclave along the French Riviera, positioned moments from Port Hercule and the Golden Square of Monaco.",
    heroImage: "/images/architecture/monaco-cliffside.jpg",
    galleryImages: [
      "/images/architecture/monaco-cliffside.jpg",
      "/images/architecture/hero-monument.jpg",
    ],
    specs: [
      { label: "Geographic Axis", value: "Monaco – Cap d'Ail Coastal Corridor" },
      { label: "Internal Living Footprint", value: "480.00 sqm" },
      { label: "Landscaped Grounds", value: "1,400.00 sqm Tiered Mediterranean Terraces" },
      { label: "Bedroom Accommodations", value: "6 Master Suites with En-Suite Marble Baths" },
      { label: "Secured Vehicle Salon", value: "Subterranean Garage for 4 Vehicles" },
    ],
    features: [
      "Cantilevered infinity pool suspended directly over the Mediterranean rock face",
      "Honed travertine finishes with ultra-slim Schuco structural glass systems",
      "Biometric access control architecture with private safe room deployment",
      "Direct private descent path to the coastal promenade and shoreline",
    ],
    sourceUrl: "https://www.aixluxury.com",
    sourceName: "AiXLuxury Monaco Desk",
  },
  {
    id: "prop-dubai-brabus",
    title: "BRABUS Island & Signature Waterfront Sky Mansions",
    subtitle: "Branded Waterfront Villas & Iconic Penthouses · Dubai Islands Axis",
    location: "Dubai Islands / Palm Jumeirah Corridor, United Arab Emirates",
    price: "Price upon qualified inquiry (Developer Allocation)",
    type: "Ultra-Prime Waterfront / Branded Residences",
    category: "international",
    area: "450 – 1,200 sqm",
    rooms: "4 – 7 Bedrooms + Private Yacht Moorings",
    status: "Under Development",
    description: "An internationally landmarked project rising along the sovereign waterfront of Dubai. Information represents confirmed developer-announced specifications. Features direct private yacht mooring slips, bespoke BRABUS Design interiors, and exclusive UHNW lifestyle amenities.",
    advisoryPerspective: "Strategic capital deployment into a tax-neutral UAE jurisdiction, offering quantified appreciation and priority pre-launch allocation for qualified institutional buyers.",
    heroImage: "/images/architecture/hero-monument.jpg",
    galleryImages: [
      "/images/architecture/hero-monument.jpg",
      "/images/architecture/monaco-cliffside.jpg",
    ],
    specs: [
      { label: "Fiscal Jurisdiction", value: "Dubai / UAE (0% Personal Income & Capital Gains)" },
      { label: "Unit Typologies", value: "Waterfront Mansions & Sky Penthouses" },
      { label: "Project Phase", value: "Under Active Development (Developer Specs)" },
      { label: "Maritime Amenities", value: "Private Superyacht Berth Option" },
      { label: "Branding Partnership", value: "BRABUS Design Specifications" },
    ],
    features: [
      "Official developer-announced project details — verified off-plan acquisition gateway",
      "Private shoreline with unobstructed panoramas of the Downtown Dubai skyline",
      "Eligibility for 10-Year UAE Golden Visa for principal and immediate family",
      "Independent fiduciary audit of the standard Sales and Purchase Agreement (SPA)",
    ],
    sourceUrl: "https://www.aixluxury.com",
    sourceName: "AiXLuxury Dubai Desk",
  },
];

export function getSelectedProperties(): Property[] {
  return selectedProperties;
}

export function getPropertyById(id: string): Property | undefined {
  return selectedProperties.find((p) => p.id === id);
}

export function getPropertiesByCategory(category: Property["category"]): Property[] {
  return selectedProperties.filter((p) => p.category === category);
}
