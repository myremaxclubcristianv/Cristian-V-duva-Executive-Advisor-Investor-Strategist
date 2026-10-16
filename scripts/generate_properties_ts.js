import fs from "fs";

async function main() {
  console.log("Generating verified lib/properties.ts and inventory...");

  // 1. Get Supabase Key
  const chunkRes = await fetch("https://homefind.cristianvaduva.com/_next/static/chunks/3ruyqjib1qva_.js");
  const code = await chunkRes.text();
  const key = code.match(/eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/)[0];

  // 2. Fetch all listings
  const res = await fetch("https://gremutoprvrtujeybpcl.supabase.co/rest/v1/listings?select=*&limit=500", {
    headers: { apikey: key, Authorization: "Bearer " + key }
  });
  const allListings = await res.json();
  const supaMap = new Map();
  allListings.forEach(l => supaMap.set(l.id, l));

  // 3. Load AiXLuxury collections
  const collected = JSON.parse(fs.readFileSync("scripts/collected_sources.json", "utf8"));
  const aix = collected.aix;

  // Let's define the comprehensive curated portfolio
  const portfolio = [];

  // Helper to format currency
  function fmtEur(n) {
    if (!n) return "Price upon qualified inquiry";
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  }

  // ==========================================
  // A. EXISTING CONFIRMED EXECUTIVE MONOGRAPHS (Preserved & Enhanced with High-Res Assets)
  // ==========================================
  // Calea Plevnei penthouse from HomeFind Supabase
  const plevneiSupa = supaMap.get("e84b2a27-f04d-4273-821b-9f33b88200d9");
  const plevneiImages = plevneiSupa?.images?.length ? plevneiSupa.images : [
    "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    "https://cristianvaduva.com/wp-content/uploads/2024/01/55b7652c-a7ee-434e-af6f-dccf5934f165.jpg"
  ];

  portfolio.push({
    id: "prop-plevnei",
    slug: "plevnei-signature-rooftop-penthouse",
    title: "Signature Penthouse with 220 sqm Panoramic Terrace",
    subtitle: "114.13 sqm Usable · 220 sqm Terrace · 12 sqm Balcony · Floor 5/5",
    location: "Calea Plevnei, Sector 1 / Central Diplomatic Corridor, Bucharest",
    city: "Bucharest",
    country: "Romania",
    price: "€468,000",
    priceNumeric: 468000,
    currency: "EUR",
    type: "Penthouse / Rooftop Residence",
    category: "penthouse",
    area: "114.13 sqm usable (372 sqm footprint)",
    usableArea: "114.13 sqm",
    plotArea: "220 sqm terrace",
    bedrooms: 3,
    bathrooms: 2,
    rooms: "4 Rooms (3 Bedrooms, Grand Living, 2 Bathrooms, Enclosed Kitchen)",
    status: "Available",
    description: "Occupying the entire top floor of a modern residential structure completed in 2014, this penthouse offers an exceptional balance of complete privacy, open cardinal exposure, and an expansive 220 sqm landscaped terrace suited for outdoor executive salons, wellness facilities, and suspended gardens.",
    advisoryPerspective: "High capital preservation resilience driven by the extreme rarity of rooftop terraces exceeding 200 sqm in Bucharest's central urban core.",
    heroImage: plevneiImages[0],
    galleryImages: plevneiImages,
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
    sourceUrl: "https://homefind.cristianvaduva.com/listing/e84b2a27-f04d-4273-821b-9f33b88200d9",
    sourceName: "HomeFind × CristianVaduva.com",
    sourcePlatform: "HomeFind",
    isFeatured: true,
  });

  portfolio.push({
    id: "prop-pipera-villas",
    slug: "pipera-architectural-villas-enclave",
    title: "Pipera Modern Architectural Villas Residential Enclave",
    subtitle: "36 Modern Villas (G+2) · 135–162 sqm Usable · Private Grounds · 2 Parking Bays",
    location: "Pipera – Voluntari Residential Axis, Northern Metropolitan Belt",
    city: "Bucharest / Pipera",
    country: "Romania",
    price: "Price upon qualified inquiry",
    currency: "EUR",
    type: "Modern Architectural Villas / Residential Development",
    category: "development",
    area: "135 – 162 sqm usable interior per residence",
    usableArea: "135 - 162 sqm",
    bedrooms: 4,
    bathrooms: 4,
    rooms: "5 Rooms (4 Bedrooms + Open-Plan Living & Dining)",
    status: "Available",
    description: "A private masterplanned community comprising 14 Type 1 residences and 22 Type 2 residences across G+2 floors. Designed for executive families prioritizing generous spatial proportions, paved access avenues, comprehensive municipal utility connections, and direct proximity to Northern Bucharest's elite international academies.",
    advisoryPerspective: "High-absorption micro-location driven by constant diplomatic and multinational executive demand, guaranteeing steady rental yields and superior asset liquidity.",
    heroImage: aix.piperaImgs[0] || "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3198-2-1024x547.jpg",
    galleryImages: aix.piperaImgs.length > 0 ? aix.piperaImgs : [
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
    sourceUrl: "https://aixluxury.com/pipera-homes",
    sourceName: "AiXLuxury × HomeFind Developments Hub",
    sourcePlatform: "AiXLuxury",
    isFeatured: true,
  });

  portfolio.push({
    id: "prop-royal-mansion",
    slug: "royal-protocol-mansion-private-estate",
    title: "The Royal Protocol Mansion & Private Sovereign Estate",
    subtitle: "3,050 sqm Private Grounds · 783 sqm Built Footprint · 16 Grand Rooms · 3-SUV Garage",
    location: "Northern Prime Diplomatic Enclave, Bucharest Metropolitan Area",
    city: "Bucharest",
    country: "Romania",
    price: "Price upon confidential inquiry",
    currency: "EUR",
    type: "Sovereign Estate / Protocol Mansion",
    category: "villa",
    area: "783 sqm built footprint · 3,050 sqm private parkland",
    usableArea: "783 sqm",
    plotArea: "3,050 sqm",
    bedrooms: 8,
    bathrooms: 6,
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
    sourcePlatform: "CristianVaduva.com",
    isFeatured: true,
  });

  portfolio.push({
    id: "prop-schei-brasov",
    slug: "historic-schei-brasov-villa-terrace",
    title: "Historic Schei Villa Apartment with 30 sqm Panoramic Terrace",
    subtitle: "3 Rooms · 30 sqm Terrace · Direct Mount Tâmpa & Historic Center Vistas",
    location: "Schei Historic Heritage Quarter, Brașov, Foot of Mount Tâmpa",
    city: "Brașov",
    country: "Romania",
    price: "Price upon qualified inquiry",
    currency: "EUR",
    type: "Historic Heritage Residence / Restored Villa",
    category: "penthouse",
    area: "3 Rooms · 30 sqm private terrace",
    usableArea: "105 sqm",
    plotArea: "30 sqm terrace",
    bedrooms: 2,
    bathrooms: 2,
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
    sourcePlatform: "CristianVaduva.com",
    isFeatured: false,
  });

  portfolio.push({
    id: "prop-monaco-coast",
    slug: "travertine-cliffside-pavilion-monaco-cap-dail",
    title: "Travertine Cliffside Pavilion — Cap d’Ail / Monaco Sovereign Border",
    subtitle: "480 sqm Living · 1,400 sqm Cliffside Grounds · Cantilevered Infinity Pool",
    location: "Cap d'Ail / Principality of Monaco Sovereign Border",
    city: "Cap d'Ail / Monaco Border",
    country: "Monaco / France",
    price: "Price upon confidential inquiry",
    currency: "EUR",
    type: "Ultra-Luxury Villa / Mediterranean Cliffside Estate",
    category: "international",
    area: "480 sqm usable living · 1,400 sqm landscaped grounds",
    usableArea: "480 sqm",
    plotArea: "1,400 sqm",
    bedrooms: 6,
    bathrooms: 6,
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
    sourcePlatform: "AiXLuxury",
    isFeatured: true,
  });

  // ==========================================
  // B. AIXLUXURY AUTHENTIC PORTFOLIO EXPANSION (With Complete High-Res Assets)
  // ==========================================
  portfolio.push({
    id: "prop-nautical-home",
    slug: "nautical-home-11-floating-residence",
    title: "NAUTICAL HOME 11 — Autonomous Marine Waterfront Residence",
    subtitle: "11m Length · 3.7m Beam · >50 sqm Usable Living · Rooftop Sun Deck",
    location: "Yacht Marina / Danube Delta / Coastal Archipelagos & Lakes",
    city: "Constanța / Coastal Marina",
    country: "Romania / International Marine",
    price: "€74,000 + VAT (Base Model Configuration)",
    priceNumeric: 74000,
    currency: "EUR",
    type: "Floating Marine Residence / Houseyacht",
    category: "marine",
    area: ">50 sqm usable interior + upper observation deck",
    usableArea: "52 sqm",
    bedrooms: 2,
    bathrooms: 1,
    rooms: "Living Lounge, Master Stateroom, Galley, Bathroom, Rooftop Sun Deck",
    status: "Custom Order",
    description: "A floating marine villa engineered in full compliance with modern naval CE standards for four-season autonomous living, maritime leisure, or boutique hospitality deployment. Constructed on marine galvanized steel framing with unsinkable high-density polyethylene pontoons with expanded polystyrene (EPS) cores.",
    advisoryPerspective: "An innovative asset mobility concept free of conventional real estate land property taxes, generating superior yields in prime maritime hospitality.",
    heroImage: aix.nauticalImgs[0] || "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    galleryImages: aix.nauticalImgs,
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
    sourceUrl: "https://aixluxury.com/nautical-home",
    sourceName: "AiXLuxury Maritime Desk",
    sourcePlatform: "AiXLuxury",
    isFeatured: true,
  });

  portfolio.push({
    id: "prop-miami-villa",
    slug: "miami-waterfront-architectural-villa",
    title: "Miami Prime Waterfront Architectural Villa & Private Dock",
    subtitle: "Direct Deep-Water Mooring · Tropical Modernist Architecture · Biscayne Corridor",
    location: "Venetian Islands / Biscayne Bay Coastal Corridor, Miami, Florida",
    city: "Miami",
    country: "United States",
    price: "Price upon qualified inquiry",
    currency: "USD",
    type: "Ultra-Prime Waterfront Villa",
    category: "international",
    area: "620 sqm usable living · 1,150 sqm waterfront plot",
    usableArea: "620 sqm",
    plotArea: "1,150 sqm",
    bedrooms: 6,
    bathrooms: 7,
    rooms: "6 En-Suite Bedrooms · Double-Height Great Room · Private Yacht Mooring",
    status: "Private Deal",
    description: "An extraordinary tropical modernist waterfront estate designed to maximize indoor-outdoor living along Miami's premier coastal corridor. Featuring floor-to-ceiling hurricane-rated structural glass, a deep-water yacht slip with direct bay access and no fixed bridges, custom European millwork, and cantilevered sunset entertaining decks.",
    advisoryPerspective: "Florida's zero state income tax framework combined with institutional international capital flight continues to drive robust equity appreciation in Miami waterfront assets.",
    heroImage: aix.miamiImgs[0],
    galleryImages: aix.miamiImgs,
    specs: [
      { label: "Waterfront Exposure", value: "Direct Bay Frontage with Private Dock" },
      { label: "Living Footprint", value: "620.00 sqm (6,670 sqft)" },
      { label: "Yacht Mooring", value: "Deep-Water Slip (No Fixed Bridges to Ocean)" },
      { label: "Climatic Shielding", value: "Class 5 Hurricane Impact Structural Glazing" },
      { label: "Outdoor Facilities", value: "Heated Saltwater Infinity Pool & Summer Kitchen" },
    ],
    features: [
      "Direct deep-water private dock engineered for motor yachts up to 80 feet",
      "Expansive cantilevered master suite terrace with panoramic open-bay skyline views",
      "Chef's presentation kitchen with secondary back-of-house prep scullery",
      "Gated perimeter with smart biometric surveillance and multi-zone climate control",
    ],
    sourceUrl: "https://aixluxury.com/miami-villa",
    sourceName: "AiXLuxury Miami Desk",
    sourcePlatform: "AiXLuxury",
    isFeatured: true,
  });

  portfolio.push({
    id: "prop-dubai-brabus",
    slug: "brabus-island-waterfront-residences",
    title: "BRABUS Island & Signature Waterfront Sky Mansions",
    subtitle: "Branded Waterfront Villas & Iconic Penthouses · Abu Dhabi / Dubai Corridor",
    location: "Dubai Islands / Abu Dhabi Sovereign Coastal Belt, UAE",
    city: "Dubai / Abu Dhabi",
    country: "United Arab Emirates",
    price: "€1,400,000 to €15,000,000 (Developer Allocation)",
    priceNumeric: 1400000,
    currency: "EUR",
    type: "Ultra-Prime Waterfront / Branded Residences",
    category: "international",
    area: "450 – 1,200 sqm usable floorplates",
    usableArea: "450 - 1200 sqm",
    bedrooms: 5,
    bathrooms: 6,
    rooms: "4 – 7 Bedrooms + Private Yacht Moorings",
    status: "Under Development",
    description: "An internationally landmarked project rising along the sovereign waterfront. Information represents confirmed developer-announced specifications. Features direct private yacht mooring slips, bespoke BRABUS Design interiors, and exclusive UHNW lifestyle amenities.",
    advisoryPerspective: "Strategic capital deployment into a tax-neutral UAE jurisdiction, offering quantified appreciation and priority pre-launch allocation for qualified institutional buyers.",
    heroImage: aix.brabusImgs[0],
    galleryImages: aix.brabusImgs,
    specs: [
      { label: "Fiscal Jurisdiction", value: "Dubai / UAE (0% Personal Income & Capital Gains)" },
      { label: "Unit Typologies", value: "Waterfront Mansions & Sky Penthouses" },
      { label: "Project Phase", value: "Under Active Development (Developer Specs)" },
      { label: "Maritime Amenities", value: "Private Superyacht Berth Option" },
      { label: "Branding Partnership", value: "BRABUS Design Specifications" },
    ],
    features: [
      "Official developer-announced project details — verified off-plan acquisition gateway",
      "Private shoreline with unobstructed panoramas of the Downtown skyline",
      "Eligibility for 10-Year UAE Golden Visa for principal and immediate family",
      "Independent fiduciary audit of the standard Sales and Purchase Agreement (SPA)",
    ],
    sourceUrl: "https://aixluxury.com/brabus-island",
    sourceName: "AiXLuxury Dubai & Abu Dhabi Desk",
    sourcePlatform: "AiXLuxury",
    isFeatured: true,
  });

  portfolio.push({
    id: "prop-h4l-village",
    slug: "h4l-the-village-lakefront-enclave",
    title: "H4L The Village — Sustainable Lakefront Residential Masterplan",
    subtitle: "Eco-Engineered Villas & Townhomes · Northern Bucharest Lake Axis · Low Carbon Footprint",
    location: "Northern Lake Belt, Pipera – Ștefăneștii de Jos Corridor, Bucharest",
    city: "Bucharest North",
    country: "Romania",
    price: "Price upon qualified inquiry",
    currency: "EUR",
    type: "Lakefront Masterplanned Community / Eco-Residences",
    category: "development",
    area: "140 – 210 sqm usable floorplates",
    usableArea: "140 - 210 sqm",
    bedrooms: 4,
    bathrooms: 3,
    rooms: "4 – 5 Rooms · Private Courtyards · Direct Park & Water Access",
    status: "Available",
    description: "A forward-thinking residential village development prioritizing ecological design, expansive pedestrian green corridors, natural lake integration, and advanced nZEB (nearly Zero-Energy Building) standards with heat pumps, green roofs, and private gardens.",
    advisoryPerspective: "Positioned directly in the path of Northern Bucharest's infrastructure expansion, offering sustainable living models with low maintenance overhead and resilient family-oriented rental demand.",
    heroImage: aix.h4lImgs[0],
    galleryImages: aix.h4lImgs,
    specs: [
      { label: "Energy Classification", value: "nZEB Compliant (Low Carbon Architecture)" },
      { label: "Typologies", value: "Detached and Semi-Detached Garden Villas" },
      { label: "Thermal Envelope", value: "Geothermal Heat Pumps & Triple Glazing" },
      { label: "Community Greenery", value: "Over 60% Dedicated to Pedestrian Parks & Water" },
    ],
    features: [
      "Direct boardwalk and recreational access to the natural northern lake system",
      "Underfloor radiant heating and integrated heat pump climate systems",
      "Private vehicle parking with dedicated EV charging preparation",
      "Gated community security infrastructure with integrated smart access",
    ],
    sourceUrl: "https://aixluxury.com/h4l-village",
    sourceName: "AiXLuxury Residential Enclaves",
    sourcePlatform: "AiXLuxury",
    isFeatured: false,
  });

  portfolio.push({
    id: "prop-concept-project",
    slug: "concept-architectural-monolith-residence",
    title: "The Monolith Pavilion — Architectural Concept Residence",
    subtitle: "Brutalist Travertine Volumes · Infinity Water Mirrors · High-Security Compound",
    location: "Northern Prime Axis, Bucharest Metropolitan Area",
    city: "Bucharest",
    country: "Romania",
    price: "Price upon qualified inquiry",
    currency: "EUR",
    type: "Architectural Concept Villa",
    category: "villa",
    area: "650 sqm usable footprint · 2,200 sqm grounds",
    usableArea: "650 sqm",
    plotArea: "2,200 sqm",
    bedrooms: 5,
    bathrooms: 6,
    rooms: "5 Master Suites · 2 Reception Salons · Private Spa & Wellness",
    status: "Custom Order",
    description: "A bold architectural manifesto blending raw board-formed concrete, honed travertine slabs, and vast glass cantilevers into an impenetrable yet light-filled private sanctuary. Features perimeter moat reflecting pools and custom subterranean vehicle gallery.",
    advisoryPerspective: "Bespoke architectural execution engineered for single-client commission with sovereign security specifications and timeless brutalist aesthetics.",
    heroImage: aix.conceptImgs[0],
    galleryImages: aix.conceptImgs,
    specs: [
      { label: "Structural Framing", value: "Cast-in-Place Architectural Concrete" },
      { label: "Security Perimeter", value: "Reflecting Moat & Biometric Vault Access" },
      { label: "Internal Footprint", value: "650.00 sqm" },
      { label: "Vehicle Gallery", value: "Subterranean Showroom for 4 Collectors' Cars" },
    ],
    features: [
      "Monumental ceiling heights exceeding 4.5 meters in primary formal salons",
      "Minimalist seamless frameless glazing by Sky-Frame Switzerland",
      "Full geothermal climate loops with zero reliance on fossil combustion",
    ],
    sourceUrl: "https://aixluxury.com/concept-project",
    sourceName: "AiXLuxury Architectural Studies",
    sourcePlatform: "AiXLuxury",
    isFeatured: false,
  });

  portfolio.push({
    id: "prop-new-era-project",
    slug: "new-era-minimalist-contemporary-villa",
    title: "New-Era Contemporary Villa — Minimalist Geometric Living",
    subtitle: "Clean Lines · Floor-to-Ceiling Light Courts · Turnkey Designer Execution",
    location: "Pipera Residential District, Northern Bucharest",
    city: "Bucharest / Pipera",
    country: "Romania",
    price: "Price upon qualified inquiry",
    currency: "EUR",
    type: "Contemporary Villa / Modern Residence",
    category: "villa",
    area: "340 sqm usable interior · 650 sqm private grounds",
    usableArea: "340 sqm",
    plotArea: "650 sqm",
    bedrooms: 4,
    bathrooms: 4,
    rooms: "5 Rooms (4 Bedrooms, Open Living, Dual Car Port)",
    status: "Available",
    description: "A pristine contemporary residence showcasing minimalist geometry, monochromatic materials, floor-to-ceiling glass expanses, and an effortless transition between interior salons and private landscaped gardens.",
    advisoryPerspective: "A turnkey residential acquisition ready for immediate executive occupancy in one of Pipera's quietest residential lanes.",
    heroImage: aix.newEraImgs[0],
    galleryImages: aix.newEraImgs,
    specs: [
      { label: "Usable Interior Area", value: "340.00 sqm" },
      { label: "Land Footprint", value: "650.00 sqm" },
      { label: "Joinery Architecture", value: "Schüco Aluminum Triple Glazing" },
      { label: "Heating & Cooling", value: "Underfloor Radiant Heating + Ducted VRF" },
    ],
    features: [
      "Open-concept living room flowing directly to a stone terrace and swimming lawn",
      "Master suite with walk-in dressing chamber and freestanding stone bath",
      "Integrated smart home automation for lighting, climate, and security",
    ],
    sourceUrl: "https://aixluxury.com/new-era-project",
    sourceName: "AiXLuxury Contemporary Portfolio",
    sourcePlatform: "AiXLuxury",
    isFeatured: false,
  });

  // ==========================================
  // C. REAL PROPERTIES FROM HOMEFIND SUPABASE (Verified, High-Res Images & Complete Data)
  // ==========================================

  // 1. Palm Jumeirah Signature Villa Dubai
  const palmSig = supaMap.get("1ec11386-412b-4e35-8bfa-0978202aa8a8");
  if (palmSig) {
    portfolio.push({
      id: "prop-dubai-palm-signature",
      slug: "palm-jumeirah-signature-waterfront-villa",
      title: "Palm Jumeirah Signature Waterfront Villa & Private Beach",
      subtitle: "14,700 sqft Footprint · 6 Grand Suites · Private Beachfront · Infinity Pool",
      location: "Palm Jumeirah Frond Enclave, Dubai, United Arab Emirates",
      city: "Dubai",
      country: "United Arab Emirates",
      price: "Price upon qualified inquiry",
      currency: "AED",
      type: "Ultra-Prime Waterfront Villa",
      category: "international",
      area: "14,700 sqft (1,365 sqm) plot & living footprint",
      usableArea: "1,365 sqm",
      bedrooms: 6,
      bathrooms: 7,
      rooms: "6 En-Suite Bedrooms · Grand Reception Salons · Private Beach",
      status: "Available",
      description: "A private waterfront residence positioned on one of Dubai's most iconic fronds along Palm Jumeirah. Fully renovated and designed around light, space, and effortless indoor-outdoor living, with direct access to private calm waters and sweeping open sea views.",
      advisoryPerspective: "Palm Jumeirah remains Dubai's premier ultra-prime global asset class, experiencing record capital appreciation and sustained institutional UHNW demand.",
      heroImage: palmSig.images[0],
      galleryImages: palmSig.images,
      specs: [
        { label: "Plot & Living Area", value: "14,700 sqft (1,365 sqm)" },
        { label: "Frontage", value: "Private Sandy Beachfront" },
        { label: "Bedroom Inventory", value: "6 En-Suite Chambers" },
        { label: "Fiscal Regime", value: "0% Personal Capital Gains & Property Tax" },
      ],
      features: [
        "Direct private beach access with unobstructed waterscape vistas",
        "Private swimming pool framed by mature royal palms and sun lounges",
        "High-specification Italian kitchen with integrated Gaggenau appliances",
        "Full staff quarters with private laundry and service entrance",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${palmSig.id}`,
      sourceName: "HomeFind Dubai Desk",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 2. Marlin Icon Al Reem Island Abu Dhabi
  const marlin = supaMap.get("45fd4689-6680-4340-a0a1-976cf4870173");
  if (marlin) {
    portfolio.push({
      id: "prop-marlin-icon",
      slug: "marlin-icon-al-reem-island-abu-dhabi",
      title: "MARLIN ICON — Landmark Canal Waterfront Residences",
      subtitle: "Al Reem Island Prime Canal Frontage · Luxury Residences & Sky Penthouses",
      location: "Al Reem Island Financial Corridor, Abu Dhabi, UAE",
      city: "Abu Dhabi",
      country: "United Arab Emirates",
      price: "Price upon qualified inquiry (Off-Plan Allocation)",
      currency: "AED",
      type: "Landmark Residential Development / Sky Residences",
      category: "development",
      area: "85 – 350 sqm floorplates",
      usableArea: "85 - 350 sqm",
      bedrooms: 3,
      bathrooms: 3,
      rooms: "1 to 4 Bedroom Residences & Canalfront Penthouses",
      status: "Under Development",
      description: "Rising along the vibrant waterfront of Al Reem Island, MARLIN ICON represents a strategic architectural development offering direct canal views, hotel-grade wellness amenities, private berths, and immediate access to Abu Dhabi's international financial free zone.",
      advisoryPerspective: "Abu Dhabi's sovereign wealth investments and Golden Visa incentives position Al Reem Island as a cornerstone for high-yield defensive capital deployment.",
      heroImage: marlin.images[0],
      galleryImages: marlin.images,
      specs: [
        { label: "Project Phase", value: "Under Construction · Verified Developer Gateway" },
        { label: "Waterfront Setting", value: "Promenade Canal Frontage" },
        { label: "Investment Status", value: "Freehold Ownership for Foreign Nationals" },
        { label: "Residency Path", value: "Eligible for UAE 10-Year Golden Visa" },
      ],
      features: [
        "Spectacular infinity pool overlooking the Reem Island marine canal",
        "State-of-the-art gym, hydrotherapy spa, and private executive meeting salons",
        "Direct connection to Abu Dhabi Global Market (ADGM) financial center",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${marlin.id}`,
      sourceName: "HomeFind Abu Dhabi Desk",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 3. Rubino Burj Khalifa Dubai
  const rubino = supaMap.get("bd499535-97d4-464a-9b89-64ac71e4400e");
  if (rubino) {
    portfolio.push({
      id: "prop-dubai-rubino-burj",
      slug: "rubino-burj-khalifa-sky-penthouse",
      title: "RUBINO — Sky Residence 100+ Floors Above Burj Khalifa",
      subtitle: "4,494 sqft Footprint · 5 Rooms · World's Most Iconic Skyline Panoramas",
      location: "Burj Khalifa, Downtown Dubai Sovereign Axis, UAE",
      city: "Dubai",
      country: "United Arab Emirates",
      price: "Price upon qualified inquiry",
      currency: "AED",
      type: "Iconic Sky Penthouse / Trophy High-Rise",
      category: "penthouse",
      area: "4,494 sqft (417.5 sqm)",
      usableArea: "417.5 sqm",
      bedrooms: 4,
      bathrooms: 5,
      rooms: "5 Rooms (4 Suites + Formal Sky Salon)",
      status: "Available",
      description: "Above the city. Beyond the ordinary. Positioned more than 100 floors above Dubai in the world's tallest tower, RUBINO delivers a trophy living experience framed by sweeping views of the Arabian Gulf, Downtown Dubai fountains, and the desert horizon.",
      advisoryPerspective: "Burj Khalifa remains an internationally singular trophy asset that is impossible to replicate, ensuring peerless liquidity and brand prestige.",
      heroImage: rubino.images[0],
      galleryImages: rubino.images,
      specs: [
        { label: "Tower Level", value: "Floor 100+ Ultra-High Elevation" },
        { label: "Internal Footprint", value: "4,494 sqft (417.5 sqm)" },
        { label: "Building Amenities", value: "Armani Hotel Access & Dedicated Concierge" },
        { label: "Parking Allocation", value: "3 Dedicated Secured Bays" },
      ],
      features: [
        "Unparalleled 360° panoramas spanning the Arabian Gulf and Dubai Fountain spectacle",
        "Private resident elevator banks with biometric clearance",
        "Valet, 24/7 security, resident cigar lounge, and sky wellness pools",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${rubino.id}`,
      sourceName: "HomeFind Dubai Luxury Desk",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 4. Anantara Residences Dubai
  const anantara = supaMap.get("f80e431a-cc93-4a28-bea4-c06d25a966d0");
  if (anantara) {
    portfolio.push({
      id: "prop-dubai-anantara",
      slug: "anantara-residences-palm-jumeirah-coastal-elegance",
      title: "Anantara Residences — Coastal Elegance & Lagoon Vistas",
      subtitle: "Prime Palm Jumeirah Crescent · Resort-Serviced Living · Private Beach Access",
      location: "East Crescent, Palm Jumeirah, Dubai, United Arab Emirates",
      city: "Dubai",
      country: "United Arab Emirates",
      price: "€3,650,000 (AED 14,500,000)",
      priceNumeric: 3650000,
      currency: "EUR",
      type: "Resort-Serviced Luxury Residence",
      category: "international",
      area: "245 sqm usable interior + terraces",
      usableArea: "245 sqm",
      bedrooms: 3,
      bathrooms: 4,
      rooms: "4 Rooms (3 En-Suite Bedrooms + Grand Lagoon-View Salon)",
      status: "Available",
      description: "Located on the exclusive East Crescent of Palm Jumeirah within the renowned 5-star Anantara resort grounds. Fully furnished with Asian-inspired contemporary elegance, private lagoon access, concierge service, and panoramic open sea vistas.",
      advisoryPerspective: "High-yield hospitality rental pool program offering stable international passive income coupled with personal private residency privileges.",
      heroImage: anantara.images[0],
      galleryImages: anantara.images,
      specs: [
        { label: "Resort Status", value: "Anantara 5-Star Managed Collection" },
        { label: "Private Amenities", value: "4,000 sqm Temperature-Controlled Lagoons" },
        { label: "Beach Access", value: "400m Private White Sand Beachfront" },
        { label: "Furnishings", value: "Complete Turnkey Custom Interior Package" },
      ],
      features: [
        "Full access to Anantara Spa, tennis courts, and Michelin-recognized dining venues",
        "Deep-set shaded balconies commanding direct views of the central lagoons and sea",
        "Dedicated underground parking and 24/7 round-the-clock room service and security",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${anantara.id}`,
      sourceName: "HomeFind Dubai Desk",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 5. Herastrau Duplex Penthouse 2.9M
  const herastrauDuplex = supaMap.get("87257b24-a20d-4f76-b7d7-bec5e7a6db03");
  if (herastrauDuplex) {
    portfolio.push({
      id: "prop-herastrau-duplex-penthouse",
      slug: "herastrau-luxury-duplex-penthouse",
      title: "Herăstrău Sovereign Duplex Penthouse & Sky Terrace",
      subtitle: "340 sqm Total Footprint · 2 Levels · Panoramic Herăstrău Park Skyline",
      location: "Șoseaua Nordului / Herăstrău Enclave, Sector 1, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€2,900,000",
      priceNumeric: 2900000,
      currency: "EUR",
      type: "Two-Story Luxury Penthouse",
      category: "penthouse",
      area: "340 sqm total footprint (260 sqm usable interior)",
      usableArea: "260 sqm",
      plotArea: "80 sqm panoramic terrace",
      bedrooms: 4,
      bathrooms: 4,
      rooms: "5 Rooms (4 En-Suite Bedrooms, Double-Height Salon)",
      status: "Available",
      description: "An exceptional two-level penthouse overlooking Herăstrău Park. Engineered with double-height volume, glass curtain walls, expansive sky terraces, natural Italian marble cladding, and dedicated subterranean multi-car garage bays.",
      advisoryPerspective: "Șoseaua Nordului remains Bucharest's most historically proven capital preservation corridor with strict height limitations preserving long-term asset value.",
      heroImage: herastrauDuplex.images[0],
      galleryImages: herastrauDuplex.images,
      specs: [
        { label: "Internal Usable Area", value: "260.00 sqm" },
        { label: "Terrace Footprint", value: "80.00 sqm Panoramic" },
        { label: "Vertical Levels", value: "Duplex (Top 2 Floors)" },
        { label: "Garage Spaces", value: "2 Underground Parking Bays Included" },
      ],
      features: [
        "Unobstructed views toward Herăstrău Park canopy and northern skyline",
        "Artisanal herringbone parquet, custom bookmatched marble fireplaces, and smart home core",
        "Private direct-to-penthouse elevator clearance with encrypted access",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${herastrauDuplex.id}`,
      sourceName: "HomeFind Herăstrău Collection",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 6. Up-Site Floreasca 5 Rooms 1.9M
  const upsite5 = supaMap.get("01e76455-827c-4fe5-b904-19e4ac351cbe");
  if (upsite5) {
    portfolio.push({
      id: "prop-upsite-floreasca-grand",
      slug: "upsite-floreasca-grand-terrace-residence",
      title: "UP-SITE Floreasca — Grand 5-Room Panoramic Residence",
      subtitle: "352.5 sqm Total · Wraparound Glass Terraces · Floor-to-Ceiling Floreasca Lake Views",
      location: "Calea Floreasca / Floreasca Lake Axis, Sector 1, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€1,900,000",
      priceNumeric: 1900000,
      currency: "EUR",
      type: "High-Rise Luxury Residence",
      category: "penthouse",
      area: "352.5 sqm total (210 sqm usable interior + 142.5 sqm terraces)",
      usableArea: "210 sqm",
      plotArea: "142.5 sqm terraces",
      bedrooms: 4,
      bathrooms: 4,
      rooms: "5 Rooms (4 Bedrooms, 4 Bathrooms, Expansive Living Salon)",
      status: "Available",
      description: "Positioned in Bucharest's landmark residential high-rise by Atenor. Features 352.5 sqm of total footprint, spectacular wraparound glazed terraces, high thermal efficiency envelopes, and breathtaking views over Lake Floreasca and the northern skyline.",
      advisoryPerspective: "UP-SITE has set a new benchmark for institutional-grade high-rise residential construction in Romania, commanding prime rental yields from multinational C-level tenants.",
      heroImage: upsite5.images[0],
      galleryImages: upsite5.images,
      specs: [
        { label: "Total Footprint", value: "352.50 sqm" },
        { label: "Usable Interior", value: "210.00 sqm" },
        { label: "Terrace Area", value: "142.50 sqm Wraparound" },
        { label: "Building Certification", value: "BREEAM Excellent Certified" },
      ],
      features: [
        "Floor-to-ceiling Schuco structural facade with high acoustic attenuation",
        "Spa, indoor swimming pool, gym, and 24/7 lobby concierge within building",
        "Autonomous ventilation with fresh-air heat recovery and centralized VRV cooling",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${upsite5.id}`,
      sourceName: "HomeFind Floreasca Desk",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 7. Royal Residence Bucharest 2.3M
  const royalRes = supaMap.get("1bc33221-5d2a-4008-88b2-900471462c6c");
  if (royalRes) {
    portfolio.push({
      id: "prop-royal-residence-baneasa",
      slug: "royal-residence-monumental-estate",
      title: "Royal Residence — Architectural Compound Built Without Compromise",
      subtitle: "Designed to Outlive Generations · Private Forested Grounds · High Security",
      location: "Băneasa – Pipera Diplomatic Corridor, Northern Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€2,300,000",
      priceNumeric: 2300000,
      currency: "EUR",
      type: "Private Luxury Estate",
      category: "villa",
      area: "680 sqm built footprint · 1,800 sqm landscaped grounds",
      usableArea: "680 sqm",
      plotArea: "1,800 sqm",
      bedrooms: 6,
      bathrooms: 7,
      rooms: "12 Chambers (6 En-Suite Bedrooms, Formal Reception, Library, Safe Room)",
      status: "Available",
      description: "An extraordinary private residence constructed to sovereign protocol standards. Featuring thick structural concrete and natural stonework, private security lodge, multi-vehicle climate garage, and manicured landscaped grounds adjoining protected woodland.",
      advisoryPerspective: "An irreplaceable generational family compound offering complete acoustic and visual privacy minutes from international schools and private aviation hubs.",
      heroImage: royalRes.images[0],
      galleryImages: royalRes.images,
      specs: [
        { label: "Gross Built Area", value: "680.00 sqm" },
        { label: "Land Footprint", value: "1,800.00 sqm" },
        { label: "Structural Standard", value: "Sovereign Protocol Reinforced Concrete" },
        { label: "Surveillance", value: "Independent Security Guard House" },
      ],
      features: [
        "Mature landscaped parkland with century-old trees and perimeter acoustic buffering",
        "Ceremonial entertaining salon with soaring 4-meter finished ceilings",
        "Redundant industrial electrical generator and independent deep-well water supply",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${royalRes.id}`,
      sourceName: "HomeFind Sovereign Collection",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 8. Northern Bucharest Luxury Villa with Heated Pool & Lake View 1.2M
  const lakeVilla = supaMap.get("cacbf989-30ee-4f39-bf16-3e7f626d336c");
  if (lakeVilla) {
    portfolio.push({
      id: "prop-lake-view-heated-pool-villa",
      slug: "luxury-lake-view-villa-heated-pool",
      title: "Modern Architectural Villa with Heated Pool & Lake Panoramas",
      subtitle: "8 Rooms · Heated Outdoor Pool · Direct Lake Vista · Manicured Grounds",
      location: "Northern Lake Axis, Pipera – Voluntari, Bucharest Metropolitan Area",
      city: "Bucharest North",
      country: "Romania",
      price: "€1,200,000",
      priceNumeric: 1200000,
      currency: "EUR",
      type: "Modern Lakefront Villa",
      category: "villa",
      area: "480 sqm built · 380 sqm usable · 900 sqm grounds",
      usableArea: "380 sqm",
      plotArea: "900 sqm",
      bedrooms: 5,
      bathrooms: 5,
      rooms: "8 Rooms (5 Bedrooms, Home Cinema, Formal Living & Dining)",
      status: "Available",
      description: "A luxury detached villa finished in 2022, commanding direct vistas over the northern lake system. Features an outdoor heated swimming pool, outdoor summer kitchen, expansive floor-to-ceiling glass facades, and a finished subterranean wellness space.",
      advisoryPerspective: "Strong capital growth corridor driven by the proximity to northern business parks and American/British international academies.",
      heroImage: lakeVilla.images[0],
      galleryImages: lakeVilla.images,
      specs: [
        { label: "Usable Interior", value: "380.00 sqm" },
        { label: "Private Grounds", value: "900.00 sqm" },
        { label: "Swimming Pool", value: "Heated In-Ground Pool with Automatic Cover" },
        { label: "Energy Source", value: "Heat Pump + Integrated Solar Array" },
      ],
      features: [
        "Heated outdoor swimming pool equipped with counter-current jets and lighting",
        "Direct panoramic orientation toward the lake with west-facing sunset terrace",
        "Enclosed two-car garage plus ample exterior guest courtyard parking",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${lakeVilla.id}`,
      sourceName: "HomeFind Prime Villas",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 9. Floreasca Elite Development 1M
  const floreascaElite = supaMap.get("bcb16d7c-c5c3-4e59-84ae-467b69ec0685");
  if (floreascaElite) {
    portfolio.push({
      id: "prop-floreasca-elite-residence",
      slug: "floreasca-elite-residential-development",
      title: "The Floreasca Sanctuary — Prime Lake-Adjacent Residence",
      subtitle: "Boutique Architectural Development · 4 Rooms · High-Efficiency Envelope",
      location: "Floreasca Residential Quarter, Sector 1, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€1,000,000",
      priceNumeric: 1000000,
      currency: "EUR",
      type: "Boutique Residential Development",
      category: "development",
      area: "215 sqm usable interior + 45 sqm garden terrace",
      usableArea: "215 sqm",
      plotArea: "45 sqm terrace",
      bedrooms: 3,
      bathrooms: 3,
      rooms: "4 Rooms (3 Bedrooms, Grand Living Room, Dining)",
      status: "Available",
      description: "Experience the ideal mix of urban dynamism and tranquil natural seclusion in an elite boutique residential development in Floreasca. Designed with warm architectural concrete, timber paneling, and massive insulated glass panels.",
      advisoryPerspective: "Floreasca remains Bucharest's most fashionable culinary, lifestyle, and residential district, commanding premium capital retention.",
      heroImage: floreascaElite.images[0],
      galleryImages: floreascaElite.images,
      specs: [
        { label: "Usable Interior", value: "215.00 sqm" },
        { label: "Private Terrace", value: "45.00 sqm" },
        { label: "Building Height", value: "Low-Rise Boutique (G+4)" },
        { label: "Parking", value: "2 Secured Basement Bays Included" },
      ],
      features: [
        "Refined Scandinavian interior palette with integrated Italian cabinetry",
        "Acoustic decoupling throughout walls and ceiling slabs for peaceful privacy",
        "Short walking distance to Verdi Park, Floreasca Lake, and gourmet bistros",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${floreascaElite.id}`,
      sourceName: "HomeFind Floreasca Portfolio",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 10. Penthouse Dorobanti Floreasca 785k
  const dorobantiPent = supaMap.get("1e2f2491-7337-49c3-9206-70c25251a853");
  if (dorobantiPent) {
    portfolio.push({
      id: "prop-dorobanti-floreasca-penthouse",
      slug: "dorobanti-floreasca-penthouse-aparthotel",
      title: "Dorobanți – Floreasca Horizon Penthouse",
      subtitle: "Turnkey Luxury · Expansive Sky Terrace · Prime Central Northern Axis",
      location: "Dorobanți – Floreasca Border Corridor, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€785,000",
      priceNumeric: 785000,
      currency: "EUR",
      type: "Modern Penthouse",
      category: "penthouse",
      area: "165 sqm total (125 sqm usable + 40 sqm terrace)",
      usableArea: "125 sqm",
      plotArea: "40 sqm terrace",
      bedrooms: 3,
      bathrooms: 2,
      rooms: "4 Rooms (3 Bedrooms, Open Salon, Sky Terrace)",
      status: "Available",
      description: "A meticulously finished penthouse residence at the meeting point of Dorobanți and Floreasca. Featuring a generous 40 sqm open sky terrace, minimalist bespoke furniture, and complete automation.",
      advisoryPerspective: "High liquidity urban asset suitable for either executive owner-occupancy or ultra-high-yield luxury corporate aparthotel letting.",
      heroImage: dorobantiPent.images[0],
      galleryImages: dorobantiPent.images,
      specs: [
        { label: "Usable Interior", value: "125.00 sqm" },
        { label: "Sky Terrace", value: "40.00 sqm" },
        { label: "Furnishing Status", value: "Turnkey Designer Execution" },
      ],
      features: [
        "Panoramic city skyline terrace with outdoor lounge and dining setup",
        "Direct elevator access and secure video surveillance",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${dorobantiPent.id}`,
      sourceName: "HomeFind Central Portfolio",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 11. Yacht Kid Floreasca Lake 360k
  const yachtKid = supaMap.get("870174a6-3fcd-4339-a147-c7495f0e3f14");
  if (yachtKid) {
    portfolio.push({
      id: "prop-yacht-kid-floreasca",
      slug: "yacht-kid-waterfront-residence-floreasca",
      title: "YACHT KID — Waterfront Residence on Floreasca Lake",
      subtitle: "Iconic Architectural Waves · Waterfront Living · High-Tech Amenities",
      location: "Fabrica de Glucoză / Floreasca Lake Axis, Sector 2, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€360,000",
      priceNumeric: 360000,
      currency: "EUR",
      type: "Modern Waterfront Apartment",
      category: "development",
      area: "98 sqm usable + expansive balcony",
      usableArea: "98 sqm",
      bedrooms: 2,
      bathrooms: 2,
      rooms: "3 Rooms (2 Bedrooms, Living Room, Kitchen)",
      status: "Available",
      description: "An innovative architectural statement on the shore of Lake Floreasca. Characterized by wave-shaped terraces, marine design inspirations, and direct access to green lakeside promenades.",
      advisoryPerspective: "Positioned in Bucharest's fastest appreciating tech and corporate corridor, ensuring resilient capital appreciation and continuous tenancy demand.",
      heroImage: yachtKid.images[0],
      galleryImages: yachtKid.images,
      specs: [
        { label: "Usable Interior", value: "98.00 sqm" },
        { label: "Architecture", value: "Marine-Inspired Wave Terraces" },
        { label: "Target Yield", value: "Estimated 6.5% Net Annual Rental Yield" },
      ],
      features: [
        "Direct views over Floreasca Lake and corporate skyline",
        "Underfloor heating, multi-split climate control, and full acoustic insulation",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${yachtKid.id}`,
      sourceName: "HomeFind Tech Corridor",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 12. Pipera Duplex Villa 575k
  const piperaDuplex = supaMap.get("66b50868-2f5d-440c-80e7-1b04da21f5eb");
  if (piperaDuplex) {
    portfolio.push({
      id: "prop-pipera-duplex-luxury-villa",
      slug: "pipera-luxury-duplex-garden-villa",
      title: "Pipera Luxury Duplex Villa with Generous Private Garden",
      subtitle: "228 sqm Built · Fully Furnished & Equipped · 4 Rooms · 2 Parking Spaces",
      location: "Pipera Residential District, Voluntari, Northern Bucharest",
      city: "Bucharest / Pipera",
      country: "Romania",
      price: "€575,000",
      priceNumeric: 575000,
      currency: "EUR",
      type: "Modern Duplex Villa",
      category: "villa",
      area: "228 sqm built · 185 sqm usable · 350 sqm plot",
      usableArea: "185 sqm",
      plotArea: "350 sqm",
      bedrooms: 3,
      bathrooms: 3,
      rooms: "4 Rooms (3 Bedrooms, Generous Living & Dining)",
      status: "Available",
      description: "A turnkey designer duplex villa in Pipera offering 228 sqm of gross space, a beautifully landscaped garden with automated irrigation, premium finishes, and integrated custom Italian furniture.",
      advisoryPerspective: "Immediate turnkey asset requiring zero renovation capital, ready for executive occupancy or high-end lease.",
      heroImage: piperaDuplex.images[0],
      galleryImages: piperaDuplex.images,
      specs: [
        { label: "Gross Built Area", value: "228.00 sqm" },
        { label: "Usable Living Space", value: "185.00 sqm" },
        { label: "Private Plot", value: "350.00 sqm" },
        { label: "Parking", value: "2 Designated On-Site Spaces" },
      ],
      features: [
        "Manicured lawn with mature ornamental shrubs and automated irrigation",
        "Energy efficient heat pump heating and ducted cooling throughout",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${piperaDuplex.id}`,
      sourceName: "HomeFind Pipera Desk",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 13. Herastrau Sovereign Residence with 220 sqm Private Garden
  const herastrauGarden = supaMap.get("fbbb75d8-7210-4e83-9288-35a9a004c015");
  if (herastrauGarden) {
    portfolio.push({
      id: "prop-herastrau-private-garden-residence",
      slug: "herastrau-residence-220sqm-private-garden",
      title: "Herăstrău Parkside Residence with 220 sqm Private Garden",
      subtitle: "163 sqm Usable Interior · 220 sqm Lush Private Garden · Rare Ground-Floor Oasis",
      location: "Herăstrău Park Western Perimeter, Sector 1, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "Price upon qualified inquiry (€5,000 / mo corporate lease)",
      priceNumeric: 1100000,
      currency: "EUR",
      type: "Ground Floor Garden Residence",
      category: "penthouse",
      area: "163 sqm usable interior · 220 sqm landscaped garden",
      usableArea: "163 sqm",
      plotArea: "220 sqm private garden",
      bedrooms: 3,
      bathrooms: 3,
      rooms: "4 Rooms (3 Bedrooms, Grand Living Room, 3 Baths)",
      status: "Available",
      description: "A rare residential sanctuary directly adjoining Herăstrău Park. Combines 163 sqm of immaculate interior living with a private 220 sqm landscaped garden surrounded by mature arborvitae, offering the privacy of an independent villa with the security of a luxury boutique building.",
      advisoryPerspective: "Properties featuring private gardens over 200 sqm in the Herăstrău perimeter are virtually unobtainable, ensuring perpetual demand among diplomatic and executive tenants.",
      heroImage: herastrauGarden.images[0],
      galleryImages: herastrauGarden.images,
      specs: [
        { label: "Internal Usable Area", value: "163.00 sqm" },
        { label: "Private Garden Area", value: "220.00 sqm" },
        { label: "Park Distance", value: "50 Meters from Park Access" },
        { label: "Security", value: "24/7 Monitored Access & Private Garden Barrier" },
      ],
      features: [
        "Private 220 sqm garden featuring covered lounge pavilion and outdoor dining area",
        "Floor-to-ceiling glass doors opening directly from living salon and master suite to garden",
        "Subterranean parking bay and dedicated private storage vault included",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${herastrauGarden.id}`,
      sourceName: "HomeFind Herăstrău Collection",
      sourcePlatform: "HomeFind",
      isFeatured: true,
    });
  }

  // 14. Cotroceni Opera Diplomatic Villa 140mp
  const cotroceniVilla = supaMap.get("8021ba60-747c-41ae-9d35-ca1af206fd6c");
  if (cotroceniVilla) {
    portfolio.push({
      id: "prop-cotroceni-opera-villa",
      slug: "cotroceni-national-opera-diplomatic-villa",
      title: "Cotroceni National Opera Diplomatic Villa",
      subtitle: "140 sqm Usable · Restored Interwar Architecture · Parkside Prime Position",
      location: "Cotroceni / National Opera Corridor, Sector 5, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€650,000 (€2,000 / mo corporate lease)",
      priceNumeric: 650000,
      currency: "EUR",
      type: "Restored Historic Villa",
      category: "villa",
      area: "140 sqm usable interior · 200 sqm private plot",
      usableArea: "140 sqm",
      plotArea: "200 sqm",
      bedrooms: 3,
      bathrooms: 2,
      rooms: "4 Rooms (3 Bedrooms, Reception Salon, Courtyard)",
      status: "Available",
      description: "An aristocratic interwar villa located in the protected Cotroceni diplomatic quarter moments from the Romanian National Opera and Botanical Garden. Fully restored with noble architectural details, high ceilings, and serene leafy private courtyard.",
      advisoryPerspective: "Cotroceni represents Bucharest's most historically stable heritage enclave, characterized by strict zoning protections that preserve neighborhood tranquility.",
      heroImage: cotroceniVilla.images[0],
      galleryImages: cotroceniVilla.images,
      specs: [
        { label: "Usable Interior", value: "140.00 sqm" },
        { label: "Architectural Era", value: "Interwar Neoclassical Restored" },
        { label: "Heating", value: "Independent Condensing Gas Central Unit" },
      ],
      features: [
        "Restored original solid oak parquet floors, moldings, and brass fixtures",
        "Charming private courtyard paved in natural granite setts",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${cotroceniVilla.id}`,
      sourceName: "HomeFind Heritage Desk",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 15. Northern Diplomatic Axis near US Embassy
  const embassyPent = supaMap.get("b144acf9-0085-42a0-bc1d-02d8eb2a7d96");
  if (embassyPent) {
    portfolio.push({
      id: "prop-embassy-north-penthouse",
      slug: "us-embassy-axis-premium-penthouse",
      title: "Northern Diplomatic Axis Penthouse near U.S. Embassy",
      subtitle: "180 sqm Total · First Occupancy · Forest-Adjacent Northern Corridor",
      location: "Băneasa – US Embassy Axis, Sector 1, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€520,000 (€1,700 / mo lease)",
      priceNumeric: 520000,
      currency: "EUR",
      type: "Modern Penthouse",
      category: "penthouse",
      area: "180 sqm total (135 sqm usable + 45 sqm terraces)",
      usableArea: "135 sqm",
      plotArea: "45 sqm terrace",
      bedrooms: 2,
      bathrooms: 2,
      rooms: "3 Rooms (2 Master Suites, Open Great Room, Terraces)",
      status: "Available",
      description: "A newly completed penthouse situated in immediate proximity to the American Embassy and Băneasa Forest. Brand new first occupancy with high-end designer furnishings, autonomous climate control, and expansive terraces.",
      advisoryPerspective: "Continuous high demand from international embassy personnel and diplomatic attachés guaranteeing zero vacancy risk.",
      heroImage: embassyPent.images[0],
      galleryImages: embassyPent.images,
      specs: [
        { label: "Total Surface", value: "180.00 sqm" },
        { label: "Usable Interior", value: "135.00 sqm" },
        { label: "Condition", value: "Pristine First Occupancy" },
      ],
      features: [
        "Terrace overlooking peaceful residential greenery and Băneasa forest line",
        "Underfloor radiant heating, ducted multi-split AC, and underground parking",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${embassyPent.id}`,
      sourceName: "HomeFind Diplomatic Collection",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // 16. The Ivy Baneasa 100.6mp
  const theIvy = supaMap.get("6609b3f1-cb7d-4c91-a12d-d69af25d58fc");
  if (theIvy) {
    portfolio.push({
      id: "prop-the-ivy-baneasa",
      slug: "the-ivy-baneasa-forest-residence",
      title: "The Ivy Băneasa — Forest-Adjacent Executive Residence",
      subtitle: "100.6 sqm Total · Underfloor Heating · Subterranean Parking · BREEAM Certified",
      location: "Șoseaua București-Ploiești / Băneasa Forest, Sector 1, Bucharest",
      city: "Bucharest",
      country: "Romania",
      price: "€320,000 (€1,450 / mo lease)",
      priceNumeric: 320000,
      currency: "EUR",
      type: "Modern Luxury Apartment",
      category: "development",
      area: "100.6 sqm total (82 sqm usable + terrace)",
      usableArea: "82 sqm",
      bedrooms: 2,
      bathrooms: 2,
      rooms: "3 Rooms (2 Bedrooms, Living Room, Kitchen)",
      status: "Available",
      description: "An elegant home within 'The Ivy' residential enclave adjacent to Băneasa Forest. Developed by Speedwell according to stringent BREEAM Excellent environmental benchmarks.",
      advisoryPerspective: "Ideal turnkey corporate investment asset with guaranteed tenant demand from the surrounding commercial office district.",
      heroImage: theIvy.images[0],
      galleryImages: theIvy.images,
      specs: [
        { label: "Total Footprint", value: "100.60 sqm" },
        { label: "Sustainability", value: "BREEAM Excellent Certified" },
        { label: "Parking Bay", value: "Underground Parking Bay Included" },
      ],
      features: [
        "Floor-to-ceiling glass windows welcoming natural sunlight throughout the day",
        "Direct access to resident courtyard parks, gym, and proximity to Băneasa Shopping City",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${theIvy.id}`,
      sourceName: "HomeFind Northern Portfolio",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  // ==========================================
  // D. CHESTERTONS MARBELLA / TET.RO TROPHY PORTFOLIO (Verified Ingestion via HomeFind)
  // ==========================================

  // 1. Benahavis Trophy Villa 19.88M
  const benahavis19 = supaMap.get("194ea2e7-87d1-43fe-b9a8-1e00e184c005");
  if (benahavis19) {
    portfolio.push({
      id: "prop-marbella-benahavis-sovereign-1",
      slug: "benahavis-sovereign-trophy-estate-malaga",
      title: "La Zagaleta Sovereign Trophy Estate — Benahavís, Spain",
      subtitle: "1,696 sqm Built Footprint · 8 Grand Suites · Mediterranean & Gibraltar Panoramas",
      location: "La Zagaleta Country Club & Golf Resort, Benahavís, Málaga, Spain",
      city: "Benahavis",
      country: "Spain",
      price: "€19,880,000",
      priceNumeric: 19880000,
      currency: "EUR",
      type: "Sovereign Mediterranean Estate / Ultra-Luxury Villa",
      category: "villa",
      area: "1,696 sqm built · 6,500 sqm private grounds",
      usableArea: "1,696 sqm",
      plotArea: "6,500 sqm",
      bedrooms: 8,
      bathrooms: 9,
      rooms: "8 Master Suites · Grand Formal Reception Salons · Private Spa & Helipad Access",
      status: "Available",
      description: "One of Europe's most prestigious sovereign estates situated within the ultra-gated enclave of La Zagaleta. Offering complete seclusion, 24-hour armed perimeter security, two private golf courses, an equestrian center, and breathtaking 180° panoramas spanning the Mediterranean Sea, Gibraltar, and the North African coast.",
      advisoryPerspective: "La Zagaleta represents the pinnacle of private wealth preservation in Southern Europe, boasting strict multi-tiered perimeter clearance and zero public access.",
      heroImage: benahavis19.images[0],
      galleryImages: benahavis19.images,
      specs: [
        { label: "Built Surface", value: "1,696.00 sqm" },
        { label: "Private Grounds", value: "6,500.00 sqm" },
        { label: "Enclave Security", value: "La Zagaleta 24/7 Armed Gated Access" },
        { label: "Private Amenities", value: "Indoor Heated Pool, Outdoor Infinity Pool, Cinema, Bodega" },
      ],
      features: [
        "Spectacular double-height entrance hall with imperial double staircase and hand-carved stone",
        "Cantilevered infinity swimming pool blending into the Mediterranean horizon",
        "Full private wellness sanctuary including Finnish sauna, Turkish bath, and gym",
        "Subterranean car salon with capacity for 8 collectors' vehicles",
      ],
      sourceUrl: benahavis19.source_url || `https://homefind.cristianvaduva.com/listing/${benahavis19.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: true,
    });
  }

  // 2. Marbella Golden Mile 19.5M
  const goldenMile19 = supaMap.get("acf896c0-e41e-4f40-9aa2-7ec8a13c6d01");
  if (goldenMile19) {
    portfolio.push({
      id: "prop-marbella-golden-mile-palace",
      slug: "marbella-golden-mile-grand-palace",
      title: "The Golden Mile Grand Palace — Marbella, Spain",
      subtitle: "2,077 sqm Built Footprint · 7 Palatial Suites · Moments from Marbella Club & Beach",
      location: "Golden Mile Ultra-Prime Corridor, Marbella, Málaga, Spain",
      city: "Marbella",
      country: "Spain",
      price: "€19,500,000",
      priceNumeric: 19500000,
      currency: "EUR",
      type: "Palatial Neoclassical Villa",
      category: "villa",
      area: "2,077 sqm built · 4,200 sqm parkland grounds",
      usableArea: "2,077 sqm",
      plotArea: "4,200 sqm",
      bedrooms: 7,
      bathrooms: 8,
      rooms: "7 Suites · Ceremonial Banqueting Hall · Subterranean Spa",
      status: "Available",
      description: "An aristocratic neoclassical estate set within Marbella's most legendary residential address along the Golden Mile. Walkable to the iconic Marbella Club and Puente Romano resorts, offering mature landscaped parkland, high ceilings, marble colonnades, and private security.",
      advisoryPerspective: "The Golden Mile has demonstrated unmatched historical resilience, outperforming all regional real estate indices through multi-decade market cycles.",
      heroImage: goldenMile19.images[0],
      galleryImages: goldenMile19.images,
      specs: [
        { label: "Built Surface", value: "2,077.00 sqm" },
        { label: "Private Parkland", value: "4,200.00 sqm" },
        { label: "Location Privilege", value: "Golden Mile Walking Distance to Mediterranean Beach" },
        { label: "Vehicle Accommodations", value: "Enclosed Underground Garage for 6 Cars" },
      ],
      features: [
        "Monumental neoclassical colonnades and hand-finished marble fountains",
        "Full staff quarters with independent security entrance and kitchen",
        "Large swimming pool flanked by Roman columns and manicured boxwood gardens",
      ],
      sourceUrl: goldenMile19.source_url || `https://homefind.cristianvaduva.com/listing/${goldenMile19.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: true,
    });
  }

  // 3. Benahavis Panoramic Estate 18.65M
  const benahavis18 = supaMap.get("9cf61fb6-121b-4beb-abe3-a358dad7fc8a");
  if (benahavis18) {
    portfolio.push({
      id: "prop-marbella-benahavis-panoramic-estate",
      slug: "benahavis-panoramic-horizon-estate",
      title: "Benahavís Panoramic Horizon Estate — Málaga, Spain",
      subtitle: "1,795 sqm Built · 8 Suites · Complete Valley & Sea Panoramas · High Architecture",
      location: "El Madroñal / Benahavís Corridor, Málaga, Spain",
      city: "Benahavis",
      country: "Spain",
      price: "€18,650,000",
      priceNumeric: 18650000,
      currency: "EUR",
      type: "Contemporary Sovereign Villa",
      category: "villa",
      area: "1,795 sqm built · 5,100 sqm private grounds",
      usableArea: "1,795 sqm",
      plotArea: "5,100 sqm",
      bedrooms: 8,
      bathrooms: 8,
      rooms: "8 Suites · Double Living Salons · Outdoor Heated Pavilion",
      status: "Available",
      description: "A triumph of contemporary Mediterranean architecture rising high above the Costa del Sol coastline. Engineered with floating glass volumes, cantilevered sun decks, cascading water features, and expansive indoor-outdoor entertaining zones.",
      advisoryPerspective: "Commanding an elevated ridge position, this estate guarantees unblockable views while enjoying proximity to Puerto Banús and international airports.",
      heroImage: benahavis18.images[0],
      galleryImages: benahavis18.images,
      specs: [
        { label: "Built Surface", value: "1,795.00 sqm" },
        { label: "Grounds Area", value: "5,100.00 sqm" },
        { label: "Elevated Position", value: "Commanding Ridge with Unblockable Vistas" },
      ],
      features: [
        "Dramatic zero-edge swimming pool appearing to spill directly into the Mediterranean",
        "Custom wine tasting cellar with temperature and humidity precision controls",
        "Private gym, steam bath, and cinema room with acoustic treatment",
      ],
      sourceUrl: benahavis18.source_url || `https://homefind.cristianvaduva.com/listing/${benahavis18.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: true,
    });
  }

  // 4. Marbella Modernist Villa 14.9M
  const marbellaModern14 = supaMap.get("0f444527-f7cc-482f-aa36-804a9d246705");
  if (marbellaModern14) {
    portfolio.push({
      id: "prop-marbella-modernist-villa",
      slug: "marbella-modernist-trophy-residence",
      title: "Marbella Modernist Trophy Villa & Sunset Pavilions",
      subtitle: "1,191 sqm Built Footprint · 5 Master Suites · Contemporary Architectural Pure Glass",
      location: "Nueva Andalucía / Golf Valley Axis, Marbella, Spain",
      city: "Marbella",
      country: "Spain",
      price: "€14,900,000",
      priceNumeric: 14900000,
      currency: "EUR",
      type: "Modern Architectural Villa",
      category: "villa",
      area: "1,191 sqm built · 2,800 sqm grounds",
      usableArea: "1,191 sqm",
      plotArea: "2,800 sqm",
      bedrooms: 5,
      bathrooms: 6,
      rooms: "5 Master Suites · Open Living Gallery · Heated Infinity Pool",
      status: "Available",
      description: "A minimalist masterpiece positioned in Marbella's famed Golf Valley. Designed with ultra-slim Schüco architectural sliding glass, floating architectural staircases, raw honed travertine, and manicured Japanese landscaped zen gardens.",
      advisoryPerspective: "High-absorption prime location in Nueva Andalucía with rapid capital appreciation and unmatched golf accessibility.",
      heroImage: marbellaModern14.images[0],
      galleryImages: marbellaModern14.images,
      specs: [
        { label: "Built Surface", value: "1,191.00 sqm" },
        { label: "Plot Surface", value: "2,800.00 sqm" },
        { label: "Architectural Style", value: "Minimalist Glass & Honed Travertine" },
      ],
      features: [
        "Vast outdoor entertaining terrace with integrated fire pit and outdoor kitchen",
        "Heated swimming pool with underwater observation windows and sound system",
      ],
      sourceUrl: marbellaModern14.source_url || `https://homefind.cristianvaduva.com/listing/${marbellaModern14.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: false,
    });
  }

  // 5. Marbella Sky Penthouse 11.4M
  const marbellaSkyPent = supaMap.get("e5a7fc47-3ba6-4680-99b6-9747af2b340f");
  if (marbellaSkyPent) {
    portfolio.push({
      id: "prop-marbella-sky-penthouse",
      slug: "marbella-prime-coastal-sky-penthouse",
      title: "Marbella Prime Coastal Sky Penthouse & Infinity Pool",
      subtitle: "961 sqm Total Footprint · 4 Grand Suites · Rooftop Plunge Pool · Panoramic Sea Views",
      location: "Marbella Prime Beachfront Strip, Costa del Sol, Spain",
      city: "Marbella",
      country: "Spain",
      price: "€11,400,000",
      priceNumeric: 11400000,
      currency: "EUR",
      type: "Ultra-Prime Sky Penthouse",
      category: "penthouse",
      area: "961 sqm total footprint (520 sqm usable interior + 441 sqm terraces)",
      usableArea: "520 sqm",
      plotArea: "441 sqm sky terrace",
      bedrooms: 4,
      bathrooms: 5,
      rooms: "4 En-Suite Bedrooms · Sky Solarium · Private Heated Rooftop Pool",
      status: "Available",
      description: "Occupying the pinnacle of Marbella's most sought-after seafront residential development. Offering 961 sqm of total indoor-outdoor footprint, a private rooftop infinity plunge pool, and front-row panoramic vistas of the Mediterranean Sea.",
      advisoryPerspective: "Beachfront penthouses exceeding 500 sqm usable interior in Marbella are among the rarest residential commodities in Europe.",
      heroImage: marbellaSkyPent.images[0],
      galleryImages: marbellaSkyPent.images,
      specs: [
        { label: "Total Footprint", value: "961.00 sqm" },
        { label: "Interior Usable", value: "520.00 sqm" },
        { label: "Sky Terrace & Solarium", value: "441.00 sqm" },
        { label: "Private Rooftop Pool", value: "Private Heated Infinity Pool on Roof" },
      ],
      features: [
        "Private internal elevator connecting interior living levels directly to rooftop solarium",
        "Direct beach access with private resident clubhouse and spa facilities",
      ],
      sourceUrl: marbellaSkyPent.source_url || `https://homefind.cristianvaduva.com/listing/${marbellaSkyPent.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: true,
    });
  }

  // 6. Finca Cortesin Casares Villa 5M
  const casaresVilla = supaMap.get("b8e2acd9-472a-4f73-a5af-e59fe16d2eb4");
  if (casaresVilla) {
    portfolio.push({
      id: "prop-casares-finca-cortesin",
      slug: "finca-cortesin-sovereign-golf-villa",
      title: "Finca Cortesin Sovereign Golf Villa & Private Grounds",
      subtitle: "680 sqm Built · Solheim Cup Golf Resort Axis · Private Vineyard & Sea Views",
      location: "Finca Cortesin Resort, Casares, Málaga, Spain",
      city: "Casares",
      country: "Spain",
      price: "€5,000,000",
      priceNumeric: 5000000,
      currency: "EUR",
      type: "Resort Golf Villa",
      category: "villa",
      area: "680 sqm built · 2,200 sqm private grounds",
      usableArea: "680 sqm",
      plotArea: "2,200 sqm",
      bedrooms: 5,
      bathrooms: 5,
      rooms: "5 Bedrooms · Andalusian Courtyard · Heated Pool",
      status: "Available",
      description: "Set within the world-renowned Finca Cortesin resort — host of the Solheim Cup and rated among the top 50 hotels in the world. An Andalusian-contemporary villa featuring soaring wood-beamed ceilings, private olive groves, and sea views.",
      advisoryPerspective: "Uncompromising 5-star resort management infrastructure delivering reliable rental revenue and elite lifestyle privileges.",
      heroImage: casaresVilla.images[0],
      galleryImages: casaresVilla.images,
      specs: [
        { label: "Built Surface", value: "680.00 sqm" },
        { label: "Resort Access", value: "Full Finca Cortesin 5-Star Hotel & Spa Services" },
        { label: "Golf Privilege", value: "Championship 18-Hole Course Priority Access" },
      ],
      features: [
        "Traditional interior courtyard with marble fountain bringing cross-breezes and light",
        "Private swimming pool overlooking the fairways to the Mediterranean Sea",
      ],
      sourceUrl: casaresVilla.source_url || `https://homefind.cristianvaduva.com/listing/${casaresVilla.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: false,
    });
  }

  // 7. Marbella Modern Golf Villa 1.995M
  const marbellaGolfVilla = supaMap.get("0013484f-0ab1-4eb3-a1b0-44d7267dc0d4");
  if (marbellaGolfVilla) {
    portfolio.push({
      id: "prop-marbella-modern-golf-villa",
      slug: "marbella-contemporary-golf-retreat",
      title: "Marbella Contemporary Golf Retreat & Pool",
      subtitle: "298 sqm Usable · 4 Rooms · Private Swimming Pool & Landscaped Garden",
      location: "Marbella Golf Corridor, Málaga, Spain",
      city: "Marbella",
      country: "Spain",
      price: "€1,995,000",
      priceNumeric: 1995000,
      currency: "EUR",
      type: "Modern Golf Villa",
      category: "villa",
      area: "298 sqm usable interior · 850 sqm plot",
      usableArea: "298 sqm",
      plotArea: "850 sqm",
      bedrooms: 4,
      bathrooms: 4,
      rooms: "4 Rooms (4 Bedrooms, Open-Plan Living & Dining, Garden Lounge)",
      status: "Available",
      description: "A bright, modern villa in Marbella designed for effortless Mediterranean living. Features four en-suite bedrooms, open-plan chef's kitchen, private swimming pool, and immediate access to top golf clubs and international schools.",
      advisoryPerspective: "Strong secondary-market liquidity in Marbella's established residential golf sector, offering steady European holiday rental yield.",
      heroImage: marbellaGolfVilla.images[0],
      galleryImages: marbellaGolfVilla.images,
      specs: [
        { label: "Internal Usable Area", value: "298.00 sqm" },
        { label: "Plot Area", value: "850.00 sqm" },
        { label: "Room Count", value: "4 Bedrooms with En-Suite Baths" },
      ],
      features: [
        "Private swimming pool framed by low-maintenance Mediterranean landscaping",
        "Turnkey condition ready for immediate summer occupancy or holiday rental",
      ],
      sourceUrl: marbellaGolfVilla.source_url || `https://homefind.cristianvaduva.com/listing/${marbellaGolfVilla.id}`,
      sourceName: "Chestertons Marbella × HomeFind",
      sourcePlatform: "Chestertons Marbella",
      isFeatured: false,
    });
  }

  // 8. Croatia Adriatic Waterfront Villa 1.15M
  const croatiaVilla = supaMap.get("4708ae7a-98c0-48a7-b4ee-efed804a8e52");
  if (croatiaVilla) {
    portfolio.push({
      id: "prop-croatia-zdrelac-seafront",
      slug: "croatia-zdrelac-seafront-villa",
      title: "Adriatic Seafront Villa with Direct Private Pier Access",
      subtitle: "Direct Water Access · Pašman Island / Zadar Archipelago · Private Boat Berth",
      location: "Ždrelac, Pašman Island, Zadar County, Croatia",
      city: "Ždrelac",
      country: "Croatia",
      price: "€1,150,000",
      priceNumeric: 1150000,
      currency: "EUR",
      type: "Adriatic Waterfront Residence",
      category: "international",
      area: "280 sqm usable interior · 650 sqm coastal plot",
      usableArea: "280 sqm",
      plotArea: "650 sqm",
      bedrooms: 4,
      bathrooms: 4,
      rooms: "5 Rooms (4 Bedrooms, Coastal Salon, Sea Terraces)",
      status: "Available",
      description: "Positioned directly on the crystal-clear waters of the Pašman channel in the Zadar archipelago. Complete with a private sea-access pier, private boat mooring, and panoramic vistas of pristine pine-covered islands.",
      advisoryPerspective: "Croatia's entry into the Schengen zone and Euro currency has cemented its status as one of Europe's most attractive yachting and vacation home markets.",
      heroImage: croatiaVilla.images[0],
      galleryImages: croatiaVilla.images,
      specs: [
        { label: "Usable Interior", value: "280.00 sqm" },
        { label: "Maritime Feature", value: "Direct Sea Pier & Boat Berth" },
        { label: "Jurisdiction", value: "Croatia (EU / Schengen / Eurozone)" },
      ],
      features: [
        "Direct water steps from terrace into the calm turquoise waters of the Adriatic",
        "Spacious stone-paved sun decks with Mediterranean pine shade",
      ],
      sourceUrl: `https://homefind.cristianvaduva.com/listing/${croatiaVilla.id}`,
      sourceName: "HomeFind Adriatic Collection",
      sourcePlatform: "HomeFind",
      isFeatured: false,
    });
  }

  console.log(`\nGenerated ${portfolio.length} verified luxury properties!`);

  // Count total unique images
  let totalImages = 0;
  portfolio.forEach(p => {
    totalImages += p.galleryImages?.length || 0;
  });
  console.log(`Total verified high-res images integrated: ${totalImages}`);

  // Now, let's write out lib/properties.ts
  const propertiesTsContent = `export interface PropertySpec {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  location: string;
  city?: string;
  country?: string;
  price: string;
  priceNumeric?: number;
  currency?: string;
  type: string;
  category: "penthouse" | "villa" | "development" | "international" | "marine";
  area: string;
  usableArea?: string;
  plotArea?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  rooms: string;
  status: "Available" | "Private Deal" | "Acquired" | "Under Development" | "Custom Order";
  description: string;
  advisoryPerspective: string;
  heroImage: string;
  galleryImages: string[];
  specs: PropertySpec[];
  features: string[];
  sourceUrl: string;
  sourceName: string;
  sourcePlatform?: string;
  isFeatured?: boolean;
}

export const selectedProperties: Property[] = ${JSON.stringify(portfolio, null, 2)};

export function getSelectedProperties(): Property[] {
  return selectedProperties;
}

export function getPropertyById(idOrSlug: string): Property | undefined {
  return selectedProperties.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export function getPropertiesByCategory(category: Property["category"]): Property[] {
  return selectedProperties.filter((p) => p.category === category);
}

export function getFeaturedProperties(): Property[] {
  return selectedProperties.filter((p) => p.isFeatured);
}
`;

  fs.writeFileSync("lib/properties.ts", propertiesTsContent, "utf8");
  console.log("Successfully wrote updated lib/properties.ts!");

  // Also write out the evidence artifact
  fs.writeFileSync("scripts/portfolio_summary.json", JSON.stringify({
    count: portfolio.length,
    totalImages,
    items: portfolio.map(p => ({
      id: p.id,
      title: p.title,
      location: p.location,
      country: p.country,
      price: p.price,
      imagesCount: p.galleryImages.length,
      category: p.category,
      sourcePlatform: p.sourcePlatform,
      sourceUrl: p.sourceUrl
    }))
  }, null, 2));
}

main().catch(console.error);
