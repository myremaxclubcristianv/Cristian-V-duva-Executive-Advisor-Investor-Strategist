"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Building2, Award, Landmark, Play, Image as ImageIcon } from "lucide-react";

export default function AppleHeroCadran() {
  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#FFFFFF] text-[#1D1D1F]">
      {/* Subtle white ambient glow for editorial feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5F5F7]/10 via-white/0 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#8F7449]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10 space-y-12 sm:space-y-16 flex flex-col items-center text-center">
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
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">Cristian Văduva</h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-[#B89B72] font-serif italic tracking-wide">Executive Luxury Real Estate Advisor · Investor · Strategist</p>
          </div>
          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            Capital architecture, ultra-prime acquisitions, and executive-level strategic advisory for private investors, investment syndicates, and family offices across Romania, Monaco, and Dubai.
          </p>
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 justify-center">
            <a href="https://wa.me/436509536345" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full bg-[#1D1D1F] hover:bg-gray-800 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 shadow-md">
              <span>Direct Private Advisory</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link href="/gallery" className="px-6 py-3.5 rounded-full border border-gray-300 text-gray-800 font-medium text-sm transition-all duration-200 flex items-center gap-2 bg-white hover:bg-gray-50">
              <ImageIcon className="w-4 h-4 text-gray-800" />
              <span>Photo Archive & Monograph</span>
            </Link>
            <Link href="/tv" className="px-6 py-3.5 rounded-full border border-gray-300 text-gray-800 font-medium text-sm transition-all duration-200 flex items-center gap-2 bg-white hover:bg-gray-50">
              <Play className="w-4 h-4 text-red-600" />
              <span>YouTube TV Studio</span>
            </Link>
          </div>
        </div>

        {/* Apple Bento Cadrane: Key Metrics & Strategic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {/* Cadran 1 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Prime Expertise</span>
              <Building2 className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">Luxury Real Estate</div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">Herăstrău, Primăverii, Monaco Riviera, Dubai Marina & off-market estates.</p>
            </div>
          </div>
          {/* Cadran 2 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Capital Protection</span>
              <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">Asset Protection</div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">Strategic Generali Romania partnership & UHNW wealth risk structuring.</p>
            </div>
          </div>
          {/* Cadran 3 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Academic Rigor</span>
              <Award className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">6 Degrees & Master&apos;s</div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">Economics, Law, Ecology, Financial Management & Information Security.</p>
            </div>
          </div>
          {/* Cadran 4 */}
          <div className="bg-[#141414]/80 border border-white/10 hover:border-[#B89B72]/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89B72]">Platform & Media</span>
              <Landmark className="w-4 h-4 text-[#B89B72]" />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">AiXLuxury & YouTube</div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">Integrated digital ecosystem, video market intelligence & cross-border transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
