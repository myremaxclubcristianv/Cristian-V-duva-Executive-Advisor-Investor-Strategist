import fs from "fs";

const data = JSON.parse(fs.readFileSync("scripts/raw_homefind_listings.json"));

console.log("Total raw listings:", data.length);

const validListings = [];
const skipped = [];

for (const item of data) {
  // Check images
  let imgs = [];
  if (Array.isArray(item.images)) imgs = item.images;
  else if (typeof item.images === "string") {
    try { imgs = JSON.parse(item.images); } catch(e){ imgs = [item.images]; }
  }
  imgs = imgs.filter(img => typeof img === "string" && img.startsWith("http"));

  if (imgs.length === 0) {
    skipped.push({ id: item.id, reason: "No valid images" });
    continue;
  }

  // Check title
  const title = (item.title || "").trim();
  if (!title || title.length < 5) {
    skipped.push({ id: item.id, reason: "Missing or too short title" });
    continue;
  }

  validListings.push({
    id: item.id,
    title,
    city: item.city,
    price: item.price,
    surface: item.surface || item.surface_numeric,
    bedrooms: item.bedrooms || item.bedrooms_numeric,
    imageCount: imgs.length,
    propertyType: item.property_type,
    listingType: item.listing_type
  });
}

console.log("Eligible listings with valid images and title:", validListings.length);
console.log("Skipped listings:", skipped.length);

// Group by city
const cityGroups = {};
for (const v of validListings) {
  const c = v.city || "Unknown";
  cityGroups[c] = (cityGroups[c] || 0) + 1;
}
console.log("Eligible by city:", cityGroups);

// Group by property type
const typeGroups = {};
for (const v of validListings) {
  const t = v.propertyType || "other";
  typeGroups[t] = (typeGroups[t] || 0) + 1;
}
console.log("Eligible by property type:", typeGroups);

// Check image count distribution
const totalImages = validListings.reduce((sum, v) => sum + v.imageCount, 0);
console.log("Total authentic photographs across eligible listings:", totalImages);
