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
    <section id="scene-03-person" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-16">
        {/* Scene Header */}
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            SCENE 03 / THE PERSON
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F5F5B]">
            BIOGRAPHY & ACADEMIC ARCHIVE
          </span>
        </div>

        {/* Narrative & Monograph Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monograph Frame */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/5] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] shadow-md">
              {editorialSrc ? (
                <Image
                  src={editorialSrc}
                  alt="Cristian Văduva — Monograph Profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-3 bg-[#F0F0ED]">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold block">
                    ARCHIVAL PROFILE
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
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] px-1">
              <span>MULTIDISCIPLINARY RIGOR</span>
              <span className="text-[#B89B72]">MADRID · AMIENS · MALTA</span>
            </div>
          </div>

          {/* Right Column: Short 60-Word Statement & Typographic Archive Fragments */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                THE PERSON
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#111111] font-normal leading-tight tracking-tight">
                A career built across capital, real estate, risk, and international markets.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#5F5F5B] font-light leading-relaxed pt-2 max-w-xl">
                Cristian Văduva advises UHNW principals, family offices, and institutional investors on prime real estate acquisitions, cross-border capital structuring, and strategic negotiation across European wealth centers.
              </p>
            </div>

            {/* Educational Background as Visual Typographic Fragments */}
            <div className="pt-8 border-t border-[#E1E1DD] space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                  ACADEMIC DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {["ECONOMICS", "LAW", "FINANCIAL MANAGEMENT", "ECOLOGY", "INFORMATION SECURITY"].map((field) => (
                    <span
                      key={field}
                      className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-[#F0F0ED] border border-[#E1E1DD] text-[#111111] font-semibold"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                  INTERNATIONAL CENTERS
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {["MADRID", "AMIENS", "MALTA", "BUCHAREST", "MONACO", "DUBAI"].map((loc) => (
                    <span
                      key={loc}
                      className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-[#111111] text-[#F6F6F3] font-semibold"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
