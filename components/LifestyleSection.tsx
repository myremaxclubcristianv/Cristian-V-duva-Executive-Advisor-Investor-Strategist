import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

interface PhotoSlotConfig {
  dir: string;
  defaultCaption: string;
  aspectRatio: string;
  archiveCode: string;
}

export default function LifestyleSection() {
  const getFirstImageInDir = (dirRelativePath: string): string | null => {
    try {
      const fullPath = path.join(process.cwd(), "public", dirRelativePath);
      if (fs.existsSync(fullPath)) {
        const files = fs.readdirSync(fullPath).filter(
          (f) => !f.startsWith(".") && (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".webp"))
        );
        if (files.length > 0) {
          return `${dirRelativePath}/${files[0]}`;
        }
      }
    } catch {
      return null;
    }
    return null;
  };

  const slot1 = getFirstImageInDir("/images/personal/lifestyle");
  const slot2 = getFirstImageInDir("/images/personal/travel");
  const slot3 = getFirstImageInDir("/images/personal/business");
  const slot4 = getFirstImageInDir("/images/personal/media");

  return (
    <section id="archive" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-12">
        {/* Editorial Header */}
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4 font-mono text-xs uppercase tracking-[0.3em]">
          <span className="text-[#B89B72] font-semibold">LIFE & PERSONAL ARCHIVE</span>
          <span className="text-[#5F5F5B]">AUTOBIOGRAPHICAL SELECTION</span>
        </div>

        {/* Asymmetric Photographic Monograph Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Dominant Main Photo Slot (65% width / 8 columns) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="relative aspect-[16/10] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] group shadow-sm">
              {slot1 ? (
                <Image
                  src={slot1}
                  alt="Cristian Văduva — Personal Lifestyle Monograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-between p-6 bg-[#F0F0ED] text-[#111111] select-none">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
                    PERSONAL LIFESTYLE ARCHIVE
                  </span>
                  <div className="space-y-1 my-auto">
                    <span className="font-display text-3xl sm:text-4xl font-light tracking-tight block">
                      CRISTIAN VĂDUVA
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] block">
                      LIFESTYLE & PRIVATE MONOGRAPH
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#888884] pt-4 border-t border-[#E1E1DD]">
                    <span>/public/images/personal/lifestyle/</span>
                    <span className="text-[#B89B72]">SLOT / 01</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B]">
              <span>CULTURAL & PERSONAL MOMENTS</span>
              <span>ARCHIVE / 001</span>
            </div>
          </div>

          {/* Supporting Asymmetric Photo Slots (35% width / 4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            {/* Slot 2: Travel */}
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] group shadow-sm">
                {slot2 ? (
                  <Image
                    src={slot2}
                    alt="Cristian Văduva — International Travel Monograph"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-between p-5 bg-[#F0F0ED] text-[#111111] select-none">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
                      TRAVEL ARCHIVE
                    </span>
                    <span className="font-display text-xl text-[#111111] font-light my-auto">
                      INTERNATIONAL MONOGRAPH
                    </span>
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#888884]">
                      <span>/personal/travel/</span>
                      <span className="text-[#B89B72]">SLOT / 02</span>
                    </div>
                  </div>
                )}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] block">
                TRAVEL & EUROPEAN CENTERS
              </span>
            </div>

            {/* Slot 3: Business / Media */}
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] group shadow-sm">
                {slot3 || slot4 ? (
                  <Image
                    src={slot3 || slot4 || ""}
                    alt="Cristian Văduva — Executive Business Monograph"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-between p-5 bg-[#F0F0ED] text-[#111111] select-none">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
                      BUSINESS & MEDIA
                    </span>
                    <span className="font-display text-xl text-[#111111] font-light my-auto">
                      EXECUTIVE MANDATES
                    </span>
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#888884]">
                      <span>/personal/business/</span>
                      <span className="text-[#B89B72]">SLOT / 03</span>
                    </div>
                  </div>
                )}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] block">
                EXECUTIVE AFFAIRS & MEDIA
              </span>
            </div>
          </div>
        </div>

        {/* Archive Action Link */}
        <div className="pt-6 border-t border-[#E1E1DD] flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F5F5B]">
            COMPLETE VISUAL ARCHIVE ACCESSIBLE VIA GALLERY
          </span>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#111111] transition-colors py-2 touch-active"
          >
            <span>PRIVATE ARCHIVE →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
