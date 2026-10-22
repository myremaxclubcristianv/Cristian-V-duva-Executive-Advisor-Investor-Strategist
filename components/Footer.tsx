import React from "react";
import Link from "next/link";
import { Lock, ArrowUpRight, Phone, ShieldCheck, Mail, Send } from "lucide-react";
import { YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#07090D] text-[#86868B] border-t border-white/[0.08] pt-16 sm:pt-20 pb-12 font-sans text-xs">
      <div className="site-container space-y-12 sm:space-y-16">
        
        {/* Top Directory Grid (Apple 4-Column Directory Format) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 border-b border-white/[0.08] pb-12 sm:pb-16">
          
          {/* Col 1: Identity & Positioning */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <div className="space-y-1.5">
              <Link
                href="/"
                className="font-serif text-xl sm:text-2xl text-[#F5F4EF] tracking-tight hover:text-white transition-colors block"
              >
                Cristian Văduva
              </Link>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-medium">
                EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
              </div>
            </div>

            <p className="font-sans text-xs text-[#86868B] font-light max-w-sm leading-relaxed">
              Dedicated private advisory, capital structuring, and high-value residential acquisitions across Bucharest, Monaco, and Dubai.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#8E9AA8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
              <span>Bucharest (Headquarters) · Vienna · Global Corridors</span>
            </div>
          </div>

          {/* Col 2: Navigation & Solutions */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F4EF] font-semibold block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F5F4EF] transition-colors block">
                  Biography & Background
                </Link>
              </li>
              <li>
                <Link href="/ventures" className="hover:text-[#F5F4EF] transition-colors block">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-[#F5F4EF] transition-colors block">
                  Integrated Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/real-estate/properties" className="hover:text-[#F5F4EF] transition-colors block">
                  Property Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pentru-clienti" className="hover:text-[#F5F4EF] transition-colors block">
                  Client Advisory & Mandates
                </Link>
              </li>
              <li>
                <Link href="/cum-lucrez" className="hover:text-[#F5F4EF] transition-colors block">
                  Advisory Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Media */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F4EF] font-semibold block">
              INTELLIGENCE & MEDIA
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link href="/insights" className="hover:text-[#F5F4EF] transition-colors block">
                  Executive Journal
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#F5F4EF] transition-colors block">
                  Media Archive & Broadcasts
                </Link>
              </li>
              <li>
                <Link href="/raport-piata" className="hover:text-[#F5F4EF] transition-colors block">
                  Bucharest Prime Market Report
                </Link>
              </li>
              <li>
                <Link href="/ghid-cumparator" className="hover:text-[#F5F4EF] transition-colors block">
                  Buyer&apos;s Due Diligence Guide
                </Link>
              </li>
              <li>
                <Link href="/parteneri" className="hover:text-[#F5F4EF] transition-colors block">
                  Partners (Chestertons · Generali)
                </Link>
              </li>
              <li>
                <Link href="/studii-de-caz" className="hover:text-[#F5F4EF] transition-colors block">
                  Anonymized Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Channels */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A97F60] font-semibold block">
              DIRECT CHANNELS
            </span>
            <ul className="space-y-1.5 font-sans text-xs">
              <li>
                <a
                  href="mailto:cristianvaduva@duck.com"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-2 py-1 min-h-[36px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A97F60]" />
                  <span>cristianvaduva@duck.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-2 py-1 min-h-[36px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A97F60]" />
                  <span>WhatsApp (+43 650 953 6345)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/CristianVaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-2 py-1 min-h-[36px]"
                >
                  <Send className="w-3.5 h-3.5 text-[#A97F60]" />
                  <span>Telegram / CristianVaduva</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/cristianvaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-2 py-1 min-h-[36px]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#A97F60]" />
                  <span>Official LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@CristianVaduvaCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-2 py-1 min-h-[36px]"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-[#A97F60]" />
                  <span>YouTube Broadcast</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon Bar (Apple Legal Line Standard) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2 font-mono text-[10px] text-[#8E9AA8]">
          <div>
            Copyright © {currentYear} Cristian Văduva. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[#8E9AA8]">
            <Link href="/privacy" className="hover:text-[#F5F4EF] transition-colors py-1">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-of-use" className="hover:text-[#F5F4EF] transition-colors py-1">
              Terms of Use
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-[#F5F4EF] transition-colors py-1">
              Cookie Policy
            </Link>
            <span>·</span>
            <Link href="/gdpr" className="hover:text-[#F5F4EF] transition-colors py-1">
              GDPR
            </Link>
            <span>·</span>
            <Link href="/editorial-policy" className="hover:text-[#F5F4EF] transition-colors py-1">
              Editorial Policy
            </Link>
            <span>·</span>
            <Link href="/data-provenance" className="hover:text-[#F5F4EF] transition-colors py-1">
              Data Provenance
            </Link>
            <span>·</span>
            <Link href="/disclaimer" className="hover:text-[#F5F4EF] transition-colors py-1">
              Disclaimer
            </Link>
            <span>·</span>
            <Link href="/login" className="hover:text-[#93C8FF] transition-colors inline-flex items-center gap-1 py-1">
              <Lock className="w-2.5 h-2.5" />
              <span>Principal Portal</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
