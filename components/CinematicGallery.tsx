import Image from "next/image";

export default function CinematicGallery() {
  const images = [
    { src: "/hero/hero-placeholder.png", alt: "Executive portrait 1" },
    { src: "/hero/hero-placeholder.png", alt: "Executive portrait 2" },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] w-full overflow-hidden group">
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
