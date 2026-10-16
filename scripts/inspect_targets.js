import fs from "fs";

async function inspectListings() {
  const chunkRes = await fetch("https://homefind.cristianvaduva.com/_next/static/chunks/3ruyqjib1qva_.js");
  const code = await chunkRes.text();
  const key = code.match(/eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/)[0];

  const res = await fetch("https://gremutoprvrtujeybpcl.supabase.co/rest/v1/listings?select=*&order=created_at.desc&limit=500", {
    headers: { apikey: key, Authorization: "Bearer " + key }
  });
  const listings = await res.json();

  // Find specific listings
  const targetIds = [
    // Dubai & Abu Dhabi
    "1ec11386-412b-4e35-8bfa-0978202aa8a8", // PALM JUMEIRAH | SIGNATURE VILLA
    "60c6d6fb-a0b2-4d04-a957-c5faef11202e", // RUBINO | BURJ KHALIFA
    "67040441-fe23-45a2-944e-a61fe85d774f", // THE RESIDENCE | JUMEIRAH ISLAND
    "aa13ef51-f2f0-4591-9257-8fb68bb8d73b", // PALM JUMEIRAH | PRIVATE BEACHFRONT
    "e2cfc239-4d8e-4914-9989-43c3d528b783", // PALM JUMEIRAH | 4BR GARDEN VILLA
    "e8e89582-7634-44bf-a056-aa152b1fae92", // OPERA GRAND
    "51f6540d-aa21-4f1d-bb62-ec72cb3be49b", // MARLIN ICON | REEM ISLAND
    "e13fe7a7-3315-4ba9-b3e3-8207908b90c1", // UPSITE FLOREASCA

    // Bucharest
    "72049d5a-ebbf-41f2-9fc7-7890a2a4666f", // Herastrau 220mp gradina
    "6c43425f-ce7d-4765-bcfd-f8fb2320b98a", // Floreasca 7 camere 240mp
    "48a8eb6a-49aa-448f-8898-8ec18f3e580e", // Cotroceni Opera 140mp
    "4a259b37-97d8-4f80-ab96-38d7c07da0bb", // Ambasada SUA 180mp
    "90e38a2e-4b7d-4299-80fb-a92c42738741", // The Ivy Baneasa
    "b8178e6a-7c98-4d32-ae6a-b2866c1f1ec4", // Herastrau gradina privata 105mp
    "1a3e6f96-3390-410a-ba92-bbca820e1898", // Nusco City

    // Marbella / Benahavis / Estepona
    "0013484f-0ab1-4eb3-a1b0-44d7267dc0d4"  // Vila Marbella 1.995M
  ];

  // Also filter TET.ro high-value properties
  const tetTrophy = listings
    .filter(l => l.source_platform === "TET.ro" && l.price_numeric >= 11000000)
    .slice(0, 10);

  console.log(`Found ${tetTrophy.length} TET.ro trophy listings >= €11M:`);
  tetTrophy.forEach(t => console.log(`  ${t.id}: ${t.title} (€${t.price_numeric}, ${t.city}, ${t.surface} sqm, ${t.images?.length} imgs)`));

  // Print details of targets
  const targetListings = listings.filter(l => targetIds.includes(l.id));
  console.log(`\nMatched ${targetListings.length} target listings:`);
  targetListings.forEach(l => {
    console.log(`  ID: ${l.id} | ${l.title} | City: ${l.city} | Price: ${l.price} | Images: ${l.images?.length}`);
  });

  fs.writeFileSync("scripts/target_listings.json", JSON.stringify({ targetListings, tetTrophy }, null, 2));
}

inspectListings().catch(console.error);
