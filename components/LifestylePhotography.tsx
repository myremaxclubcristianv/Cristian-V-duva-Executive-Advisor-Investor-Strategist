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
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-surface-secondary/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>EUROPEAN PRESENCE</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>LIFESTYLE & LOCATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              International Environment
            </h2>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} size="large" />
          ))}
        </div>
      </div>
    </section>
  );
}
