import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function ArchitecturalHero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 border-b border-white/[0.08] overflow-hidden bg-[#07090D] text-[#F5F4EF]">
      {/* ── Background Architectural Plane: Sovereign Residence Visual ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/residence/exterior.png"
          alt="Reședință Contemporană de Prestigiu — Cristian Văduva Executive"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000"
        />
        {/* Subtle, Deep Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/75 to-[#07090D]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/95 via-[#07090D]/70 to-[#07090D]/40" />
      </div>

      {/* ── Main Editorial Hero Composition ── */}
      <div className="site-container relative z-10 flex-1 flex flex-col justify-center my-auto py-6 sm:py-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          
          {/* Editorial Eyebrow Tag */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#D8D0C2]/90 font-medium">
              INDEPENDENT ADVISORY · REAL ESTATE · INVESTMENTS
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] text-[#F5F4EF] leading-[1.04] sm:leading-[0.98] tracking-tight font-normal">
              Exceptional Decisions.
              <br />
              <span className="text-[#A97F60] italic font-light">Extraordinary Outcomes.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed pt-1">
              Strategic advisory for real estate, investments and business opportunities. A considered approach built around clarity, discretion and long‑term value.
            </p>
          </div>

          {/* Primary Action Suite */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/programare"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F5F4EF] hover:bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-xl group text-center min-h-[50px]"
            >
              <span>PRIVATE CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 text-[#07090D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/pentru-clienti"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/[0.2] hover:border-[#F5F4EF] text-[#F5F4EF] hover:bg-white/[0.04] font-mono text-xs uppercase tracking-[0.16em] transition-all duration-300 backdrop-blur-sm bg-black/20 text-center min-h-[50px]"
            >
              <span>EXPLORE EXPERTISE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A97F60]" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── Substantive Context Rail (Zero generic badges) ── */}
      <div className="site-container relative z-10 w-full pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/[0.1] pt-6 font-mono text-xs text-[#8A95A5]">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">ARIE DE ACȚIUNE</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Herăstrău · Primăverii · Kiseleff</span>
            <span className="text-[11px] text-[#647082] block">Nordul Capitalei & Pipera Rezidențial</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">PARTENERIATE OFICIALE</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Chestertons & Generali</span>
            <span className="text-[11px] text-[#647082] block">Rețea Globală & Agent Autorizat</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">STANDARDE DE LUCRU</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Reprezentare Unilaterală</span>
            <span className="text-[11px] text-[#647082] block">Acorduri Bilaterale de Confidențialitate (NDA)</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">PORTOFOLIU DOCUMENTAT</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">433 Active Verificate</span>
            <Link href="/real-estate/properties" className="text-[11px] text-[#93C8FF] hover:underline block font-sans">
              Explorează catalogul imobiliar →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
