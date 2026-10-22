import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Identity & Background</h2>
          <p className="text-lg text-[#1D1D1F] leading-relaxed max-w-prose">
            Cristian Văduva operates at the intersection of prime real estate acquisitions, capital protection, and strategic wealth allocation. With a multidisciplinary academic foundation and specialized master&apos;s degrees, each mandate is executed with comprehensive risk, return, and confidentiality underwriting.
          </p>
        </motion.div>
        {/* Right: Image */}
        <motion.div
          className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/personal/portraits/cristian-headshot.jpg"
            alt="Cristian Văduva portrait"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
