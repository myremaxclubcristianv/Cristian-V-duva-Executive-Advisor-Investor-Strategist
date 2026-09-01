import Link from "next/link";

export default function PrivateCTA() {
  return (
    <section className="site-section bg-[#FFFFFF] text-[#111111] border-b border-black/5 py-24 sm:py-32">
      <div className="site-container text-center space-y-8 max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
          11 / NEXT STEPS
        </span>

        <h2 className="font-display text-4xl sm:text-6xl text-[#111111] tracking-tight leading-tight">
          WHAT’S NEXT?
        </h2>

        <p className="font-sans text-base sm:text-xl text-[#6B6B6B] font-light leading-relaxed max-w-2xl mx-auto">
          If the decision matters across real estate, capital placement, or strategic risk, let’s have the right conversation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-4 bg-[#111111] text-[#F7F7F5] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] hover:text-[#FFFFFF] transition-colors shadow-sm touch-active"
          >
            <span>START A CONVERSATION →</span>
          </Link>

          <Link
            href="/gallery"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-4 border border-black/15 text-[#111111] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#B89B72] hover:text-[#B89B72] transition-colors touch-active"
          >
            <span>VIEW MY WORK →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
