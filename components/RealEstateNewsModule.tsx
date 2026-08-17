import Link from "next/link";
import { getLatestNews } from "@/lib/rss";
import { cleanText } from "@/lib/cleanText";

export default async function RealEstateNewsModule() {
  const news = await getLatestNews();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>MARKET SURVEILLANCE DESK</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>DISPATCHES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              European Intelligence Stream
            </h2>
          </div>
          <Link
            href="/real-estate/news"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:underline flex items-center gap-1"
          >
            <span>ALL DISPATCHES</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 flex flex-col justify-between shadow-xl hover:border-accent/50 transition-quick group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-accent">
                  <span className="uppercase tracking-widest">{cleanText(item.category)}</span>
                  <span className="text-text-secondary/70">{item.publicationDate}</span>
                </div>
                <h3 className="font-display text-xl text-text-primary leading-snug group-hover:text-accent transition-colors">
                  {cleanText(item.title)}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                  {cleanText(item.excerpt)}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-secondary/60 flex items-center justify-between text-xs text-text-secondary font-mono">
                <span className="text-[11px] text-text-secondary/80">Source: {cleanText(item.source)}</span>
                <a
                  href={item.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-accent uppercase tracking-wider hover:underline"
                >
                  SOURCE ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
