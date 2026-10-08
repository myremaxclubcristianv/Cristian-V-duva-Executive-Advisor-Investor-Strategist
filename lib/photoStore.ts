import fs from "fs";
import path from "path";

export type PhotoCategory =
  | "PORTRAITS"
  | "EDITORIAL"
  | "BUSINESS"
  | "REAL ESTATE"
  | "TRAVEL"
  | "LIFESTYLE"
  | "MEDIA"
  | "ARCHIVE";

export type PhotoOrientation = "landscape" | "portrait" | "square";

export interface StoredPhoto {
  id: string;
  src: string;
  storage_path?: string;
  public_url?: string;
  alt: string;
  category: PhotoCategory;
  title: string;
  subtitle?: string;
  caption: string;
  location?: string;
  year?: string;
  aspectRatio?: PhotoOrientation;
  orientation?: PhotoOrientation;
  featured?: boolean;
  sort_order?: number;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const PHOTOS_FILE = path.join(DATA_DIR, "photos.json");

// Initial high-resolution photos catalog for Cristian Văduva
const INITIAL_PHOTOS: StoredPhoto[] = [
  {
    id: "photo-cv-1",
    src: "/residence/office.png",
    public_url: "/residence/office.png",
    alt: "Cristian Văduva — Executive Advisory Desk",
    category: "BUSINESS",
    title: "Executive Advisory Desk",
    subtitle: "Capital & Advisory Practice",
    caption: "High-discretion private consultation desk for European principals and institutional clients.",
    location: "Bucharest / Monaco",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    sort_order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-2",
    src: "/residence/exterior.png",
    public_url: "/residence/exterior.png",
    alt: "Herăstrău Prime Residence Architecture",
    category: "REAL ESTATE",
    title: "Herăstrău Prime Residence",
    subtitle: "Ultra-Prime Luxury Acquisition",
    caption: "Private luxury residential penthouse overlooking Herăstrău Park with bespoke Italian finishes.",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    sort_order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-3",
    src: "/residence/terrace.png",
    public_url: "/residence/terrace.png",
    alt: "Monaco & Riviera Executive Strategy",
    category: "TRAVEL",
    title: "Monaco Riviera Placement",
    subtitle: "Cross-Border Strategy",
    caption: "Cross-border capital placement & Mediterranean luxury real estate advisory.",
    location: "Monaco",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    sort_order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-4",
    src: "/residence/library.png",
    public_url: "/residence/library.png",
    alt: "Market Intelligence & Research Library",
    category: "LIFESTYLE",
    title: "Institutional Research Library",
    subtitle: "Analytical Rigor & Strategy",
    caption: "Surveillance study and deep financial modeling for luxury asset preservation.",
    location: "Monaco / Bucharest",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    sort_order: 4,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-5",
    src: "/residence/living.png",
    public_url: "/residence/living.png",
    alt: "Ultra-Prime Living Architecture",
    category: "REAL ESTATE",
    title: "Ultra-Prime Living Gallery",
    subtitle: "Interior Architecture",
    caption: "Bespoke craftsmanship and architectural distinction across prime residential spaces.",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    sort_order: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-6",
    src: "/residence/cinema.png",
    public_url: "/residence/cinema.png",
    alt: "Media & Digital Broadcast Studio",
    category: "MEDIA",
    title: "Official Media Studio",
    subtitle: "Broadcast & Keynotes",
    caption: "Executive commentary on real estate capital, risk structures, and financial strategy.",
    location: "Bucharest · Europe",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    sort_order: 6,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-7",
    src: "/residence/command.png",
    public_url: "/residence/command.png",
    alt: "AiX OS Market Pulse Intelligence",
    category: "BUSINESS",
    title: "AiX Market Pulse Station",
    subtitle: "Live Market Intelligence",
    caption: "Real-time real estate analytics, square meter yield trends, and cross-border indicators.",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    sort_order: 7,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-8",
    src: "/residence/gallery.png",
    public_url: "/residence/gallery.png",
    alt: "Private Art & Architecture Gallery",
    category: "EDITORIAL",
    title: "Architecture & Design Monograph",
    subtitle: "Private Visual Archive",
    caption: "Curated archive of architectural landmarks and bespoke structural aesthetics.",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    sort_order: 8,
    createdAt: new Date().toISOString(),
  },
];

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function getAllStoredPhotos(): StoredPhoto[] {
  try {
    ensureDirectoryExists(DATA_DIR);
    if (!fs.existsSync(PHOTOS_FILE)) {
      fs.writeFileSync(PHOTOS_FILE, JSON.stringify(INITIAL_PHOTOS, null, 2), "utf-8");
      return INITIAL_PHOTOS;
    }
    const raw = fs.readFileSync(PHOTOS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      fs.writeFileSync(PHOTOS_FILE, JSON.stringify(INITIAL_PHOTOS, null, 2), "utf-8");
      return INITIAL_PHOTOS;
    }
    return parsed.sort((a, b) => (a.sort_order || 999) - (b.sort_order || 999));
  } catch (err) {
    console.error("[PhotoStore] Error reading photos:", err);
    return INITIAL_PHOTOS;
  }
}

export function getFeaturedStoredPhotos(): StoredPhoto[] {
  const all = getAllStoredPhotos();
  return all.filter((p) => p.featured);
}

export function saveAllStoredPhotos(photos: StoredPhoto[]): boolean {
  try {
    ensureDirectoryExists(DATA_DIR);
    fs.writeFileSync(PHOTOS_FILE, JSON.stringify(photos, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("[PhotoStore] Error saving photos:", err);
    return false;
  }
}

export function addStoredPhoto(newPhoto: Omit<StoredPhoto, "id" | "createdAt">): StoredPhoto {
  const current = getAllStoredPhotos();
  const photo: StoredPhoto = {
    ...newPhoto,
    id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    public_url: newPhoto.public_url || newPhoto.src,
    orientation: newPhoto.orientation || newPhoto.aspectRatio || "landscape",
    aspectRatio: newPhoto.aspectRatio || newPhoto.orientation || "landscape",
    sort_order: 1,
    createdAt: new Date().toISOString(),
  };

  // Bump previous photos sort order
  const updatedCurrent = current.map((p, idx) => ({ ...p, sort_order: idx + 2 }));
  const updated = [photo, ...updatedCurrent];
  saveAllStoredPhotos(updated);
  return photo;
}

export function deleteStoredPhoto(id: string): boolean {
  const current = getAllStoredPhotos();
  const photo = current.find((p) => p.id === id);
  if (!photo) return false;

  // If local file exists, remove from disk
  if (photo.src && photo.src.startsWith("/uploads/photos/")) {
    try {
      const localPath = path.join(process.cwd(), "public", photo.src);
      if (fs.existsSync(localPath)) {
        fs.unlinkSync(localPath);
      }
    } catch (err) {
      console.error("[PhotoStore] Error unlinking file:", err);
    }
  }

  const updated = current.filter((p) => p.id !== id);
  return saveAllStoredPhotos(updated);
}

export function updateStoredPhoto(id: string, updates: Partial<StoredPhoto>): StoredPhoto | null {
  const current = getAllStoredPhotos();
  const index = current.findIndex((p) => p.id === id);
  if (index === -1) return null;
  current[index] = {
    ...current[index],
    ...updates,
    public_url: updates.src || updates.public_url || current[index].public_url,
  };
  saveAllStoredPhotos(current);
  return current[index];
}

export function reorderStoredPhotos(orderedIds: string[]): boolean {
  const current = getAllStoredPhotos();
  const photoMap = new Map(current.map((p) => [p.id, p]));
  const reordered: StoredPhoto[] = [];

  orderedIds.forEach((id, index) => {
    const p = photoMap.get(id);
    if (p) {
      reordered.push({ ...p, sort_order: index + 1 });
      photoMap.delete(id);
    }
  });

  // Append remaining unranked
  photoMap.forEach((p) => {
    reordered.push({ ...p, sort_order: reordered.length + 1 });
  });

  return saveAllStoredPhotos(reordered);
}
