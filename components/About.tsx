import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Cristian Văduva</h2>
          <p className="text-lg text-[#1D1D1F] leading-relaxed max-w-prose">
            Executive advisor with a track record built on prime real estate transactions, capital protection, and strategic investment allocations. Combining legal and financial rigor to deliver bespoke client representation.
          </p>
        </motion.div>
        {/* Portrait */}
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
