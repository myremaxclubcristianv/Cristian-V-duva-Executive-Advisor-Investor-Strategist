import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function AboutSection() {
  const editorialDir = path.join(process.cwd(), "public/images/personal/editorial");
  let editorialSrc: string | null = null;

  try {
    if (fs.existsSync(editorialDir)) {
      const files = fs.readdirSync(editorialDir).filter((f) => !f.startsWith("."));
      if (files.length > 0) {
        editorialSrc = `/images/personal/editorial/${files[0]}`;
      }
    }
  } catch {
    editorialSrc = null;
  }

  return (
    <section id="movement-03-person" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-16">
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4 font-mono text-xs uppercase tracking-[0.3em]">
          <span className="text-[#B89B72] font-semibold">MOVEMENT 03 / THE PERSON</span>
          <span className="text-[#5F5F5B]">PROFILE & ARCHIVE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: One Large Authentic Photograph */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/5] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] shadow-md">
              {editorialSrc ? (
                <Image
                  src={editorialSrc}
                  alt="Cristian Văduva — Editorial Monograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-3 bg-[#F0F0ED]">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold block">
                    EDITORIAL ARCHIVE
                  </span>
                  <span className="font-mono text-[10px] text-[#5F5F5B] block">
                    /public/images/personal/editorial/
                  </span>
                  <p className="font-sans text-xs text-[#888884] font-light leading-relaxed max-w-xs">
                    Upload profile photography to render visual monograph here.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Very Large Typography & 60-Word Paragraph */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="font-display text-4xl sm:text-6xl text-[#111111] font-bold tracking-tight uppercase leading-none">
                CAPITAL<br />
                <span className="text-[#B89B72] italic font-normal">REAL ESTATE</span><br />
                RISK · STRATEGY
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#5F5F5B] font-light leading-relaxed pt-2 max-w-xl">
                Cristian Văduva advises UHNW principals, family offices, and institutional counterparties on prime real estate acquisitions, cross-border capital structuring, and strategic negotiation across European wealth hubs.
              </p>
            </div>

            {/* Tiny Single Editorial Line for Education & Locations (No CV wall or cards) */}
            <div className="pt-6 border-t border-[#E1E1DD] space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#888884] block font-semibold">
                ACADEMIC & GEOGRAPHIC ARCHIVE
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold leading-relaxed">
                ECONOMICS · LAW · FINANCIAL MANAGEMENT · ECOLOGY · INFORMATION SECURITY · MADRID · AMIENS · MALTA
              </p>
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
