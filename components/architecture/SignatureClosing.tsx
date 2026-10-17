import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock, Phone, ShieldCheck } from "lucide-react";
import SignatureIntakeForm from "./SignatureIntakeForm";

export default function SignatureClosing() {
  return (
    <section id="contact" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      {/* Background Architectural Subtle Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      {/* Atmospheric Ambient Glow (Electric Ice Blue / Cold Silver) */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#93C8FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        {/* Top Eyebrow Sequence */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.1] pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
            <span>08 // SIGNATURE CLOSING</span>
            <span className="text-white/20">/</span>
            <span className="text-[#B8C2CF]">PRIVATE INTAKE PROTOCOL</span>
          </div>
          <span className="text-[#8A95A5]">CONFIDENTIAL COMMUNICATIONS CHANNEL</span>
        </div>

        {/* Closing Composition: Left Monumental Statement & Coordinates, Right Intake Form */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Invitation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A97F60] block font-semibold">
                DIRECT PRINCIPAL ENGAGEMENT
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                Initiate a Confidential Strategic Conversation.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light max-w-xl leading-relaxed">
              Every inquiry is reviewed directly by Cristian Văduva under strict non-disclosure privilege. We do not maintain junior intake tiers.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08] font-mono text-xs">
              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-white/[0.1] bg-[#0C1119] hover:border-[#93C8FF] hover:bg-[#1B2028] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-white/[0.1] flex items-center justify-center text-[#93C8FF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8A95A5] block text-[10px]">ENCRYPTED MESSAGING</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">+43 650 953 6345 (WhatsApp)</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B8C2CF] group-hover:text-[#93C8FF] transition-colors" />
              </a>

              <div className="p-4 border border-white/[0.08] bg-[#0C1119] text-[#B8C2CF] text-[11px] leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#93C8FF] mt-0.5 shrink-0" />
                <span>
                  All consultations operate under professional secrecy. Counter-party verification and preliminary NDA precede any asset disclosure.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Intake Desk Form */}
          <div className="lg:col-span-6">
            <div className="border border-white/[0.14] bg-[#0C1119]/95 backdrop-blur-2xl p-8 sm:p-12 relative shadow-2xl">
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#93C8FF]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#93C8FF]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#93C8FF]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#93C8FF]" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF] font-semibold flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>INTAKE SPECIFICATION</span>
                </span>
                <span className="font-mono text-[10px] text-[#8A95A5]">SECURE PROTOCOL</span>
              </div>

              <SignatureIntakeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
