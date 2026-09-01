# PHOTO UPLOAD GUIDE & SYSTEM ARCHITECTURE FOR CRISTIAN VĂDUVA

This document specifies the exact directory structure, naming conventions, image formats, and dimensions for uploading photographs to the website.

---

## 1. DIRECTORY STRUCTURE

Upload photographs into their respective subdirectories within `/public/images/`:

```text
/public/images/
├── personal/
│   ├── portraits/    → Professional headshots, studio portraits, suit headshots
│   ├── editorial/    → Magazine-style portraits, architectural portraits, personal brand photos
│   ├── lifestyle/    → Dining, luxury cars, watches, events, everyday moments
│   ├── travel/       → Monaco, Dubai, Madrid, international travel destinations
│   ├── business/     → Meetings, keynotes, negotiations, boardroom environments
│   └── media/        → Interviews, podcasts, TV appearances, press moments
├── real-estate/      → Luxury penthouses, architectural exteriors, high-end interiors
├── projects/         → Mandates, zoned commercial parcels, landmark developments
└── press/            → Article clippings, magazine features, broadcast screenshots
```

---

## 2. IMAGE FORMAT & NAMING CONVENTIONS

- **Format**: `.webp` (preferred) or `.jpg` / `.png`.
- **Naming**: Use lowercase hyphen-separated names.
  - Examples:
    - `/public/images/personal/portraits/cristian-portrait-01.webp`
    - `/public/images/personal/editorial/cristian-editorial-02.webp`
    - `/public/images/personal/travel/cristian-monaco-01.webp`
    - `/public/images/personal/business/cristian-[#01-meeting.webp`
    - `/public/images/real-estate/bucharest-penthouse-01.webp`

---

## 3. RECOMMENDED DIMENSIONS & QUALITY

- **Portraits & Editorial Spreads**: `1920 × 2400 px` (4:5 ratio) or `1440 × 1800 px`.
- **Full-Width Landscape & Architectural Photography**: `2560 × 1440 px` (16:9 ratio) or `2048 × 1365 px` (3:2 ratio).
- **Square Grid Thumbnails**: `1200 × 1200 px` (1:1 ratio).
- **Target File Size**: Under `500 KB` per image (optimized with WebP).

---

## 4. TYPED DATA REGISTRY (`lib/gallery.ts`)

When adding new photographs, register them in `lib/gallery.ts` without modifying UI component code:

```typescript
export const galleryItems: GalleryItem[] = [
  {
    id: "portrait-01",
    category: "PORTRAITS",
    title: "Executive Portrait — Bucharest Office",
    src: "/images/personal/portraits/cristian-portrait-01.webp",
    caption: "Cristian Văduva, Executive Advisor & Strategic Investor",
    location: "Bucharest",
  },
  // Add new items here
];
```
