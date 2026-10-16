async function main() {
  console.log("=== 1. Inspecting CristianVaduva Up-Site ===");
  try {
    const res = await fetch("https://cristianvaduva.com/up-site-floreasca-bucharest/");
    const html = await res.text();
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    const regex = /https:\/\/cristianvaduva\.com\/wp-content\/uploads\/[^"'<>\s)]+?\.(?:jpg|jpeg|png|webp)/gi;
    const images = Array.from(new Set(html.match(regex) || []));
    console.log("Up-site Title:", title);
    console.log("Up-site Images count:", images.length);
    console.log("Up-site Images sample:", images.slice(0, 5));
  } catch(e) {
    console.log("Error up-site:", e.message);
  }

  console.log("\n=== 2. Inspecting AiXLuxury Project Pages ===");
  const aixPages = [
    "https://aixluxury.com/brabus-island",
    "https://aixluxury.com/pipera-homes",
    "https://aixluxury.com/brasov-villa",
    "https://aixluxury.com/miami-villa",
    "https://aixluxury.com/nautical-home",
    "https://aixluxury.com/h4l-village",
    "https://aixluxury.com/new-era-project",
    "https://aixluxury.com/concept-project"
  ];
  for (const page of aixPages) {
    try {
      const res = await fetch(page);
      const html = await res.text();
      const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
      const img1200 = Array.from(new Set(html.match(/\/images\/1200\/[^"'\s<)]+/gi) || []));
      const fullImgs = img1200.map(p => "https://aixluxury.com" + p);
      console.log(`AiXLuxury [${page.split("/").pop()}]: ${title} -> ${fullImgs.length} high-res images`);
      if (fullImgs.length > 0) {
        console.log("   sample:", fullImgs.slice(0, 3));
      }
    } catch(e) {
      console.log("Error aix:", page, e.message);
    }
  }

  console.log("\n=== 3. Inspecting HomeFind Developments ===");
  const hfDevs = [
    "https://homefind.cristianvaduva.com/developments/brabus-island",
    "https://homefind.cristianvaduva.com/developments/marlin-icon"
  ];
  for (const dev of hfDevs) {
    try {
      const res = await fetch(dev);
      const html = await res.text();
      const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
      const imgRegex = /https:\/\/[^"'<>\s)]+?\.(?:webp|jpg|jpeg|png)/gi;
      const imgs = Array.from(new Set(html.match(imgRegex) || [])).filter(i => !i.includes("favicon") && !i.includes("analytics"));
      console.log(`HomeFind Dev [${dev.split("/").pop()}]: ${title} -> ${imgs.length} images`);
      console.log("   sample:", imgs.slice(0, 3));
    } catch(e) {
      console.log("Error hf dev:", dev, e.message);
    }
  }
}
main();
