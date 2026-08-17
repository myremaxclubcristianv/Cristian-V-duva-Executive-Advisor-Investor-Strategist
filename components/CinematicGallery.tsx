import Image from "next/image";

export default function CinematicGallery() {
  const images = [
    { src: "/residence/exterior.png", alt: "Private architectural residence exterior" },
    { src: "/residence/living.png", alt: "Executive grand living salon" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background overflow-hidden border-t border-surface-secondary/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-video w-full overflow-hidden border border-surface-secondary/80 shadow-2xl group bg-surface-primary">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-quick group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
