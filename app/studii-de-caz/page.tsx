import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  AlertCircle,
  Lock,
  ArrowRight,
  CheckCircle2,
  Compass,
  Scale
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Studii de Caz & Cadrul Metodologic al Mandatelor | Executive",
  description: "Cadrul de analiză și structura metodologică aplicată în mandatele de consultanță imobiliară premium. Publicarea studiilor de caz reale respectă confidențialitatea strictă și acordul scris bilateral al clienților.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/studii-de-caz",
  },
  openGraph: {
    title: "Studii de Caz & Cadru Metodologic | Cristian Văduva",
    description: "Anatomia unui mandat structurat de consultanță imobiliară privată și politica riguroasă de confidențialitate a clienților.",
    url: "https://executive.cristianvaduva.com/studii-de-caz",
    type: "website",
  },
};

export default function StudiiDeCazPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* HERO */}
          <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <FileText className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>METODOLOGIE & MANDATE DOCUMENTATE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Studii de Caz: Cadrul Metodologic de Analiză
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Fiecare mandat imobiliar administrat de Executive urmează o procedură riguroasă de analiză, due diligence și negociere. Respectând acordurile stricte de confidențialitate (NDA), prezentăm aici arhitectura metodologică prin care gestionăm deciziile de anvergură.
            </p>
          </section>

          {/* EDITORIAL NOTICE ON FACTUAL INTEGRITY & CLIENT CONFIDENTIALITY */}
          <section className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] relative">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-white/[0.03] border border-white/[0.08] text-[#93C8FF] shrink-0 mt-0.5">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A97F60] font-semibold block">
                  NOTĂ DE CONFORMITATE FACTUALĂ & CONFIDENȚIALITATE (NDA)
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                  Politica Privind Publicarea Studiilor de Caz Reale
                </h2>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Refuzăm categoric practica de a inventa tranzacții fictive, cumpărători imaginari, discounturi nerealiste sau testimoniale fabricate. Mandatele imobiliare gestionate de Cristian Văduva implică patrimonii private și sunt protejate prin acorduri bilaterale de confidențialitate (NDA).
                </p>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Cazurile documentate sunt publicate exclusiv după finalizarea tranzacției, anonimizarea completă a tuturor datelor prin care părțile ar putea fi identificate indirect și obținerea consimțământului scris al fiecărui client în parte.
                </p>
              </div>
            </div>
          </section>

          {/* STRUCTURAL ANATOMY (THE 5 CORE PILLARS) */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                01 // ARHITECTURA DE EVALUARE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Anatomia în 5 Puncte a Oricărui Mandat Documentat
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                Standardul riguros după care este structurat fiecare dosar de consultanță:
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 font-mono text-xs">
              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="text-[#93C8FF] block font-serif text-xl">01</span>
                <h4 className="font-sans font-semibold text-sm text-[#F5F4EF]">Situația Inițială</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Premisele specifice: profilul cumpărătorului/vânzătorului, constrângerile patrimoniale, localizarea vizată și calendarul inițial.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="text-[#93C8FF] block font-serif text-xl">02</span>
                <h4 className="font-sans font-semibold text-sm text-[#F5F4EF]">Obiectivul Strategic</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Definirea indicatorilor-cheie de succes: preț țintă negociat, criterii constructive eliminatorii, optimizare de folosință sau randament net.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="text-[#93C8FF] block font-serif text-xl">03</span>
                <h4 className="font-sans font-semibold text-sm text-[#F5F4EF]">Abordare & Proces</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Filtrarea activelor, verificarea comparativă like-for-like, coordonarea due diligence-ului tehnic și strategia de negociere aplicată.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="text-[#93C8FF] block font-serif text-xl">04</span>
                <h4 className="font-sans font-semibold text-sm text-[#F5F4EF]">Rezultat Verificabil</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Finalizarea formală: clauze de protecție obținute, economii de capital cuantificate sau vânzare realizată la prețul de referință.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="text-[#A97F60] block font-serif text-xl">05</span>
                <h4 className="font-sans font-semibold text-sm text-[#F5F4EF]">Mențiune de Risc</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Avertisment explicit: fiecare proprietate este unică, iar rezultatele trecute nu constituie o garanție a performanțelor viitoare.
                </p>
              </div>
            </div>
          </section>

          {/* 3 EDITORIAL SLOTS (STRUCTURED CASE STUDY TEMPLATES) */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                02 // CADRU TIPOLOGIC DE MANDATE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Categorii de Mandate în Curs de Anonimizare și Validare
              </h2>
            </div>

            <div className="space-y-6">
              {/* Slot 1: Buyer Mandate */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#93C8FF]">
                      TIP MANDAT: REPREZENTARE EXCLUSIVĂ CUMPĂRĂTOR (BUYER MANDATE)
                    </span>
                    <h3 className="font-serif text-2xl text-[#F5F4EF]">
                      Cazul A // Achiziție Reședință Unifamilială în Enclavă Diplomatică (București Nord)
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#A97F60]">
                    STATUS: ÎN CURS DE AUTORIZARE CLIENT
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">01. Premise</strong>
                    <p>Căutare extinsă pentru o proprietate cu grădină privată matură, retragere fonică totală și proximitate de liceele internaționale.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">02. Metodologie</strong>
                    <p>Eliminarea a 14 proprietăți cu sarcini cadastrale sau litigii nerezolvate; inspecție structurală MLPAT detaliată.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">03. Negociere</strong>
                    <p>Structurarea ofertei pe baza raportului tehnic; ajustarea prețului final cu 9.4% sub nivelul inițial solicitat de vânzător.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#A97F60] font-mono text-xs uppercase block">04. Delimitare Risc</strong>
                    <p>Rezultatele negocierilor depind strict de condițiile pieței la momentul respectiv și de poziția de lichiditate a părților.</p>
                  </div>
                </div>
              </div>

              {/* Slot 2: Seller Mandate */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#93C8FF]">
                      TIP MANDAT: VÂNZARE ASISTATĂ & AUDIT DE POZIȚIONARE (SELLER MANDATE)
                    </span>
                    <h3 className="font-serif text-2xl text-[#F5F4EF]">
                      Cazul B // Valorificare Apartament Penthouse cu Terasă Panoramică (Zona Herăstrău)
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#A97F60]">
                    STATUS: ÎN CURS DE AUTORIZARE CLIENT
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">01. Premise</strong>
                    <p>Proprietate listată anterior pe portaluri publice timp de 11 luni fără oferte calificate din cauza unei poziționări de preț greșite.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">02. Metodologie</strong>
                    <p>Retragerea din piața publică, restructurarea completă a documentației tehnice și stabilirea prețului fundamentat pe tranzacții reale.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">03. Rezultat</strong>
                    <p>Prezentare restrânsă către 4 cumpărători precalificați; tranzacționare închisă la notar în 47 de zile de la lansarea noului dosar.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#A97F60] font-mono text-xs uppercase block">04. Delimitare Risc</strong>
                    <p>Viteza de tranzacționare nu este garantată; depinde esențial de conformitatea juridică a imobilului și realismul prețului cerut.</p>
                  </div>
                </div>
              </div>

              {/* Slot 3: Cross-Border Mandate */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#93C8FF]">
                      TIP MANDAT: ACHIZIȚIE TRANSFRONTALIERĂ (CROSS-BORDER ADVISORY)
                    </span>
                    <h3 className="font-serif text-2xl text-[#F5F4EF]">
                      Cazul C // Achiziție Reședință de Sezon pe Coasta Mediteraneană (Parteneriat Chestertons)
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#A97F60]">
                    STATUS: ÎN CURS DE AUTORIZARE CLIENT
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">01. Premise</strong>
                    <p>Client rezident în București interesat de o proprietate de vacanță pe Riviera Franceză, cu cerințe stricte de securitate și acces facil la aeroport.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">02. Metodologie</strong>
                    <p>Coordonare directă cu biroul Chestertons din zonă; selecție pe teren și verificare preliminară înainte de deplasarea cumpărătorului.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#F5F4EF] font-mono text-xs uppercase block">03. Rezultat</strong>
                    <p>Securizarea unui activ off-market cu sprijinul notarului francez dedicat, cu asistență continuă în limba română.</p>
                  </div>
                  <div className="space-y-1.5">
                    <strong className="text-[#A97F60] font-mono text-xs uppercase block">04. Delimitare Risc</strong>
                    <p>Tranzacțiile transfrontaliere implică legislații și regimuri fiscale locale distincte ce necesită consultanță juridică locală acreditată.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA CADRAN */}
          <section className="p-10 sm:p-14 bg-[#0C1119] border border-white/[0.1] text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
              Doriți să discutați despre un mandat similar?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-xl mx-auto leading-relaxed">
              Programați o primă conversație de 20 de minute. Vom discuta exclusiv pe baza criteriilor dumneavoastră particulare.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cum-lucrez"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] bg-[#07090D] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
              >
                <span>VEZI ETAPELE COLABORĂRII</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
