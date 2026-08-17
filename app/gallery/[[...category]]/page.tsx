import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { PhotoCategory } from "@/lib/photos";

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

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center space-y-4">
          <p className="font-sans text-xs uppercase tracking-widest text-accent font-medium">
            EDITORIAL PHOTOGRAPHY & ARCHIVE
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary">
            {title}
          </h1>
          <p className="max-w-xl mx-auto text-text-secondary text-body-lg">
            A visual record of executive leadership, strategic assets, media appearances, and international business.
          </p>
        </div>

        <PhotoGallery category={category} showAll={true} />
      </main>
      <Footer />
    </div>
  );
}
