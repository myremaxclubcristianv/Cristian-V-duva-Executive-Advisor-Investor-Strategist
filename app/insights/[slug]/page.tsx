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
      title: "Articol Negăsit — Cristian Văduva",
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
      locale: "ro_RO",
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
              <span>Toate perspectivele</span>
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
              Abordarea strategică în alocarea de capital imobiliar impune o distincție clară între evaluările speculative ale pieței deschise și tranzacțiile reale înregistrate în arhivele notariale. În ciclurile caracterizate de volatilitate macroeconomică și rate variabile ale dobânzilor, stabilitatea pe termen lung a randamentului este asigurată prin selecția activelor cu poziționare unică, integritate cadastrală dovedită și calitate constructivă superioară.
            </p>
            <p>
              Fiecare decizie de investiție presupune un proces riguros de due diligence tehnic, juridic și urbanistic, eliminând riscurile asociate viciilor ascunse sau modificărilor legislative nefavorabile. În acest context, consultanța dedicată oferă claritatea necesară pentru conservarea și multiplicarea sustenabilă a capitalului.
            </p>
          </section>

          {/* Article Footer & Author Signature */}
          <footer className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-[#86868B]">
            <div className="space-y-1">
              <span className="text-[#A97F60] uppercase tracking-wider block font-semibold">Autor & Analiză</span>
              <span className="text-[#F5F4EF] text-sm font-sans">{article.author} — Executive Advisor</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/insights"
                className="btn-apple-pill-secondary inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Toate analizele</span>
              </Link>
              <Link
                href="/programare"
                className="btn-apple-pill-primary inline-flex items-center gap-2"
              >
                <span>Dialog direct</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </footer>

          {/* Related Analyses Section */}
          {relatedInsights.length > 0 && (
            <aside className="pt-16 border-t border-white/[0.08] space-y-8">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
                  CERCETARE CONEXĂ
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Alte analize din aceeași serie
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
            eyebrow="AUDIT & DUE DILIGENCE DE SPECIALITATE"
            title="Solicitați o analiză personalizată pentru activele dumneavoastră."
            description="Oferim evaluări exhaustive de risc, verificare cadastrală și asistență strategică pentru achiziții și vânzări imobiliare de mare valoare."
            primaryActionText="PROGRAMEAZĂ O CONSULTAȚIE"
            primaryActionHref="/programare"
            secondaryActionText="CONTACT DIRECT"
            secondaryActionHref="mailto:cristianvaduva@duck.com"
            disclaimer="Toate informațiile și analizele sunt furnizate sub clauză strictă de confidențialitate profesională."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
