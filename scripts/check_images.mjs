import fs from "fs";

async function test() {
  const res = await fetch("https://cristianvaduva.com", {
    headers: { "User-Agent": "Mozilla/5.0" }
  });
  const html = await res.text();
  const imgRegex = /https:\/\/cristianvaduva\.com\/wp-content\/uploads\/[^"'\s<)]+?\.(?:jpg|jpeg|png|webp)/gi;
  const rawImages = Array.from(new Set(html.match(imgRegex) || []));
  
  // Filter for authentic photo candidates (not icons, not tiny 32x32, not elementor assets)
  const candidates = rawImages.filter(u => 
    !u.includes("cropped-") && 
    !u.includes("-300x") && 
    !u.includes("-150x") && 
    !u.includes("-768x") && 
    !u.includes("Captura-de-ecran")
  );
  console.log("Filtered candidates count:", candidates.length);

  const valid = [];
  const chunkSize = 15;
  for (let i = 0; i < candidates.length; i += chunkSize) {
    const chunk = candidates.slice(i, i + chunkSize);
    await Promise.all(chunk.map(async (u) => {
      try {
        const r = await fetch(u, { method: "HEAD" });
        if (r.status === 200 && r.headers.get("content-type")?.includes("image")) {
          valid.push({
            url: u,
            type: r.headers.get("content-type"),
            size: parseInt(r.headers.get("content-length") || "0", 10)
          });
        }
      } catch (e) {}
    }));
  }

  // Sort by file size descending (highest resolution first)
  valid.sort((a, b) => b.size - a.size);
  console.log("Valid high-res images found:", valid.length);
  fs.writeFileSync("scripts/valid_cv_photos.json", JSON.stringify(valid, null, 2));
  console.log("Saved to scripts/valid_cv_photos.json");
  console.log("Top 10 authentic photos:", valid.slice(0, 10));
}

test();
