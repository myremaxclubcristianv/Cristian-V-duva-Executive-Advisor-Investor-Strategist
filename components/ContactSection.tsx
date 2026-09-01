import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="movement-07-conversation" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-12 py-12">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            MOVEMENT 07 / THE CONVERSATION
          </span>
          <h2 className="font-display text-5xl sm:text-7xl text-[#F6F6F3] font-semibold tracking-tight leading-none uppercase">
            LET’S TALK.
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888884] block pt-2">
            PRIVATE CONSULTATION
          </span>
        </div>

        {/* Three Simple Links (No cards or forms) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6 border-t border-[#2B2B28] font-mono text-xs uppercase tracking-[0.2em]">
          <a
            href="mailto:cristianvaduva@duck.com"
            className="text-[#F6F6F3] hover:text-[#B89B72] transition-colors py-2"
          >
            EMAIL: cristianvaduva@duck.com
          </a>

          <a
            href="https://wa.me/436509536345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F6F6F3] hover:text-[#B89B72] transition-colors py-2"
          >
            WHATSAPP: +43 650 953 6345
          </a>

          <a
            href="https://t.me/cristianvaduva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F6F6F3] hover:text-[#B89B72] transition-colors py-2"
          >
            TELEGRAM: @cristianvaduva
          </a>
        </div>

        {/* Primary CTA */}
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
