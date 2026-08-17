import { getFeaturedVideos } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";

export default function FeaturedVideos() {
  const featuredVideos = getFeaturedVideos();

  if (featuredVideos.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>FEATURED BROADCASTS</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>YOUTUBE VAULT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Executive Video Series
            </h2>
          </div>
          <Link
            href="/media/videos"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:underline"
          >
            EXPLORE ALL BROADCASTS →
          </Link>
        </div>

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.slice(0, 3).map((video) => (
            <article
              key={video.id}
              className="bg-surface-primary border border-surface-secondary/80 p-5 space-y-4 shadow-xl hover:border-accent/40 transition-quick group"
            >
              <div className="border border-surface-secondary/60 overflow-hidden bg-background">
                <VideoEmbed
                  youtubeUrl={video.youtubeUrl}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  className="w-full"
                />
              </div>
              {video.title && (
                <div className="space-y-2">
                  <h3 className="font-display text-lg text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="font-sans text-xs text-text-secondary/90 line-clamp-2 leading-relaxed font-light">
                      {video.description}
                    </p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
