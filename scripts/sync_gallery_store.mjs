import fs from "fs";

const manifest = JSON.parse(fs.readFileSync("public/media/cristian-vaduva/personal/manifest.json", "utf8"));
const existingPhotos = fs.existsSync("data/photos.json")
  ? JSON.parse(fs.readFileSync("data/photos.json", "utf8"))
  : [];

// Map personal category to gallery store category
function mapCategory(cat) {
  switch (cat) {
    case "portraits": return "PORTRAITS";
    case "advisory": return "BUSINESS";
    case "field": return "REAL ESTATE";
    case "events": return "MEDIA";
    case "lifestyle": return "EDITORIAL";
    default: return "LIFESTYLE";
  }
}

let sortOrder = 1;
const newStoredPhotos = manifest.map((item) => {
  return {
    id: item.id,
    src: item.localPath,
    public_url: item.localPath,
    storage_path: item.localPath.replace(/^\//, ""),
    alt: `Cristian Văduva — ${item.caption}`,
    category: mapCategory(item.category),
    title: item.caption,
    subtitle: item.categoryLabel,
    caption: item.depictionStatus,
    location: item.category === "events" ? "Bucharest / Industry Summit" : (item.category === "field" ? "Bucharest Prime Axis" : "Executive Office"),
    year: "2024–2026",
    aspectRatio: item.orientation,
    orientation: item.orientation,
    featured: item.category === "portraits" || item.category === "advisory",
    hero: item.id === "photo-cv-001",
    sort_order: sortOrder++,
    createdAt: new Date().toISOString()
  };
});

// Append existing architecture photos at the end if desired, or replace
const combined = [...newStoredPhotos, ...existingPhotos.filter(p => !p.id.startsWith("photo-cv-0"))];

fs.writeFileSync("data/photos.json", JSON.stringify(combined, null, 2));
console.log(`Updated data/photos.json with ${combined.length} photos (${newStoredPhotos.length} personal photos of Cristian Văduva + ${existingPhotos.length} legacy entries)`);
