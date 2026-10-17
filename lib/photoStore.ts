import fs from "fs";
import path from "path";
import { getSupabaseAdminClient } from "@/lib/supabase";

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
  featured: boolean;
  hero: boolean;
  sort_order: number;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const PHOTOS_FILE = path.join(DATA_DIR, "photos.json");
const SUPABASE_BUCKET_NAME = "executive-photos";

// Initial verified high-resolution archive for Cristian Văduva
const INITIAL_PHOTOS: StoredPhoto[] = [
  {
    id: "photo-arch-hero-monument",
    src: "/images/architecture/hero-monument.jpg",
    public_url: "/images/architecture/hero-monument.jpg",
    storage_path: "architecture/hero-monument.jpg",
    alt: "Cristian Văduva — Monumental Executive Architectural Environment",
    category: "BUSINESS",
    title: "Monumental Executive Environment",
    subtitle: "Architectural Sovereignty",
    caption: "Monumental contemporary architecture and geometric glass reflecting pool in the private executive enclave.",
    location: "Bucharest / Monaco",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: true,
    sort_order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-arch-monaco-cliffside",
    src: "/images/architecture/monaco-cliffside.jpg",
    public_url: "/images/architecture/monaco-cliffside.jpg",
    storage_path: "architecture/monaco-cliffside.jpg",
    alt: "Monaco Cap d'Ail Coastal Architectural Residence",
    category: "REAL ESTATE",
    title: "Monaco Coastal Pavilion",
    subtitle: "Ultra-Prime Off-Market Acquisition",
    caption: "Cantilevered raw travertine slabs and bronze framed glass walls overlooking the Mediterranean at golden hour.",
    location: "Monaco / Cap d'Ail",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: false,
    sort_order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-arch-executive-study",
    src: "/images/architecture/executive-study.jpg",
    public_url: "/images/architecture/executive-study.jpg",
    storage_path: "architecture/executive-study.jpg",
    alt: "Cristian Văduva — Private Advisory Salon & Study",
    category: "BUSINESS",
    title: "Private Advisory Salon",
    subtitle: "Strategic Due Diligence Desk",
    caption: "Monolithic dark basalt stone walls, fluted walnut millwork, and floor-to-ceiling glass wall looking onto private courtyard.",
    location: "Bucharest Diplomatic Axis",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: false,
    sort_order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-hero",
    src: "/residence/office.png",
    public_url: "/residence/office.png",
    storage_path: "residence/office.png",
    alt: "Concept Arhitectural — Birou Executiv cu Finisaje din Nuc și Marmură",
    category: "BUSINESS",
    title: "Studiu Conceptual Birou Executiv",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Studiu conceptual de arhitectură de interior pentru spațiu de consultanță executivă.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: true, // EXPLICIT DEFAULT HERO
    sort_order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-2",
    src: "/residence/exterior.png",
    public_url: "/residence/exterior.png",
    storage_path: "residence/exterior.png",
    alt: "Concept Arhitectural — Fațadă Rezidențială Contemporană",
    category: "REAL ESTATE",
    title: "Studiu Volumetric Fațadă",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă a unei volumetrii rezidențiale contemporane cu vitraje ample.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: false,
    sort_order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-3",
    src: "/residence/terrace.png",
    public_url: "/residence/terrace.png",
    storage_path: "residence/terrace.png",
    alt: "Concept Arhitectural — Terasă Panoramică Deschisă",
    category: "TRAVEL",
    title: "Studiu Terasă Panoramică",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă a unei terase de nivel superior cu deschidere panoramică.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: false,
    sort_order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-4",
    src: "/residence/library.png",
    public_url: "/residence/library.png",
    storage_path: "residence/library.png",
    alt: "Concept Arhitectural — Spațiu Bibliotecă și Studiu",
    category: "LIFESTYLE",
    title: "Studiu Conceptual Bibliotecă",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă a unui spațiu de studiu cu mobilier integrat și iluminare caldă.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: true,
    hero: false,
    sort_order: 4,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-5",
    src: "/residence/living.png",
    public_url: "/residence/living.png",
    storage_path: "residence/living.png",
    alt: "Concept Arhitectural — Salon Principal cu Dublă Înălțime",
    category: "REAL ESTATE",
    title: "Studiu Spațial Salon Principal",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă reprezentând un living generos cu lumină naturală și finisaje premium.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    hero: false,
    sort_order: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-6",
    src: "/residence/cinema.png",
    public_url: "/residence/cinema.png",
    storage_path: "residence/cinema.png",
    alt: "Concept Arhitectural — Spațiu Multimedia și Proiecție",
    category: "MEDIA",
    title: "Studiu Conceptual Sală Media",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă pentru configurarea acustică și vizuală a unei săli media private.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    hero: false,
    sort_order: 6,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-7",
    src: "/residence/command.png",
    public_url: "/residence/command.png",
    storage_path: "residence/command.png",
    alt: "Concept Arhitectural — Stație de Monitorizare și Analiză",
    category: "BUSINESS",
    title: "Studiu Conceptual Stație de Lucru",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă a unui post de lucru tehnologizat dedicat analizei datelor de piață.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    hero: false,
    sort_order: 7,
    createdAt: new Date().toISOString(),
  },
  {
    id: "photo-cv-8",
    src: "/residence/gallery.png",
    public_url: "/residence/gallery.png",
    storage_path: "residence/gallery.png",
    alt: "Concept Arhitectural — Galerie Spațială Interioară",
    category: "EDITORIAL",
    title: "Studiu Conceptual Galerie",
    subtitle: "Concept Arhitectural · Randare Ilustrativă",
    caption: "Randare ilustrativă a unui culoar expozițional pentru evidențierea operelor și volumelor de design.",
    location: "București",
    year: "2026",
    aspectRatio: "landscape",
    orientation: "landscape",
    featured: false,
    hero: false,
    sort_order: 8,
    createdAt: new Date().toISOString(),
  },
];

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Upload buffer directly to Supabase Storage bucket
 */
export async function uploadToSupabaseStorage(
  fileName: string,
  buffer: Buffer,
  contentType: string
): Promise<{ publicUrl: string; storagePath: string } | null> {
  const { client } = getSupabaseAdminClient();
  if (!client) {
    return null;
  }

  try {
    // Ensure bucket exists or create it
    const { data: buckets } = await client.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === SUPABASE_BUCKET_NAME);

    if (!bucketExists) {
      await client.storage.createBucket(SUPABASE_BUCKET_NAME, {
        public: true,
        fileSizeLimit: 25 * 1024 * 1024, // 25MB
      });
    }

    const storagePath = `photos/${Date.now()}_${fileName}`;
    const { error: uploadError } = await client.storage
      .from(SUPABASE_BUCKET_NAME)
      .upload(storagePath, buffer, {
        contentType,
        upsert: true,
      });

    if (uploadError) {
      console.error("[SUPABASE_STORAGE_ERROR] Upload failed:", uploadError);
      return null;
    }

    const { data } = client.storage.from(SUPABASE_BUCKET_NAME).getPublicUrl(storagePath);
    return {
      publicUrl: data.publicUrl,
      storagePath,
    };
  } catch (err) {
    console.error("[SUPABASE_STORAGE_EXCEPTION]", err);
    return null;
  }
}

/**
 * Delete file from Supabase Storage bucket
 */
export async function deleteFromSupabaseStorage(storagePath: string): Promise<boolean> {
  const { client } = getSupabaseAdminClient();
  if (!client || !storagePath) return false;

  try {
    const { error } = await client.storage.from(SUPABASE_BUCKET_NAME).remove([storagePath]);
    return !error;
  } catch {
    return false;
  }
}

/**
 * Get all photos sorted by sort_order
 */
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

/**
 * Get the single active Hero photo (Strictly 1)
 */
export function getHeroPhoto(): StoredPhoto {
  const photos = getAllStoredPhotos();
  const explicitHero = photos.find((p) => p.hero === true);
  if (explicitHero) return explicitHero;
  // Fallback to default initial desk photo
  return INITIAL_PHOTOS[0];
}

/**
 * Get all photos marked as Featured for the homepage archive
 */
export function getFeaturedStoredPhotos(): StoredPhoto[] {
  const photos = getAllStoredPhotos();
  return photos.filter((p) => p.featured === true);
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

/**
 * Add a new photo. If marked hero === true, automatically demotes previous hero.
 */
export function addStoredPhoto(newPhoto: Omit<StoredPhoto, "id" | "createdAt">): StoredPhoto {
  const current = getAllStoredPhotos();

  // If new photo is Hero, unset hero on all existing photos
  const sanitizedCurrent = newPhoto.hero
    ? current.map((p) => ({ ...p, hero: false, sort_order: (p.sort_order || 1) + 1 }))
    : current.map((p) => ({ ...p, sort_order: (p.sort_order || 1) + 1 }));

  const photo: StoredPhoto = {
    ...newPhoto,
    id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    public_url: newPhoto.public_url || newPhoto.src,
    orientation: newPhoto.orientation || newPhoto.aspectRatio || "landscape",
    aspectRatio: newPhoto.aspectRatio || newPhoto.orientation || "landscape",
    featured: Boolean(newPhoto.featured),
    hero: Boolean(newPhoto.hero),
    sort_order: 1,
    createdAt: new Date().toISOString(),
  };

  const updated = [photo, ...sanitizedCurrent];
  saveAllStoredPhotos(updated);
  return photo;
}

/**
 * Set a photo as Hero. Atomically ensures MAXIMUM ONE HERO.
 */
export function setHeroPhoto(id: string): StoredPhoto | null {
  const current = getAllStoredPhotos();
  const target = current.find((p) => p.id === id);
  if (!target) return null;

  const updated = current.map((p) => ({
    ...p,
    hero: p.id === id,
  }));

  saveAllStoredPhotos(updated);
  return { ...target, hero: true };
}

/**
 * Toggle Featured status for a photo
 */
export function toggleFeaturedPhoto(id: string, featured: boolean): StoredPhoto | null {
  const current = getAllStoredPhotos();
  const index = current.findIndex((p) => p.id === id);
  if (index === -1) return null;

  current[index] = {
    ...current[index],
    featured,
  };

  saveAllStoredPhotos(current);
  return current[index];
}

/**
 * Delete a photo and remove from storage
 */
export function deleteStoredPhoto(id: string): boolean {
  const current = getAllStoredPhotos();
  const photo = current.find((p) => p.id === id);
  if (!photo) return false;

  // Clean up Supabase storage if storage_path is present
  if (photo.storage_path) {
    deleteFromSupabaseStorage(photo.storage_path);
  }

  // Remove local copy if any
  if (photo.src && photo.src.startsWith("/uploads/photos/")) {
    try {
      const localPath = path.join(process.cwd(), "public", photo.src);
      if (fs.existsSync(localPath)) {
        fs.unlinkSync(localPath);
      }
    } catch {
      // Ignored
    }
  }

  const updated = current.filter((p) => p.id !== id);

  // If the deleted photo was Hero, make the first available photo the Hero
  if (photo.hero && updated.length > 0) {
    updated[0].hero = true;
  }

  return saveAllStoredPhotos(updated);
}

export function updateStoredPhoto(id: string, updates: Partial<StoredPhoto>): StoredPhoto | null {
  const current = getAllStoredPhotos();
  const index = current.findIndex((p) => p.id === id);
  if (index === -1) return null;

  // If updates include hero === true, unset on all other photos
  if (updates.hero === true) {
    current.forEach((p) => {
      p.hero = false;
    });
  }

  current[index] = {
    ...current[index],
    ...updates,
    public_url: updates.public_url || updates.src || current[index].public_url,
  };

  saveAllStoredPhotos(current);
  return current[index];
}
