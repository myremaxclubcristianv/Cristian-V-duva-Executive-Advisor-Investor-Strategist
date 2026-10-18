import React from "react";
import { ArrowUpRight, Lock, Phone, ShieldCheck } from "lucide-react";
import SignatureIntakeForm from "./SignatureIntakeForm";

export default function SignatureClosing() {
  return (
    <section id="contact" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-24 sm:py-32 lg:py-40 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container relative z-10 space-y-16 sm:space-y-20">
        {/* Top Eyebrow Sequence */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.1] pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
            <span className="text-[#F5F4EF] font-semibold">CONVERSAȚIE PRIVATĂ</span>
            <span className="text-white/20">/</span>
            <span>ACCES DIRECT FONDATOR</span>
          </div>
          <span className="text-[#8A95A5]">CANAL CONFIDENȚIAL CRISTIAN VĂDUVA</span>
        </div>

        {/* Closing Composition: Left Monumental Statement & Coordinates, Right Intake Form */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Invitation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] block font-semibold">
                DIALOG STRATEGIC PRELIMINAR
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.04] tracking-tight font-normal">
                Inițiați o conversație confidențială direct cu Cristian Văduva.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light max-w-xl leading-relaxed">
              Fiecare solicitare este evaluată personal de Cristian Văduva, sub angajament deplin de confidențialitate contractuală (NDA). Nu menținem dispecerate comerciale intermediare.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08] font-mono text-xs">
              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-white/[0.1] bg-[#0C1119] hover:border-[#A97F60] hover:bg-[#1B2028] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-white/[0.1] flex items-center justify-center text-[#A97F60]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8A95A5] block text-[10px]">COMUNICARE ENCRIPTATĂ</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">+43 650 953 6345 (WhatsApp / Signal)</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B8C2CF] group-hover:text-[#A97F60] transition-colors" />
              </a>

              <div className="p-4 border border-white/[0.08] bg-[#0C1119] text-[#B8C2CF] text-xs leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A97F60] mt-0.5 shrink-0" />
                <span>
                  Toate discuțiile preliminare se desfășoară sub clauze bilaterale de confidențialitate. Puteți solicita semnarea unui acord NDA înaintea oricărei dezvăluiri de date.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Intake Desk Form (No HUD crosshairs) */}
          <div className="lg:col-span-6">
            <div className="border border-white/[0.12] bg-[#0C1119] p-8 sm:p-12 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] font-semibold flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>TRANSMITERE SOLICITARE</span>
                </span>
                <span className="font-mono text-[10px] text-[#8A95A5]">CONFIDENȚIALITATE GARANTATĂ</span>
              </div>

              <SignatureIntakeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
