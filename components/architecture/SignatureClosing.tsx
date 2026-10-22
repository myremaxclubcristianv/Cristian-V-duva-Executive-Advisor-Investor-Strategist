"use client";

import React from "react";
import { ArrowUpRight, Lock, Phone, ShieldCheck } from "lucide-react";
import SignatureIntakeForm from "./SignatureIntakeForm";

export default function SignatureClosing() {
  return (
    <section id="contact" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-24 sm:py-32 lg:py-40 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        
        {/* Top Eyebrow Sequence */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
            <span className="text-[#F5F4EF] font-semibold">PRIVATE ENGAGEMENT</span>
            <span className="text-white/20">/</span>
            <span>DIRECT FOUNDER ACCESS</span>
          </div>
          <span className="text-[#86868B]">CONFIDENTIAL CHANNEL · CRISTIAN VĂDUVA</span>
        </div>

        {/* Closing Composition: Left Monumental Statement & Coordinates, Right Intake Form */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Invitation (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] block font-semibold">
                PRELIMINARY STRATEGIC DIALOGUE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.04] tracking-tight font-normal">
                Initiate a confidential conversation directly with Cristian Văduva.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#86868B] font-light max-w-xl leading-relaxed">
              Each inquiry is reviewed personally by Cristian Văduva with complete discretion. Bilateral non-disclosure agreements (NDAs) are executed prior to data exchange whenever required. We do not operate intermediary sales dispatch desks.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08] font-mono text-xs">
              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-white/[0.08] bg-[#0C1119] hover:border-white/[0.25] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-[#A97F60]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#86868B] block text-[10px] uppercase tracking-wider">DIRECT COMMUNICATION & WHATSAPP</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">+43 650 953 6345</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#F5F4EF] transition-colors" />
              </a>

              <div className="p-4 rounded-2xl border border-white/[0.06] bg-[#0C1119] text-[#86868B] text-xs leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A97F60] mt-0.5 shrink-0" />
                <span>
                  All discussions are held in complete professional confidence. Bilateral NDA executed on request prior to exchanging sensitive asset or transaction data.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Intake Desk Form (Apple Rounded-3xl Card) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/[0.08] bg-[#0C1119] p-8 sm:p-12 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] font-semibold flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>DIRECT INQUIRY DESK</span>
                </span>
                <span className="font-mono text-[10px] text-[#86868B]">PROFESSIONAL DISCRETION</span>
              </div>

              <SignatureIntakeForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
