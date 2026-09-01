import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Hero() {
  const portraitDir = path.join(process.cwd(), "public/images/personal/portraits");
  let realPortraitSrc = "/images/personal/portraits/cristian-headshot.jpg";

  try {
    if (fs.existsSync(portraitDir)) {
      const files = fs.readdirSync(portraitDir).filter(
        (f) => !f.startsWith(".") && (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".webp"))
      );
      if (files.length > 0) {
        realPortraitSrc = `/images/personal/portraits/${files[0]}`;
      }
    }
  } catch {
    realPortraitSrc = "/images/personal/portraits/cristian-headshot.jpg";
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#F6F6F3] text-[#111111] pt-20 sm:pt-28 pb-10 border-b border-[#E1E1DD]"
    >
      {/* Identity Top Bar */}
      <div className="site-container pt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[#888884]">
        <span>CRISTIAN VĂDUVA</span>
        <span>BUCHAREST · MONACO · EUROPE</span>
      </div>

      {/* Center Cinematic Portrait Canvas */}
      <div className="site-container my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Brand Signature */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h1 className="font-display text-brand-signature text-[#111111] uppercase select-none leading-none">
                CRISTIAN<br />
                <span className="text-[#B89B72] font-normal italic">VĂDUVA</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5F5F5B] font-semibold pt-4">
                EXECUTIVE ADVISOR · INVESTOR · REAL ESTATE
              </p>
            </div>

            <div className="border-l-2 border-[#B89B72] pl-6 py-1 max-w-2xl">
              <p className="font-display text-2xl sm:text-4xl text-[#111111] leading-tight font-normal">
                PRIVATE ADVICE.<br />
                <span className="italic text-[#5F5F5B]">STRATEGIC CAPITAL.</span><br />
                REAL-WORLD VALUE.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[54px] px-10 py-4 bg-[#111111] text-[#F6F6F3] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] hover:text-[#FFFFFF] transition-colors shadow-md text-center touch-active"
              >
                <span>PRIVATE CONSULTATION →</span>
              </Link>
            </div>
          </div>

          {/* Primary Personal Monograph Frame */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/5] w-full border border-[#E1E1DD] overflow-hidden bg-[#111111] text-[#F6F6F3] shadow-xl group">
              <Image
                src={realPortraitSrc}
                alt="Cristian Văduva — Personal Executive Monograph"
                fill
                priority
                className="object-cover object-center opacity-95 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F6F6F3] font-mono text-[10px] uppercase tracking-widest bg-black/80 backdrop-blur-sm px-3 py-2 border border-white/10">
                <span>CRISTIAN VĂDUVA</span>
                <span className="text-[#B89B72]">PERSONAL PORTRAIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Rule Bar */}
      <div className="site-container pb-4 pt-6 border-t border-[#E1E1DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5F5F5B]">
          EXECUTIVE ADVISORY · LUXURY REAL ESTATE · CAPITAL
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
          2026 DIGITAL HEADQUARTERS
        </span>
      </div>
    </section>
  );
}
