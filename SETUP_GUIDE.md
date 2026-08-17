# Executive — Cristian Văduva Website

A premium personal executive website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 16.3.0** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Inter & Playfair Display fonts** (optimized, locally loaded)

## Project Structure

```
/
├── app/                          # Next.js App Router pages
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── ecosystem/page.tsx       # Ecosystem page
│   ├── insights/page.tsx        # Insights page (placeholder)
│   ├── media/page.tsx           # Media gallery page
│   ├── ventures/page.tsx        # Ventures page
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # SEO sitemap
│   ├── robots.ts                # SEO robots.txt
│   └── manifest.ts              # Web app manifest
├── components/                  # Reusable React components
│   ├── ContactSection.tsx       # Contact section
│   ├── EcosystemSection.tsx     # Ecosystem/projects section
│   ├── ExecutiveProfile.tsx     # Executive profile section
│   ├── Footer.tsx               # Footer component
│   ├── Hero.tsx                 # Hero section with image/video slot
│   ├── MediaGallery.tsx         # Media gallery with lightbox
│   ├── Navigation.tsx           # Navigation (desktop + mobile menu)
│   ├── ProjectCard.tsx          # Individual project card
│   ├── ProjectsSection.tsx      # Projects showcase section
│   ├── StructuredData.tsx       # SEO structured data
│   ├── Timeline.tsx             # Professional timeline
│   └── VideoEmbed.tsx           # YouTube embed component
├── lib/                         # Data and utilities
│   ├── content/                 # Content files
│   │   ├── biography.ts         # Executive biography
│   │   ├── contact.ts           # Contact information
│   │   └── timeline.ts          # Professional timeline
│   ├── media.ts                 # Media data structure
│   ├── projects.ts              # Projects data
│   ├── socials.ts               # Social links
│   └── types.ts                 # TypeScript types
└── public/media/                # Asset directories
    ├── images/                  # Project images
    │   └── projects/            # Project thumbnails
    ├── photos/                  # Photography
    │   ├── business/            # Business photos
    │   ├── events/              # Event photos
    │   ├── personal/            # Personal photos
    │   ├── portraits/           # Professional portraits
    │   └── real-estate/         # Real estate photos
    └── videos/                  # Video files (optional)
```

## Adding Content

### Adding Photographs

#### Step 1: Upload Photos

Place your photographs in the appropriate directory under `public/media/photos/`:

```
public/media/photos/
├── portraits/       # Professional portraits
├── executive/       # Executive and business settings
├── business/        # Meetings, events, professional environments
├── real-estate/     # Property and luxury environments
├── luxury/          # Luxury lifestyle
├── lifestyle/       # Personal lifestyle moments
├── travel/          # Travel photography
├── events/          # Events and conferences
└── projects/        # Project-related photography
```

#### Step 2: Add Photo Entry

Edit `lib/photos.ts` and add your photo:

```typescript
{
  id: "unique-id",
  src: "/media/photos/portraits/portrait-01.jpg",
  alt: "Cristian Văduva",
  category: "portrait",
  roles: ["hero", "portrait", "executive", "featured"],
  featured: true,
  position: "center",
  aspectRatio: "portrait",
  title: "Professional Portrait",
  description: "Cristian Văduva in Monaco",
}
```

#### Step 3: Assign Roles

Use the `roles` array to determine where the photo appears:

- **hero** - Hero section background
- **portrait** - Portrait sections
- **executive** - Executive profile
- **business** - Business photography section
- **real-estate** - Real estate sections
- **luxury** - Luxury lifestyle
- **lifestyle** - Lifestyle section
- **travel** - Travel photography
- **event** - Event photography
- **timeline** - Timeline entries
- **project** - Project showcases
- **media** - Media gallery
- **featured** - Featured homepage sections

A photo can have multiple roles:
```typescript
roles: ["hero", "portrait", "featured"]
```

#### Step 4: Configure Position

Use the `position` field to control how the image is cropped:

- `center` (default)
- `top`
- `bottom`
- `left`
- `right`

This is especially important for mobile where different aspect ratios are used.

#### Photo Categories

Available categories:
- `portrait` - Professional portraits
- `executive` - Executive settings
- `business` - Business environments
- `real-estate` - Property photography
- `luxury` - Luxury lifestyle
- `lifestyle` - Personal lifestyle
- `travel` - Travel photography
- `event` - Events and conferences
- `project` - Project photography

#### Example: Adding a Hero Photo

```typescript
{
  id: "hero-01",
  src: "/media/photos/portraits/hero-portrait.jpg",
  alt: "Cristian Văduva",
  category: "portrait",
  roles: ["hero", "portrait", "featured"],
  featured: true,
  position: "center",
  aspectRatio: "portrait",
}
```

This photo will automatically appear as the hero background and in portrait sections.

#### Example: Adding Business Photos

```typescript
{
  id: "business-01",
  src: "/media/photos/business/meeting.jpg",
  alt: "Cristian Văduva at a business meeting",
  category: "business",
  roles: ["business", "media"],
  featured: true,
  position: "center",
  aspectRatio: "landscape",
  title: "Business Meeting",
  description: "Discussing real estate investments",
}
```

This photo will appear in the Business Photography section and Media gallery.

### Adding YouTube Videos

#### Method 1: Manual Edit

Add videos directly to `lib/videos.ts`:

```typescript
{
  id: "unique-id",
  type: "video", // or "short" for YouTube Shorts
  title: "Video Title",
  youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  category: "Executive",
  featured: true,
  description: "Optional description",
  publishedAt: "2025-01-15", // optional
  thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg", // optional
}
```

Supported URL formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- `https://www.youtube.com/shorts/VIDEO_ID` (automatically sets type: "short")

#### Method 2: Automated Import Script

For bulk importing YouTube videos, use the import script:

**Command Line:**
```bash
npx tsx scripts/import-youtube.ts https://www.youtube.com/watch?v=VIDEO_ID https://www.youtube.com/shorts/SHORT_ID
```

**From File:**
Create a text file (e.g., `videos.txt`) with one URL per line:
```
https://www.youtube.com/watch?v=VIDEO_ID
https://www.youtube.com/shorts/SHORT_ID
https://youtu.be/VIDEO_ID
# Comments (lines starting with #) are ignored
```

Then run:
```bash
npx tsx scripts/import-youtube.ts --file videos.txt
```

**What the script does:**
1. Extracts YouTube video IDs from URLs
2. Detects if a URL is a YouTube Short (9:16) or regular video (16:9)
3. Generates unique IDs and thumbnail URLs
4. Categorizes videos based on keywords (defaults to "Executive")
5. Checks for duplicates in existing library
6. Outputs TypeScript code to paste into `lib/videos.ts`

**Note:** The script generates placeholder titles and categories. After running the script:
1. Copy the outputted code block
2. Paste it into `lib/videos.ts` (before the closing `]`)
3. Edit titles, descriptions, and categories as needed
4. Set `featured: true` for important videos

### Adding Projects

Edit `lib/projects.ts`:

```typescript
{
  id: "unique-id",
  name: "Project Name",
  url: "https://project-url.com",
  category: "Real Estate",
  description: "Short description",
  image: "/media/images/projects/project.jpg", // optional
  featured: true,
  status: "active", // active, in-development, planned
  order: 1,
}
```

### Updating Social Links

Edit `lib/socials.ts`:

```typescript
{
  platform: "linkedin",
  url: "https://linkedin.com/in/your-profile",
  displayName: "LinkedIn",
}
```

### Updating Contact Information

Edit `lib/content/contact.ts`:

```typescript
export const contactInfo: ContactInfo = {
  email: "your-email@example.com",
  socials: socialLinks,
};
```

### Updating Timeline

Edit `lib/content/timeline.ts`:

```typescript
{
  id: "unique-id",
  year: "2024",
  title: "Title",
  description: "Description",
  category: "Executive", // Executive, Venture, Foundation
}
```

### Updating Biography

Edit `lib/content/biography.ts`:

```typescript
export const biography = {
  name: "Your Name",
  title: "Your Title",
  shortDescription: "Short tagline",
  fullDescription: "Full biography text...",
  focusAreas: ["Area 1", "Area 2", ...],
};
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  background: "#050505",
  "surface-primary": "#0B0B0B",
  "surface-secondary": "#111111",
  "text-primary": "#F5F5F5",
  "text-secondary": "#A1A1A1",
  accent: "#C9A227",
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. Currently using:
- **Inter** for body text
- **Playfair Display** for headlines

### Hero Section

The Hero component accepts optional props in `app/page.tsx`:

```typescript
<Hero
  imageSrc="/media/images/hero.jpg"  // Optional hero image
  youtubeUrl="https://youtube.com/..." // Optional YouTube video
  showVideo={false}  // Set to true to show video instead of image
/>
```

## Running the Project

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## SEO

The website includes:
- Metadata API for page-specific metadata
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Structured data (Schema.org) for Person

Update metadata in individual page files:

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

## Deployment

The site is production-ready and can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## Notes

- All pages are statically generated for optimal performance
- Images use Next.js Image optimization
- Mobile-first responsive design
- Dark mode default (luxury aesthetic)
- YouTube videos use lazy loading
- Navigation includes premium fullscreen mobile menu
- No external CSS/JS dependencies (except fonts from Google CDN)
