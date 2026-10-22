import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Lock,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Case Studies & Advisory Mandate Framework | Executive",
  description:
    "Analytical framework and methodological structure applied in prime real estate advisory mandates. Case study disclosures strictly adhere to client confidentiality and bilateral NDA protocols.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/studii-de-caz",
  },
  openGraph: {
    title: "Case Studies & Methodological Framework | Cristian Văduva",
    description:
      "The anatomy of a structured private real estate advisory mandate and client confidentiality policies.",
    url: "https://executive.cristianvaduva.com/studii-de-caz",
    type: "website",
    locale: "en_US",
  },
};

const ANATOMY_POINTS = [
  {
    num: "01",
    title: "Initial Brief & Profile",
    desc: "Client objective definition (primary residence, capital placement, legacy asset disposition), timeline constraints, and non-negotiable parameters.",
  },
  {
    num: "02",
    title: "Diagnosis & Due Diligence",
    desc: "Title provenance verification, cadastral conformity audit, certified structural engineering assessment, and land book registry legal review.",
  },
  {
    num: "03",
    title: "Mandate Strategy",
    desc: "Formulation of the engagement approach: exhaustive whole-market screening, off-market corridor access, or discreet asset positioning.",
  },
  {
    num: "04",
    title: "Negotiation & Execution",
    desc: "Structuring the financial positioning based on verified like-for-like data, negotiating conditions precedent, and optimizing payment schedules.",
  },
  {
    num: "05",
    title: "Completion & Value Realized",
    desc: "Solemn execution before the public notary, risk-free title transfer, and quantifiable value protected through pre-closing audits.",
  },
];

export default function StudiiDeCazPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="max-w-4xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                <FileText className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>METHODOLOGY & DOCUMENTED MANDATES</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                Case Studies: Methodological Analysis Framework
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-3xl">
                Every real estate mandate directed by Executive follows a structured protocol of technical scrutiny, multidisciplinary due diligence, and disciplined strategic negotiation. In strict compliance with mutual Non-Disclosure Agreements (NDA), we present the methodological architecture through which high-stakes decisions are managed.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/programare"
                  className="btn-apple-pill-primary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>SCHEDULE 20-MINUTE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/cum-lucrez"
                  className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>ADVISORY METHODOLOGY & STAGES</span>
                </Link>
              </div>
            </div>
          </section>

          {/* EDITORIAL NOTICE ON FACTUAL INTEGRITY & CLIENT CONFIDENTIALITY */}
          <section className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.1] rounded-3xl relative shadow-xl">
            <div className="flex items-start gap-5">
              <div className="p-3 bg-white/[0.04] border border-white/[0.08] text-[#93C8FF] shrink-0 mt-1 rounded-2xl">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                  FACTUAL COMPLIANCE & CONFIDENTIALITY (NDA) POLICY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Responsible Data Disclosure: Zero Fabricated Metrics
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#8A95A5] leading-relaxed">
                  We strictly reject the widespread market practice of presenting fictitious transactions, imaginary buyers, inflated discount claims, or manufactured testimonials. Real estate mandates directed by Cristian Văduva involve private wealth and are legally shielded by mutual Non-Disclosure Agreements (NDA).
                </p>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Documented cases are published exclusively after transaction completion, full anonymization of all identifying parameters, and receipt of explicit written authorization from each contracting principal.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // 5-POINT ANATOMY */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="VALUATION ARCHITECTURE"
              title="The 5-Point Anatomy of a Documented Mandate"
              description="The rigorous framework governing every advisory dossier to ensure technically validated, risk-free property decisions."
            />

            <div className="grid md:grid-cols-5 gap-4">
              {ANATOMY_POINTS.map((pt) => (
                <div
                  key={pt.num}
                  className="p-6 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF]/40 transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="font-serif text-2xl text-[#93C8FF] block">
                      {pt.num}
                    </span>
                    <h4 className="font-serif text-base text-[#F5F4EF] leading-snug">
                      {pt.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CHAPTER 02 // 3 FRAMEWORK SCENARIOS */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="ILLUSTRATIVE MANDATE FRAMEWORKS"
              title="Three Strategic Advisory Framework Scenarios"
              description="Structured upon our operational methodology, transparently marked as pending formal client publication authorization."
            />

            <div className="space-y-10">
              {/* Case 01 */}
              <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08] space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] block">
                      FRAMEWORK SCENARIO 01 // ACQUISITION MANDATE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Prime Residential Penthouse Acquisition · Herăstrău Enclave
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.1] font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    PENDING CLIENT AUTHORIZATION (NDA)
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">IDENTIFIED CHALLENGE</span>
                    <p className="leading-relaxed">
                      Navigating a thin market characterized by wide disparities between advertised portal asking prices and actual technical book quality.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">EXECUTIVE INTERVENTION</span>
                    <p className="leading-relaxed">
                      Off-market scanning, certified structural and terrace MEP inspection, and like-for-like valuation benchmarking against recent closed transactions.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">OUTCOME & PROTECTION</span>
                    <p className="leading-relaxed">
                      Pre-contract warranty restructuring, vendor-funded remediation of minor defects, and secure solemn notarial conveyance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case 02 */}
              <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08] space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] block">
                      FRAMEWORK SCENARIO 02 // SELLER ADVISORY
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Discreet Positioning & Disposition of Prime Estate · Pipera Enclave
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.1] font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    PENDING CLIENT AUTHORIZATION (NDA)
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">IDENTIFIED CHALLENGE</span>
                    <p className="leading-relaxed">
                      High-value residence suffering from uncoordinated multi-broker listings across public portals, eroding pricing credibility.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">EXECUTIVE INTERVENTION</span>
                    <p className="leading-relaxed">
                      Immediate termination of conflicting listings, cadastral dossier rectification, and assembly of an institutional-grade technical presentation book.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">OUTCOME & PROTECTION</span>
                    <p className="leading-relaxed">
                      Curated viewings restricted to financially pre-screened buyers, elimination of speculative viewings, and closing at verified fair value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case 03 */}
              <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08] space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] block">
                      FRAMEWORK SCENARIO 03 // DUE DILIGENCE AUDIT
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Restructuring & Legal Clearance of Historic Architectural Estate
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.1] font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    PENDING CLIENT AUTHORIZATION (NDA)
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">IDENTIFIED CHALLENGE</span>
                    <p className="leading-relaxed">
                      Historic downtown property burdened with cadastral boundary overlaps, unrecorded archaic easements, and structural consolidation questions.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">EXECUTIVE INTERVENTION</span>
                    <p className="leading-relaxed">
                      Coordinating independent legal counsel to clear title encumbrances, certified structural engineering audits, and ANEVAR valuation modeling.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">OUTCOME & PROTECTION</span>
                    <p className="leading-relaxed">
                      Delivery of a legally scrubbed property dossier, enabling a secure long-term capital placement for the purchasing principal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="AUDIT & STRUCTURED DECISION"
            title="Seeking an objective appraisal for a property or private portfolio?"
            description="Schedule an introductory 20-minute confidential consultation. We will determine whether your transaction parameters align with our advisory standards."
            primaryCtaText="SCHEDULE CONSULTATION (20 MIN)"
            primaryCtaHref="/programare"
            secondaryCtaText="HOW I WORK: PROCESS & PHASES"
            secondaryCtaHref="/cum-lucrez"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
