"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Building2, Award, Landmark, Play, Image as ImageIcon } from "lucide-react";

export default function AppleHeroCadran() {
  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#0A0A0A] text-[#F5F5F7]">
      {/* Apple Subtle Radial Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B89B72]/15 via-black/0 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#8F7449]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10 space-y-12 sm:space-y-16">
        
        {/* Top Badges & Geographic Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-xs font-mono tracking-widest text-[#B89B72] shadow-sm">
            <span>BUCHAREST · MONACO · DUBAI</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89B72]" />
            <span>OFFICIAL EXECUTIVE MONOGRAPH</span>
          </div>
        </div>

        {/* Main Monograph Hero Headline */}
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Cristian Văduva
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-[#B89B72] font-serif italic tracking-wide">
              Executive Luxury Real Estate Advisor · Investor · Strategist
            </p>
          </div>

          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            Arhitectură de capital, achiziții ultra-prime și consultanță strategică de cel mai înalt nivel pentru investitori privați, fonduri de investiții și family offices în România, Monaco și Dubai.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#B89B72] hover:bg-[#C9AE85] text-black font-medium text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#B89B72]/20 group"
            >
              <span>Consultanță Privată Directă</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/gallery"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
            >
              <ImageIcon className="w-4 h-4 text-[#B89B72]" />
              <span>Galeria Foto & Monograph</span>
            </Link>

            <Link
              href="/tv"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
            >
              <Play className="w-4 h-4 text-red-400 fill-red-400" />
              <span>YouTube TV Studio</span>
            </Link>
          </div>
        </div>

        {/* Apple Bento Cadrane: Key Metrics & Strategic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          
          {/* Cadran 1 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Expertiză Prime</span>
              <Building2 className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                Luxury Real Estate
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Herăstrău, Primăverii, Monaco Riviera, Dubai Marina & off-market estates.
              </p>
            </div>
          </div>

          {/* Cadran 2 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Protecție Capital</span>
              <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                Asset Protection
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Parteneriat strategic Generali România & structurare de asigurări UHNW.
              </p>
            </div>
          </div>

          {/* Cadran 3 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Rigoare Academică</span>
              <Award className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                6 Diplome & Masterate
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Economie, Drept, Ecologie, Management Financiar & Securitatea Informației.
              </p>
            </div>
          </div>

          {/* Cadran 4 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Platformă & Media</span>
              <Landmark className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                AiXLuxury & YouTube
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Ecosistem digital integrat, analiză de piață video & tranzacții internaționale.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
