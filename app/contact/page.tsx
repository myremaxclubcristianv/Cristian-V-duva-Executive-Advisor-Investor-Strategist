"use client";

import React, { useState } from "react";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { Lock, Phone, Send, Mail, ShieldCheck, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Ultra-Prime Real Estate");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest,
          message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        window.open(
          `https://wa.me/436509536345?text=${encodeURIComponent(
            `Consultation Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMandate: ${interest}\nMessage: ${message}`
          )}`,
          "_blank"
        );
        setSubmitted(true);
      }
    } catch {
      window.open(
        `https://wa.me/436509536345?text=${encodeURIComponent(
          `Consultation Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMandate: ${interest}\nMessage: ${message}`
        )}`,
        "_blank"
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL INTAKE HERO                          */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // PRIVATE INTAKE DESK</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CONFIDENTIAL ADVISORY</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#8A95A5]">
                <Lock className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>ENCRYPTED FIDUCIARY CHANNEL</span>
              </div>
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[0.98] tracking-tight">
                Initiate a Strategic<br />
                <span className="text-[#A97F60] italic font-normal">Principal Dialogue.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                Direct engagement for ultra-prime real estate acquisitions, capital structuring, and high-stakes fiduciary advisory. Inquiries are reviewed directly by Cristian Văduva.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // DUAL-COLUMN INTAKE MATRIX                          */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#0C1119]">
          <div className="site-container">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Encrypted Channels & Governance */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                    DIRECT PRINCIPAL ACCESS
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                    Discreet Communication Channels
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                    Principals and family office mandates are insulated from standard intermediary tiers. Choose between encrypted mobile channels or direct written dossier submission.
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-white/[0.1] bg-[#1B2028] hover:border-[#93C8FF] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded border border-white/[0.1] flex items-center justify-center text-[#93C8FF]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#8A95A5] block text-[10px]">DIRECT WHATSAPP / SIGNAL</span>
                        <span className="text-[#F5F4EF] font-sans font-medium text-sm">+43 650 953 6345</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#B8C2CF] group-hover:text-[#93C8FF] transition-colors" />
                  </a>

                  <div className="p-4 border border-white/[0.08] bg-[#1B2028]/40 space-y-2">
                    <div className="text-[#93C8FF] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>OFFICE OF CRISTIAN VĂDUVA</span>
                    </div>
                    <div className="text-[#B8C2CF] text-xs font-sans space-y-1">
                      <p>Bucharest HQ · Northern Diplomatic Axis</p>
                      <p>Monaco · Fontvieille / Monte Carlo Office</p>
                      <p>Dubai · DIFC Financial Centre Axis</p>
                    </div>
                  </div>

                  <div className="p-4 border border-white/[0.08] bg-[#07090D] text-[#B8C2CF] text-[11px] leading-relaxed flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#93C8FF] mt-0.5 shrink-0" />
                    <span>
                      Swiss-grade secrecy. All submissions protected by non-disclosure agreements and encrypted transmission standards.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Encrypted Intake Form */}
              <div className="lg:col-span-7">
                <div className="border border-white/[0.14] bg-[#1B2028]/90 backdrop-blur-2xl p-8 sm:p-12 relative shadow-2xl">
                  {/* Corner crosshairs */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#93C8FF]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#93C8FF]" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#93C8FF]" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#93C8FF]" />

                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF] font-semibold flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5" />
                      <span>INTAKE DOSSIER FORM</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#8A95A5]">CONFIDENTIAL</span>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full border border-[#93C8FF] flex items-center justify-center mx-auto text-[#93C8FF]">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-2xl text-[#F5F4EF]">Inquiry Dispatched</h4>
                      <p className="font-sans text-xs text-[#B8C2CF] max-w-sm mx-auto leading-relaxed">
                        Thank you. Your dossier has been logged. Cristian Văduva or the private office will respond directly within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 font-mono text-xs text-[#93C8FF] underline tracking-wider uppercase"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                          Principal / Representative Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Lord Alexander Sinclair"
                          className="w-full bg-[#0C1119] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="principal@familyoffice.com"
                            className="w-full bg-[#0C1119] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                            Direct Mobile / Signal
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+377 ... / +40 ..."
                            className="w-full bg-[#0C1119] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-mandate-select" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                          Mandate Classification *
                        </label>
                        <select
                          id="contact-mandate-select"
                          aria-label="Mandate Classification"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full bg-[#0C1119] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
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
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Outline transaction requirements, target geography, capital parameters, or mandate timeline..."
                          className="w-full bg-[#0C1119] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.24em] font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                      >
                        <span>{loading ? "TRANSMITTING..." : "SUBMIT CONFIDENTIAL INQUIRY"}</span>
                        <Send className="w-4 h-4" />
                      </button>

                      <div className="font-mono text-[9px] uppercase tracking-wider text-center text-[#8A95A5]">
                        PROTECTED BY 256-BIT TLS ENCRYPTION · STRICT NON-DISCLOSURE
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
