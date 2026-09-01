import Image from "next/image";

export default function VisualBreathingSpace() {
  return (
    <section id="scene-02-photography" className="relative w-full bg-[#111111] text-[#F6F6F3] py-12 sm:py-16 border-b border-[#2B2B28] overflow-hidden">
      <div className="site-container space-y-4">
        {/* Tiny Metadata */}
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B89B72]">
          <span>SCENE 02 / PHOTOGRAPHIC INTERRUPTION</span>
          <span>BUCHAREST · EUROPE · PRIVATE ARCHIVE / 001</span>
        </div>

        {/* Massive Full-Bleed Image (60-100vh) */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[60vh] w-full border border-[#2B2B28] overflow-hidden bg-black shadow-2xl">
          <Image
            src="/residence/exterior.png"
            alt="Cristian Văduva — Archival Landscape"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-90 transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[#F6F6F3] font-mono text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
            <span>ARCHITECTURAL MONOGRAPH</span>
            <span className="text-[#B89B72]">PRIME LANDSCAPE / 001</span>
          </div>
        </div>
      </div>
    </section>
  );
}
