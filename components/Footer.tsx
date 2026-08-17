import Link from "next/link";
import { contactInfo } from "@/lib/content/contact";
import { getSocialByPlatform } from "@/lib/socials";

export default function Footer() {
  const linktreeLink = getSocialByPlatform("linktree");
  const youtubeLink = getSocialByPlatform("youtube");

  return (
    <footer className="relative z-10 py-16 bg-background/90 backdrop-blur-md border-t border-surface-secondary/40 text-text-secondary text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-display text-text-primary text-base">Cristian Văduva</span>
          <span className="mx-3 text-surface-secondary/80">|</span>
          <span className="font-mono text-[11px] text-text-secondary/70">Bucharest · Monaco · Europe</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.25em] font-mono">
          <Link href="/about" className="hover:text-accent transition-quick">About</Link>
          <Link href="/real-estate/properties" className="hover:text-accent transition-quick">Real Estate</Link>
          <Link href="/real-estate/market" className="hover:text-accent transition-quick">Intelligence</Link>
          <Link href="/media" className="hover:text-accent transition-quick">Media</Link>
          <Link href="/contact" className="hover:text-accent transition-quick">Contact</Link>
          {linktreeLink && (
            <a href={linktreeLink.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-quick">
              Linktree
            </a>
          )}
          {youtubeLink && (
            <a href={youtubeLink.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-quick">
              YouTube
            </a>
          )}
        </div>

        <div className="flex gap-4 text-[10px] uppercase tracking-[0.25em] font-mono">
          {contactInfo.socials.slice(0, 4).map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-quick"
              aria-label={social.displayName}
            >
              {social.displayName}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary/40">
        © {new Date().getFullYear()} Cristian Văduva. Private Advisory & Real Estate.
      </div>
    </footer>
  );
}
