import Link from "next/link";
import { Lock, ArrowUpRight, Send, Phone, Share2, Sparkles, Building2 } from "lucide-react";
import { YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] text-[#F5F5F7] border-t border-white/10 py-16 sm:py-20">
      <div className="site-container space-y-12">
        
        {/* Main Brand & Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-2xl font-semibold text-white tracking-tight hover:text-[#B89B72] transition-colors block"
            >
              CRISTIAN VĂDUVA
            </Link>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Executive Luxury Real Estate Advisor · Investor · Strategist. Arhitectură de capital, achiziții ultra-prime și parteneriate strategice în București, Monaco și Dubai.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#B89B72] font-semibold">
              BUCHAREST · MONACO · DUBAI
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold block">
              PLATFORMA
            </span>
            <ul className="space-y-2.5 font-mono text-xs text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  EXECUTIVE OVERVIEW
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#B89B72] transition-colors flex items-center gap-1.5">
                  <span>GALERIE FOTO</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#B89B72]/20 text-[#B89B72]">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/tv" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span>YOUTUBE TV STUDIO</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">AUTO</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  BIOGRAFIE & STUDII
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="hover:text-white transition-colors">
                  AIX LUXURY REAL ESTATE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  CONSULTANȚĂ & INTAKE
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#B89B72] transition-colors flex items-center gap-1.5 text-neutral-500">
                  <Lock className="w-3 h-3" />
                  <span>ADMIN LOGIN</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Channels Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold block">
              CONTURI VERIFICATE
            </span>
            <div className="flex flex-col space-y-2 font-mono text-xs text-neutral-400">
              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: +43 650 953 6345</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href="https://www.youtube.com/@CristianVaduvaCV"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube: @CristianVaduvaCV</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href="https://t.me/capitalinvestcristianvaduva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram: @capitalinvestcristianvaduva</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href="https://linkedin.com/in/cristianvaduva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn: cristianvaduva</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href="https://aixluxury.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B89B72] transition-colors flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-[#B89B72]" />
                <span>AiXLuxury: aixluxury.com</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href="https://cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B89B72]" />
                <span>cristianvaduva.com</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-70" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Colophon Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>
            © {currentYear} CRISTIAN VĂDUVA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-white transition-colors">
              LEGAL NOTICE
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              TERMS
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
