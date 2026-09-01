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
    <section id="about" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-16">
        {/* Section 07: Concise Personal Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block mb-2">
              INTRODUCING
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] font-semibold tracking-tight">
              THE PERSON
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="font-sans text-lg sm:text-xl text-[#111111] font-light leading-relaxed">
              Cristian Văduva is an executive advisor and investor specializing in luxury real estate, capital markets, and strategic risk management. Advising UHNW principals, family offices, and institutional counterparties across Europe’s premier financial and property hubs.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#111111] transition-colors py-2 touch-active"
            >
              <span>READ PROFILE →</span>
            </Link>
          </div>
        </div>

        {/* Section 08: Visual Profile & Editorial Archive */}
        <div className="pt-12 border-t border-[#E1E1DD] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Monograph Editorial Image Frame */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/5] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] shadow-md">
              {editorialSrc ? (
                <Image
                  src={editorialSrc}
                  alt="Cristian Văduva — Visual Profile"
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
                    Upload profile photography to render editorial visual here.
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] px-1">
              <span>EDITORIAL ARCHIVE</span>
              <span className="text-[#B89B72]">MADRID · AMIENS · MALTA</span>
            </div>
          </div>

          {/* Academic & Geographic Fragments (No CV wall) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                ACADEMIC & MULTIDISCIPLINARY FOUNDATION
              </span>
              <div className="flex flex-wrap gap-3">
                {["ECONOMICS", "LAW", "FINANCIAL MANAGEMENT", "ECOLOGY", "INFORMATION SECURITY"].map((field) => (
                  <span
                    key={field}
                    className="font-mono text-xs uppercase tracking-widest px-4 py-2.5 bg-[#F0F0ED] border border-[#E1E1DD] text-[#111111] font-semibold"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                INTERNATIONAL CENTERS OF ACTIVITY
              </span>
              <div className="flex flex-wrap gap-3">
                {["MADRID", "AMIENS", "MALTA", "BUCHAREST", "MONACO", "DUBAI"].map((loc) => (
                  <span
                    key={loc}
                    className="font-mono text-xs uppercase tracking-widest px-4 py-2.5 bg-[#111111] text-[#F6F6F3] font-semibold"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
