import fs from "fs";

async function inspectPortfolio() {
  console.log("=== INVENTORYING COMPREHENSIVE PROPERTY PORTFOLIO ===");

  // 1. Get HomeFind Supabase Key
  const chunkRes = await fetch("https://homefind.cristianvaduva.com/_next/static/chunks/3ruyqjib1qva_.js");
  const code = await chunkRes.text();
  const key = code.match(/eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/)[0];

  // 2. Fetch all listings
  const supaRes = await fetch("https://gremutoprvrtujeybpcl.supabase.co/rest/v1/listings?select=*&order=created_at.desc&limit=1000", {
    headers: { apikey: key, Authorization: "Bearer " + key }
  });
  const allListings = await supaRes.json();
  console.log("Total raw listings from HomeFind Supabase:", allListings.length);

  // Analyze transaction types (sale vs rent), categories, cities, countries
  const types = {};
  const cities = {};
  const withImages = [];
  const withoutImages = [];

  for (const item of allListings) {
    const t = item.transaction_type || item.type || "unknown";
    types[t] = (types[t] || 0) + 1;
    const c = item.city || "Unknown";
    cities[c] = (cities[c] || 0) + 1;

    let imgs = [];
    if (Array.isArray(item.images)) imgs = item.images;
    else if (typeof item.images === "string") {
      try { imgs = JSON.parse(item.images); } catch(e){ imgs = [item.images]; }
    }
    if (imgs.length > 0) withImages.push(item);
    else withoutImages.push(item);
  }

  console.log("Transaction types:", types);
  console.log("Top cities:", Object.entries(cities).sort((a,b)=>b[1]-a[1]).slice(0, 10));
  console.log("Listings with images:", withImages.length);
  console.log("Listings without images:", withoutImages.length);

  // Save full raw listings to scratch
  fs.writeFileSync("scripts/raw_homefind_listings.json", JSON.stringify(allListings, null, 2));
  console.log("Saved raw listings to scripts/raw_homefind_listings.json");
}

inspectPortfolio();
