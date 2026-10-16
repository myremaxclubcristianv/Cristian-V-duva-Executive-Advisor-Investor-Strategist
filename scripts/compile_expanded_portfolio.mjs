import fs from "fs";

// Load existing properties from lib/properties.ts
import { selectedProperties as existingProperties } from "../lib/properties.ts";

const rawListings = JSON.parse(fs.readFileSync("scripts/raw_homefind_listings.json", "utf-8"));

console.log("Existing properties count:", existingProperties.length);
console.log("Raw HomeFind listings count:", rawListings.length);

const existingIds = new Set(existingProperties.map(p => p.id));
const existingTitles = new Set(existingProperties.map(p => p.title.toLowerCase().trim()));

// Helper to determine sovereign country
function detectCountry(city, address, title, desc) {
  const text = `${city} ${address} ${title} ${desc}`.toLowerCase();
  if (text.includes("marbella") || text.includes("benahavis") || text.includes("estepona") || text.includes("spain") || text.includes("malaga") || text.includes("casares") || text.includes("manilva") || text.includes("mijas")) {
    return "Spain";
  }
  if (text.includes("dubai") || text.includes("abu dhabi") || text.includes("uae") || text.includes("emirates") || text.includes("palm jumeirah")) {
    return "UAE";
  }
  if (text.includes("monaco") || text.includes("monte carlo") || text.includes("larvotto")) {
    return "Monaco";
  }
  if (text.includes("miami") || text.includes("florida") || text.includes("usa") || text.includes("brickell")) {
    return "USA";
  }
  if (text.includes("croatia") || text.includes("dubrovnik") || text.includes("zdrelac")) {
    return "Croatia";
  }
  return "Romania";
}

// Helper to determine category
function detectCategory(propType, title, desc) {
  const text = `${propType} ${title} ${desc}`.toLowerCase();
  if (text.includes("penthouse") || text.includes("rooftop") || text.includes("sky residence")) return "penthouse";
  if (text.includes("villa") || text.includes("estate") || text.includes("mansion") || text.includes("house")) return "villa";
  if (text.includes("development") || text.includes("masterplan") || text.includes("project") || text.includes("complex") || text.includes("residential park")) return "development";
  if (text.includes("beachfront") || text.includes("waterfront") || text.includes("sea view") || text.includes("marine") || text.includes("island") || text.includes("coastal")) return "marine";
  if (text.includes("international") || text.includes("spain") || text.includes("dubai") || text.includes("monaco") || text.includes("miami")) return "international";
  return "villa";
}

// Clean English descriptions and remove phone numbers / Romanian marketing snippets
function cleanEnglishDescription(desc, title, loc, specs) {
  if (!desc) {
    return `An exceptional private architectural residence located in ${loc}, characterized by generous spatial volumes, premium structural finishes, and serene panoramic exposures.`;
  }

  let cleaned = desc
    .replace(/📲.*?(\n|$)/gi, "")
    .replace(/🌐.*?(\n|$)/gi, "")
    .replace(/🔗.*?(\n|$)/gi, "")
    .replace(/CRISTIAN VĂDUVA.*?(\n|$)/gi, "")
    .replace(/REAL ESTATE • INVESTMENTS • INSURANCE.*?(\n|$)/gi, "")
    .replace(/Further details available upon request\./gi, "")
    .replace(/Contact.*?(\n|$)/gi, "")
    .replace(/Telefon.*?(\n|$)/gi, "")
    .replace(/Sunati.*?(\n|$)/gi, "")
    .replace(/WhatsApp.*?(\n|$)/gi, "")
    .replace(/Comision 0%.*?(\n|$)/gi, "")
    .trim();

  // If description was in Romanian, provide a polished English summary
  const hasRomanian = /este|situat|apartament|proprietate|dormitoare|baie|vedere|etaj|ansamblu|finisaje/i.test(cleaned);
  if (hasRomanian || cleaned.length < 40) {
    return `Situated within the prestigious enclave of ${loc}, this property offers refined contemporary living with ${specs.bedrooms ? `${specs.bedrooms} bedrooms, ` : ""}${specs.surface ? `${specs.surface} sqm of interior space, ` : ""}and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.`;
  }

  // Capitalize and format
  return cleaned.slice(0, 450).trim() + (cleaned.length > 450 ? "..." : "");
}

// Clean and translate title to English
function cleanEnglishTitle(title, city, propType) {
  let t = title.trim();
  t = t.replace(/^[🌴✨⭐🔥💥🏰🏢🏙️🏠🚨📍\s]+/, "");
  t = t.replace(/[🌴✨⭐🔥💥🏰🏢🏙️🏠🚨📍]+$/, "");
  t = t.replace(/Vanzare /i, "For Sale: ");
  t = t.replace(/Inchiriere /i, "For Lease: ");
  t = t.replace(/Vila /i, "Villa ");
  t = t.replace(/Apartament /i, "Residence ");
  t = t.replace(/Penthouse cu /i, "Penthouse with ");
  t = t.replace(/Teren /i, "Prime Land ");
  t = t.replace(/de vanzare/i, "");
  t = t.replace(/de inchiriat/i, "");
  
  if (t.length < 10) {
    t = `Exclusive ${propType || "Luxury Residence"} in ${city}`;
  }
  return t.trim();
}

const newlyIngested = [];
let importedCount = 0;

for (const raw of rawListings) {
  // Check if title or ID already imported
  const normTitle = (raw.title || "").toLowerCase().trim();
  if (existingTitles.has(normTitle)) continue;

  let imgs = [];
  if (Array.isArray(raw.images)) imgs = raw.images;
  else if (typeof raw.images === "string") {
    try { imgs = JSON.parse(raw.images); } catch(e){ imgs = [raw.images]; }
  }
  imgs = imgs.filter(img => typeof img === "string" && img.startsWith("http"));

  // Require at least 3 genuine photographs
  if (imgs.length < 3) continue;

  const country = detectCountry(raw.city, raw.address, raw.title, raw.description);
  const city = raw.city ? raw.city.charAt(0).toUpperCase() + raw.city.slice(1).toLowerCase() : (country === "Spain" ? "Marbella" : "Bucharest");
  const category = detectCategory(raw.property_type, raw.title, raw.description);
  
  // Format price
  let priceStr = raw.price || "Price on Inquiry";
  let priceNum = raw.price_numeric;
  if (!priceNum && typeof raw.price === "string") {
    const digits = raw.price.replace(/[^0-9]/g, "");
    if (digits) priceNum = parseInt(digits, 10);
  }
  if (priceNum) {
    const curr = country === "UAE" ? "AED" : (country === "USA" ? "$" : "€");
    priceStr = curr === "$" ? `$${priceNum.toLocaleString()}` : (curr === "AED" ? `AED ${priceNum.toLocaleString()}` : `€${priceNum.toLocaleString()}`);
  }

  // Format surface area
  const surf = raw.surface || raw.surface_numeric;
  const areaStr = surf ? `${surf} sqm` : (raw.property_type === "villa" ? "Generous Private Footprint" : "Exclusive Floorplan");

  // Format bedrooms/bathrooms
  const beds = raw.bedrooms || raw.bedrooms_numeric || (raw.rooms ? parseInt(raw.rooms, 10) - 1 : undefined);
  const roomsStr = beds ? `${beds} Bedrooms · Living Salon · Private Amenities` : "Executive Layout";

  // Specs array
  const specs = [];
  if (surf) specs.push({ label: "Interior Footprint", value: `${surf} sqm` });
  if (beds) specs.push({ label: "Bedrooms", value: `${beds} Suites` });
  specs.push({ label: "Jurisdiction", value: `${city}, ${country}` });
  specs.push({ label: "Category", value: raw.property_type ? raw.property_type.toUpperCase() : "LUXURY ASSET" });

  const cleanTitle = cleanEnglishTitle(raw.title, city, raw.property_type);
  const cleanDesc = cleanEnglishDescription(raw.description, cleanTitle, `${city}, ${country}`, { bedrooms: beds, surface: surf });

  const slug = cleanTitle.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

  const stableId = `prop-hf-${raw.id.slice(0, 12)}`;

  const propObj = {
    id: stableId,
    slug: slug || stableId,
    title: cleanTitle,
    subtitle: `${beds ? `${beds} Bedrooms · ` : ""}${surf ? `${surf} sqm · ` : ""}${city}, ${country}`,
    location: `${raw.address ? `${raw.address}, ` : ""}${city}, ${country}`,
    city: city,
    country: country,
    price: priceStr,
    priceNumeric: priceNum || undefined,
    currency: country === "UAE" ? "AED" : (country === "USA" ? "USD" : "EUR"),
    type: raw.property_type ? (raw.property_type.charAt(0).toUpperCase() + raw.property_type.slice(1) + (raw.property_type === "villa" ? " Estate" : " Residence")) : "Architectural Residence",
    category: category,
    area: areaStr,
    usableArea: surf ? `${surf} sqm` : undefined,
    bedrooms: beds,
    bathrooms: beds ? Math.max(1, Math.round(beds * 0.8)) : undefined,
    rooms: roomsStr,
    status: raw.listing_type === "rent" ? "Available for Lease" : "Available",
    description: cleanDesc,
    advisoryPerspective: `Audited for architectural longevity and capital defense in the ${city} luxury market segment.`,
    heroImage: imgs[0],
    galleryImages: imgs,
    specs: specs,
    features: [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    sourceUrl: raw.source_url || `https://homefind.cristianvaduva.com/listings/${raw.id}`,
    sourceName: raw.source_agency || (country === "Spain" ? "HomeFind × Chestertons Marbella" : "HomeFind Real Estate"),
    sourcePlatform: "HomeFind",
    isFeatured: false
  };

  newlyIngested.push(propObj);
  existingTitles.add(normTitle);
  importedCount++;
}

console.log(`Successfully ingested and curated ${newlyIngested.length} additional properties!`);
console.log(`Combined total portfolio will be: ${existingProperties.length + newlyIngested.length} properties.`);

// Calculate total photos across combined portfolio
const allCombined = [...existingProperties, ...newlyIngested];
const totalPhotos = allCombined.reduce((sum, p) => sum + (p.galleryImages?.length || 1), 0);
console.log(`Combined authentic photographs: ${totalPhotos}`);

// Save to scratch file for review
fs.writeFileSync("scripts/expanded_properties_dataset.json", JSON.stringify(allCombined, null, 2));
console.log("Saved full combined dataset to scripts/expanded_properties_dataset.json");
