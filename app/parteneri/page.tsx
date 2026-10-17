import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  ExternalLink
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Parteneriate și Afilieri Instituționale | Executive Cristian Văduva",
  description: "Relațiile profesionale confirmate ale lui Cristian Văduva: partener asociat în rețeaua internațională Chestertons Global și partener autorizat Generali România pentru asigurarea activelor de mare valoare.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/parteneri",
  },
  openGraph: {
    title: "Parteneriate & Afilieri Profesionale | Cristian Văduva",
    description: "Afilieri factuale cu Chestertons Global Network și Generali România, completate de colaborări cu experți independenți acreditați.",
    url: "https://executive.cristianvaduva.com/parteneri",
    type: "website",
  },
};

export default function ParteneriPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Atmospheric glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* HERO */}
          <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <Globe className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>AFILIERI & COORDONARE DE SPECIALITATE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Parteneriate și Relații Profesionale Confirmate
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Executive colaborează cu rețele imobiliare globale de prestigiu și asigurători instituționali de top. Fiecare parteneriat are roluri clar delimitate, garantând clienților noștri acces nemijlocit la expertiză internațională și protecție patrimonială veritabilă.
            </p>
          </section>

          {/* PARTENER 1: CHESTERTONS GLOBAL */}
          <section className="p-8 sm:p-12 lg:p-16 bg-[#0C1119] border border-white/[0.08] space-y-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-[0.2em]">
                    <Building2 className="w-4 h-4" />
                    <span>REȚEA IMOBILIARĂ INTERNAȚIONALĂ · FONDATĂ LA LONDRA ÎN 1805</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                    Chestertons Global Network
                  </h2>
                </div>

                <div className="space-y-4 font-sans text-sm sm:text-base text-[#8A95A5] leading-relaxed">
                  <p>
                    <strong className="text-[#F5F4EF] font-medium">Statut profesional confirmat:</strong> Cristian Văduva colaborează în calitate de partener/asociat internațional pe piața din România în cadrul rețelei Chestertons Global.
                  </p>
                  <p>
                    <strong className="text-[#F5F4EF] font-medium">Relevanță directă pentru client:</strong> Asigură accesul direct și securizat al clienților privați din România la portofoliul global de proprietăți rezidențiale de prestigiu (Londra, Riviera Franceză, Monaco, Dubai, Spania, Elveția). Clienții beneficiază de filtrare preliminară la București și colaborare nemijlocită cu birourile locale Chestertons din țările de destinație.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs text-[#B8C2CF] pt-2">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] uppercase block">PREZENȚĂ GLOBALĂ</span>
                    <span className="text-[#F5F4EF] font-medium text-sm">30+ ȚĂRI · 100+ BIROURI</span>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] uppercase block">ACCES PORTOFOLIU</span>
                    <span className="text-[#F5F4EF] font-medium text-sm">PROPRIETĂȚI ON & OFF-MARKET</span>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed">
                  <strong className="text-[#F5F4EF] font-medium block mb-1">Delimitare contractuală:</strong>
                  Chestertons Global este o entitate internațională independentă. Executive nu deține, nu controlează și nu operează marca Chestertons, ci activează în calitate de partener profesional asociat pentru mandate specifice.
                </div>
              </div>

              {/* Right: Authentic Photograph */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative aspect-[4/5] bg-black border border-white/[0.1] overflow-hidden group">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
                    alt="Cristian Văduva — Activitate profesională în cadrul rețelei internaționale Chestertons"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-75" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#07090D]/90 backdrop-blur-md border border-white/10 font-mono text-xs text-[#E1E4EA]">
                    Cristian Văduva · Rețeaua Chestertons Global
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PARTENER 2: GENERALI ROMÂNIA */}
          <section className="p-8 sm:p-12 lg:p-16 bg-[#0C1119] border border-white/[0.08] space-y-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left: Authentic Photograph / Diploma */}
              <div className="lg:col-span-5 space-y-3 order-2 lg:order-1">
                <div className="relative aspect-[4/5] bg-black border border-white/[0.1] overflow-hidden group">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-generali-portfolio-protection.png"
                    alt="Cristian Văduva — Activitate de consultanță și protecție a activelor Generali"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-75" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#07090D]/90 backdrop-blur-md border border-white/10 font-mono text-xs text-[#E1E4EA]">
                    Cristian Văduva · Soluții de Asigurare a Clădirilor de Mare Valoare
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A97F60] uppercase tracking-[0.2em]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>PROTECȚIE PATRIMONIALĂ & MANAGEMENTUL RISCULUI</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                    Partener Autorizat Generali România
                  </h2>
                </div>

                <div className="space-y-4 font-sans text-sm sm:text-base text-[#8A95A5] leading-relaxed">
                  <p>
                    <strong className="text-[#F5F4EF] font-medium">Statut profesional confirmat:</strong> Cristian Văduva deține un contract autorizat de agent/partener de asigurare cu Generali România Asigurare Reasigurare S.A.
                  </p>
                  <p>
                    <strong className="text-[#F5F4EF] font-medium">Relevanță directă pentru client:</strong> Structurarea soluțiilor de acoperire completă a riscurilor pentru proprietăți rezidențiale de mare valoare, calculul corect al costului de reconstrucție (evitând subasigurarea sau supraevaluarea), protecția finisajelor de lux și a colecțiilor private.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs text-[#B8C2CF] pt-2">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#A97F60] uppercase block">TIP POLIȚE</span>
                    <span className="text-[#F5F4EF] font-medium text-sm">CLĂDIRI & PROPRIETĂȚI PRIME</span>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#A97F60] uppercase block">CONFORMITATE</span>
                    <span className="text-[#F5F4EF] font-medium text-sm">CADRU REGLEMENTAT ASF</span>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border-l-2 border-[#93C8FF] font-sans text-xs text-[#8A95A5] leading-relaxed">
                  <strong className="text-[#F5F4EF] font-medium block mb-1">Delimitare de autoritate:</strong>
                  Polițele de asigurare sunt emise exclusiv de către Generali România Asigurare Reasigurare S.A. în conformitate cu termenii contractuali și condițiile generale de asigurare aprobate. Executive oferă consultanța de încadrare și analiza riscului fizic al activului.
                </div>
              </div>
            </div>
          </section>

          {/* REȚEAUA DESCHISĂ DE COLABORATORI ACREDITAȚI */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                03 // EXPERTIZĂ SPECIALIZATĂ INDEPENDENTĂ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Rețeaua de Profesioniști Independenți Acreditați
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-3xl leading-relaxed">
                Nicio tranzacție imobiliară responsabilă nu poate fi condusă de o singură persoană. În funcție de cerințele mandatului, colaborăm deschis cu consilierii dumneavoastră existenți sau vă punem în contact cu experți verificați:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <Scale className="w-5 h-5 text-[#93C8FF]" />
                <h3 className="font-serif text-lg text-[#F5F4EF]">Avocați de Barou</h3>
                <p className="leading-relaxed">
                  Cabinete de avocatură specializate în drept imobiliar, urbanism și litigii de proprietate pentru auditul formal al titlurilor.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <FileText className="w-5 h-5 text-[#93C8FF]" />
                <h3 className="font-serif text-lg text-[#F5F4EF]">Notari Publici</h3>
                <p className="leading-relaxed">
                  Birouri notariale cu experiență în tranzacții rezidențiale de mare valoare, garantând legalitatea autentificării și a transferului.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <Building2 className="w-5 h-5 text-[#93C8FF]" />
                <h3 className="font-serif text-lg text-[#F5F4EF]">Experți Tehnici MLPAT</h3>
                <p className="leading-relaxed">
                  Ingineri structuriști și diriginți de șantier autorizați pentru inspectarea rezistenței, instalațiilor și calității execuției.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <ShieldCheck className="w-5 h-5 text-[#93C8FF]" />
                <h3 className="font-serif text-lg text-[#F5F4EF]">Evaluatori ANEVAR</h3>
                <p className="leading-relaxed">
                  Evaluatori atestați conform standardelor internaționale de evaluare pentru estimarea valorii de piață și de creditare.
                </p>
              </div>
            </div>
          </section>

          {/* CTA CADRAN */}
          <section className="p-10 sm:p-14 bg-[#0C1119] border border-white/[0.1] text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
              Doriți să valorificați aceste parteneriate pentru un proiect?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-xl mx-auto leading-relaxed">
              Stabiliți o conversație inițială confidențială de 20 de minute pentru a discuta despre oportunități locale sau internaționale.
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
                href="/pentru-clienti"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] bg-[#07090D] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
              >
                <span>PENTRU CLIENȚI ROMÂNI</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
