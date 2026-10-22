"use client";

import { Building2, Shield, GraduationCap, Globe, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AppleExecutiveBento() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#0D0D0D] text-[#F5F5F7] border-t border-b border-white/10">
      <div className="site-container space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
              <span>PERFORMANCE & ADVISORY CADRANS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Decision Architecture & Integrated Practice
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light">
            Unique synergy between prime real estate transactions, capital structuring, private wealth protection, and multidisciplinary academic rigor.
          </p>
        </div>

        {/* Bento Grid Layout (Apple Modular Cadrane) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* CADRAN 1: Luxury Real Estate & Prime Acquisitions (7 Cols) */}
          <div className="md:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:border-[#B89B72]/40 transition-all relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#B89B72]">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  CADRAN 01 / TRANSACTIONS
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Ultra-Prime Real Estate & Off-Market Estates
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  Exclusive representation for buyers and sellers of landmark residences, trophy penthouses, and strategic development parcels across Bucharest prime enclaves (Herăstrău, Primăverii, Kiseleff, Pipera), alongside the Monaco · Dubai corridor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-neutral-400 font-mono">Bucharest</div>
                  <div className="text-sm font-semibold text-white mt-1">Herăstrău · Primăverii</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-neutral-400 font-mono">Monaco</div>
                  <div className="text-sm font-semibold text-white mt-1">Monte Carlo · Riviera</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-neutral-400 font-mono">Dubai</div>
                  <div className="text-sm font-semibold text-white mt-1">Palm · Downtown</div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-8 relative z-10">
              <span className="text-xs text-neutral-400 font-mono">AiXLuxury Portfolio</span>
              <Link href="/real-estate" className="text-xs font-mono text-[#B89B72] hover:underline flex items-center gap-1">
                Explore Portfolio <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CADRAN 2: Capital Strategy & Generali Partner (5 Cols) */}
          <div className="md:col-span-5 bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:border-[#B89B72]/40 transition-all relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#B89B72]">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  CADRAN 02 / CAPITAL
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Asset Protection & Generali Partnership
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  Dedicated wealth protection advisory and comprehensive risk-transfer mechanisms for investors and family offices, integrated in partnership with Generali Romania.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-neutral-300 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B89B72] shrink-0" />
                  <span>Real estate and building portfolio protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B89B72] shrink-0" />
                  <span>Asset preservation and guarantee structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B89B72] shrink-0" />
                  <span>Financial risk planning for UHNW principals</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 relative z-10">
              <span className="text-xs text-neutral-400 font-mono">Institutional Security</span>
            </div>
          </div>

          {/* CADRAN 3: 6 Academic Degrees & Analytical Foundation (6 Cols) */}
          <div className="md:col-span-6 bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:border-[#B89B72]/40 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#B89B72]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  CADRAN 03 / ACADEMIC FOUNDATION
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  6 University & Master&apos;s Degrees
                </h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  A rare multidisciplinary analytical foundation spanning economics, jurisprudence, and applied sciences:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="font-semibold text-white">Bachelor&apos;s Degrees</div>
                  <div className="text-neutral-400 font-light">Economics · Law · Ecology</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="font-semibold text-white">Master&apos;s & Specializations</div>
                  <div className="text-neutral-400 font-light">Financial Management · Information Security · Environmental Impact Assessment</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">Academic Mobility: Madrid · Amiens · Malta</span>
              <Link href="/about" className="text-xs font-mono text-[#B89B72] hover:underline flex items-center gap-1">
                Complete Biography <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CADRAN 4: Market Intelligence & Live Media Hub (6 Cols) */}
          <div className="md:col-span-6 bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:border-[#B89B72]/40 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#B89B72]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  CADRAN 04 / MARKET INTELLIGENCE
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Market Pulse & Real-Time Intelligence
                </h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Continuous surveillance of pricing per square meter, net rental yields, and transaction liquidity across prime real estate markets.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 via-black to-transparent border border-red-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  <div>
                    <div className="text-xs font-semibold text-white">Official YouTube Channel</div>
                    <div className="text-[11px] text-neutral-400 font-mono">@CristianVaduvaCV</div>
                  </div>
                </div>
                <Link
                  href="/tv"
                  className="px-3.5 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-mono uppercase transition-colors"
                >
                  Watch Episodes
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">Official Broadcast Sync</span>
              <a
                href="https://www.youtube.com/@CristianVaduvaCV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#B89B72] hover:underline flex items-center gap-1"
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
