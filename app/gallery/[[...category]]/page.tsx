import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { PhotoCategory } from "@/lib/photos";
import Link from "next/link";

interface GalleryPageProps {
  params: Promise<{
    category?: string;
  }>;
}

export default async function GalleryCategoryPage({ params }: GalleryPageProps) {
  const resolvedParams = await params;
  const rawCat = resolvedParams.category;
  const category = (rawCat as PhotoCategory) || undefined;

  const categoryTitles: Record<string, string> = {
    executive: "Executive & Leadership Gallery",
    "real-estate": "Real Estate & Architecture Gallery",
    business: "Business & Strategy Gallery",
    lifestyle: "Executive Lifestyle Gallery",
    media: "Broadcasting & Media Gallery",
  };

  const title = category && categoryTitles[category] ? categoryTitles[category] : "Editorial Photo Journal";

  const categories = [
    { slug: "", label: "All Archives" },
    { slug: "executive", label: "Executive" },
    { slug: "real-estate", label: "Real Estate" },
    { slug: "business", label: "Business" },
    { slug: "media", label: "Media" },
    { slug: "lifestyle", label: "Lifestyle" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>VISUAL ARCHIVE</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>PHOTOGRAPHY</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              {title}
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-2xl leading-relaxed pt-2">
              A curated photographic record documenting executive advisory engagements, prime architectural assets, and international operations.
            </p>

            {/* Category Navigation Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => {
                const isActive = (category || "") === cat.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={cat.slug ? `/gallery/${cat.slug}` : "/gallery"}
                    className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-quick ${
                      isActive
                        ? "bg-accent text-background font-semibold"
                        : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/50"
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-12">
            <PhotoGallery category={category} showAll={true} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
