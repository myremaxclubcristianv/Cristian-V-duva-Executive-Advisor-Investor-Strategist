import { getLifestylePhotos, getTravelPhotos } from "@/lib/photos";
import PhotoCard from "./PhotoCard";

export default function LifestylePhotography() {
  const lifestylePhotos = getLifestylePhotos();
  const travelPhotos = getTravelPhotos();
  const allPhotos = [...lifestylePhotos, ...travelPhotos];

  if (allPhotos.length === 0) {
    return null;
  }

  return (
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Lifestyle
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Beyond Business
            </h2>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {allPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} size="medium" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
