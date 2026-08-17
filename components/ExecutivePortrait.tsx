import { getPortraitPhotos } from "@/lib/photos";
import Image from "next/image";

export default function ExecutivePortrait() {
  const portraits = getPortraitPhotos();

  if (portraits.length === 0) {
    return null;
  }

  const mainPortrait = portraits[0];

  return (
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Portrait */}
          <div className="relative aspect-[3/4] md:aspect-[4/5]">
            <Image
              src={mainPortrait.src}
              alt={mainPortrait.alt}
              fill
              className="object-cover"
              style={{ objectPosition: mainPortrait.position || "center" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Portrait
            </p>
            {mainPortrait.title && (
              <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
                {mainPortrait.title}
              </h2>
            )}
            {mainPortrait.description && (
              <p className="text-text-secondary text-body-md sm:text-body-lg">
                {mainPortrait.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
