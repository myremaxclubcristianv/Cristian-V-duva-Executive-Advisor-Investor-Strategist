import Link from "next/link";
import { Lock, ArrowUpRight, Phone, ShieldCheck, MapPin } from "lucide-react";
import { YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#07090D] text-[#F5F4EF] border-t border-white/[0.1] pt-20 pb-12 relative overflow-hidden">
      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      <div className="site-container relative z-10 space-y-16">
        {/* Top Grid: Brand & Global Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/[0.08] pb-16">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <Link
                href="/"
                className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] tracking-tight hover:text-[#93C8FF] transition-colors block"
              >
                CRISTIAN VADUVA
              </Link>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF] font-medium">
                EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light max-w-md leading-relaxed">
              Directing strategic capital allocation, ultra-prime real estate acquisitions, and confidential private advisory for principals and family offices across Europe and the Middle East.
            </p>

            {/* Geographical Coordinates Matrix */}
            <div className="p-4 border border-white/[0.08] bg-[#0C1119]/80 space-y-2 max-w-md font-mono text-[10px] text-[#B8C2CF]">
              <div className="text-[#93C8FF] tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>GLOBAL OPERATIONAL AXIS</span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <span>BUCHAREST (HQ)</span>
                  <span className="text-[#D8D0C2]">44.4396° N · 26.0963° E</span>
                </div>
                <div className="flex justify-between">
                  <span>MONACO (RIVIERA)</span>
                  <span className="text-[#D8D0C2]">43.7384° N · 07.4246° E</span>
                </div>
                <div className="flex justify-between">
                  <span>DUBAI (GULF)</span>
                  <span className="text-[#D8D0C2]">25.2048° N · 55.2708° E</span>
                </div>
                <div className="flex justify-between">
                  <span>ZURICH (CUSTODY)</span>
                  <span className="text-[#D8D0C2]">47.3769° N · 08.5417° E</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Structure */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
              PLATFORM INDEX
            </span>
            <ul className="space-y-1 font-mono text-xs text-[#B8C2CF]">
              <li>
                <Link href="/" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>01 // EXECUTIVE OVERVIEW</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>02 // BIOGRAPHY & MANDATE</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/real-estate" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>03 // ULTRA-PRIME REAL ESTATE</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/ventures" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>04 // VENTURES & ECOSYSTEM</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>05 // MARKET INSIGHTS</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" prefetch={false} className="hover:text-[#93C8FF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>06 // VISUAL MONOGRAPH</span>
                  <span className="text-[9px] px-1.5 py-0.5 border border-[#93C8FF]/30 text-[#93C8FF]">HD</span>
                </Link>
              </li>
              <li>
                <Link href="/tv" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>07 // TV STUDIO BROADCAST</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false} className="hover:text-[#F5F4EF] transition-colors flex items-center justify-between group py-2.5 min-h-[44px]">
                  <span>08 // INTAKE DESK</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#93C8FF]">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Confidential Communications & Social */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
              PRIVATE CHANNELS
            </span>

            <div className="space-y-3 font-mono text-xs">
              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 min-h-[48px] border border-white/[0.08] bg-[#0C1119] hover:border-[#93C8FF] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>+43 650 953 6345 (Direct / Signal)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A95A5] group-hover:text-[#93C8FF]" />
              </a>

              <a
                href="https://linkedin.com/in/cristianvaduva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 min-h-[48px] border border-white/[0.08] bg-[#0C1119] hover:border-[#93C8FF] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>LinkedIn / Cristian Văduva</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A95A5] group-hover:text-[#93C8FF]" />
              </a>

              <a
                href="https://www.youtube.com/@CristianVaduvaCV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 min-h-[48px] border border-white/[0.08] bg-[#0C1119] hover:border-[#93C8FF] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <YoutubeIcon className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>Official YouTube Broadcast</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A95A5] group-hover:text-[#93C8FF]" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-[#8A95A5] pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>SWISS-GRADE FIDUCIARY PRIVILEGE · ISO COMPLIANT</span>
            </div>
          </div>
        </div>

        {/* Colophon & Legal Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 font-mono text-[10px] text-[#8A95A5] border-t border-white/[0.05]">
          <div>
            © {currentYear} CRISTIAN VADUVA. ALL SOVEREIGN RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" prefetch={false} className="hover:text-[#F5F4EF] transition-colors py-2 min-h-[36px] inline-flex items-center">
              PRIVACY POLICY
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terms-of-use" prefetch={false} className="hover:text-[#F5F4EF] transition-colors py-2 min-h-[36px] inline-flex items-center">
              TERMS OF USE
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/gdpr" prefetch={false} className="hover:text-[#F5F4EF] transition-colors py-2 min-h-[36px] inline-flex items-center">
              GDPR
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/editorial-policy" prefetch={false} className="hover:text-[#F5F4EF] transition-colors py-2 min-h-[36px] inline-flex items-center">
              EDITORIAL POLICY
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/data-provenance" prefetch={false} className="hover:text-[#F5F4EF] transition-colors py-2 min-h-[36px] inline-flex items-center">
              DATA PROVENANCE
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/disclaimer" prefetch={false} className="hover:text-[#F5F4EF] transition-colors py-2 min-h-[36px] inline-flex items-center">
              DISCLAIMER
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/login" prefetch={false} className="hover:text-[#93C8FF] transition-colors py-2 min-h-[36px] inline-flex items-center gap-1">
              <Lock className="w-2.5 h-2.5" />
              <span>PRINCIPAL LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
