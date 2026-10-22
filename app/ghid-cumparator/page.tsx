"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Printer,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ClosingFrame from "@/components/ui/ClosingFrame";

const chapters = [
  { id: "capitolul-1", num: "01", title: "Defining the Acquisition Objective" },
  { id: "capitolul-2", num: "02", title: "Total Budget & Ancillary Costs" },
  { id: "capitolul-3", num: "03", title: "Legal & Title Verification" },
  { id: "capitolul-4", num: "04", title: "Technical & Structural Audit" },
  { id: "capitolul-5", num: "05", title: "Micro-Zonal Analysis & Environment" },
  { id: "capitolul-6", num: "06", title: "Negotiation & Structuring" },
  { id: "capitolul-7", num: "07", title: "Post-Acquisition & Asset Defense" },
];

export default function GhidCumparatorPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

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
    if (!consentPrivacy) {
      setErrorMsg("Consent is required to process your details for delivering the dossier.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/ghid-cumparator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          consentPrivacy,
          consentMarketing,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "An issue occurred during submission.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* ======================================================== */}
          {/* HERO EDITORIAL INTRODUCTION                              */}
          {/* ======================================================== */}
          <section className="space-y-8 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <FileText className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>TECHNICAL RESEARCH & DUE DILIGENCE RESOURCE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              The Buyer&apos;s Dossier: Pre-Acquisition Criteria & Verification
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              The essential methodological guide for evaluating prime residential real estate: 7 structured chapters designed to eliminate technical liabilities, informational asymmetries, and cadastral risks.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / SAVE AS PDF</span>
              </button>
              <a
                href="#formular-descarcare"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#93C8FF] transition-colors"
              >
                <Download className="w-4 h-4 text-[#93C8FF]" />
                <span>REQUEST EMAIL DELIVERY</span>
              </a>
            </div>
          </section>

          {/* ======================================================== */}
          {/* QUICK CHAPTER NAVIGATION STRIP                           */}
          {/* ======================================================== */}
          <nav aria-label="Index Capitole" className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8A95A5] block">
              EXPEDITED DOSSIER NAVIGATION (7 CHAPTERS)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-xs">
              {chapters.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="p-3 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF] transition-colors group flex flex-col justify-between"
                >
                  <span className="text-[10px] text-[#93C8FF] font-semibold block">CH. {ch.num}</span>
                  <span className="text-[11px] text-[#8A95A5] group-hover:text-[#F5F4EF] line-clamp-2 leading-snug mt-1 font-sans">
                    {ch.title}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          {/* ======================================================== */}
          {/* COMPREHENSIVE DOSSIER CONTENT — 7 DETAILED CHAPTERS       */}
          {/* ======================================================== */}
          <section className="space-y-16">
            <ChapterDivider
              number="01"
              category="METHODOLOGICAL DOSSIER BODY"
              title="Complete Verification Dossier Content"
              subtitle="Practical specifications, critical vulnerabilities, and due diligence checklists for prime acquisitions"
            />

            <div className="space-y-10">
              {/* CAPITOLUL 1 */}
              <div id="capitolul-1" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 01</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">STRATEGIC FOUNDATIONS</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  1. Clear Definition of the Acquisition Objective
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  A common pitfall in the luxury segment is conflating emotional criteria of a primary residence with the financial metrics of an investment asset. Clearly define the primary role of the asset:
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 bg-black/40 border border-white/[0.06] space-y-2">
                    <span className="font-mono text-xs text-[#93C8FF] block font-semibold">01 // FAMILY RESIDENCE</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Prioritize privacy, air quality, perimeter security, green buffer zones, and proximity to international schools.
                    </p>
                  </div>
                  <div className="p-5 bg-black/40 border border-white/[0.06] space-y-2">
                    <span className="font-mono text-xs text-[#A97F60] block font-semibold">02 // URBAN PIED-À-TERRE</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Prioritize lock-and-leave security, concierge services, streamlined building administration, and rapid access to core business districts.
                    </p>
                  </div>
                  <div className="p-5 bg-black/40 border border-white/[0.06] space-y-2">
                    <span className="font-mono text-xs text-[#93C8FF] block font-semibold">03 // CAPITAL PRESERVATION</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Prioritize irreplaceable locational scarcity (lakefront, direct park proximity), architectural pedigree, and resilience against market downturns.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 2 */}
              <div id="capitolul-2" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 02</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">FINANCIAL SCRUTINY</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  2. Total Budget & Ancillary Transaction Costs
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  The headline acquisition price represents only a portion of the total capital deployment. Before submitting a binding offer, budget transparently for all ancillary line items:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-[#8A95A5] pt-2">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">NOTARIAL FEES</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">Pursuant to national notarial scales (approx. 0.5% – 1% of transaction value + VAT).</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">ANCPI REGISTRY FEES</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">0.15% for individual purchasers; 0.5% for corporate entities.</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#A97F60] block">LEGAL & TECHNICAL AUDIT</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">Fees for independent Bar counsel and certified structural engineering inspection.</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#A97F60] block">SERVICE CHARGES & RESERVES</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">Monthly residential complex administration, maintenance reserves, and security services.</p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 3 */}
              <div id="capitolul-3" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 03</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">LEGAL & CADASTRAL AUDIT</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  3. Verification of Legal Title & Land Book Records
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  The greatest financial vulnerabilities arise from unrecorded title encumbrances or cadastral discrepancies. Non-negotiable checklist for legal counsel review:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2 font-sans text-xs sm:text-sm text-[#B8C2CF]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">TITLE PROVENANCE CHAIN</strong>
                      Verification of successive conveyances over a minimum 30-year span to rule out historical restitution claims (Law 10/2001).
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">AUTHENTICATED LAND BOOK EXTRACT</strong>
                      Auditing active encumbrances (mortgages, liens, legal disputes, alienation prohibitions, or usufruct rights).
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">CADASTRAL CONFORMITY</strong>
                      Official cadastral survey approved by the land registry (OCPI) must match 100% with physical on-site layout. Unauthorized structural alterations trigger severe sanctions.
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">STATUTORY PREEMPTION RIGHTS</strong>
                      Verification of preemption rights held by the Ministry of Culture if the asset is classified as a historical monument or sits in a designated heritage zone.
                    </div>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 4 */}
              <div id="capitolul-4" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 04</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">TECHNICAL DUE DILIGENCE</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  4. Technical & Structural Building Audit
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Luxurious cosmetic finishes often conceal structural defects or moisture issues. A physical inspection conducted by a certified structural engineer / technical expert must examine:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#8A95A5]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">STRUCTURE & PHYSICS</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Concrete integrity, absence of moisture/water infiltration in basements or terraces, and roof waterproofing condition.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#A97F60] block font-semibold">MEP & CLIMATE SYSTEMS</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      VRF/HVAC installations, heat pumps, 3-phase electrical connection capacity, and auxiliary emergency backup circuits.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">ACOUSTICS & EFFICIENCY</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Soundproofing across floor slabs and partition walls; thermal performance coefficients of exterior glazed facades.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 5 */}
              <div id="capitolul-5" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 05</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">URBAN ENVIRONMENT</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  5. Micro-Zonal Analysis & Environmental Dynamics
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  A property does not exist in isolation. Long-term capital value is determined by the evolution of its immediate urban perimeter:
                </p>
                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#B8C2CF]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] mt-2 shrink-0" />
                    <span><strong>Adjacent zoning status (PUZ/PUD):</strong> Verify building rights on neighboring parcels. Identify the risk of taller developments obstructing natural light or residential privacy.</span>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] mt-2 shrink-0" />
                    <span><strong>Traffic density & vehicular ingress:</strong> Evaluate traffic flows during peak commuter hours (morning 07:30 – 09:00 and evening 17:30 – 19:30).</span>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] mt-2 shrink-0" />
                    <span><strong>Utility infrastructure:</strong> Stability of local municipal water networks, stormwater drainage capacity, and seasonal winter gas pressures.</span>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 6 */}
              <div id="capitolul-6" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 06</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">CONTRACTUAL STRATEGY</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  6. Negotiation & Transaction Structuring
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Effective negotiation relies not on emotional urgency, but on empirical leverage derived from technical due diligence findings:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2 font-sans text-xs sm:text-sm text-[#B8C2CF]">
                  <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                    <strong className="text-[#F5F4EF] font-mono text-xs block text-[#93C8FF]">STRICT CONDITIONS PRECEDENT</strong>
                    <p className="text-xs text-[#8A95A5] leading-relaxed">
                      The preliminary sale agreement (promisiune) must incorporate precise conditions precedent regarding legal title clearance, technical remediation, and mortgage financing approval.
                    </p>
                  </div>
                  <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                    <strong className="text-[#F5F4EF] font-mono text-xs block text-[#A97F60]">STRUCTURED ESCROW MILESTONES</strong>
                    <p className="text-xs text-[#8A95A5] leading-relaxed">
                      Withholding an escrow deposit or final completion tranche until physical delivery of all technical books and acceptance of the handover protocol without objections.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 7 */}
              <div id="capitolul-7" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CHAPTER 07</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">WEALTH GOVERNANCE</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  7. Post-Acquisition & Asset Defense
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Formal completion before the public notary marks the commencement of disciplined asset administration:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#8A95A5]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">ASSET DEFENSE POLICY</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Securing insurance coverage at true reconstruction replacement cost (via our Generali România partnership), rather than statutory minimum values.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#A97F60] block font-semibold">TAX FILING & REGISTRATION</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Submitting the formal fiscal declaration within 30 calendar days to the local tax authority and transferring the municipal tax account.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">UTILITY CONTRACT NOVATION</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Taking meter readings and executing novation agreements with certified utility providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* LEAD CAPTURE & DOSSIER DELIVERY FORM                      */}
          {/* ======================================================== */}
          <section id="formular-descarcare" className="space-y-6">
            <ChapterDivider
              number="02"
              category="DOSSIER EMAIL DELIVERY"
              title="Request the Complete Digital Dossier"
              subtitle="Enter your contact details to receive the printable version and methodological updates"
            />

            <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.1] relative">
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#93C8FF]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#93C8FF]" />

              {success ? (
                <div className="space-y-6 text-center py-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white/[0.03] border border-[#93C8FF]/40 flex items-center justify-center text-[#93C8FF]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Dossier Successfully Dispatched
                    </h3>
                    <p className="font-sans text-sm text-[#8A95A5] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{fullName}</strong>. The Buyer&apos;s Dossier has been transmitted to <strong>{email}</strong>. You can review it online anytime or download it as a PDF.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#E1E4EA]"
                    >
                      <Printer className="w-4 h-4" />
                      <span>SAVE PDF NOW</span>
                    </button>
                    <Link
                      href="/programare"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-[#F5F4EF] font-mono text-xs uppercase tracking-wider hover:border-[#93C8FF]"
                    >
                      <span>SCHEDULE PRIVATE CONVERSATION</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="font-serif text-2xl text-[#F5F4EF]">
                      Dossier Request Form
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#8A95A5]">
                      Data is processed exclusively to deliver the requested material.
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
                        placeholder="e.g., Alexander Smith"
                        className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
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
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+40 7... or +44 7..."
                      className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                    />
                  </div>

                  {/* CONSENT SEPARAT GDPR (MANDATORY) */}
                  <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                      <input
                        type="checkbox"
                        required
                        checked={consentPrivacy}
                        onChange={(e) => setConsentPrivacy(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded-none bg-black border-white/20 text-[#93C8FF] focus:ring-0 cursor-pointer"
                      />
                      <span>
                        <strong className="text-[#F5F4EF]">Mandatory Consent:</strong> I agree to the processing of my personal data provided above for the sole purpose of transmitting the Buyer&apos;s Dossier, in accordance with the <Link href="/privacy" className="text-[#93C8FF] underline">Privacy Policy</Link>.
                      </span>
                    </label>

                    {/* CONSENT SEPARAT MARKETING (OPTIONAL) */}
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                      <input
                        type="checkbox"
                        checked={consentMarketing}
                        onChange={(e) => setConsentMarketing(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded-none bg-black border-white/20 text-[#93C8FF] focus:ring-0 cursor-pointer"
                      />
                      <span>
                        <strong className="text-[#B8C2CF]">Optional:</strong> I wish to receive quarterly updates from Executive regarding the prime residential property market report. I may revoke this consent at any time.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] disabled:opacity-50 transition-colors"
                    >
                      <span>{loading ? "PROCESSING..." : "REQUEST THE BUYER'S DOSSIER"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* ======================================================== */}
          {/* LEGAL NOTICE                                             */}
          {/* ======================================================== */}
          <section className="p-6 sm:p-8 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed space-y-1">
            <strong className="text-[#F5F4EF] font-medium block">
              Disclaimer:
            </strong>
            <p>
              This dossier is provided strictly for educational and informational purposes. It does not constitute formal legal counsel and does not replace dedicated representation by a certified Bar attorney or licensed ANEVAR appraiser. For every individual property acquisition, independent documentary audit by licensed practitioners is strongly advised.
            </p>
          </section>

          {/* ======================================================== */}
          {/* HIGH-IMPACT CLOSING FRAME                                */}
          {/* ======================================================== */}
          <ClosingFrame
            category="03 // ACQUISITION ADVISORY"
            title="Seeking dedicated professional advisory for an identified property?"
            description="Schedule an introductory 20-minute consultation with Cristian Văduva to evaluate the opportunity, verify preliminary risks, and structure the representation mandate."
            primaryAction={{
              label: "SCHEDULE INITIAL CONSULTATION",
              href: "/programare",
            }}
            secondaryAction={{
              label: "EXAMINE ADVISORY PROCESS",
              href: "/cum-lucrez",
            }}
          />

        </div>
      </main>

      <Footer />
    </Section>
  );
}
