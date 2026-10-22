import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock, MessageSquare } from "lucide-react";
import EditorialText from "./EditorialText";

interface CTASectionProps {
  eyebrow?: string;
  title?: string | React.ReactNode;
  description?: string;
  primaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  disclaimer?: string;
  className?: string;
}

export default function CTASection({
  eyebrow = "DIRECT PRINCIPAL COMMUNICATIONS PROTOCOL",
  title = "Initiate a Confidential Strategic Conversation.",
  description = "Every inquiry is evaluated directly by Cristian Văduva under contractual confidentiality (bilateral NDA). We do not maintain junior intake tiers or third-party intermediaries.",
  primaryActionText = "REQUEST CONSULTATION (20 MIN)",
  primaryActionHref = "/programare",
  secondaryActionText = "DIRECT INQUIRY (+43 650 953 6345)",
  secondaryActionHref = "https://wa.me/436509536345",
  disclaimer = "All consultations operate under contractual confidentiality. Bilateral NDA precedes sensitive asset disclosure.",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto ${className}`}>
      <div className="rounded-3xl border border-white/[0.08] bg-[#0C1119] p-8 sm:p-14 lg:p-16 space-y-8 shadow-2xl relative overflow-hidden">
        {/* Ambient Corner Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#93C8FF]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 max-w-3xl relative z-10">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] leading-tight tracking-tight">
            {title}
          </h2>

          <EditorialText size="lg" maxWidth="prose" color="secondary" className="leading-relaxed">
            {description}
          </EditorialText>
        </div>

        {/* Action Row - Apple Pills */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 border-t border-white/[0.08] relative z-10">
          <Link
            href={primaryActionHref}
            className="btn-apple-pill-primary shadow-xl shadow-[#93C8FF]/15"
          >
            <span>{primaryActionText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={secondaryActionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple-pill-secondary"
          >
            <MessageSquare className="w-4 h-4 text-[#93C8FF]" />
            <span>{secondaryActionText}</span>
          </a>
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#8A95A5] tracking-wider pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]/60" />
            <span>{disclaimer}</span>
          </div>
        )}
      </div>
    </section>
  );
}
