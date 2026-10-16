"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Lock, Send, Phone, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SignatureClosing() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formInterest, setFormInterest] = useState("Ultra-Prime Real Estate");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          interest: formInterest,
          message: formMessage,
        }),
      });
      setFormSubmitted(true);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormMessage("");
    } catch {
      window.open(
        `https://wa.me/436509536345?text=${encodeURIComponent(
          `Consultation Inquiry:\nName: ${formName}\nEmail: ${formEmail}\nPhone: ${formPhone}\nMandate: ${formInterest}\nMessage: ${formMessage}`
        )}`
      );
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

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

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-[#93C8FF] flex items-center justify-center mx-auto text-[#93C8FF]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#F5F4EF]">Inquiry Dispatched</h4>
                  <p className="font-sans text-xs text-[#B8C2CF] max-w-sm mx-auto leading-relaxed">
                    Thank you. Your dossier has been logged. Cristian Văduva or the private office will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 font-mono text-xs text-[#93C8FF] underline tracking-wider uppercase"
                  >
                    Submit Another Communication
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                      Principal / Representative Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Lord Alexander Sinclair"
                      className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                        Direct Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="principal@familyoffice.com"
                        className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                        Direct Phone / Signal
                      </label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+377 ... / +40 ..."
                        className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                      Mandate Category *
                    </label>
                    <select
                      value={formInterest}
                      onChange={(e) => setFormInterest(e.target.value)}
                      className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
                    >
                      <option value="Ultra-Prime Real Estate">Ultra-Prime Real Estate Acquisition (€5M – €100M+)</option>
                      <option value="Strategic Capital Allocation">Strategic Capital Allocation & Syndication</option>
                      <option value="Asset Sovereignty & Security">Asset Sovereignty & Security Architecture</option>
                      <option value="Direct Ventures & Equity">Direct Ventures & Private Equity</option>
                      <option value="Confidential Advisory Mandate">Other Confidential Principal Mandate</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                      Executive Briefing Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Outline target asset specifications, jurisdiction preference, or mandate timeline..."
                      className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.24em] font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                  >
                    <span>{formLoading ? "TRANSMITTING..." : "SUBMIT CONFIDENTIAL INQUIRY"}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="font-mono text-[9px] uppercase tracking-wider text-center text-[#8A95A5]">
                    SECURE 256-BIT TLS TRANSMISSION · STRICT CONFIDENTIALITY
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
