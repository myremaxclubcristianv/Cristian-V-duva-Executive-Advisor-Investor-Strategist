import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getOriginalInsights } from "@/lib/insights";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Executive Journal & Insights — Cristian Văduva",
  description: "Original strategic analysis, real estate insights, and capital allocation perspectives by Cristian Văduva.",
};

export default function InsightsPage() {
  const insights = getOriginalInsights();

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>EXECUTIVE JOURNAL</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>PERSPECTIVES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              Original Capital &<br />
              <span className="text-accent italic font-normal">Real Estate Insights.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-2xl leading-relaxed pt-2">
              Strategic analysis on European property cycles, credit liquidity, institutional positioning, and wealth preservation.
            </p>
          </div>
        </section>

        {/* Editorial Insights Grid */}
        <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {insights.map((item) => (
                <article
                  key={item.id}
                  className="bg-surface-primary border border-surface-secondary/80 overflow-hidden shadow-xl hover:border-accent/50 transition-quick flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    {/* 16:9 Cover Image */}
                    <div className="aspect-video relative overflow-hidden bg-background border-b border-surface-secondary/60">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    <div className="p-8 pt-2 space-y-4">
                      <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs">
                        <span className="text-accent uppercase tracking-widest">{item.category}</span>
                        <span className="text-text-secondary/70">{item.publicationDate} · {item.readingTime}</span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl text-text-primary leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h2>

                      <p className="font-sans text-sm text-text-secondary/90 font-light leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-4 border-t border-surface-secondary/60 flex items-center justify-between font-mono text-xs">
                    <span className="text-text-secondary/70">By {item.author}</span>
                    <Link
                      href="/contact"
                      className="text-accent uppercase tracking-widest hover:underline flex items-center gap-1"
                    >
                      <span>READ PERSPECTIVE</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
