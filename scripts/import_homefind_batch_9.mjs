import fs from "fs";

// 9 representative premium properties from HomeFind / Structura -> Buy
const rawListings = JSON.parse(fs.readFileSync("scripts/raw_homefind_listings.json", "utf8"));

const targetIds = [
  "9cf61fb6-121b-4beb-abe3-a358dad7fc8a",
  "e5a7fc47-3ba6-4680-99b6-9747af2b340f",
  "194ea2e7-87d1-43fe-b9a8-1e00e184c005",
  "acf896c0-e41e-4f40-9aa2-7ec8a13c6d01",
  "0f444527-f7cc-482f-aa36-804a9d246705",
  "b8e2acd9-472a-4f73-a5af-e59fe16d2eb4",
  "0013484f-0ab1-4eb3-a1b0-44d7267dc0d4",
  "23e96b64-3061-4283-9eac-1a3c8cb47a3c",
  "ab52adac-a7a3-4007-8c56-b7948b2466a8"
];

// Curated metadata corresponding to genuine specifications
const curatedMeta = {
  "9cf61fb6-121b-4beb-abe3-a358dad7fc8a": {
    slug: "benahavis-palatial-architectural-villa-1795-sqm",
    title: "Palatial Architectural Villa — Benahavis, Costa del Sol",
    subtitle: "8 Suites · 1,795 sqm Built Area · Private Swimming Pool & Panoramic Grounds",
    location: "Benahavis, Malaga, Costa del Sol, Spain",
    type: "Luxury Villa Estate",
    category: "villa",
    area: "1,795 sqm built",
    usableArea: "1,795 sqm",
    rooms: "8 Rooms (Suites & Private Executive Living Areas)",
    description: "An extraordinary palatial architectural villa situated within the exclusive enclave of Benahavis, Malaga. Featuring 1,795 sqm of gross built area across 8 grand room suites, extensive landscaped gardens, private swimming pool, and sweeping panoramic views across the Andalusian coastline.",
    advisoryPerspective: "Ultra-prime capital preservation asset situated within the Benahavis golden corridor, representing one of the largest private residential floorplates on the Costa del Sol.",
    features: [
      "1,795 sqm palatial interior and covered terrace footprint",
      "8 expansive private suite sanctuaries and executive entertaining salons",
      "Private architectural swimming pool and manicured Mediterranean grounds",
      "Floor-to-ceiling panoramic glass exposures with open cardinal views",
      "Secure gated enclave with multi-tier perimeter access control",
      "Original HomeFind verifiable listing representation (ID: 1235829)"
    ]
  },
  "e5a7fc47-3ba6-4680-99b6-9747af2b340f": {
    slug: "marbella-grand-panoramic-penthouse-961-sqm",
    title: "Grand Panoramic Penthouse — Marbella, Costa del Sol",
    subtitle: "4 Suites · 961 sqm Gross Footprint · Wrap-Around Solarium Terraces",
    location: "Marbella, Malaga, Costa del Sol, Spain",
    type: "Sky Residence / Penthouse",
    category: "penthouse",
    area: "961 sqm gross footprint",
    usableArea: "961 sqm",
    rooms: "4 Rooms (Grand Living Salon & Master Suites)",
    description: "A landmark sky residence in prime Marbella, spanning 961 sqm of luxury living and elevated outdoor entertaining terraces. Featuring 4 expansive room suites, commanding Mediterranean views, and world-class finishes throughout.",
    advisoryPerspective: "Exceptional scarcity value: penthouses exceeding 900 sqm in prime Marbella command sustained liquidity premiums and zero new-supply competition.",
    features: [
      "961 sqm elevated penthouse floorplate with 360° horizon views",
      "Grand reception salon opening seamlessly to private wrap-around solarium",
      "4 full suites with bespoke ensuite wellness bathrooms and dressing rooms",
      "Boutique luxury residential complex with private concierge and security",
      "Direct proximity to Marbella Golden Mile and Puerto Banús marina",
      "Original HomeFind verifiable listing representation (ID: 1235828)"
    ]
  },
  "194ea2e7-87d1-43fe-b9a8-1e00e184c005": {
    slug: "benahavis-masterpiece-trophy-estate-1696-sqm",
    title: "Masterpiece Trophy Estate — Benahavis, Costa del Sol",
    subtitle: "8 Suites · 1,696 sqm Built Area · Private Infinity Pool & Panoramic Solarium",
    location: "Benahavis, Malaga, Costa del Sol, Spain",
    type: "Luxury Villa Estate",
    category: "villa",
    area: "1,696 sqm built",
    usableArea: "1,696 sqm",
    rooms: "8 Rooms (Private Suites & Wellness Pavilion)",
    description: "An ultra-exclusive architectural trophy estate set in the hills of Benahavis, Malaga. Offering 1,696 sqm of built excellence, 8 stately suites, private swimming pool, expansive entertaining loggias, and panoramic vistas stretching to the Mediterranean.",
    advisoryPerspective: "Institutional-grade generational residential estate with comprehensive security isolation, private motor court, and world-class architectural specifications.",
    features: [
      "1,696 sqm master-crafted contemporary estate footprint",
      "8 ensuite luxury bedrooms and dedicated guest accommodation wing",
      "Private designer swimming pool, landscaped gardens, and outdoor kitchen",
      "Comprehensive subterranean parking gallery and wellness facilities",
      "Guarded gated community with 24/7 security protocol",
      "Original HomeFind verifiable listing representation (ID: 1235821)"
    ]
  },
  "acf896c0-e41e-4f40-9aa2-7ec8a13c6d01": {
    slug: "marbella-palatial-super-prime-villa-2077-sqm",
    title: "Palatial Super-Prime Villa — Marbella, Costa del Sol",
    subtitle: "7 Suites · 2,077 sqm Built Area · Resort-Scale Private Grounds",
    location: "Marbella, Malaga, Costa del Sol, Spain",
    type: "Palatial Villa Estate",
    category: "villa",
    area: "2,077 sqm built",
    usableArea: "2,077 sqm",
    rooms: "7 Rooms (Stately Suites, Grand Salons & Private Spa)",
    description: "Commanding 2,077 sqm of magnificent built architecture in premier Marbella, this palatial villa stands among the most prestigious private residences on the Costa del Sol. Featuring 7 suites, private swimming pool, monumental spatial volumes, and private mature gardens.",
    advisoryPerspective: "Top-decile wealth preservation asset commanding an ultra-rare 2,000+ sqm footprint in Marbella, delivering complete sovereignty and estate privacy.",
    features: [
      "2,077 sqm ultra-prime residential footprint with palatial ceiling heights",
      "7 executive suite retreats with bespoke stone and marble finishes",
      "Resort-scale private swimming pool and landscaped Andalusian gardens",
      "Private underground collector motor court and security quarters",
      "Unrivaled privacy in one of Marbella's most sought-after enclaves",
      "Original HomeFind verifiable listing representation (ID: 1235837)"
    ]
  },
  "0f444527-f7cc-482f-aa36-804a9d246705": {
    slug: "marbella-contemporary-architectural-villa-1191-sqm",
    title: "Contemporary Architectural Villa — Marbella, Costa del Sol",
    subtitle: "5 Suites · 1,191 sqm Built Area · Panoramic Pool & Sunset Terraces",
    location: "Marbella, Malaga, Costa del Sol, Spain",
    type: "Contemporary Luxury Villa",
    category: "villa",
    area: "1,191 sqm built",
    usableArea: "1,191 sqm",
    rooms: "5 Rooms (Designer Suites & Executive Lounge)",
    description: "A masterpiece of contemporary architecture situated in Marbella, Malaga. Offering 1,191 sqm of refined interior space, 5 expansive suite bedrooms, private swimming pool, sculpted minimalist landscaping, and seamless indoor-outdoor living.",
    advisoryPerspective: "High architectural distinction and immaculate build quality, perfectly configured for ultra-high-net-worth principal occupation or elite seasonal leasing.",
    features: [
      "1,191 sqm architectural floorplan with floor-to-ceiling glass facades",
      "5 designer ensuite bedrooms with private walk-in wardrobes",
      "Infinity swimming pool surrounded by teak sundecks and manicured greenery",
      "Integrated smart-home climate and biometric access systems",
      "Prime residential corridor minutes from golf resorts and coastline",
      "Original HomeFind verifiable listing representation (ID: 1235833)"
    ]
  },
  "b8e2acd9-472a-4f73-a5af-e59fe16d2eb4": {
    slug: "casares-golf-sea-panorama-villa-874-sqm",
    title: "Golf & Sea Panorama Villa — Casares, Costa del Sol",
    subtitle: "6 Suites · 874 sqm Built Area · Private Pool & Mediterranean Vistas",
    location: "Casares, Malaga, Costa del Sol, Spain",
    type: "Private Luxury Villa",
    category: "villa",
    area: "874 sqm built",
    usableArea: "874 sqm",
    rooms: "6 Rooms (Family & Guest Suites)",
    description: "Set in the scenic coastal hills of Casares, Malaga, this elegant 874 sqm villa provides an idyllic retreat with 6 room suites, private swimming pool, generous covered verandas, and unobstructed views encompassing the Mediterranean and nearby championship golf courses.",
    advisoryPerspective: "Exceptional value-to-volume ratio in Casares, offering high rental yield capability alongside capital growth fueled by surrounding five-star resort developments.",
    features: [
      "874 sqm built interior and veranda spaces designed for outdoor living",
      "6 spacious ensuite suites with natural ventilation and views",
      "Private swimming pool and mature Mediterranean floral garden",
      "Enclosed double garage and gated perimeter entrance",
      "Tranquil residential community with fast access to beach clubs",
      "Original HomeFind verifiable listing representation (ID: 1236057)"
    ]
  },
  "0013484f-0ab1-4eb3-a1b0-44d7267dc0d4": {
    slug: "marbella-boutique-residential-villa-298-sqm",
    title: "Boutique Residential Villa — Marbella, Costa del Sol",
    subtitle: "4 Suites · 298 sqm Built Area · Private Garden & Plunge Pool",
    location: "Marbella, Malaga, Costa del Sol, Spain",
    type: "Boutique Luxury Villa",
    category: "villa",
    area: "298 sqm built",
    usableArea: "298 sqm",
    rooms: "4 Rooms (Bedrooms & Open Living Salon)",
    description: "An intimate and highly manageable boutique luxury villa in Marbella, Malaga, spanning 298 sqm with 4 room suites. Featuring a private pool, sunlit solarium terraces, and contemporary interiors crafted for immediate executive residency.",
    advisoryPerspective: "Highly liquid price point under €2M in Marbella with minimal holding costs and strong demand from international lifestyle acquirers.",
    features: [
      "298 sqm turnkey interior with optimal functional floorplan",
      "4 well-appointed room suites with built-in storage",
      "Private swimming pool and paved entertaining barbecue terrace",
      "Secure parking for multiple vehicles within gated boundaries",
      "Quiet residential neighborhood within walking distance of amenities",
      "Original HomeFind verifiable listing representation (ID: 1236111)"
    ]
  },
  "23e96b64-3061-4283-9eac-1a3c8cb47a3c": {
    slug: "estepona-coastal-horizon-penthouse-244-sqm",
    title: "Coastal Horizon Penthouse — Estepona, Costa del Sol",
    subtitle: "2 Suites · 244 sqm Gross Footprint · Expansive Rooftop Terrace",
    location: "Estepona, Malaga, Costa del Sol, Spain",
    type: "Sky Residence / Penthouse",
    category: "penthouse",
    area: "244 sqm gross footprint",
    usableArea: "244 sqm",
    rooms: "2 Rooms (Master Suites & Panoramic Living)",
    description: "A refined top-floor penthouse residence in Estepona, Malaga, offering 244 sqm of interior and rooftop terrace living. Featuring 2 generous suite bedrooms, open-concept chef's kitchen, and wide panoramic sea views.",
    advisoryPerspective: "Fast-growing Estepona prime corridor asset offering attractive entry valuation, high year-round rental occupancy, and low municipal taxation.",
    features: [
      "244 sqm penthouse footprint with private rooftop viewing solarium",
      "2 large ensuite bedrooms with floor-to-ceiling glass doors",
      "Gated residential complex with communal swimming pool and gardens",
      "Underground private parking space and storage unit included",
      "Walking distance to beaches, promenade, and marina dining",
      "Original HomeFind verifiable listing representation (ID: 1235863)"
    ]
  },
  "ab52adac-a7a3-4007-8c56-b7948b2466a8": {
    slug: "benahavis-panoramic-luxury-villa-651-sqm",
    title: "Panoramic Luxury Villa — Benahavis, Costa del Sol",
    subtitle: "5 Suites · 651 sqm Built Area · Swimming Pool & Mountain Scenery",
    location: "Benahavis, Malaga, Costa del Sol, Spain",
    type: "Private Luxury Villa",
    category: "villa",
    area: "651 sqm built",
    usableArea: "651 sqm",
    rooms: "5 Rooms (Suites & Entertainment Salons)",
    description: "A beautifully appointed contemporary villa situated in Benahavis, Malaga. Comprising 651 sqm of built elegance, 5 suite bedrooms, swimming pool, open-plan living areas, and peaceful mountain and golf vistas.",
    advisoryPerspective: "High capital stability in Benahavis municipality, benefiting from prime infrastructure, prestigious international schools, and top-tier security.",
    features: [
      "651 sqm architectural layout with harmonious indoor-outdoor flow",
      "5 ensuite bedrooms with private terrace access",
      "Private swimming pool and landscaped sunbathing terrace",
      "Covered parking and discrete service entrance",
      "Enviable position within a secure low-density residential community",
      "Original HomeFind verifiable listing representation (ID: 1235877)"
    ]
  }
};

const fullMonographs = [];
const catalogCards = [];

for (const id of targetIds) {
  const raw = rawListings.find(r => r.id === id);
  if (!raw) {
    throw new Error(`Raw listing not found for id: ${id}`);
  }

  const meta = curatedMeta[id];
  let imgs = raw.images;
  if (typeof imgs === "string") {
    try { imgs = JSON.parse(imgs); } catch(e){ imgs = []; }
  }

  const priceNum = raw.price_numeric || parseInt(raw.price.replace(/[^0-9]/g, ""), 10);
  const formattedPrice = `€${priceNum.toLocaleString()}`;
  const shortId = `prop-hf-${id.slice(0, 12)}`;

  const specs = [
    { label: "Gross Built Area", value: meta.area },
    { label: "Room Configuration", value: meta.rooms },
    { label: "Locality", value: `${raw.city}, Malaga` },
    { label: "Cadastral Jurisdiction", value: "Andalusia, Spain" },
    { label: "Source Listing ID", value: raw.source_listing_id || id.slice(0, 8) }
  ];

  const fullObj = {
    id: shortId,
    slug: meta.slug,
    title: meta.title,
    subtitle: meta.subtitle,
    location: meta.location,
    city: raw.city,
    country: "Spain",
    price: formattedPrice,
    priceNumeric: priceNum,
    currency: "EUR",
    type: meta.type,
    category: meta.category,
    area: meta.area,
    usableArea: meta.usableArea,
    rooms: meta.rooms,
    status: "Available",
    description: meta.description,
    advisoryPerspective: meta.advisoryPerspective,
    heroImage: imgs[0],
    galleryImages: imgs,
    specs: specs,
    features: meta.features,
    sourceUrl: `https://homefind.cristianvaduva.com/listing/${id}`,
    sourceName: "HomeFind × Chestertons Marbella",
    sourcePlatform: "HomeFind",
    isFeatured: false
  };

  const catalogObj = {
    ...fullObj,
    galleryImages: imgs.slice(0, 5) // Cap at 5 for catalog grid performance
  };

  fullMonographs.push(fullObj);
  catalogCards.push(catalogObj);
}

console.log(`Generated ${fullMonographs.length} full monographs and ${catalogCards.length} catalog cards.`);

// Read existing files
const propContent = fs.readFileSync("lib/properties.ts", "utf8");
const catContent = fs.readFileSync("lib/catalogProperties.ts", "utf8");

// Deduplication safety check
for (const p of fullMonographs) {
  if (propContent.includes(`"id": "${p.id}"`) || propContent.includes(`"sourceUrl": "${p.sourceUrl}"`)) {
    throw new Error(`Duplicate detected for ID: ${p.id} or sourceUrl: ${p.sourceUrl}`);
  }
}

// Format JSON with 2-space indentation and 2-space baseline
const fullJson = JSON.stringify(fullMonographs, null, 2);
// Strip opening [ and closing ]
const fullInner = fullJson.slice(fullJson.indexOf("[\n") + 2, fullJson.lastIndexOf("\n]"));

const catJson = JSON.stringify(catalogCards, null, 2);
const catInner = catJson.slice(catJson.indexOf("[\n") + 2, catJson.lastIndexOf("\n]"));

// In lib/properties.ts, find `\n];\n\nexport const properties = selectedProperties;`
const propTarget = "\n];\n\nexport const properties = selectedProperties;";
if (!propContent.includes(propTarget)) {
  throw new Error("Could not find insertion marker in lib/properties.ts");
}
const newPropContent = propContent.replace(propTarget, `,\n${fullInner}${propTarget}`);

// In lib/catalogProperties.ts, find `\n];\n` at the end
const catTarget = "\n];\n";
const lastIndex = catContent.lastIndexOf(catTarget);
if (lastIndex === -1) {
  throw new Error("Could not find insertion marker in lib/catalogProperties.ts");
}
const newCatContent = catContent.slice(0, lastIndex) + `,\n${catInner}` + catContent.slice(lastIndex);

// Write files
fs.writeFileSync("lib/properties.ts", newPropContent);
fs.writeFileSync("lib/catalogProperties.ts", newCatContent);

console.log("Successfully appended new properties to lib/properties.ts and lib/catalogProperties.ts!");
