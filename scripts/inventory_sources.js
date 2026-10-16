async function main() {
  // 1. Get Supabase Key
  const chunkRes = await fetch("https://homefind.cristianvaduva.com/_next/static/chunks/3ruyqjib1qva_.js");
  const code = await chunkRes.text();
  const key = code.match(/eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/)[0];

  // 2. Fetch all listings from Supabase (paginated or limit 500)
  const res = await fetch("https://gremutoprvrtujeybpcl.supabase.co/rest/v1/listings?select=*&limit=500&order=created_at.desc", {
    headers: {
      apikey: key,
      Authorization: "Bearer " + key
    }
  });

  const listings = await res.json();
  console.log(`Retrieved ${listings.length} listings from HomeFind Supabase.`);

  // Let's analyze them
  const activeWithImages = listings.filter(l => l.images && l.images.length > 0);
  console.log(`Listings with images: ${activeWithImages.length}`);

  // Summary by city/location
  const cities = {};
  const types = {};
  activeWithImages.forEach(l => {
    const c = l.city || "Unknown";
    cities[c] = (cities[c] || 0) + 1;
    const t = l.property_type || "Unknown";
    types[t] = (types[t] || 0) + 1;
  });

  console.log("\nDistribution by City:", cities);
  console.log("\nDistribution by Property Type:", types);

  // Sample top listings with prices and image counts
  console.log("\n--- Top Luxury / High-Value Listings Samples ---");
  const sorted = [...activeWithImages].sort((a, b) => (b.price_numeric || 0) - (a.price_numeric || 0));
  sorted.slice(0, 25).forEach((l, idx) => {
    console.log(`${idx + 1}. [${l.city}] ${l.title} | Price: ${l.price} (€${l.price_numeric}) | Surface: ${l.surface} | Rooms: ${l.rooms} | Images: ${l.images?.length} | Type: ${l.property_type}`);
    console.log(`   Source: ${l.source_platform || "Direct"} - ${l.source_url || `https://homefind.cristianvaduva.com/listing/${l.id}`}`);
    console.log(`   Image sample: ${l.images?.[0]}`);
  });
}

main().catch(console.error);
