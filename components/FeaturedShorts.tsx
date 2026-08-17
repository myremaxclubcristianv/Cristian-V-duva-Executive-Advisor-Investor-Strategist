import { getFeaturedShorts } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";

export default function FeaturedShorts() {
  const featuredShorts = getFeaturedShorts();

  if (featuredShorts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>EXECUTIVE SHORTS</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>BRIEFINGS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Rapid Market Dispatches
            </h2>
          </div>
          <Link
            href="/media"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:underline"
          >
            VIEW ALL SHORTS →
          </Link>
        </div>

        {/* Shorts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredShorts.slice(0, 4).map((short) => (
            <div
              key={short.id}
              className="bg-surface-primary border border-surface-secondary/80 p-3 space-y-3 shadow-lg hover:border-accent/40 transition-quick group"
            >
              <div className="border border-surface-secondary/60 overflow-hidden bg-background">
                <VideoEmbed
                  youtubeUrl={short.youtubeUrl}
                  title={short.title}
                  thumbnail={short.thumbnail}
                  isShort={true}
                  className="w-full"
                />
              </div>
              {short.title && (
                <h3 className="font-sans text-xs text-text-primary group-hover:text-accent transition-colors line-clamp-2 font-light">
                  {short.title}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
