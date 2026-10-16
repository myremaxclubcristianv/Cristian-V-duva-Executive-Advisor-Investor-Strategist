import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Education() {
  const logos = [
    { src: '/images/logos/university1.png', alt: 'University 1' },
    { src: '/images/logos/university2.png', alt: 'University 2' },
    { src: '/images/logos/university3.png', alt: 'University 3' },
    { src: '/images/logos/university4.png', alt: 'University 4' },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Educație & Experienţă Internaţională</h2>
        <div className="flex overflow-x-auto gap-8 py-4 px-2">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-40 h-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-lg text-[#1D1D1F] max-w-2xl text-center mx-auto">
          Diplomă în Economie, Drept și Ecologie, Masterate în Management Financiar, Impact Mediu și Securitate Privată – studiind în România, Germania și Marea Britanie.
        </p>
      </div>
    </section>
  );
}
