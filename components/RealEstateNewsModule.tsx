import Link from "next/link";
import { getLatestNews } from "@/lib/rss";

export default async function RealEstateNewsModule() {
  const news = await getLatestNews();

  return (
    <section className="py-20 bg-transparent border-t border-surface-secondary/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
              MARKET SURVEILLANCE DESK
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary">
              European Real Estate Intelligence
            </h2>
          </div>
          <Link
            href="/real-estate/news"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:underline flex items-center gap-1"
          >
            ALL INTELLIGENCE DISPATCHES →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="bg-background/40 backdrop-blur-md border border-surface-secondary/60 p-6 space-y-4 flex flex-col justify-between rounded-sm shadow-lg hover:border-accent/40 transition-quick"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-accent">
                  <span>{item.category}</span>
                  <span className="text-text-secondary/70">{item.publicationDate}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary/90 line-clamp-3 leading-relaxed font-light">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-secondary/60 flex items-center justify-between text-xs text-text-secondary">
                <span className="font-mono text-[11px] text-text-secondary/80">Source: {item.source}</span>
                <a
                  href={item.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-accent uppercase tracking-wider hover:underline"
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
