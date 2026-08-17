export interface Project {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
  status: "active" | "in-development" | "planned";
  order: number;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
}

export interface MediaItem {
  id: string;
  src: string;
  alt: string;
  category: "personal" | "business" | "events" | "real-estate" | "portraits";
  title?: string;
  description?: string;
  featured: boolean;
}

export interface VideoItem {
  id: string;
  type: "video" | "short";
  title: string;
  youtubeUrl: string;
  category: string;
  featured?: boolean;
  description?: string;
  publishedAt?: string;
  thumbnail?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  displayName: string;
}

export interface ContactInfo {
  email: string;
  socials: SocialLink[];
}
