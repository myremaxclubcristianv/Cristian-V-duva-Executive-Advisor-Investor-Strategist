import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // Choose a high‑quality architectural image from the existing assets
  const bgImage = "/images/architecture/hero-monument.jpg";

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen w-full bg-ivory text-[#111] overflow-hidden border-b border-[#E1E1DD]"
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Architectural monument"
        fill
        priority
        className="object-cover object-center opacity-90"
        style={{ position: "absolute" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-24 text-center space-y-6">
        <h1 className="font-display text-hero-xl md:text-hero-lg lg:text-hero-xl text-ivory font-serif leading-[0.96] tracking-[-0.035em] mb-6">
          Executive Advisory<br />
          <span className="italic text-copper">Strategic Real‑Estate Capital</span>
        </h1>
        <p className="text-base md:text-lg text-ivory/90 max-w-2xl mx-auto mb-8">
          Premium advisory for high‑net‑worth families and institutional investors. We blend deep market intelligence with bespoke capital structuring.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-copper text-ivory font-mono text-sm uppercase tracking-widest hover:bg-copper/80 transition-colors shadow-md"
        >
          Private Consultation →
        </Link>
      </div>
    </section>
  );
}
