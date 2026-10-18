import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";

interface PersonalPerspectiveSectionProps {
  className?: string;
}

export default function PersonalPerspectiveSection({
  className = "",
}: PersonalPerspectiveSectionProps) {
  return (
    <section className={`py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D] relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-[#A97F60] uppercase tracking-[0.26em] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
              <span>CONSULTANȚĂ DEDICATĂ · PROFIL FONDATOR</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] font-normal tracking-tight">
              Cristian Văduva — <span className="text-[#A97F60] italic font-light">O altă perspectivă.</span>
            </h2>
          </div>

          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-[#8A95A5]">
            <ShieldCheck className="w-4 h-4 text-[#A97F60]" />
            <span className="uppercase tracking-[0.18em]">Mandate Private Limitate Anual</span>
          </div>
        </div>

        {/* Master Spread: Authentic Photography + Executive Philosophy */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Authentic Portrait (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] w-full bg-[#1B2028] overflow-hidden border border-white/[0.1] shadow-2xl">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
                alt="Cristian Văduva — Consiliere strategică în biroul executiv"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#A97F60] block font-semibold">
                  CONSILIER EXECUTIV & INVESTITOR
                </span>
                <h3 className="font-serif text-xl text-[#F5F4EF] font-normal">
                  Cristian Văduva
                </h3>
                <span className="font-mono text-[10px] text-[#8A95A5] block">
                  București (Birou Central) · Viena · Coridoare Globale
                </span>
              </div>
            </div>

            {/* Supporting Context Image */}
            <div className="p-4 bg-[#0C1119] border border-white/[0.08] flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 border border-white/[0.1] overflow-hidden">
                <Image
                  src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                  alt="Audit tehnic și planuri de arhitectură"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5 font-sans text-xs text-[#8A95A5]">
                <strong className="text-[#F5F4EF] block font-mono text-[10px] uppercase tracking-wider">
                  METODOLOGIE EMPIRICĂ
                </strong>
                Fiecare tranzacție este susținută de audit cadastral detaliat și verificare structurală independentă.
              </div>
            </div>
          </div>

          {/* Strategic Philosophy Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <blockquote className="p-6 sm:p-8 border-l-2 border-[#A97F60] bg-[#0C1119]/80 space-y-3">
              <p className="font-serif italic text-xl sm:text-2xl text-[#F5F4EF] leading-relaxed font-light">
                „O proprietate excepțională devine un activ durabil doar atunci când este susținută de verificare cadastrală fără compromis, structură solidă și protecție patrimonială completă.”
              </p>
              <footer className="font-mono text-[11px] text-[#8A95A5] uppercase tracking-wider">
                CRISTIAN VĂDUVA — DIRECTIVA EXECUTIVĂ
              </footer>
            </blockquote>

            <div className="space-y-5 font-sans text-base text-[#B8C2CF] font-light leading-relaxed">
              <p>
                Spre deosebire de o agenție imobiliară clasică ghidată de volumul tranzacțional și comisioane bilaterale rapide, practica Executive funcționează ca un birou privat de reprezentare fiduciară. Preluăm un număr limitat de mandate pe an pentru a garanta atenție minuțioasă fiecărui detaliu.
              </p>
              <p>
                Analizăm proprietățile prin prisma durabilității structurale, istoricului de proprietate de peste 30 de ani, lichidității de ieșire și optimizării patrimoniale pe termen lung.
              </p>
            </div>

            {/* Academic & Professional Foundation */}
            <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                FUNDAMENT MULTIDISCIPLINAR
              </span>
              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs text-[#8A95A5]">
                <div className="space-y-1">
                  <span className="text-[#F5F4EF] font-sans font-medium block">Studii Superioare Verificate</span>
                  <span>Economie · Drept · Ecologie (3× Licență)</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[#F5F4EF] font-sans font-medium block">Experiență Internațională</span>
                  <span>Rezidențe & Analiză (Madrid · Amiens · Valletta)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#F5F4EF] hover:bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-lg group"
              >
                <span>BIOGRAFIE & PARCURS COMPLET</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#07090D] transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/programare"
                className="inline-flex items-center gap-2.5 px-7 py-4 border border-white/[0.2] hover:border-[#F5F4EF] text-[#F5F4EF] hover:bg-white/[0.04] font-mono text-xs uppercase tracking-[0.16em] transition-all duration-300"
              >
                <span>PROGRAMARE DISCUȚIE PRIVATĂ</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A97F60]" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
