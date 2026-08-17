import { getPortraitPhotos } from "@/lib/photos";
import Image from "next/image";

export default function ExecutivePortrait() {
  const portraits = getPortraitPhotos();

  if (portraits.length === 0) {
    return null;
  }

  const mainPortrait = portraits[0];

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait with subtle border and architectural framing */}
          <div className="md:col-span-5 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden border border-surface-secondary/80 shadow-2xl bg-surface-primary">
            <Image
              src={mainPortrait.src}
              alt={mainPortrait.alt}
              fill
              className="object-cover"
              style={{ objectPosition: mainPortrait.position || "center" }}
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
                <span>01</span>
                <span className="w-4 h-[1px] bg-accent/40" />
                <span>EXECUTIVE PROFILE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
                {mainPortrait.title || "Cristian Văduva"}
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
              {mainPortrait.description || "Advising ultra-high-net-worth individuals, family offices, and institutional investors on prime European acquisitions, capital deployment, and generational wealth structuring."}
            </p>

            <div className="pt-6 border-t border-surface-secondary/60 grid grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <span className="text-accent block uppercase tracking-widest text-[10px]">FOCUS</span>
                <span className="text-text-primary font-light">Ultra-Prime Real Estate</span>
              </div>
              <div>
                <span className="text-accent block uppercase tracking-widest text-[10px]">GEOGRAPHY</span>
                <span className="text-text-primary font-light">Monaco · Bucharest · Europe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
