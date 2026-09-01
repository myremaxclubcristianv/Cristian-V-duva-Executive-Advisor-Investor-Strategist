import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="scene-09-conversation" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-12 py-12">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            SCENE 09 / CONVERSATION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[#F6F6F3] font-semibold tracking-tight leading-none">
            LET’S TALK.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#888884] font-light leading-relaxed pt-2">
            For real estate acquisitions, capital structuring, strategic advisory, and private international opportunities.
          </p>
        </div>

        {/* Three Direct Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2B2B28]">
          <a
            href="mailto:cristianvaduva@duck.com"
            className="p-6 bg-[#181818] border border-[#2B2B28] hover:border-[#B89B72] transition-colors space-y-2 group"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">EMAIL</span>
            <span className="font-sans text-sm text-[#F6F6F3] font-medium block group-hover:text-[#B89B72] transition-colors">
              cristianvaduva@duck.com
            </span>
          </a>

          <a
            href="https://wa.me/436509536345"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#181818] border border-[#2B2B28] hover:border-[#B89B72] transition-colors space-y-2 group"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">WHATSAPP</span>
            <span className="font-sans text-sm text-[#F6F6F3] font-medium block group-hover:text-[#B89B72] transition-colors">
              +43 650 953 6345
            </span>
          </a>

          <a
            href="https://t.me/cristianvaduva"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#181818] border border-[#2B2B28] hover:border-[#B89B72] transition-colors space-y-2 group"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">TELEGRAM</span>
            <span className="font-sans text-sm text-[#F6F6F3] font-medium block group-hover:text-[#B89B72] transition-colors">
              @cristianvaduva
            </span>
          </a>
        </div>

        {/* Primary Action Button */}
        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[54px] px-10 py-4 bg-[#B89B72] text-[#FFFFFF] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#FFFFFF] hover:text-[#111111] transition-colors shadow-lg text-center touch-active"
          >
            <span>REQUEST PRIVATE CONSULTATION →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
