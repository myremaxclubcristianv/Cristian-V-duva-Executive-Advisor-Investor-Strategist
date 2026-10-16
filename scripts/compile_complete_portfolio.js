import fs from "fs";

async function main() {
  console.log("Compiling comprehensive property portfolio...");

  // 1. Get Supabase Key
  const chunkRes = await fetch("https://homefind.cristianvaduva.com/_next/static/chunks/3ruyqjib1qva_.js");
  const code = await chunkRes.text();
  const key = code.match(/eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/)[0];

  // 2. Fetch all listings from Supabase
  const res = await fetch("https://gremutoprvrtujeybpcl.supabase.co/rest/v1/listings?select=*&limit=500", {
    headers: { apikey: key, Authorization: "Bearer " + key }
  });
  const allListings = await res.json();
  const listingsById = new Map();
  allListings.forEach(l => listingsById.set(l.id, l));

  // 3. Read collected sources (AiXLuxury galleries)
  const collected = JSON.parse(fs.readFileSync("scripts/collected_sources.json", "utf8"));
  const aix = collected.aix;

  console.log(`Loaded ${allListings.length} listings from HomeFind Supabase.`);

  // Write a compiler that structures each property with 100% precision in English
  const targetIds = [
    // Dubai & UAE
    "1ec11386-412b-4e35-8bfa-0978202aa8a8", // Palm Jumeirah Signature Villa
    "f80e431a-cc93-4a28-bea4-c06d25a966d0", // Anantara Residences Dubai
    "3d2f78ec-95ce-4a98-891e-ec047202600f", // Brabus Island
    "51f6540d-aa21-4f1d-bb62-ec72cb3be49b", // Marlin Icon Reem Island

    // Bucharest Luxury Penthouses & Residences
    "87257b24-a20d-4f76-b7d7-bec5e7a6db03", // Herastrau Duplex Penthouse 2.9M
    "1bc33221-5d2a-4008-88b2-900471462c6c", // Royal Residence 2.3M
    "01e76455-827c-4fe5-b904-19e4ac351cbe", // Up-Site Floreasca 5 Rooms 1.9M
    "cacbf989-30ee-4f39-bf16-3e7f626d336c", // Luxury Villa Lake View Heated Pool 1.2M
    "ee3d3142-1cbe-4850-b609-6dc8c0b69f4f", // Penthouse Herastrau 1.2M
    "bcb16d7c-c5c3-4e59-84ae-467b69ec0685", // Elite Residential Floreasca 1M
    "1e2f2491-7337-49c3-9206-70c25251a853", // Penthouse Aparthotel Dorobanti-Floreasca 785k
    "c99be4a1-d36e-4d82-8147-d3ef40ce7b53", // Loft Floreasca 750k
    "ad3ef53d-0aa3-44ba-b531-569b2316672e", // Pipera Penthouse 650k
    "66b50868-2f5d-440c-80e7-1b04da21f5eb", // Pipera Duplex Villa 575k
    "b199540c-e0f1-4ebb-8d14-f9a77169c059", // Floreasca Luxury 575k
    "14104d8b-2331-4819-b9a5-b19eee02d278", // Herastrau Park 3-Room 499.9k
    "870174a6-3fcd-4339-a147-c7495f0e3f14", // Yacht Kid Floreasca Lake 360k
    "1b7447e7-21ad-4e1b-94d2-6349d3dd187b", // Pipera Private Villa 299.9k
    "68bf1ea3-ed53-4ee0-8b41-bc13a2a09e9f", // Erou Iancu Nicolae 244.9k
    "f6f5163c-66fa-4cef-9858-1c9348f4d2a7", // Dorobanti Capitale 205k
    "b144acf9-0085-42a0-bc1d-02d8eb2a7d96", // US Embassy Northern Axis Penthouse 180mp
    "6609b3f1-cb7d-4c91-a12d-d69af25d58fc", // The Ivy Baneasa 100.6mp
    "fe463726-74f7-408d-9adb-79cd2f03ceb6", // Herastrau Private Garden 105mp
    "d69152fe-addc-4f49-ab93-0f97927dff78", // Nusco City Pipera 66mp
    "8021ba60-747c-41ae-9d35-ca1af206fd6c", // Cotroceni Opera 140mp

    // Spain / Marbella / Benahavis / Casares Trophy
    "194ea2e7-87d1-43fe-b9a8-1e00e184c005", // Benahavis Sovereign Villa 19.88M
    "acf896c0-e41e-4f40-9aa2-7ec8a13c6d01", // Marbella Golden Mile 19.5M
    "9cf61fb6-121b-4beb-abe3-a358dad7fc8a", // Benahavis Panoramic Estate 18.65M
    "0f444527-f7cc-482f-aa36-804a9d246705", // Marbella Modernist 14.9M
    "15fb09f3-047f-47b9-91db-4b55aecee29d", // Benahavis Horizon 14.9M
    "3f43184a-bf35-44a6-9edc-f1dc6d5acca5", // Marbella Sierra Blanca 12M
    "e5a7fc47-3ba6-4680-99b6-9747af2b340f", // Marbella Sky Penthouse 11.4M
    "b8e2acd9-472a-4f73-a5af-e59fe16d2eb4", // Finca Cortesin Casares 5M
    "0013484f-0ab1-4eb3-a1b0-44d7267dc0d4", // Marbella Modern Golf Villa 1.995M

    // International Mediterranean / Adriatic
    "4708ae7a-98c0-48a7-b4ee-efed804a8e52"  // Croatia Zdrelac Waterfront Villa 1.15M
  ];

  console.log(`Checking target IDs against Supabase (${targetIds.length} expected)...`);
  const foundTargets = [];
  for (const tid of targetIds) {
    const item = listingsById.get(tid);
    if (item) {
      foundTargets.push(item);
    } else {
      console.warn("Missing ID in supabase:", tid);
    }
  }
  console.log(`Found ${foundTargets.length} matching Supabase listings.`);

  fs.writeFileSync("scripts/found_targets.json", JSON.stringify(foundTargets, null, 2));
}

main().catch(console.error);
