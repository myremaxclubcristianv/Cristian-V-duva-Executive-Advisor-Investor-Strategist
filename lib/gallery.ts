export type GalleryCategory =
  | "ALL"
  | "PORTRAITS"
  | "LIFE"
  | "BUSINESS"
  | "TRAVEL"
  | "REAL ESTATE"
  | "MEDIA";

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "ALL">;
  title: string;
  subtitle?: string;
  src: string;
  caption: string;
  location?: string;
  year?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "p1",
    category: "PORTRAITS",
    title: "Executive Portrait Monograph",
    subtitle: "Executive Advisory Practice",
    src: "/residence/command.png",
    caption: "Cristian Văduva — Executive Advisor, Investor & Strategist",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "portrait",
  },
  {
    id: "re1",
    category: "REAL ESTATE",
    title: "Herăstrău Prime Residence",
    subtitle: "Ultra-Prime Luxury Acquisition",
    src: "/residence/exterior.png",
    caption: "Private luxury residential penthouse overlooking Herăstrău Park",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
  },
  {
    id: "b1",
    category: "BUSINESS",
    title: "Executive Advisory Suite",
    subtitle: "Capital & Advisory Mandates",
    src: "/residence/office.png",
    caption: "High-discretion private consultation desk for European principals",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
  },
  {
    id: "l1",
    category: "LIFE",
    title: "Architectural Library & Study",
    subtitle: "Monograph & Research Sanctuary",
    src: "/residence/library.png",
    caption: "Research & institutional market surveillance study",
    location: "Monaco / Bucharest",
    year: "2026",
    aspectRatio: "landscape",
  },
  {
    id: "t1",
    category: "TRAVEL",
    title: "Monaco Riviera Terrace",
    subtitle: "International Positioning",
    src: "/residence/terrace.png",
    caption: "Cross-border capital placement & Mediterranean luxury holdings",
    location: "Monaco",
    year: "2026",
    aspectRatio: "landscape",
  },
  {
    id: "m1",
    category: "MEDIA",
    title: "Official Commentary & Broadcast",
    subtitle: "Market Briefing & Keynotes",
    src: "/residence/cinema.png",
    caption: "Executive commentary on real estate capital, risk & financial strategy",
    location: "Bucharest · Europe",
    year: "2026",
    aspectRatio: "landscape",
  },
  {
    id: "re2",
    category: "REAL ESTATE",
    title: "Ultra-Prime Living Gallery",
    subtitle: "Interior Architecture",
    src: "/residence/living.png",
    caption: "Bespoke Italian craftsmanship & architectural detail",
    location: "Bucharest",
    year: "2026",
    aspectRatio: "landscape",
  },
  {
    id: "re3",
    category: "REAL ESTATE",
    title: "Private Art & Architecture Gallery",
    subtitle: "Cultural & Asset Preservation",
    src: "/residence/gallery.png",
    caption: "Curation of high-value tangible assets and architectural parcels",
    location: "Monaco / Dubai",
    year: "2026",
    aspectRatio: "landscape",
  },
];
