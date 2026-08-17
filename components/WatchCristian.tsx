import { getFeaturedVideos, getFeaturedShorts } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";

export default function WatchCristian() {
  const featuredVideos = getFeaturedVideos();
  const featuredShorts = getFeaturedShorts();

  if (featuredVideos.length === 0 && featuredShorts.length === 0) {
    return null;
  }

  return (
    <section className="py-section-lg sm:py-section-xl bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Watch Cristian
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              In Conversation, On Location and at Work
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              See Cristian discussing real estate, investments, and market intelligence.
            </p>
          </div>

          {/* Videos */}
          {featuredVideos.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {featuredVideos.slice(0, 2).map((video) => (
                <div key={video.id} className="space-y-2 sm:space-y-3">
                  <VideoEmbed
                    youtubeUrl={video.youtubeUrl}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    className="w-full"
                  />
                  {video.title && (
                    <h3 className="font-serif text-body-sm sm:text-display-md text-text-primary line-clamp-2">
                      {video.title}
                    </h3>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Shorts */}
          {featuredShorts.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {featuredShorts.slice(0, 4).map((short) => (
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
          )}

          {/* CTA */}
          <div className="text-center pt-4 sm:pt-8">
            <Link
              href="/media"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-text-secondary text-text-primary font-medium hover:border-text-primary hover:text-text-primary transition-colors"
            >
              Explore Media
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
