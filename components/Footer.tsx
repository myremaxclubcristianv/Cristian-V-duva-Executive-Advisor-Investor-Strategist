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
              Consultanță privată dedicată, structurare de capital și achiziții rezidențiale de mare valoare pe coridoarele București, Monaco și Dubai.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#647082]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
              <span>București (Birou Principal) · Viena · Coridoare Globale</span>
            </div>
          </div>

          {/* Col 2: Navigație & Soluții */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F4EF] font-semibold block">
              NAVIGAȚIE
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F5F4EF] transition-colors block">
                  Biografie & Experiență
                </Link>
              </li>
              <li>
                <Link href="/ventures" className="hover:text-[#F5F4EF] transition-colors block">
                  Consultanță Strategică
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-[#F5F4EF] transition-colors block">
                  Ecosistem Integrat
                </Link>
              </li>
              <li>
                <Link href="/real-estate/properties" className="hover:text-[#F5F4EF] transition-colors block">
                  Portofoliu Proprietăți
                </Link>
              </li>
              <li>
                <Link href="/pentru-clienti" className="hover:text-[#F5F4EF] transition-colors block">
                  Pentru Clienți & Mandat
                </Link>
              </li>
              <li>
                <Link href="/cum-lucrez" className="hover:text-[#F5F4EF] transition-colors block">
                  Metodologie de Lucru
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Cercetare & Media */}
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
                  Arhivă Media & Emisiuni
                </Link>
              </li>
              <li>
                <Link href="/raport-piata" className="hover:text-[#F5F4EF] transition-colors block">
                  Raport Bucharest Prime
                </Link>
              </li>
              <li>
                <Link href="/ghid-cumparator" className="hover:text-[#F5F4EF] transition-colors block">
                  Ghidul Cumpărătorului
                </Link>
              </li>
              <li>
                <Link href="/parteneri" className="hover:text-[#F5F4EF] transition-colors block">
                  Parteneri (Chestertons · Generali)
                </Link>
              </li>
              <li>
                <Link href="/studii-de-caz" className="hover:text-[#F5F4EF] transition-colors block">
                  Studii de Caz Anonimizate
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Canale Directe & Confidențialitate */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A97F60] font-semibold block">
              CANALE DIRECTE
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <a
                  href="mailto:cristianvaduva@duck.com"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-[#A97F60]" />
                  <span>cristianvaduva@duck.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#A97F60]" />
                  <span>WhatsApp (+43 650 953 6345)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/CristianVaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3 h-3 text-[#A97F60]" />
                  <span>Telegram / CristianVaduva</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/cristianvaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3 h-3 text-[#A97F60]" />
                  <span>LinkedIn Oficial</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@CristianVaduvaCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F4EF] transition-colors inline-flex items-center gap-1.5"
                >
                  <YoutubeIcon className="w-3 h-3 text-[#A97F60]" />
                  <span>YouTube Broadcast</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon Bar (Apple Legal Line Standard) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2 font-mono text-[10px] text-[#86868B]">
          <div>
            Copyright © {currentYear} Cristian Văduva. Toate drepturile rezervate.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[#647082]">
            <Link href="/privacy" className="hover:text-[#B8C2CF] transition-colors">
              Confidențialitate
            </Link>
            <span>·</span>
            <Link href="/terms-of-use" className="hover:text-[#B8C2CF] transition-colors">
              Termeni de Utilizare
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-[#B8C2CF] transition-colors">
              Cookie-uri
            </Link>
            <span>·</span>
            <Link href="/gdpr" className="hover:text-[#B8C2CF] transition-colors">
              GDPR
            </Link>
            <span>·</span>
            <Link href="/editorial-policy" className="hover:text-[#B8C2CF] transition-colors">
              Politică Editorială
            </Link>
            <span>·</span>
            <Link href="/data-provenance" className="hover:text-[#B8C2CF] transition-colors">
              Proveniență Date
            </Link>
            <span>·</span>
            <Link href="/disclaimer" className="hover:text-[#B8C2CF] transition-colors">
              Disclaimer
            </Link>
            <span>·</span>
            <Link href="/login" className="hover:text-[#93C8FF] transition-colors inline-flex items-center gap-1">
              <Lock className="w-2.5 h-2.5" />
              <span>Acces Principal</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
