import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-[#F7F7F5] text-[#111111] pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 border-b border-black/5"
    >
      {/* Hero Content Grid */}
      <div className="relative z-10 w-full site-container my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Personal Brand Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                CRISTIAN VĂDUVA
              </span>

              <h1 className="font-display text-hero-fluid text-[#111111] tracking-tight font-semibold">
                EXECUTIVE ADVISOR<br />
                <span className="text-[#B89B72] font-normal italic">INVESTOR</span><br />
                REAL ESTATE
              </h1>
            </div>

            <div className="space-y-4 max-w-2xl">
              <p className="font-sans text-xl sm:text-2xl text-[#111111] font-light leading-relaxed tracking-tight">
                Building better decisions across capital, property, and opportunity.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#6B6B6B] font-light leading-relaxed">
                Independent strategic advisory and luxury real estate counsel for principals, family offices, and institutional boards across Europe.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#111111] text-[#F7F7F5] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] hover:text-[#FFFFFF] transition-colors shadow-sm text-center touch-active"
              >
                <span>WORK WITH ME →</span>
              </Link>

              <a
                href="#about"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-black/15 text-[#111111] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#B89B72] hover:text-[#B89B72] transition-colors text-center touch-active"
              >
                EXPLORE MY STORY
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Panel */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/5] w-full border border-black/10 overflow-hidden bg-[#E8E8E5] shadow-lg group">
              <Image
                src="/residence/command.png"
                alt="Cristian Văduva — Personal Portrait"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px] uppercase tracking-widest">
                <span>CRISTIAN VĂDUVA</span>
                <span className="text-[#E6D5C0]">PERSONAL FLAGSHIP</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B] pt-1 px-1">
              <span>LOCATIONS</span>
              <span className="text-[#111111] font-semibold">BUCHAREST · MONACO · DUBAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full site-container pt-6 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]">
          EXECUTIVE ADVISORY · LUXURY REAL ESTATE · CAPITAL
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
          DISCRETION & INDEPENDENCE GUARANTEED
        </div>
      </div>
    </section>
  );
}
