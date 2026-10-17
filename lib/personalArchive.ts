// lib/personalArchive.ts
// Strictly verified authentic photographs of Cristian Văduva and curated architectural monographs

export interface PersonalPhotoItem {
  id: string;
  filename: string;
  localPath: string;
  category: "portraits" | "advisory" | "field" | "architecture";
  categoryLabel: string;
  depictionStatus: string;
  caption: string;
  orientation: "portrait" | "landscape" | "square";
  sourceUrl: string;
  sourcePage: string;
  fileSizeFormatted: string;
  width?: number;
  height?: number;
  verifiedAuthentic: boolean;
}

export const personalArchivePhotos: PersonalPhotoItem[] = [
  {
    "id": "photo-cv-01",
    "filename": "cristian-vaduva-desk-advisor.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-desk-advisor.jpg",
    "category": "portraits",
    "categoryLabel": "Official Portraits",
    "depictionStatus": "Cristian Văduva at executive desk in royal blue Armani Exchange blazer with MacBook",
    "caption": "Executive Advisory & Portfolio Direction",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/02/Cristian-Vaduva.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "88 KB",
    "width": 1024,
    "height": 905,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-02",
    "filename": "cristian-vaduva-property-strategist.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-property-strategist.jpg",
    "category": "portraits",
    "categoryLabel": "Official Portraits",
    "depictionStatus": "Cristian Văduva seated in Armani Exchange blue blazer with Forbes and Real Estate publications",
    "caption": "Real Estate Strategist & Sovereign Advisor",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "1712 KB",
    "width": 1242,
    "height": 1354,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-03",
    "filename": "cristian-vaduva-financial-analyst.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-financial-analyst.jpg",
    "category": "advisory",
    "categoryLabel": "Advisory & Modeling",
    "depictionStatus": "Cristian Văduva conducting quantitative underwriting and development modeling at desk",
    "caption": "Financial Underwriting & Development Modeling",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "1245 KB",
    "width": 1242,
    "height": 967,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-04",
    "filename": "cristian-vaduva-executive-suite.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-executive-suite.jpg",
    "category": "portraits",
    "categoryLabel": "Official Portraits",
    "depictionStatus": "Cristian Văduva in white executive shirt and tie at desk with MacBook and AiXLuxury banner",
    "caption": "Exclusive Residences Worldwide Consultation",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/01/certificate-7.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "212 KB",
    "width": 1080,
    "height": 721,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-05",
    "filename": "cristian-vaduva-executive-advisory.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-executive-advisory.jpg",
    "category": "portraits",
    "categoryLabel": "Official Portraits",
    "depictionStatus": "Cristian Văduva in executive vest, tie, and watch: \"Because you deserve more than just an address\"",
    "caption": "Principal Fiduciary Client Mandate",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/01/certificate-1.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "218 KB",
    "width": 1080,
    "height": 791,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-06",
    "filename": "cristian-vaduva-golden-desk.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-golden-desk.jpg",
    "category": "advisory",
    "categoryLabel": "Advisory & Modeling",
    "depictionStatus": "Cristian Văduva seated at sculptural golden executive desk with legal library and candelabra",
    "caption": "Sovereign Wealth & High-Yield Strategy Suite",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2025/10/certificate-4.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "495 KB",
    "width": 1080,
    "height": 1271,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-07",
    "filename": "cristian-vaduva-client-consultation.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-client-consultation.jpg",
    "category": "portraits",
    "categoryLabel": "Official Portraits",
    "depictionStatus": "Cristian Văduva in smart knitwear at desk advising on capital appreciation and tailored financing",
    "caption": "Private Wealth Building & Tailored Financing",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2025/10/certificate-6.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "386 KB",
    "width": 1079,
    "height": 1615,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-08",
    "filename": "cristian-vaduva-yacht-kid-terrace.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-yacht-kid-terrace.jpg",
    "category": "field",
    "categoryLabel": "Field & On-Site Walkthroughs",
    "depictionStatus": "Cristian Văduva on the panoramic curved terrace of Yacht Kid luxury residential complex",
    "caption": "Architectural Walkthrough — Yacht Kid Terrace",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2025/10/certificate-3.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "460 KB",
    "width": 1080,
    "height": 1355,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-09",
    "filename": "cristian-vaduva-emerald-salon.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-emerald-salon.jpg",
    "category": "portraits",
    "categoryLabel": "Official Portraits",
    "depictionStatus": "Cristian Văduva seated in emerald armchair before bookmatched marble wall and acoustic wood slats",
    "caption": "Private Residence Salon & Interior Architecture",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/07/IMG-20240404-WA0000.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "383 KB",
    "width": 934,
    "height": 1293,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-10",
    "filename": "cristian-vaduva-onsite-development.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-onsite-development.jpg",
    "category": "field",
    "categoryLabel": "Field & On-Site Walkthroughs",
    "depictionStatus": "Cristian Văduva on-site inspection with development team at Northern Bucharest luxury villa project",
    "caption": "On-Site Development Inspection & Construction Audit",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/07/D192FAF8-6EAC-4E70-BF64-34954C2C674B.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "600 KB",
    "width": 1272,
    "height": 1535,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-11",
    "filename": "cristian-vaduva-yacht-kid-facade.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-yacht-kid-facade.jpg",
    "category": "field",
    "categoryLabel": "Field & On-Site Walkthroughs",
    "depictionStatus": "Cristian Văduva standing before the Yacht Kid luxury residential complex facade in Bucharest",
    "caption": "Residential Masterplan Direction — Yacht Kid",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/07/cristianvaduva.com_.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "437 KB",
    "width": 1414,
    "height": 788,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-12",
    "filename": "cristian-vaduva-oasis-villas.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-oasis-villas.jpg",
    "category": "field",
    "categoryLabel": "Field & On-Site Walkthroughs",
    "depictionStatus": "Cristian Văduva presenting the Oasis Luxury Villas private estate development in Pipera",
    "caption": "Oasis Luxury Villas Monograph & Asset Delivery",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/02/Cristian-Vaduva-2.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "709 KB",
    "width": 1414,
    "height": 1782,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-13",
    "filename": "cristian-vaduva-penthouse-toast.jpg",
    "localPath": "/images/personal/archive/cristian-vaduva-penthouse-toast.jpg",
    "category": "field",
    "categoryLabel": "Field & On-Site Walkthroughs",
    "depictionStatus": "Cristian Văduva celebrating transaction closing overlooking central Bucharest skyline",
    "caption": "Penthouse Balcony Perspective & Milestone Closing",
    "orientation": "portrait",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/07/Ia€™ll-take-a-moment-to-appreciate-myself-dŸ¥‚.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "331 KB",
    "width": 1224,
    "height": 1858,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-14",
    "filename": "yacht-kid-luxury-pool.jpg",
    "localPath": "/images/personal/archive/yacht-kid-luxury-pool.jpg",
    "category": "architecture",
    "categoryLabel": "Architectural Studies",
    "depictionStatus": "Curated luxury residence swimming pool and architectural grounds at Yacht Kid",
    "caption": "Architectural Amenities & Lap Pool — Yacht Kid",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/01/certificate.jpeg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "234 KB",
    "width": 1080,
    "height": 715,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-15",
    "filename": "luxury-residence-dining-salon.jpg",
    "localPath": "/images/personal/archive/luxury-residence-dining-salon.jpg",
    "category": "architecture",
    "categoryLabel": "Architectural Studies",
    "depictionStatus": "Private architectural inspection of luxury residence dining salon with custom lighting",
    "caption": "Interior Architectural Inspection — Private Dining Salon",
    "orientation": "landscape",
    "sourceUrl": "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    "sourcePage": "https://cristianvaduva.com",
    "fileSizeFormatted": "410 KB",
    "width": 1600,
    "height": 1200,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-16",
    "filename": "danube-pontoon-nautical-living.jpg",
    "localPath": "/images/personal/archive/danube-pontoon-nautical-living.jpg",
    "category": "architecture",
    "categoryLabel": "Architectural Studies",
    "depictionStatus": "Danube Nautical Floating Residence architectural exterior (Photography: Adrian Bîrgăuan)",
    "caption": "Danube Pontoon Living — Nautical Architecture (Photo: Adrian Bîrgăuan)",
    "orientation": "landscape",
    "sourceUrl": "https://aixluxury.com/images/1920/19210911/70_AdrianBirgauan.ro-SDo9O-XQsR8shwKdX4fMlQ.jpg",
    "sourcePage": "https://aixluxury.com",
    "fileSizeFormatted": "1113 KB",
    "width": 1920,
    "height": 1080,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-17",
    "filename": "danube-pontoon-river-deck.jpg",
    "localPath": "/images/personal/archive/danube-pontoon-river-deck.jpg",
    "category": "architecture",
    "categoryLabel": "Architectural Studies",
    "depictionStatus": "Danube Nautical Floating Residence panoramic river deck (Photography: Adrian Bîrgăuan)",
    "caption": "Nautical Solarium Deck — Danube Living (Photo: Adrian Bîrgăuan)",
    "orientation": "landscape",
    "sourceUrl": "https://aixluxury.com/images/1920/19210909/75_AdrianBirgauan.ro-INnVOLC0oM9_Ai6GpFmsSQ.jpg",
    "sourcePage": "https://aixluxury.com",
    "fileSizeFormatted": "1035 KB",
    "width": 1920,
    "height": 1080,
    "verifiedAuthentic": true
  },
  {
    "id": "photo-cv-18",
    "filename": "danube-pontoon-interior-suite.jpg",
    "localPath": "/images/personal/archive/danube-pontoon-interior-suite.jpg",
    "category": "architecture",
    "categoryLabel": "Architectural Studies",
    "depictionStatus": "Danube Nautical Floating Residence interior salon suite (Photography: Adrian Bîrgăuan)",
    "caption": "Nautical Master Suite — Architectural Design (Photo: Adrian Bîrgăuan)",
    "orientation": "landscape",
    "sourceUrl": "https://aixluxury.com/images/1920/19210953/196_AdrianBirgauan.ro-pMAJeVN60F6zeqXTuYNQEg.jpg",
    "sourcePage": "https://aixluxury.com",
    "fileSizeFormatted": "738 KB",
    "width": 1920,
    "height": 1280,
    "verifiedAuthentic": true
  }
];

export function getPersonalArchivePhotos(): PersonalPhotoItem[] {
  return personalArchivePhotos;
}

export function getPersonalPhotosByCategory(category: string): PersonalPhotoItem[] {
  if (category === "all") return personalArchivePhotos;
  return personalArchivePhotos.filter((p) => p.category === category);
}
