import Image from "next/image";
import Link from "next/link";

interface LifeMoment {
  title: string;
  category: string;
  location: string;
  imageSrc: string;
}

const moments: LifeMoment[] = [
  {
    title: "Mediterranean Coastal Architecture",
    category: "ARCHITECTURE & DESIGN",
    location: "Monaco · French Riviera",
    imageSrc: "/residence/terrace.png",
  },
  {
    title: "Research & Monograph Studies",
    category: "PERSONAL INTERESTS",
    location: "Bucharest Study",
    imageSrc: "/residence/library.png",
  },
  {
    title: "International Capital Engagements",
    category: "GLOBAL LIFE",
    location: "Dubai · Europe",
    imageSrc: "/residence/gallery.png",
  },
];

export default function LifestyleSection() {
  return (
    <section id="beyond-business" className="site-section bg-[#F5F5F2] text-[#111111] border-b border-[#E5E5E1]">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 border-b border-[#E5E5E1] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            09 / PERSONAL SIDE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight font-semibold">
            BEYOND BUSINESS.
          </h2>
          <p className="font-sans text-base text-[#555555] font-light max-w-2xl leading-relaxed">
            Architecture, international travels, design, and key moments defining the personal perspective behind the advisory practice.
          </p>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {moments.map((m) => (
            <div key={m.title} className="space-y-4 group">
              <div className="relative aspect-[4/3] w-full border border-[#E5E5E1] overflow-hidden bg-[#FFFFFF] shadow-sm">
                <Image
                  src={m.imageSrc}
                  alt={m.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89B72] font-semibold block">
                  {m.category} · {m.location}
                </span>
                <h3 className="font-display text-lg text-[#111111] leading-snug">
                  {m.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#E5E5E1]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#555555]">
            AUTHENTIC PERSONAL CURATION
          </span>
          <Link
            href="/gallery"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B89B72] transition-colors py-2 touch-active"
          >
            <span>EXPLORE FULL GALLERY PAGE →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
