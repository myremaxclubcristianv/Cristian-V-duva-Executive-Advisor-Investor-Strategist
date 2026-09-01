import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function AboutSection() {
  const editorialDir = path.join(process.cwd(), "public/images/personal/editorial");
  let realEditorialSrc = "/images/personal/editorial/cristian-editorial.jpg";

  try {
    if (fs.existsSync(editorialDir)) {
      const files = fs.readdirSync(editorialDir).filter(
        (f) => !f.startsWith(".") && (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".webp"))
      );
      if (files.length > 0) {
        realEditorialSrc = `/images/personal/editorial/${files[0]}`;
      }
    }
  } catch {
    realEditorialSrc = "/images/personal/editorial/cristian-editorial.jpg";
  }

  return (
    <section id="about" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-12">
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4 font-mono text-xs uppercase tracking-[0.3em]">
          <span className="text-[#B89B72] font-semibold">THE PERSON</span>
          <span className="text-[#5F5F5B]">PROFILE & ACADEMIC ARCHIVE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Dominant Real Editorial Portrait Frame (6 Columns) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] min-h-[45vh] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] text-[#111111] shadow-lg">
              <Image
                src={realEditorialSrc}
                alt="Cristian Văduva — Editorial Profile Monograph"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#111111] font-mono text-[10px] uppercase tracking-widest bg-[#FFFFFF]/90 backdrop-blur-sm px-3.5 py-2 border border-black/5">
                <span>CRISTIAN VĂDUVA</span>
                <span className="text-[#B89B72]">EDITORIAL PORTRAIT</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] px-1">
              <span>MULTIDISCIPLINARY RIGOR</span>
              <span className="text-[#B89B72]">MADRID · AMIENS · MALTA</span>
            </div>
          </div>

          {/* Right Column: Statement & Academic Micro-Details (6 Columns) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-5xl text-[#111111] font-normal leading-tight tracking-tight">
                A career built across capital, real estate, risk, and international markets.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#5F5F5B] font-light leading-relaxed pt-1 max-w-xl">
                Cristian Văduva advises UHNW principals, family offices, and institutional counterparties on prime real estate acquisitions, cross-border capital structuring, and strategic negotiation across European wealth centers.
              </p>
            </div>

            {/* Educational Background as Visual Typographic Fragments */}
            <div className="pt-6 border-t border-[#E1E1DD] space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                  ACADEMIC DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2">
                  {["ECONOMICS", "LAW", "FINANCIAL MANAGEMENT", "ECOLOGY", "INFORMATION SECURITY"].map((field) => (
                    <span
                      key={field}
                      className="font-mono text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1.5 bg-[#F0F0ED] border border-[#E1E1DD] text-[#111111] font-semibold"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                  INTERNATIONAL CENTERS
                </span>
                <div className="flex flex-wrap gap-2">
                  {["MADRID", "AMIENS", "MALTA", "BUCHAREST", "MONACO", "DUBAI"].map((loc) => (
                    <span
                      key={loc}
                      className="font-mono text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1.5 bg-[#111111] text-[#F6F6F3] font-semibold"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#111111] transition-colors py-2 touch-active"
              >
                <span>PROFILE →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
