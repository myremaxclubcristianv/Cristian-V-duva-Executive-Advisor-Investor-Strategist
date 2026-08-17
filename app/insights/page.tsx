import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getOriginalInsights } from "@/lib/insights";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Executive Insights — Cristian Văduva",
  description: "Original strategic analysis, real estate insights, and capital allocation perspectives by Cristian Văduva.",
};

export default function InsightsPage() {
  const insights = getOriginalInsights();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <p className="font-sans text-xs uppercase tracking-widest text-accent font-medium">
                ORIGINAL ANALYSIS & PERSPECTIVES
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-text-primary">
                Executive Insights
              </h1>
              <p className="text-text-secondary text-body-lg">
                Original analysis on capital allocation, real estate advisory, credit strategy, and market dynamics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
              {insights.map((item) => (
                <article
                  key={item.id}
                  className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-accent">{item.category}</span>
                      <span className="text-text-secondary">{item.publicationDate} · {item.readingTime}</span>
                    </div>
                    <h2 className="font-display text-2xl text-text-primary leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-text-secondary text-body-md leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-surface-secondary/60 flex items-center justify-between">
                    <span className="text-xs text-text-secondary">By {item.author}</span>
                    <Link href={`/insights`} className="text-xs uppercase tracking-widest text-accent hover:underline">
                      READ PERSPECTIVE →
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
