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

// Photo data structure - add your photos here
export const photos: Photo[] = [
  // TODO: Add photos as they are uploaded
  // Example:
  // {
  //   id: "portrait-01",
  //   src: "/media/photos/portraits/portrait-01.jpg",
  //   alt: "Cristian Văduva",
  //   category: "portrait",
  //   roles: ["hero", "portrait", "executive", "featured"],
  //   featured: true,
  //   position: "center",
  //   aspectRatio: "portrait",
  // },
];

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
