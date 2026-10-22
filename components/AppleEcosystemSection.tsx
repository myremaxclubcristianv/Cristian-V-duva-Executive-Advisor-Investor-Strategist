"use client";

import { ExternalLink, Sparkles, Building2, Shield, Globe, Database, Compass, ArrowUpRight } from "lucide-react";

const ECOSYSTEM_PLATFORMS = [
  {
    name: "CristianVaduva.com",
    tagline: "Main Personal Brand & Strategic Advisory",
    description: "Central personal brand hub for executive real estate advisory, large-scale acquisitions, and capital structuring.",
    url: "https://cristianvaduva.com",
    category: "PERSONAL BRAND",
    icon: Sparkles,
    badge: "Principal",
  },
  {
    name: "AiXLuxury.com",
    tagline: "Ultra-Prime Real Estate & Luxury Ecosystem",
    description: "Platform and ecosystem dedicated to prime properties across Bucharest, Monaco, Dubai, and the French Riviera.",
    url: "https://aixluxury.com",
    category: "LUXURY REAL ESTATE",
    icon: Building2,
    badge: "Luxury Portal",
  },
  {
    name: "AiX OS & Market Pulse",
    tagline: "Live Real Estate Surveillance & Yield Analytics",
    description: "Real-time surveillance platform analyzing macroeconomic indicators, pricing per square meter, and investment yields.",
    url: "https://os.cristianvaduva.com",
    category: "MARKET INTELLIGENCE",
    icon: Database,
    badge: "PropTech OS",
  },
  {
    name: "HomeFind",
    tagline: "Property Search & Matching Platform",
    description: "Advanced property search system and market intelligence for prime residential real estate in Romania.",
    url: "https://homefind.cristianvaduva.com",
    category: "REAL ESTATE TECH",
    icon: Compass,
    badge: "Live Tech",
  },
  {
    name: "Subsidies & Grants",
    tagline: "Government Programs & Funding Intelligence",
    description: "Analytical platform monitoring EU structural funds and government financing programs for sustainable investment.",
    url: "https://subventii.cristianvaduva.com/",
    category: "FUNDING INTELLIGENCE",
    icon: Globe,
    badge: "Government / Grants",
  },
  {
    name: "Insurance & Asset Protection",
    tagline: "Authorized Generali Romania Partner",
    description: "Real estate wealth protection structuring and high-value property insurance policies in partnership with Generali Romania.",
    url: "https://insurance.cristianvaduva.com",
    category: "ASSET PROTECTION",
    icon: Shield,
    badge: "Generali Partner",
  },
];

export default function AppleEcosystemSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#0D0D0D] text-[#F5F5F7] border-t border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTEGRATED ECOSYSTEM & PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              The Cristian Văduva & AiX Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Connected platforms and specialized practice divisions, spanning real estate advisory and proptech to wealth protection and capital intelligence.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-400">
            <span>OFFICIAL NETWORK: CRISTIANVADUVA.COM · AIXLUXURY.COM</span>
          </div>
        </div>

        {/* Bento Grid Layout for Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_PLATFORMS.map((item) => {
            const Icon = item.icon;
            const isExternal = item.url.startsWith("http");

            return (
              <a
                key={item.name}
                href={item.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="bg-[#141414] border border-white/10 hover:border-[#B89B72]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#B89B72] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#B89B72] transition-colors flex items-center justify-between">
                      <span>{item.name}</span>
                      {isExternal && (
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B89B72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </h3>
                    <p className="text-xs font-medium text-[#B89B72]/90">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Access Platform</span>
                  <span className="text-[#B89B72] group-hover:underline">Explore →</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
