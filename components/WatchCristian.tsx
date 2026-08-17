import { getFeaturedVideos, getFeaturedShorts } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";
import { cleanText } from "@/lib/cleanText";

export default function WatchCristian() {
  const featuredVideos = getFeaturedVideos();
  const featuredShorts = getFeaturedShorts();

  if (featuredVideos.length === 0 && featuredShorts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>03</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>MEDIA & DISCUSSIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              In Conversation & On Location
            </h2>
          </div>
          <Link
            href="/media/videos"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:underline"
          >
            VIEW ALL BROADCASTS →
          </Link>
        </div>

        {/* Featured 16:9 Video Cards */}
        {featuredVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.slice(0, 2).map((video) => (
              <div
                key={video.id}
                className="bg-surface-primary border border-surface-secondary/80 p-5 space-y-4 shadow-xl hover:border-accent/40 transition-quick"
              >
                <div className="border border-surface-secondary/60 overflow-hidden">
                  <VideoEmbed
                    youtubeUrl={video.youtubeUrl}
                    title={cleanText(video.title)}
                    thumbnail={video.thumbnail}
                    className="w-full"
                  />
                </div>
                {video.title && (
                  <h3 className="font-display text-lg sm:text-xl text-text-primary line-clamp-2 leading-snug">
                    {cleanText(video.title)}
                  </h3>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Shorts Grid */}
        {featuredShorts.length > 0 && (
          <div className="space-y-4 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary/70">
              EXECUTIVE BRIEFINGS & SHORTS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredShorts.slice(0, 4).map((short) => (
                <div
                  key={short.id}
                  className="bg-surface-primary border border-surface-secondary/80 p-3 space-y-2 shadow-lg hover:border-accent/40 transition-quick"
                >
                  <div className="border border-surface-secondary/60 overflow-hidden">
                    <VideoEmbed
                      youtubeUrl={short.youtubeUrl}
                      title={cleanText(short.title)}
                      thumbnail={short.thumbnail}
                      isShort={true}
                      className="w-full"
                    />
                  </div>
                  {short.title && (
                    <h4 className="font-sans text-xs text-text-primary line-clamp-2 font-light">
                      {cleanText(short.title)}
                    </h4>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
