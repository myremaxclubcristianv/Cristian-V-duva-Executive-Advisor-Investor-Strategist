import Link from "next/link";
import { getSocialByPlatform } from "@/lib/socials";

export default function PrivateCTA() {
  const whatsapp = getSocialByPlatform("whatsapp");
  const whatsappUrl = whatsapp ? whatsapp.url : "https://wa.me/436509536345";

  return (
    <section
      id="scene-retreat"
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#080808] text-[#F5F3EF] py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 sm:space-y-10 my-auto">
        {/* Scene Indicator */}
        <div className="inline-flex items-center justify-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold px-4 py-1.5 border border-accent/30 bg-accent/5">
          <span>PRIVATE EXECUTIVE ACCESS</span>
        </div>

        {/* Fluid Climax Headline */}
        <h2 className="font-display text-display-xl-fluid text-text-primary tracking-tight max-w-3xl mx-auto leading-[1.05]">
          IMPORTANT DECISIONS<br />
          <span className="text-accent italic font-normal">DESERVE</span><br />
          BETTER ADVICE.
        </h2>

        {/* Supporting Proposition */}
        <p className="max-w-xl mx-auto font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
          For ultra-prime real estate acquisitions, capital allocation strategies, financial structuring, and executive board mandates.
        </p>

        {/* Single Primary Action CTA */}
        <div className="pt-4 flex flex-col items-center space-y-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4.5 bg-accent text-background font-mono font-semibold uppercase tracking-[0.2em] text-xs hover:bg-accent/90 transition-quick shadow-2xl touch-active min-h-[48px] flex items-center justify-center gap-2"
          >
            <span>REQUEST PRIVATE CONSULTATION</span>
            <span>→</span>
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-text-secondary hover:text-accent transition-colors pt-2 flex items-center gap-1.5 min-h-[36px]"
          >
            <span>DIRECT WHATSAPP DESK</span>
            <span className="text-accent">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
