import { getFeaturedShorts } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";

export default function FeaturedShorts() {
  const featuredShorts = getFeaturedShorts();

  if (featuredShorts.length === 0) {
    return null;
  }

  return (
    <section className="py-section-lg sm:py-section-xl bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Shorts
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Quick Insights
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Market updates, property tips, and quick analysis.
            </p>
          </div>

          {/* Shorts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {featuredShorts.slice(0, 6).map((short) => (
              <div key={short.id} className="space-y-2">
                <VideoEmbed
                  youtubeUrl={short.youtubeUrl}
                  title={short.title}
                  thumbnail={short.thumbnail}
                  isShort={true}
                  className="w-full"
                />
                {short.title && (
                  <h3 className="font-serif text-body-sm text-text-primary line-clamp-2">
                    {short.title}
                  </h3>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-4 sm:pt-8">
            <Link
              href="/media"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-text-secondary text-text-primary font-medium hover:border-text-primary hover:text-text-primary transition-colors"
            >
              View All Shorts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
