import Link from "next/link";

export default function YouTubeChannelCTA() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-surface-secondary/40">
      <div className="max-w-4xl mx-auto text-center space-y-6 bg-surface-primary border border-surface-secondary/80 p-10 md:p-14 shadow-2xl">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          OFFICIAL CHANNEL
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary">
          Subscribe for Strategic Intelligence
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light max-w-xl mx-auto leading-relaxed">
          Access high-value perspectives on European prime real estate acquisitions, market cycles, and wealth structuring.
        </p>
        <div className="pt-2">
          <Link
            href="https://www.youtube.com/@CristianVaduvaCV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick shadow-xl"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span>JOIN ON YOUTUBE</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
