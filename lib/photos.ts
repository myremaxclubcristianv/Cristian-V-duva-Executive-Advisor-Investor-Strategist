export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  roles: PhotoRole[];
  featured?: boolean;
  position?: string; // center, top, bottom, left, right
  title?: string;
  description?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "cinematic";
}

export type PhotoCategory =
  | "executive"
  | "business"
  | "real-estate"
  | "lifestyle"
  | "travel"
  | "event"
  | "media"
  | "investment"
  | "behind-the-scenes"
  | "portrait"
  | "luxury"
  | "project";

export type PhotoRole =
  | "hero"
  | "portrait"
  | "executive"
  | "business"
  | "real-estate"
  | "lifestyle"
  | "travel"
  | "event"
  | "media"
  | "investment"
  | "behind-the-scenes"
  | "timeline"
  | "project"
  | "featured";

let photos: Photo[] = [];
// Node.js imports are loaded lazily in server environment
// (removed static imports to prevent client-side bundling)

  const getAllPhotos = (): Photo[] => {
    // Server‑only: avoid filesystem access in client bundle.
    if (typeof window !== 'undefined') {
      return [];
    }
    // Lazy import for filesystem access.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const path = require('path');
    const photosDir = path.join(process.cwd(), 'public', 'media', 'photos');
    const supportedExt = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const walk = (dir: string, base: string = ''): Photo[] => {
      let results: Photo[] = [];
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const entryPath = path.join(dir, entry.name);
        const relPath = path.join(base, entry.name);
        if (entry.isDirectory()) {
          results = results.concat(walk(entryPath, relPath));
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (supportedExt.includes(ext)) {
            const id = relPath.replace(/\\/g, "/");
            const src = "/media/photos/" + id;
            const name = path.basename(entry.name, ext);
            const alt = name.replace(/[_-]+/g, " ").trim();
            const photo: Photo = {
              id,
              src,
              alt,
              category: "media",
              roles: [],
            };
            results.push(photo);
          }
        }
      }
      return results;
    };
    if (!fs.existsSync(photosDir)) {
      return [];
    }
    return walk(photosDir);
  };
  photos = getAllPhotos();

// Helper functions to get photos by role
export const getPhotosByRole = (role: PhotoRole): Photo[] => {
  return photos.filter((photo) => photo.roles.includes(role));
};

export const getPhotosByCategory = (category: PhotoCategory): Photo[] => {
  return photos.filter((photo) => photo.category === category);
};

export const getFeaturedPhotos = (): Photo[] => {
  return photos.filter((photo) => photo.featured);
};

export const getHeroPhoto = (): Photo | undefined => {
  return photos.find((photo) => photo.roles.includes("hero"));
};

export const getPortraitPhotos = (): Photo[] => {
  return photos.filter((photo) => photo.roles.includes("portrait"));
};

export const getBusinessPhotos = (): Photo[] => {
  return photos.filter((photo) => photo.roles.includes("business"));
};

export const getRealEstatePhotos = (): Photo[] => {
  return photos.filter((photo) => photo.roles.includes("real-estate"));
};

export const getLifestylePhotos = (): Photo[] => {
  return photos.filter((photo) => photo.roles.includes("lifestyle"));
};

export const getTravelPhotos = (): Photo[] => {
  return photos.filter((photo) => photo.roles.includes("travel"));
};

export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find((photo) => photo.id === id);
};
