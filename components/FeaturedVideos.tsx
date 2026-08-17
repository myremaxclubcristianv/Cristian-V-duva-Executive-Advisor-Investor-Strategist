import { getFeaturedVideos } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";

export default function FeaturedVideos() {
  const featuredVideos = getFeaturedVideos();

  if (featuredVideos.length === 0) {
    return null;
  }

  return (
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Videos
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Featured Content
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Insights, property tours, and market intelligence.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredVideos.slice(0, 3).map((video) => (
              <div key={video.id} className="space-y-3">
                <VideoEmbed
                  youtubeUrl={video.youtubeUrl}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  className="w-full"
                />
                {video.title && (
                  <div>
                    <h3 className="font-serif text-display-md text-text-primary">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-text-secondary text-body-sm mt-1">
                        {video.description}
                      </p>
                    )}
                  </div>
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
              Explore All Media
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
