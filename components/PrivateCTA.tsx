import Link from "next/link";
import { getSocialByPlatform } from "@/lib/socials";

export default function PrivateCTA() {
  const whatsapp = getSocialByPlatform("whatsapp");
  const whatsappUrl = whatsapp ? whatsapp.url : "https://wa.me/436509536345";

  return (
    <section
      id="scene-retreat"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-transparent py-28 sm:py-36 md:py-48 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8 my-auto">
        {/* Scene Indicator */}
        <div className="flex items-center justify-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>08 / 08</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>RETREAT</span>
        </div>

        {/* Eyebrow */}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-medium">
          THE PANORAMIC TERRACE
        </p>

        {/* Fluid Headline */}
        <h2 className="font-display text-display-xl-fluid text-text-primary tracking-tight">
          PRIVATE ACCESS.<br />
          <span className="text-accent italic font-normal">STRATEGIC CONVERSATION.</span>
        </h2>

        {/* Supporting Narrative */}
        <p className="text-text-secondary/90 max-w-lg mx-auto text-body-lead-fluid font-light leading-relaxed">
          For cross-border real estate acquisitions, private equity allocation, board mandates, and confidential advisory.
        </p>

        {/* Action CTAs */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-background font-mono font-semibold uppercase tracking-[0.2em] text-xs hover:bg-accent/90 transition-quick shadow-2xl touch-active min-h-[48px] flex items-center justify-center"
          >
            REQUEST PRIVATE CONSULTATION
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-background/30 backdrop-blur-xs text-text-primary text-xs font-mono uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-quick touch-active min-h-[48px] flex items-center justify-center"
          >
            WHATSAPP PRIVATE DESK ↗
          </a>
        </div>
      </div>
    </section>
  );
}
