import Link from "next/link";
import Image from "next/image";

export default function LifestyleSection() {
  return (
    <section id="personal-archive" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-12">
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            PERSONAL ARCHIVE
          </span>
          <Link
            href="/gallery"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#111111] transition-colors touch-active"
          >
            <span>VIEW THE ARCHIVE →</span>
          </Link>
        </div>

        {/* Asymmetric Photo Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* One Giant Image */}
          <div className="lg:col-span-8 space-y-3">
            <div className="relative aspect-[16/10] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] group shadow-sm">
              <Image
                src="/residence/gallery.png"
                alt="Personal Architectural Archive"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B]">
              <span>ARCHITECTURE & CULTURAL MOMENTS</span>
              <span>ARCHIVE / 001</span>
            </div>
          </div>

          {/* Two Smaller Images */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            <div className="space-y-3">
              <div className="relative aspect-[4/3] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] group shadow-sm">
                <Image
                  src="/residence/cinema.png"
                  alt="Personal Media Sanctuary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] block">
                PRIVATE MEDIA ARCHIVE
              </span>
            </div>

            <div className="space-y-3">
              <div className="relative aspect-[4/3] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] group shadow-sm">
                <Image
                  src="/residence/desk.png"
                  alt="Executive Desk Workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] block">
                DESK WORKSPACE & STUDY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
