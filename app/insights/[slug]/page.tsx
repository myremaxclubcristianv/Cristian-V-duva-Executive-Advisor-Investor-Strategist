import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Compass, Share2 } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getOriginalInsights } from "@/lib/insights";
import { SectionHeader, EditorialText, CTASection } from "@/components/editorial";

interface InsightDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const insights = getOriginalInsights();
  return insights.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insights = getOriginalInsights();
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found — Cristian Văduva",
    };
  }

  const canonicalUrl = `https://executive.cristianvaduva.com/insights/${slug}`;
  const imageUrl = article.coverImage.startsWith("http")
    ? article.coverImage
    : `https://executive.cristianvaduva.com${article.coverImage}`;

  return {
    title: `${article.title} — Cristian Văduva`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} — Cristian Văduva`,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: article.publicationDate,
      authors: [article.author],
      locale: "en_US",
      siteName: "Cristian Văduva — Executive",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} — Cristian Văduva`,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const insights = getOriginalInsights();
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  // Related insights (excluding current)
  const relatedInsights = insights.filter((item) => item.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48 pb-32">
        {/* ======================================================== */}
        {/* ARTICLE HEADER & HERO                                    */}
        {/* ======================================================== */}
        <article className="site-container max-w-4xl mx-auto space-y-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-[#86868B]">
            <Link
              href="/insights"
              className="hover:text-[#93C8FF] transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Perspectives</span>
            </Link>
            <span>/</span>
            <span className="text-[#A97F60] uppercase tracking-wider">{article.category}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-[#A97F60]/10 border border-[#A97F60]/20 text-[#A97F60] uppercase tracking-wider font-semibold">
                {article.category}
              </span>
              <span className="text-[#86868B] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.publicationDate}</span>
              </span>
              <span className="text-[#86868B]">·</span>
              <span className="text-[#86868B] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime}</span>
              </span>
              <span className="text-[#86868B]">·</span>
              <span className="text-[#86868B] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{article.author}</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal leading-[1.08] tracking-tight">
              {article.title}
            </h1>

            <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light leading-relaxed border-l-2 border-[#A97F60] pl-6 py-1">
              {article.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0C1119]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Body Content */}
          <section className="prose prose-invert prose-lg max-w-none pt-6 pb-12 border-b border-white/[0.08] space-y-6 text-[#D1D5DB] font-sans font-light leading-relaxed">
            <p className="text-lg leading-relaxed text-[#F5F4EF]">
              {article.content}
            </p>
            <p>
              A disciplined strategy in real estate capital allocation requires a clear distinction between speculative open-market valuations and confirmed transactions registered in notary archives. In economic cycles characterized by macro volatility and fluctuating interest rates, long-term yield resilience is secured by identifying assets with rare geographic positioning, unassailable cadastral title, and superior structural engineering.
            </p>
            <p>
              Every investment decision demands comprehensive technical, legal, and urban planning due diligence—mitigating risks from latent defects or evolving fiscal frameworks. Retained advisory provides private principals with the analytical clarity required for multi-generational wealth preservation and sustained capital defense.
            </p>
          </section>

          {/* Article Footer & Author Signature */}
          <footer className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-[#86868B]">
            <div className="space-y-1">
              <span className="text-[#A97F60] uppercase tracking-wider block font-semibold">Author & Research</span>
              <span className="text-[#F5F4EF] text-sm font-sans">{article.author} — Executive Advisor</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/insights"
                className="btn-apple-pill-secondary inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Analyses</span>
              </Link>
              <Link
                href="/programare"
                className="btn-apple-pill-primary inline-flex items-center gap-2"
              >
                <span>Direct Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </footer>

          {/* Related Analyses Section */}
          {relatedInsights.length > 0 && (
            <aside className="pt-16 border-t border-white/[0.08] space-y-8">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
                  RELATED RESEARCH
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Further Analyses in This Series
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {relatedInsights.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/insights/${rel.slug}`}
                    className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C1119] hover:border-white/[0.22] hover:bg-[#101622] transition-all space-y-3 group block"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#86868B]">
                      <span className="text-[#A97F60] uppercase font-semibold">{rel.category}</span>
                      <span>{rel.readingTime}</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="font-sans text-xs text-[#86868B] line-clamp-2 font-light">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </article>

        {/* CTA Banner */}
        <div className="site-container max-w-4xl mx-auto pt-20">
          <CTASection
            eyebrow="COMMISSIONED AUDIT & TECHNICAL DUE DILIGENCE"
            title="Commission a Tailored Intelligence Audit for Your Assets"
            description="We deliver exhaustive risk assessments, cadastral stress-testing, and strategic advisory for prime property transactions and sovereign wealth allocations."
            primaryActionText="SCHEDULE A PRIVATE CONSULTATION"
            primaryActionHref="/programare"
            secondaryActionText="DIRECT CONTACT"
            secondaryActionHref="mailto:cristianvaduva@duck.com"
            disclaimer="All proprietary analyses and dossiers are provided under strict professional non-disclosure covenants."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
