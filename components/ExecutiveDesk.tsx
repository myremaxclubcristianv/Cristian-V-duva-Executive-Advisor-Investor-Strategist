import Link from "next/link";
import { getLatestNews } from "@/lib/rss";
import { fetchOfficialYouTubeVideos } from "@/lib/youtubeAuto";
import { getOriginalInsights } from "@/lib/insights";
import { cleanText } from "@/lib/cleanText";

export default async function ExecutiveDesk() {
  const [news, videos, insights] = await Promise.all([
    getLatestNews(),
    fetchOfficialYouTubeVideos(),
    Promise.resolve(getOriginalInsights()),
  ]);

  const latestNews = news.length > 0 ? news[0] : null;
  const latestVideo = videos.length > 0 ? videos[0] : null;
  const latestInsight = insights.length > 0 ? insights[0] : null;

  return (
    <section
      id="scene-work"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 my-auto">
        {/* Header - Editorial & Intimate */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>03 / 08</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>WORK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              The Executive Desk
            </h2>
          </div>

          <div className="font-mono text-xs text-text-secondary/80 tracking-wider">
            INTELLIGENCE STREAM · {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}
          </div>
        </div>

        {/* 3 Editorial Channels - Pure Editorial Columns, Zero Box UI */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* CHANNEL 1: MARKET */}
          <div className="space-y-4 flex flex-col justify-between border-t border-accent/40 pt-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                <span>01 · MARKET</span>
                <span className="text-text-secondary/60">DISPATCH</span>
              </div>

              {latestNews ? (
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl text-text-primary leading-snug">
                    {cleanText(latestNews.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                    {cleanText(latestNews.excerpt)}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-text-secondary">Surveillance feed updating...</p>
              )}
            </div>

            {latestNews && (
              <div className="pt-3 border-t border-surface-secondary/60 flex items-center justify-between font-mono text-[11px]">
                <span className="text-text-secondary/70">{cleanText(latestNews.source)}</span>
                <a
                  href={latestNews.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent uppercase tracking-widest hover:underline"
                >
                  SOURCE ↗
                </a>
              </div>
            )}
          </div>

          {/* CHANNEL 2: MEDIA */}
          <div className="space-y-4 flex flex-col justify-between border-t border-accent/40 pt-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                <span>02 · MEDIA</span>
                <span className="text-text-secondary/60">BROADCAST</span>
              </div>

              {latestVideo ? (
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl text-text-primary leading-snug">
                    {cleanText(latestVideo.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                    Official commentary and strategic briefing from Cristian Văduva.
                  </p>
                </div>
              ) : (
                <p className="text-xs text-text-secondary">Broadcast feed updating...</p>
              )}
            </div>

            {latestVideo && (
              <div className="pt-3 border-t border-surface-secondary/60 flex items-center justify-between font-mono text-[11px]">
                <span className="text-text-secondary/70">YouTube Official</span>
                <Link
                  href="/media/videos"
                  className="text-accent uppercase tracking-widest hover:underline"
                >
                  WATCH BRIEFING →
                </Link>
              </div>
            )}
          </div>

          {/* CHANNEL 3: INSIGHTS */}
          <div className="space-y-4 flex flex-col justify-between border-t border-accent/40 pt-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                <span>03 · INSIGHTS</span>
                <span className="text-text-secondary/60">MEMO</span>
              </div>

              {latestInsight ? (
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl text-text-primary leading-snug">
                    {cleanText(latestInsight.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                    {cleanText(latestInsight.excerpt)}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-text-secondary">Executive analysis updating...</p>
              )}
            </div>

            {latestInsight && (
              <div className="pt-3 border-t border-surface-secondary/60 flex items-center justify-between font-mono text-[11px]">
                <span className="text-text-secondary/70">By {cleanText(latestInsight.author)}</span>
                <Link
                  href="/insights"
                  className="text-accent uppercase tracking-widest hover:underline"
                >
                  READ PERSPECTIVE →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
