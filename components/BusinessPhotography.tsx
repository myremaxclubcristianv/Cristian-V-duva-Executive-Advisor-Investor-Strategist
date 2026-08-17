import { getBusinessPhotos } from "@/lib/photos";
import PhotoCard from "./PhotoCard";

export default function BusinessPhotography() {
  const photos = getBusinessPhotos();

  if (photos.length === 0) {
    return null;
  }

  return (
    <section className="py-section-lg sm:py-section-xl bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Business
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Professional World
            </h2>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} size="medium" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
