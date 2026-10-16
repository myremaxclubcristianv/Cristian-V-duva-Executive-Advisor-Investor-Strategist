import { Metadata } from "next";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getOriginalInsights } from "@/lib/insights";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { SectionHeader, EditorialText, CTASection } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Jurnal Executiv & Analize — Cristian Văduva",
  description: "Cercetări originale, analize macroeconomice de lichiditate și perspective asupra ciclurilor imobiliare europene redactate de Cristian Văduva.",
};

export default function InsightsPage() {
  const insights = getOriginalInsights();

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48 pb-32">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL HERO                                     */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-24 sm:pb-32 lg:pb-36">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // JURNAL EXECUTIV</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CERCETARE & INTELLIGENCE</span>
              </div>
              <span className="text-[#8A95A5] hidden sm:block">ANALIZĂ TRIMESTRIALĂ</span>
            </div>

            <div className="max-w-4xl space-y-8">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                Cercetare Strategică &<br />
                <span className="text-[#A97F60] italic font-normal">Perspective de Capital.</span>
              </h1>

              <EditorialText size="xl" maxWidth="prose" color="secondary" className="leading-relaxed">
                Analize fundamentate pe date reale privind ciclurile imobiliare europene, lichiditatea macroeconomică, dinamica randamentelor și arhitectura de protecție a averilor de familie.
              </EditorialText>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // EDITORIAL DOSSIERS (AIRY MONOLITHIC ROWS)          */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-24">
          <SectionHeader
            eyebrow="02 // DOSARE DE ANALIZĂ"
            badge="MEMORANDUMURI ORIGINALE"
            title="Publicații & Analize de Piață"
            description="Fiecare memorandum tratează o problematică structurală: de la randamentele reale raportate la cota de TVA până la conservarea activelor trofeu pe axa Monaco · Dubai."
          />

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {insights.map((item, idx) => (
              <article
                key={item.id}
                className="py-14 sm:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center hover:bg-[#0C1119]/40 transition-colors duration-300 px-4 sm:px-6 group"
              >
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="font-monumental text-5xl text-[#1B2028] group-hover:text-[#93C8FF] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="lg:col-span-5 relative aspect-video bg-black overflow-hidden border border-white/[0.1] shadow-xl">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/70 via-transparent to-transparent" />
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs">
                    <span className="text-[#A97F60] uppercase tracking-widest font-semibold">{item.category}</span>
                    <span className="text-[#8A95A5]">·</span>
                    <span className="text-[#B8C2CF]">{item.publicationDate} · {item.readingTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                    {item.title}
                  </h2>

                  <EditorialText size="sm" maxWidth="prose" color="secondary" className="leading-relaxed">
                    {item.excerpt}
                  </EditorialText>

                  <div className="pt-4 flex items-center justify-between border-t border-white/[0.06] font-mono text-xs">
                    <span className="text-[#8A95A5]">Autor: {item.author}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[#93C8FF] hover:text-[#B8C2CF] font-semibold transition-colors"
                    >
                      <span>SOLICITĂ MEMORANDUM STRATEGIC</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // DISPATCH CALLOUT                                   */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="CERCETARE & AUDIT LA COMANDĂ"
          title="Comandă un Raport de Due Diligence sau Evaluare Arhitecturală."
          description="Echipa executivă redactează studii de fezabilitate, analize de titlu și audituri ale riscurilor de mediu pentru tranzacții rezidențiale de mare anvergură."
          primaryActionText="SOLICITĂ AUDIT DE PROIECT"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DIRECT"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Toate rapoartele de analiză sunt furnizate cu caracter strict confidențial sub privilegiu fiduciar."
        />
      </main>

      <Footer />
    </div>
  );
}
