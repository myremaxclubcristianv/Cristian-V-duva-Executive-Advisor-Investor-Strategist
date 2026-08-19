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
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 sm:space-y-10 my-auto">
        {/* Scene Indicator */}
        <div className="flex items-center justify-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>05 / 06</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>PRIVATE OFFICE</span>
        </div>

        {/* Fluid Climax Headline */}
        <h2 className="font-display text-display-xl-fluid text-text-primary tracking-tight max-w-3xl mx-auto">
          PRIVATE DECISIONS<br />
          <span className="text-accent italic font-normal">REQUIRE</span><br />
          PRIVATE ADVICE.
        </h2>

        {/* Single Primary Action CTA */}
        <div className="pt-4 flex flex-col items-center space-y-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4.5 bg-accent text-background font-mono font-semibold uppercase tracking-[0.2em] text-xs hover:bg-accent/90 transition-quick shadow-2xl touch-active min-h-[48px] flex items-center justify-center"
          >
            REQUEST PRIVATE CONSULTATION
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-text-secondary hover:text-accent transition-colors pt-2 flex items-center gap-1 min-h-[36px]"
          >
            <span>WHATSAPP PRIVATE DESK</span>
            <span className="text-accent">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
