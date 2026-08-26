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
    <section id="scene-work" className="site-section bg-[#080808] text-[#F5F3EF] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Header - Editorial & Intimate */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>06 / INTELLIGENCE</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>EXECUTIVE STREAM</span>
            </div>
            <h2 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              The Executive Desk
            </h2>
          </div>

          <div className="font-mono text-[10px] sm:text-xs text-text-secondary/80 tracking-wider uppercase">
            INTELLIGENCE STREAM · {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}
          </div>
        </div>

        {/* 3 Editorial Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* CHANNEL 1: MARKET */}
          <div className="p-6 sm:p-8 border border-white/10 bg-[#0D0D0D] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                <span>01 · MARKET</span>
                <span className="text-text-secondary/60">DISPATCH</span>
              </div>

              {latestNews ? (
                <div className="space-y-2">
                  <h3 className="font-display text-lg text-text-primary leading-snug">
                    {cleanText(latestNews.title)}
                  </h3>
                  <p className="text-xs text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                    {cleanText(latestNews.excerpt)}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-text-secondary">Surveillance feed updating...</p>
              )}
            </div>

            {latestNews && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-text-secondary/70">{cleanText(latestNews.source)}</span>
                <a
                  href={latestNews.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent uppercase tracking-widest hover:underline touch-active min-h-[36px] flex items-center"
                >
                  SOURCE ↗
                </a>
              </div>
            )}
          </div>

          {/* CHANNEL 2: MEDIA */}
          <div className="p-6 sm:p-8 border border-white/10 bg-[#0D0D0D] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                <span>02 · MEDIA</span>
                <span className="text-text-secondary/60">BROADCAST</span>
              </div>

              {latestVideo ? (
                <div className="space-y-2">
                  <h3 className="font-display text-lg text-text-primary leading-snug">
                    {cleanText(latestVideo.title)}
                  </h3>
                  <p className="text-xs text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                    Official commentary and strategic briefing from Cristian Văduva.
                  </p>
                </div>
              ) : (
                <p className="text-xs text-text-secondary">Broadcast feed updating...</p>
              )}
            </div>

            {latestVideo && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-text-secondary/70">YouTube Official</span>
                <Link
                  href="/media/videos"
                  className="text-accent uppercase tracking-widest hover:underline touch-active min-h-[36px] flex items-center"
                >
                  WATCH BRIEFING →
                </Link>
              </div>
            )}
          </div>

          {/* CHANNEL 3: INSIGHTS */}
          <div className="p-6 sm:p-8 border border-white/10 bg-[#0D0D0D] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                <span>03 · INSIGHTS</span>
                <span className="text-text-secondary/60">MEMO</span>
              </div>

              {latestInsight ? (
                <div className="space-y-2">
                  <h3 className="font-display text-lg text-text-primary leading-snug">
                    {cleanText(latestInsight.title)}
                  </h3>
                  <p className="text-xs text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                    {cleanText(latestInsight.excerpt)}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-text-secondary">Executive analysis updating...</p>
              )}
            </div>

            {latestInsight && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-text-secondary/70">By {cleanText(latestInsight.author)}</span>
                <Link
                  href="/insights"
                  className="text-accent uppercase tracking-widest hover:underline touch-active min-h-[36px] flex items-center"
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
