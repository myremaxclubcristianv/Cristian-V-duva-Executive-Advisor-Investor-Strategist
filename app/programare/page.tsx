"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export default function ProgramarePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationType, setConsultationType] = useState("Prime Residential Acquisition (Buyer Advisory)");
  const [preferredTimeframe, setPreferredTimeframe] = useState("Afternoon (15:00 - 18:00)");
  const [requestPriorNDA, setRequestPriorNDA] = useState(false);
  const [notes, setNotes] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Please enter your phone number.");
      return;
    }
    if (!consentPrivacy) {
      setErrorMsg("Consent to data processing is required to confirm your consultation schedule.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/programare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          consultationType,
          preferredTimeframe,
          requestPriorNDA,
          notes,
          consentPrivacy,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "An issue occurred while submitting your consultation request.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unforeseen error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Architectural Grid & Ambient Aura */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* ======================================================== */}
          {/* HERO ARCHITECTURAL MASTHEAD                              */}
          {/* ======================================================== */}
          <section className="space-y-8 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.25em] text-[#A97F60] uppercase max-w-full">
              <Calendar className="w-3.5 h-3.5 text-[#93C8FF] shrink-0" />
              <span className="truncate sm:overflow-visible">STRATEGIC SESSION · 20 CONFIDENTIAL MINUTES</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12] break-words">
              Schedule Initial Consultation
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              A structured 20-minute session to evaluate your real estate objectives and compatibility with the Executive advisory methodology. Without commercial pressure or associated fees.
            </p>
          </section>

          {/* ======================================================== */}
          {/* ASYMMETRIC DUAL-COLUMN INTAKE SUITE                      */}
          {/* ======================================================== */}
          <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Guidelines, NDA & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Photo Aperture */}
              <div className="relative rounded-3xl border border-white/[0.08] bg-[#0C1119] p-3 shadow-xl overflow-hidden">
                <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#1B2028] overflow-hidden">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
                    alt="Cristian Văduva — Private advisory in executive office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#8A95A5] flex items-center justify-between">
                    <span>EXECUTIVE BUCHAREST DESK</span>
                    <span className="text-[#93C8FF]">DIRECT DIALOGUE</span>
                  </div>
                </div>
              </div>

              {/* Expectations Cadran */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-4 shadow-xl">
                <span className="font-mono text-xs uppercase tracking-wider text-[#93C8FF] font-semibold block">
                  WHAT OCCURS IN THE 20 MINUTES:
                </span>
                <ul className="space-y-4 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-0.5">OBJECTIVE CLARIFICATION</strong>
                      Understanding the target asset profile or long-term portfolio monetization parameters.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-0.5">COMPATIBILITY EVALUATION</strong>
                      Assessing whether your requirements align with our advisory scope and regional capacity.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-0.5">ZERO COMMERCIAL PRESSURE</strong>
                      The discussion is strictly analytical. No unsolicited listings or forced contracts.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Protocol NDA box */}
              <div className="p-6 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>Confidentiality Protocol (Bilateral NDA)</span>
                </div>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  If your consultation involves sensitive private assets or off-market portfolios, you may opt for a bilateral Non-Disclosure Agreement (NDA) prior to disclosing specific asset parameters.
                </p>
                <div className="text-[11px] font-mono text-[#6B7280]">
                  *An NDA is a formal bilateral contractual agreement executed in writing.
                </div>
              </div>

              {/* Procedură de confirmare */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h4 className="font-serif text-sm text-[#F5F4EF]">Manual confirmation within 24 hours:</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  We do not use automated booking widgets simulating artificial calendar availability. Cristian Văduva reviews each request personally and will contact you directly within 24 business hours to confirm exact scheduling.
                </p>
              </div>
            </div>

            {/* Right Column: High-End Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0C1119] border border-white/[0.08] relative shadow-2xl">
                {success ? (
                  <div className="space-y-6 text-center py-8">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white/[0.03] border border-[#93C8FF]/40 flex items-center justify-center text-[#93C8FF]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                        Request Submitted Successfully
                      </h3>
                      <p className="font-sans text-sm text-[#8A95A5] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{fullName}</strong>. Your request has been recorded. We will contact you at <strong>{email}</strong> or by phone within 24 business hours to confirm exact scheduling.
                      </p>
                    </div>

                    {requestPriorNDA && (
                      <div className="p-4 rounded-xl bg-black/40 border border-[#A97F60]/40 font-mono text-xs text-[#A97F60] max-w-md mx-auto">
                        You requested a bilateral non-disclosure agreement (NDA) in advance. The draft covenant will be provided before the consultation begins.
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <Link
                        href="/"
                        className="btn-apple-pill-primary shadow-lg"
                      >
                        <span>RETURN TO HOMEPAGE</span>
                      </Link>
                      <Link
                        href="/cum-lucrez"
                        className="btn-apple-pill-secondary"
                      >
                        <span>REVIEW ADVISORY PHASES</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#93C8FF] block">
                        INTAKE PROTOCOL
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                        Consultation Request Form
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#8A95A5]">
                        Provide the parameters required to prepare our strategic discussion.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm font-sans flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Full Name <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Cristian Ionescu"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Email Address <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@organization.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Phone Number <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+40 7... / International"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Preferred Time Window
                        </label>
                        <select
                          value={preferredTimeframe}
                          onChange={(e) => setPreferredTimeframe(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        >
                          <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                          <option value="Midday (12:00 - 15:00)">Midday (12:00 - 15:00)</option>
                          <option value="Afternoon (15:00 - 18:00)">Afternoon (15:00 - 18:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Primary Topic of Discussion
                      </label>
                      <select
                        value={consultationType}
                        onChange={(e) => setConsultationType(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      >
                        <option value="Prime Residential Acquisition (Buyer Advisory)">
                          Prime Residential Acquisition Mandate (Bucharest)
                        </option>
                        <option value="Assisted Sale & Luxury Property Positioning (Seller Advisory)">
                          Assisted Sale & Luxury Property Positioning (Seller Advisory)
                        </option>
                        <option value="International Acquisition (Chestertons Network)">
                          International Acquisition (London, French Riviera, Dubai, etc.)
                        </option>
                        <option value="Asset Protection & High-Value Insurance (Generali)">
                          Asset Protection & High-Value Insurance Advisory (Generali)
                        </option>
                        <option value="General Real Estate Advisory & Consultation">
                          General Private Real Estate Advisory
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Additional Mandate Details / Context (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Briefly outline key criteria (target corridor, asset typology, capital parameters, timeline)..."
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans resize-none"
                      />
                    </div>

                    {/* BIFĂ NDA ÎN PREALABIL */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-[#E1E4EA] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={requestPriorNDA}
                          onChange={(e) => setRequestPriorNDA(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#A97F60] focus:ring-0 cursor-pointer"
                        />
                        <span>
                          <strong className="text-[#A97F60]">Request Non-Disclosure Agreement (NDA) in Advance:</strong> Please provide a bilateral confidentiality agreement before specific asset parameters are disclosed.
                        </span>
                      </label>
                    </div>

                    {/* BIFĂ GDPR OBLIGATORIE */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                        <input
                          type="checkbox"
                          required
                          checked={consentPrivacy}
                          onChange={(e) => setConsentPrivacy(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#93C8FF] focus:ring-0 cursor-pointer"
                        />
                        <span>
                          I agree to the processing of submitted personal data for the purpose of scheduling and conducting the initial consultation, pursuant to the <Link href="/privacy" className="text-[#93C8FF] underline">Privacy Policy</Link>. Data is never transferred to third parties.
                        </span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-apple-pill-primary w-full shadow-xl"
                      >
                        <span>{loading ? "SUBMITTING REQUEST..." : "REQUEST STRATEGIC CONSULTATION"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="font-mono text-[11px] text-[#6B7280] text-center sm:text-left pt-2 border-t border-white/[0.06]">
                      Alternative direct channel: <a href="mailto:cristianvaduva@duck.com" className="text-[#93C8FF] underline">cristianvaduva@duck.com</a> · Signal / WhatsApp: <a href="https://wa.me/436509536345" target="_blank" rel="noopener noreferrer" className="text-[#F5F4EF] hover:underline">+43 650 953 6345</a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
