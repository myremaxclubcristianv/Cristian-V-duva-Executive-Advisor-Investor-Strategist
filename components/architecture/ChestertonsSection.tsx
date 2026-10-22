import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowUpRight, ShieldCheck, Building } from "lucide-react";

/**
 * CHESTERTONS INTERNATIONAL AFFILIATION SECTION
 * Factual, refined editorial integration for the homepage.
 * Clarifies the international property network affiliation of Cristian Văduva with Chestertons.
 */
export default function ChestertonsSection() {
  return (
    <section className="relative w-full bg-[#07090D] text-[#F5F4EF] py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#93C8FF]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A97F60]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <Globe className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>INTERNATIONAL REAL ESTATE NETWORK · EST. 1805</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] font-normal tracking-tight leading-[1.15]">
              Direct Access to the Chestertons Global Property Network
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#8A95A5] leading-relaxed">
              Cristian Văduva operates as an associate partner within the Chestertons international network, facilitating direct client access to prime residential properties and strategic acquisitions across premier global markets.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-3 font-mono text-xs text-[#8A95A5] shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#0C1119] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
              <span>BUCHAREST HUB · GLOBAL CORRIDORS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#0C1119] border border-white/[0.08]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A97F60]" />
              <span>MULTILINGUAL ADVISORY SUPPORT</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Editorial Narrative & Authentic Photography */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] bg-[#0C1119] border border-white/[0.1] overflow-hidden group">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
                alt="Cristian Văduva — Chestertons Global Network Collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/10 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] block">
                  ARCHIVAL PHOTOGRAPH
                </span>
                <p className="font-sans text-xs text-[#E1E4EA] leading-snug">
                  Cristian Văduva · Strategic advisory and cross-border transaction coordination
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-[#0C1119] border border-white/[0.06] font-mono text-xs text-[#8A95A5]">
              <span>GLOBAL NETWORK PRESENCE</span>
              <span className="text-[#F5F4EF] font-medium">30+ COUNTRIES · 100+ OFFICES</span>
            </div>
          </div>

          {/* Editorial Content Side (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A97F60] font-semibold block">
                PRIVATE CLIENT BENEFITS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
                Direct Conduit Between Local Capital and Premier International Enclaves
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed">
                Acquiring prime overseas real estate frequently entails language complexities, information asymmetry, and localized legal nuances. Through the Chestertons affiliation, clients gain a single dedicated advisory contact in Bucharest that screens offerings, vets developer credibility, and liaises directly with specialized in-market teams.
              </p>
            </div>

            {/* Corridors Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>London & United Kingdom</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Mayfair, Belgravia, Kensington</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Prime residential apartments, heritage landmark properties, and single-family townhouses across central London.
                </p>
              </div>

              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>French Riviera & Monaco</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Cap d&apos;Ail, Cannes, Saint-Tropez</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Coastal villas with panoramic Mediterranean views and trophy holdings in resilient international enclaves.
                </p>
              </div>

              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Dubai & United Arab Emirates</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Palm Jumeirah, Dubai Islands</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Branded residences, prime architectural penthouses, and curated masterplan acquisitions.
                </p>
              </div>

              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Spain & Balearic Islands</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Madrid, Marbella, Mallorca</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Prime holiday residences, private villas in gated communities, and prime apartments in Madrid.
                </p>
              </div>
            </div>

            {/* Transparent Status Disclaimer Box */}
            <div className="p-4 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">
                Factual disclosure of professional relationship:
              </strong>
              Chestertons Global is an independent real estate network founded in London in 1805. Cristian Văduva collaborates as an international associate partner for the Romanian market. The Executive platform does not own or operate the Chestertons brand, providing private advisory services and facilitating client access to the network&apos;s international inventory.
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/parteneri"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#F5F4EF] transition-colors"
              >
                <span>CHESTERTONS PARTNERSHIP DETAILS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#93C8FF] transition-colors"
              >
                <span>REQUEST 20-MINUTE CONSULTATION</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
