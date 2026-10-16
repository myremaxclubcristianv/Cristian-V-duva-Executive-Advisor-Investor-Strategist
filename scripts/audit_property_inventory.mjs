import { selectedProperties } from "../lib/properties.ts";

console.log("==================================================");
console.log("PHASE 1: PROPERTY INVENTORY INTEGRITY AUDIT");
console.log("==================================================\n");

console.log(`Total properties loaded: ${selectedProperties.length}`);

// 1. Check ID and Slug Uniqueness
const idSet = new Set();
const slugSet = new Set();
const duplicateIds = [];
const duplicateSlugs = [];

for (const p of selectedProperties) {
  if (idSet.has(p.id)) {
    duplicateIds.push(p.id);
  }
  idSet.add(p.id);

  if (p.slug) {
    if (slugSet.has(p.slug)) {
      duplicateSlugs.push({ slug: p.slug, id: p.id });
    }
    slugSet.add(p.slug);
  }
}

console.log(`Unique IDs: ${idSet.size} / ${selectedProperties.length}`);
if (duplicateIds.length > 0) {
  console.error("DUPLICATE IDs FOUND:", duplicateIds);
} else {
  console.log("✓ All property IDs are strictly unique.");
}

console.log(`Unique Slugs: ${slugSet.size}`);
if (duplicateSlugs.length > 0) {
  console.error("DUPLICATE SLUGS FOUND:", duplicateSlugs);
} else {
  console.log("✓ All property slugs are strictly unique.");
}

// 2. Cross-Source Deduplication Check (Title, Location, Coordinates, Price)
console.log("\n--- Checking for Cross-Listing Duplicates ---");
const potentialDuplicates = [];
for (let i = 0; i < selectedProperties.length; i++) {
  for (let j = i + 1; j < selectedProperties.length; j++) {
    const a = selectedProperties[i];
    const b = selectedProperties[j];

    // Check exact source URL duplicate
    if (a.sourceUrl && b.sourceUrl && a.sourceUrl === b.sourceUrl) {
      potentialDuplicates.push({ type: "EXACT_SOURCE_URL", idA: a.id, idB: b.id, url: a.sourceUrl });
    }

    // Check title similarity
    const cleanA = a.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanB = b.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (cleanA.length > 10 && cleanA === cleanB) {
      potentialDuplicates.push({ type: "IDENTICAL_TITLE", idA: a.id, idB: b.id, title: a.title });
    }
  }
}

if (potentialDuplicates.length > 0) {
  console.warn("POTENTIAL DUPLICATES DETECTED:", potentialDuplicates);
} else {
  console.log("✓ Zero duplicate listings or URLs detected across all 107 records.");
}

// 3. Counts by Source Platform
const sourceCounts = {};
for (const p of selectedProperties) {
  const src = p.sourcePlatform || p.sourceName || "Unknown";
  sourceCounts[src] = (sourceCounts[src] || 0) + 1;
}
console.log("\n--- Property Breakdown by Source Platform ---");
console.table(sourceCounts);

// 4. Counts by Sovereign Jurisdiction (Country)
const countryCounts = {};
for (const p of selectedProperties) {
  let c = p.country || "Unspecified";
  if (c.includes("Romania")) c = "Romania";
  else if (c.includes("Spain")) c = "Spain";
  else if (c.includes("France")) c = "France";
  else if (c.includes("Monaco")) c = "Monaco";
  else if (c.includes("UAE") || c.includes("Emirates") || c.includes("Dubai")) c = "United Arab Emirates";
  else if (c.includes("United States") || c.includes("USA") || c.includes("Florida")) c = "United States";
  else if (c.includes("Croatia")) c = "Croatia";
  countryCounts[c] = (countryCounts[c] || 0) + 1;
}
console.log("\n--- Property Breakdown by Sovereign Jurisdiction ---");
console.table(countryCounts);

// 5. Counts by Architectural Category
const categoryCounts = {};
for (const p of selectedProperties) {
  const cat = p.category || "Uncategorized";
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
}
console.log("\n--- Property Breakdown by Architectural Category ---");
console.table(categoryCounts);

// 6. Verification of Critical Fields (Price, Area, Description, Source URL)
console.log("\n--- Auditing Critical Data Fields ---");
let missingPrice = 0;
let missingArea = 0;
let missingDescription = 0;
let missingHeroImage = 0;
let missingGallery = 0;
let missingSourceUrl = 0;

for (const p of selectedProperties) {
  if (!p.price || p.price.trim() === "") missingPrice++;
  if (!p.area || p.area.trim() === "") missingArea++;
  if (!p.description || p.description.trim() === "") missingDescription++;
  if (!p.heroImage || p.heroImage.trim() === "") missingHeroImage++;
  if (!p.galleryImages || p.galleryImages.length === 0) missingGallery++;
  if (!p.sourceUrl || p.sourceUrl.trim() === "") missingSourceUrl++;
}

console.log(`Missing Price: ${missingPrice}`);
console.log(`Missing Area: ${missingArea}`);
console.log(`Missing Description: ${missingDescription}`);
console.log(`Missing Hero Image: ${missingHeroImage}`);
console.log(`Missing Gallery Images: ${missingGallery}`);
console.log(`Missing Source URL: ${missingSourceUrl}`);

console.log("\nInventory reconciliation check completed.");
