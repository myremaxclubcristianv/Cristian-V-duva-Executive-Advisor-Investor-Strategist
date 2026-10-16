import fs from "fs";

async function main() {
  console.log("Starting Portfolio Expansion Data Collection...");

  // 1. Get Supabase Key from HomeFind
  const chunkRes = await fetch("https://homefind.cristianvaduva.com/_next/static/chunks/3ruyqjib1qva_.js");
  const code = await chunkRes.text();
  const key = code.match(/eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/)[0];

  // 2. Fetch specific high-value listings from HomeFind Supabase
  const supaRes = await fetch("https://gremutoprvrtujeybpcl.supabase.co/rest/v1/listings?select=*&order=created_at.desc&limit=500", {
    headers: { apikey: key, Authorization: "Bearer " + key }
  });
  const allListings = await supaRes.json();
  console.log(`Fetched ${allListings.length} listings from HomeFind.`);

  // 3. Fetch AiXLuxury image galleries for key projects
  async function getAixImages(slug) {
    try {
      const res = await fetch(`https://aixluxury.com/${slug}`);
      if (!res.ok) return [];
      const html = await res.text();
      const img1200 = Array.from(new Set(html.match(/\/images\/1200\/[^"'\s<)]+/gi) || []));
      return img1200.map(p => `https://aixluxury.com${p}`);
    } catch {
      return [];
    }
  }

  const [
    miamiImgs,
    brabusImgs,
    h4lImgs,
    nauticalImgs,
    conceptImgs,
    newEraImgs,
    piperaImgs
  ] = await Promise.all([
    getAixImages("miami-villa"),
    getAixImages("brabus-island"),
    getAixImages("h4l-village"),
    getAixImages("nautical-home"),
    getAixImages("concept-project"),
    getAixImages("new-era-project"),
    getAixImages("pipera-homes")
  ]);

  console.log(`AiXLuxury galleries loaded:
  Miami: ${miamiImgs.length}
  Brabus: ${brabusImgs.length}
  H4L: ${h4lImgs.length}
  Nautical: ${nauticalImgs.length}
  Concept: ${conceptImgs.length}
  New-Era: ${newEraImgs.length}
  Pipera: ${piperaImgs.length}`);

  // Save intermediate data to scratch
  const collected = {
    allListingsCount: allListings.length,
    aix: {
      miamiImgs,
      brabusImgs,
      h4lImgs,
      nauticalImgs,
      conceptImgs,
      newEraImgs,
      piperaImgs
    }
  };

  fs.writeFileSync("scripts/collected_sources.json", JSON.stringify(collected, null, 2));
  console.log("Saved collected sources metadata to scripts/collected_sources.json");
}

main().catch(console.error);
