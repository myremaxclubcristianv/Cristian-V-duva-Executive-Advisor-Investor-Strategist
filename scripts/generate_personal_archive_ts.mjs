import fs from "fs";

const manifest = JSON.parse(fs.readFileSync("public/media/cristian-vaduva/personal/manifest.json", "utf8"));

const tsCode = `// lib/personalArchive.ts
// Comprehensive archive of strictly verified authentic photographs of Cristian Văduva
// Sourced from cristianvaduva.com, aixluxury.com, and official first-party media repositories

export interface PersonalPhotoItem {
  id: string;
  filename: string;
  localPath: string;
  category: "portraits" | "advisory" | "field" | "events" | "lifestyle";
  categoryLabel: string;
  depictionStatus: string;
  caption: string;
  orientation: "portrait" | "landscape" | "square";
  sourceUrl: string;
  sourceDomain: string;
  sourcePage: string;
  originalFilename: string;
  fileSizeFormatted: string;
  fileSizeBytes: number;
  width?: number;
  height?: number;
  sha256: string;
  verifiedAuthentic: boolean;
}

export const personalArchivePhotos: PersonalPhotoItem[] = ${JSON.stringify(manifest, null, 2)};

export function getPersonalArchivePhotos(): PersonalPhotoItem[] {
  return personalArchivePhotos;
}

export function getPersonalPhotosByCategory(category: string): PersonalPhotoItem[] {
  if (category === "all") return personalArchivePhotos;
  return personalArchivePhotos.filter((p) => p.category === category);
}
`;

fs.writeFileSync("lib/personalArchive.ts", tsCode);
console.log(`Successfully generated lib/personalArchive.ts with ${manifest.length} verified personal photographs!`);
