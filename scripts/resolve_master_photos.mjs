import fs from "fs";
import path from "path";
import crypto from "crypto";

const rawCandidates = JSON.parse(fs.readFileSync("scripts/verified_personal_candidates.json", "utf8"));

// Define master equivalence groups (WP vs Aix counterparts)
const pairMap = new Map([
  ["Capturdeecrandin2024-07-06la16.34.15.png", "851_Captura-de-ecran-din-2024-07-06-la-16.34.15.png"],
  ["Capturdeecrandin2025-05-10la16.21.23-Zk-MP8w6nyxsNocxcH-Xag.png", "850_Captura-de-ecran-din-2024-07-06-la-16.26.05-1.png"],
  ["805_Captura-de-ecran-din-2024-03-01-la-11.11.02.png", "Capturdeecrandin2025-05-10la16.15.58-uv_PCWufaosgW10_37Bx7w.png"],
  ["933_certificate-3.jpg", "Capturdeecrandin2025-05-10la16.20.16-ps_-ClzOFF965DxENEJaSA.png"],
  ["certificate3-x9QM8xDX3rtgmndAF1CswA.jpg", "Capturdeecrandin2025-05-10la16.20.16-ps_-ClzOFF965DxENEJaSA.png"],
  ["certificate-B0k9AIZ2ohS9B-ByGHMUbQ.jpg", "887_certificate.jpg"],
  ["IMG_1522-rQu0wew1ziD0hE0QM6qUmw.jpg", "921_IMG_1522-scaled.jpg"],
  ["IMG_1571-2R1UN5GbyRIqgbGZUl_nYw.jpg", "919_IMG_1571-scaled.jpg"],
  ["IMG_1582-zj4A01dtMLmrOlZF9dreLQ.jpg", "920_IMG_1582-scaled.jpg"],
  ["924_IMG_2182-scaled.jpg", "IMG_2182-9b6bsxtfM9U7GwZCjkD-Rg.jpg"],
  ["IMG_2363-wN25RdYf7EjGHGK4CmVtxQ.jpg", "928_IMG_2363-scaled.jpg"],
  ["IMG_2531-tGA6aJsnSjfqraCUcFnilg.jpg", "929_IMG_2531-scaled.jpg"],
  ["IMG_2655-N3A0M3iWMZkhskzg1fsDcw.JPG", "931_IMG_2655-scaled.jpg"],
  ["IMG_3792-al0OjkaCP0_SITZ5q6ZNOg.jpg", "1009_IMG_3792-scaled.jpg"],
  ["IMG_4029-RDg3d0NdbR7_9RpYdLzKQg.JPG", "1007_IMG_4029-scaled.jpg"],
  ["IMG_5321-kL2V5Qa6E3KCKJNDgj3GJA.jpg", "918_IMG_5321.jpg"],
  ["832_IMG_7438-scaled.jpg", "IMG_7438-6aNAXuE1mhvI72Lmdi4xeg.jpg"]
]);

// Group all candidates by canonical group ID
const groups = new Map();

for (const c of rawCandidates) {
  // Find root canonical name
  let root = c.filename;
  if (pairMap.has(root)) {
    root = pairMap.get(root);
  }
  // Also check if any pair points here
  for (const [k, v] of pairMap.entries()) {
    if (v === root && pairMap.has(k)) {
      // canonical
    }
  }

  if (!groups.has(root)) {
    groups.set(root, []);
  }
  groups.get(root).push(c);
}

console.log(`Unique photo scenes/shots identified: ${groups.size}`);

// For each group, pick the highest resolution / best quality item
const masterPhotos = [];
const excludedEquivalents = [];

for (const [groupId, items] of groups.entries()) {
  // Sort by pixel count descending, then file size descending
  items.sort((a, b) => (b.pixels - a.pixels) || (b.size - a.size));
  const master = items[0];
  const others = items.slice(1);

  masterPhotos.push({
    groupId,
    master,
    alternates: others.map(o => ({
      filename: o.filename,
      sourceDomain: o.sourceDomain,
      sourceUrl: o.sourceUrl,
      width: o.width,
      height: o.height,
      size: o.size,
      hash: o.hash,
      reason: "lower_resolution_counterpart"
    }))
  });

  for (const o of others) {
    excludedEquivalents.push({
      filename: o.filename,
      sourceDomain: o.sourceDomain,
      sourceUrl: o.sourceUrl,
      masterFilename: master.filename,
      reason: "equivalent_lower_resolution_counterpart"
    });
  }
}

console.log(`Selected ${masterPhotos.length} master photographs.`);
console.log(`Excluded ${excludedEquivalents.length} lower-resolution duplicate counterparts.`);

fs.writeFileSync("scripts/master_photos_plan.json", JSON.stringify({ masterPhotos, excludedEquivalents }, null, 2));
