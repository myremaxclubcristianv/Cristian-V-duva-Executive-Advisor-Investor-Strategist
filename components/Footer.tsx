import Link from "next/link";
import { socialLinks } from "@/lib/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F7F7F5] text-[#111111] border-t border-black/5 py-16 sm:py-20">
      <div className="site-container space-y-12">
        {/* Main Brand & Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="font-display text-2xl text-[#111111] tracking-tight hover:text-[#B89B72] transition-colors block"
            >
              CRISTIAN VĂDUVA
            </Link>
            <p className="font-sans text-xs text-[#6B6B6B] font-light max-w-sm leading-relaxed">
              Executive Advisor, Investor & Luxury Real Estate Strategist. Building better decisions across capital, property, and opportunity.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold">
              BUCHAREST · MONACO · DUBAI
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111] font-semibold block">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-mono text-xs text-[#6B6B6B]">
              <li>
                <Link href="/about" className="hover:text-[#111111] transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="hover:text-[#111111] transition-colors">
                  EXPERTISE
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="hover:text-[#111111] transition-colors">
                  REAL ESTATE
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#111111] transition-colors">
                  MEDIA
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#111111] transition-colors">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#111111] transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111] font-semibold block">
              VERIFIED CHANNELS
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-[#6B6B6B]">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B89B72] transition-colors flex items-center gap-1 min-h-[36px]"
                >
                  <span>{s.displayName}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Colophon Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-[#6B6B6B]">
          <div>
            © {currentYear} CRISTIAN VĂDUVA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-[#111111] transition-colors">
              LEGAL NOTICE
            </Link>
            <Link href="/privacy" className="hover:text-[#111111] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#111111] transition-colors">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
