import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";

const wpDir = "scripts/full_media_scan/cristianvaduva";
const aixDir = "scripts/full_media_scan/aixluxury";

const wpManifest = JSON.parse(fs.readFileSync("scripts/full_media_scan/wp_download_manifest.json", "utf8"));
const aixManifest = JSON.parse(fs.readFileSync("scripts/full_media_scan/aix_download_manifest.json", "utf8"));

const wpUrlMap = new Map(wpManifest.filter(m => m.status === 200).map(m => [m.filename, m.url]));
const aixUrlMap = new Map(aixManifest.filter(m => m.status === 200).map(m => [m.filename, m.url]));

function getDimensions(filePath) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, { stdio: ["pipe", "pipe", "ignore"] }).toString();
    const w = parseInt(out.match(/pixelWidth:\s*(\d+)/)?.[1] || "0", 10);
    const h = parseInt(out.match(/pixelHeight:\s*(\d+)/)?.[1] || "0", 10);
    return { width: w, height: h, pixels: w * h };
  } catch {
    return { width: 0, height: 0, pixels: 0 };
  }
}

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

// All verified candidate files from comprehensive analysis
const candidates = [];

function addCandidate(dir, filename, seriesName, notes) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) return;
  const stat = fs.statSync(filePath);
  const dims = getDimensions(filePath);
  const hash = sha256(filePath);
  const sourceDomain = dir.includes("aix") ? "aixluxury.com" : "cristianvaduva.com";
  const sourceUrl = (dir.includes("aix") ? aixUrlMap.get(filename) : wpUrlMap.get(filename)) || "";
  candidates.push({
    sourceDomain,
    sourceUrl,
    filename,
    localPath: filePath,
    size: stat.size,
    width: dims.width,
    height: dims.height,
    pixels: dims.pixels,
    hash,
    seriesName,
    notes
  });
}

// 1. Studio & Official Portraits
addCandidate(aixDir, "SNY01904-Edit.jpg", "studio_portraits", "Studio formal portrait in dark suit");
addCandidate(aixDir, "SNY02239-Edit.jpg", "studio_portraits", "Studio executive portrait seated");
addCandidate(aixDir, "SNY05672-Edit.jpg", "studio_portraits", "Studio executive portrait standing arms crossed");
addCandidate(wpDir, "767_Cristian-Vaduva-2.jpg", "studio_portraits", "Official portrait in navy suit");
addCandidate(wpDir, "775_CristianVaduva.com_-1.jpg", "studio_portraits", "Official portrait in dark suit");
addCandidate(wpDir, "830_Buy-Real-estate.jpg", "studio_portraits", "Editorial portrait in suit");
addCandidate(wpDir, "801_5-Star-branded-property.jpg", "studio_portraits", "Editorial portrait in suit");
addCandidate(wpDir, "802_IQON-VILLAS.jpg", "studio_portraits", "Editorial portrait in suit");
addCandidate(wpDir, "486_Copy-of-5-Star-branded-property.jpg", "studio_portraits", "Editorial portrait in suit");

// 2. Executive Desk & Office Series
addCandidate(wpDir, "851_Captura-de-ecran-din-2024-07-06-la-16.34.15.png", "executive_office", "Executive gold desk seated");
addCandidate(aixDir, "Capturdeecrandin2024-07-06la16.34.15.png", "executive_office", "Executive gold desk seated (Aix)");
addCandidate(wpDir, "850_Captura-de-ecran-din-2024-07-06-la-16.26.05-1.png", "executive_office", "Armchair seated in office with tie");
addCandidate(aixDir, "Capturdeecrandin2025-05-10la16.21.23-Zk-MP8w6nyxsNocxcH-Xag.png", "executive_office", "Armchair seated in office with tie (Aix)");
addCandidate(wpDir, "1010_certificate-7.jpg", "executive_office", "Office desk with laptop in shirt and tie");
addCandidate(wpDir, "916_certificate-1.jpg", "executive_office", "Office desk with laptop in vest and tie");
addCandidate(wpDir, "765_3D9C6578-11A4-4870-BA2F-402BFF553786.jpg", "executive_office", "Office meeting table reviewing blueprints and iPad");
addCandidate(wpDir, "766_36E34693-9CB6-47B6-96B2-101FE7557AE7.jpg", "executive_office", "Office desk seated in beige knit sweater");
addCandidate(wpDir, "922_certificate-6.jpg", "executive_office", "Office desk in knit sweater");
addCandidate(aixDir, "Capturdeecrandin2026-04-16la00.29.05-_39vnELK57LwkgzqqCXf-g.png", "executive_office", "Chestertons Global Network wall with Gentlemans Journal");
addCandidate(aixDir, "Capturdeecrandin2026-04-15la23.15.43-IiiqlEP4v-AYV5JwXlNH-g.png", "executive_office", "Generali branding wall with thumbs up");

// 3. Site Visits, Terraces & Developments
addCandidate(aixDir, "Capturdeecrandin2025-05-10la16.15.58-uv_PCWufaosgW10_37Bx7w.png", "developments_terrace", "Construction terrace overlooking SkyTower in hard hat");
addCandidate(wpDir, "805_Captura-de-ecran-din-2024-03-01-la-11.11.02.png", "developments_terrace", "Construction terrace overlooking SkyTower (WP)");
addCandidate(aixDir, "Capturdeecrandin2025-05-10la16.20.16-ps_-ClzOFF965DxENEJaSA.png", "developments_terrace", "Balcony in blue Armani Exchange blazer");
addCandidate(wpDir, "933_certificate-3.jpg", "developments_terrace", "Balcony in blue blazer (WP)");
addCandidate(aixDir, "certificate3-x9QM8xDX3rtgmndAF1CswA.jpg", "developments_terrace", "Balcony in blue blazer (Aix)");
addCandidate(aixDir, "Capturdeecrandin2025-05-10la16.20.59-mfFpUKw5vQ0XXVMs9StLMA.png", "developments_terrace", "Luxury apartment dining space in burgundy shirt");
addCandidate(wpDir, "887_certificate.jpg", "developments_terrace", "Penthouse terrace overlooking lake in burgundy shirt");
addCandidate(wpDir, "974_certificate-5-1.jpg", "developments_terrace", "Penthouse terrace overlooking lake (duplicate)");
addCandidate(aixDir, "certificate-B0k9AIZ2ohS9B-ByGHMUbQ.jpg", "developments_terrace", "Penthouse terrace overlooking lake (Aix)");
addCandidate(wpDir, "853_Captura-de-ecran-din-2024-07-06-la-16.41.58.png", "developments_terrace", "Curved glass terrace with sunglasses");
addCandidate(wpDir, "854_Captura-de-ecran-din-2024-07-06-la-16.42.34.png", "developments_terrace", "Luxury dining room with chandelier seated");
addCandidate(aixDir, "67EF9918-1D48-42FF-8B56-DA0B8D67A4DC-IIS5ZRIql90K-aMd21CfMA.JPG", "developments_terrace", "Penthouse terrace dining outdoor table in white shirt");
addCandidate(wpDir, "589_a0aed5d6-f810-4032-9555-a6f0f3f606fd.jpg", "developments_terrace", "Penthouse balcony night shot with city skyline");

// 4. Gala Events, Networking & Associate Appearances
addCandidate(wpDir, "1011_e88982a3-1ee3-4905-82c7-fc815afd0198.jpg", "events_networking", "Chestertons gala event with associate in vest");
addCandidate(wpDir, "852_Captura-de-ecran-din-2024-07-06-la-16.38.26.png", "events_networking", "Dinner toast raising champagne glass with partner");
addCandidate(wpDir, "783_Captura-de-ecran-din-2024-02-26-la-10.59.16.png", "events_networking", "Terrace consultation with associate holding document");
addCandidate(wpDir, "828_D192FAF8-6EAC-4E70-BF64-34954C2C674B.jpg", "events_networking", "Walking through residential development with associates");
addCandidate(wpDir, "839_IMG-20240404-WA0000.jpg", "events_networking", "Seated in modern round armchair against black marble");
addCandidate(wpDir, "825_Ia€™ll-take-a-moment-to-appreciate-myself-dŸ¥‚.jpg", "events_networking", "Celebrating with champagne flute toast");
addCandidate(wpDir, "697_a2842b38-9e91-4bf2-8b26-2ce4f6a8ee2c.jpg", "events_networking", "Dinner networking toast with associate");

// 5. Complete Event Keynote / Presentation Series (IMG_4296 to IMG_4327)
const eventFiles = [
  "325_IMG_4296.png", "326_IMG_4298.png", "327_IMG_4299.png", "354_IMG_4300.png",
  "355_IMG_4301.png", "356_IMG_4302.png", "357_IMG_4303.png", "358_IMG_4304.png",
  "359_IMG_4305.png", "360_IMG_4306.png", "361_IMG_4307.png", "365_IMG_4311.png",
  "367_IMG_4313.png", "368_IMG_4314.png", "370_IMG_4316.png", "371_IMG_4317.png",
  "372_IMG_4318.png", "478_IMG_4319-1.png", "374_IMG_4320.png", "375_IMG_4321.png",
  "376_IMG_4322.png", "377_IMG_4323.png", "405_IMG_4327.png"
];
for (const ef of eventFiles) {
  addCandidate(wpDir, ef, "conference_keynote", `Keynote and networking event series: ${ef}`);
}

// 6. Complete Outdoor & Architectural Photoshoot (IMG_1517 to IMG_2667 & IMG_3792 to IMG_8287)
const outdoorPairs = [
  { wp: "917_IMG_1517-scaled.jpg", aix: null, name: "IMG_1517" },
  { wp: "921_IMG_1522-scaled.jpg", aix: "IMG_1522-rQu0wew1ziD0hE0QM6qUmw.jpg", name: "IMG_1522" },
  { wp: "919_IMG_1571-scaled.jpg", aix: "IMG_1571-2R1UN5GbyRIqgbGZUl_nYw.jpg", name: "IMG_1571" },
  { wp: "920_IMG_1582-scaled.jpg", aix: "IMG_1582-zj4A01dtMLmrOlZF9dreLQ.jpg", name: "IMG_1582" },
  { wp: "924_IMG_2182-scaled.jpg", aix: "IMG_2182-9b6bsxtfM9U7GwZCjkD-Rg.jpg", name: "IMG_2182" },
  { wp: "925_IMG_2227-scaled.jpg", aix: null, name: "IMG_2227" },
  { wp: "926_IMG_2279-scaled.jpg", aix: null, name: "IMG_2279" },
  { wp: "927_IMG_2301-scaled.jpg", aix: null, name: "IMG_2301" },
  { wp: "928_IMG_2363-scaled.jpg", aix: "IMG_2363-wN25RdYf7EjGHGK4CmVtxQ.jpg", name: "IMG_2363" },
  { wp: "929_IMG_2531-scaled.jpg", aix: "IMG_2531-tGA6aJsnSjfqraCUcFnilg.jpg", name: "IMG_2531" },
  { wp: "930_IMG_2618-scaled.jpg", aix: null, name: "IMG_2618" },
  { wp: "931_IMG_2655-scaled.jpg", aix: "IMG_2655-N3A0M3iWMZkhskzg1fsDcw.JPG", name: "IMG_2655" },
  { wp: "932_IMG_2667-scaled.jpg", aix: null, name: "IMG_2667" },
  { wp: "1009_IMG_3792-scaled.jpg", aix: "IMG_3792-al0OjkaCP0_SITZ5q6ZNOg.jpg", name: "IMG_3792" },
  { wp: "1007_IMG_4029-scaled.jpg", aix: "IMG_4029-RDg3d0NdbR7_9RpYdLzKQg.JPG", name: "IMG_4029" },
  { wp: "803_IMG_4635-2.jpg", aix: null, name: "IMG_4635" },
  { wp: "691_IMG_4834.jpg", aix: null, name: "IMG_4834" },
  { wp: "688_IMG_4835.jpg", aix: null, name: "IMG_4835" },
  { wp: "762_IMG_4843.jpg", aix: null, name: "IMG_4843" },
  { wp: "771_IMG_4897.png", aix: null, name: "IMG_4897" },
  { wp: "1006_IMG_5244-2.jpg", aix: null, name: "IMG_5244" },
  { wp: "918_IMG_5321.jpg", aix: "IMG_5321-kL2V5Qa6E3KCKJNDgj3GJA.jpg", name: "IMG_5321" },
  { wp: "806_IMG_5659-scaled.jpg", aix: null, name: "IMG_5659" },
  { wp: "804_IMG_5660-scaled.jpg", aix: null, name: "IMG_5660" },
  { wp: null, aix: "IMG_5789-taaEU-AHhTWN-LMNPDT-dw.jpg", name: "IMG_5789" },
  { wp: "823_IMG_5791-scaled.jpg", aix: null, name: "IMG_5791" },
  { wp: "833_IMG_6868-1-scaled.jpg", aix: null, name: "IMG_6868" },
  { wp: "827_IMG_6913-scaled.jpg", aix: null, name: "IMG_6913" },
  { wp: "832_IMG_7438-scaled.jpg", aix: "IMG_7438-6aNAXuE1mhvI72Lmdi4xeg.jpg", name: "IMG_7438" },
  { wp: "1008_IMG_7760.jpg", aix: null, name: "IMG_7760" },
  { wp: "1012_IMG_8287.jpg", aix: null, name: "IMG_8287" }
];

for (const pair of outdoorPairs) {
  if (pair.wp) addCandidate(wpDir, pair.wp, "editorial_lifestyle", `Photoshoot series: ${pair.name} (WP)`);
  if (pair.aix) addCandidate(aixDir, pair.aix, "editorial_lifestyle", `Photoshoot series: ${pair.name} (Aix)`);
}

console.log(`Total candidate files registered: ${candidates.length}`);

// Group by visual equivalence or distinct photo
// To avoid exact duplicates, we check hash and pair correlation
const distinctPhotos = [];
const hashSeen = new Set();

// Deduplicate exact bitwise matches first
for (const cand of candidates) {
  if (hashSeen.has(cand.hash)) {
    console.log(`[Deduplicate Hash] Skipping exact bitwise duplicate: ${cand.filename}`);
    continue;
  }
  hashSeen.add(cand.hash);
  distinctPhotos.push(cand);
}

console.log(`After bitwise deduplication: ${distinctPhotos.length} unique image files`);

fs.writeFileSync("scripts/verified_personal_candidates.json", JSON.stringify(distinctPhotos, null, 2));
