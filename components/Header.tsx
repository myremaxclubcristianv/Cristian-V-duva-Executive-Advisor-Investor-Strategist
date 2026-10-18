import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/real-estate', label: 'Real Estate' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/tv', label: 'TV' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 bg-white bg-opacity-0 backdrop-blur-lg border-b border-copper/20"
      style={{ backgroundColor: `rgba(255,255,255,${bgOpacity})` }}
    >
      <Link href="/" className="text-2xl font-serif font-bold text-ivory">
        Cristian Văduva
      </Link>
      <nav className="hidden space-x-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-mono uppercase tracking-widest text-copper hover:text-ivory transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* Mobile burger */}
      <div className="md:hidden">
        <button aria-label="Open menu" className="p-2 focus:outline-none">
          <svg
            className="w-6 h-6 text-copper"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
