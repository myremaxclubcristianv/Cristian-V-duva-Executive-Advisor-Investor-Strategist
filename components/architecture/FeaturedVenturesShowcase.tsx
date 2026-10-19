"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink, ShieldCheck, Compass, Building2, TrendingUp, Cpu } from "lucide-react";
import { useLocale } from "@/app/context/LocaleContext";

export default function FeaturedVenturesShowcase() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  return (
    <section id="ventures" className="py-24 sm:py-32 lg:py-40 bg-[#07090D] text-[#F5F4EF] border-b border-white/[0.08] relative overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24">
        
        {/* Section Header (Apple-Style Minimalist Typography) */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
            <span>ECOSISTEMUL CRISTIAN VĂDUVA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
            Platforme dedicate. <span className="text-[#A97F60] italic font-light">Un singur standard fiduciar.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#86868B] font-light leading-relaxed max-w-2xl">
            Fiecare inițiativă este concepută pentru a rezolva o problemă structurală a pieței de lux — de la verificarea riguroasă a proprietăților la structurarea financiară și protecția patrimoniului.
          </p>
        </div>

        {/* ── MODULE 01: THE FLAGSHIP BILLBOARD — HOMEFIND ── */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0C1119] min-h-[520px] lg:min-h-[580px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 group transition-all duration-500 hover:border-[#93C8FF]/40">
          {/* Cinematic Background Plane */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/cristian-vaduva/personal/cristian-vaduva-residence-curved-glass-terrace.png"
              alt="HomeFind — Platforma Verificată de Proprietăți de Lux"
              fill
              sizes="100vw"
              className="object-cover object-center scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/80 to-[#07090D]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090D] via-[#07090D]/60 to-transparent" />
          </div>

          {/* Content Plane */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] font-mono text-[10px] uppercase tracking-[0.2em] text-[#93C8FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
              <span>PLATFORMĂ VERIFICATĂ DE LUX</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] font-normal tracking-tight">
                HomeFind
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed">
                Căutarea imobiliară de prestigiu, curățată de speculații. Anunțuri verificate independent, fotografii arhitecturale autentice și legături directe cu proprietari și cumpărători calificați.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://homefind.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-pill-primary inline-flex items-center gap-2"
              >
                <span>DESCHIDE HOMEFIND</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/real-estate/properties"
                className="apple-action-link text-[#F5F4EF] hover:text-[#93C8FF] text-sm"
              >
                <span>Vezi selecția din portofoliu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── MODULE 02 & 03: DUAL-UP PRODUCT HIGHLIGHT (APPLE STYLE) ── */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Dual 01: CV Finance & Capital Advisory */}
          <div className="rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold">
                STRUCTURARE DE CAPITAL & INVESTIȚII
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal">
                CV Finance
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Inginerie financiară și analiză empirică de randament like-for-like. Separăm prețul cerut de valoarea tranzacționată reală și structurăm achizițiile complexe alături de evaluatori atestați.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                alt="CV Finance — Analiză de capital și underwriting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60" />
            </div>

            <div className="pt-2 relative z-10">
              <Link href="/ventures" className="apple-action-link">
                <span>Explorează serviciile financiare</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Dual 02: Insurance Advisory */}
          <div className="rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#93C8FF] font-semibold">
                PROTECȚIA PATRIMONIULUI · GENERALI PARTNER
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal">
                Insurance Advisory
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Soluții reglementate de transfer de risc patrimonial. Protejăm reședințele de mare valoare, colecțiile private și activele corporative în alianță cu cei mai respectați asigurători internaționali.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-generali-portfolio-protection.png"
                alt="Insurance Advisory — Protecție patrimonială și transfer de risc"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60" />
            </div>

            <div className="pt-2 relative z-10">
              <Link href="/ecosystem" className="apple-action-link">
                <span>Vezi soluțiile de protecție</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* ── MODULE 04 & 05: ASYMMETRICAL BENTO (GLOBAL CORRIDORS & CONSTRUCTION) ── */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Module 04: Dubai & Monaco International (7 cols - Expansive Global Corridor) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold">
                CORIDOARE GLOBALE · CHESTERTONS ALLIANCE
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] font-normal">
                Dubai & Monaco International
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Asistență fiduciară pentru tranzacții transfrontaliere în centre financiare globale: Dubai, Monaco, Marbella și Miami. Conexiune directă cu birourile locale din rețeaua internațională Chestertons.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-development-skytower-inspection.png"
                alt="Dubai & Monaco International — Active imobiliare globale"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60" />
            </div>

            <div className="pt-2 relative z-10">
              <Link href="/parteneri" className="apple-action-link">
                <span>Descoperă rețeaua internațională</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Module 05: AiXLuxury & Construction Architecture (5 cols - Craft & Development) */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#93C8FF] font-semibold">
                ARHITECTURĂ & DEZVOLTARE
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal">
                AiXLuxury & Construction
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Dezvoltare rezidențială contemporană, materiale durabile și management de proiect de precizie. Standarde constructive fără compromisuri pentru reședințe de colecție.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-development-curved-balcony-armani.png"
                alt="AiXLuxury — Construcții și dezvoltare de lux"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60" />
            </div>

            <div className="pt-2 relative z-10">
              <a
                href="https://aixluxury.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-action-link"
              >
                <span>Accesează AiXLuxury.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
