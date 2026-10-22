import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Legal Notice, Service Boundaries & Disclaimer — Cristian Văduva Executive",
  description: "Essential legal disclosures regarding the editorial nature of published information, boundaries of bespoke advisory services, professional scope, and remuneration frameworks.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/disclaimer",
  },
  openGraph: {
    title: "Legal Notice, Service Boundaries & Disclaimer — Cristian Văduva Executive",
    description: "Essential legal disclosures regarding the editorial nature of published information, boundaries of bespoke advisory services, professional scope, and remuneration frameworks.",
    locale: "en_US",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      kicker="TRANSPARENCY FRAMEWORK"
      title="Legal Notice, Service Boundaries & Disclaimer"
      subtitle="Essential clarifications regarding the nature of published platform intelligence, bespoke advisory engagements, and professional practice boundaries."
      lastUpdated="October 2026"
    >
      <div className="space-y-12 text-[#B8C2CF] font-light leading-relaxed">
        {/* Core Distinction Callout */}
        <section className="bg-[#0C1119] border border-[#93C8FF]/40 p-8 space-y-5 shadow-2xl">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
            <span>FUNDAMENTAL DISTINCTION</span>
            <span className="w-4 h-[1px] bg-[#93C8FF]/40" />
            <span>PUBLIC INFORMATION VS. CONTRACTED MANDATES</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
            Nature of Published Content and Bespoke Advisory Services
          </h2>
          <div className="space-y-3 text-sm text-[#B8C2CF] leading-relaxed">
            <p>
              All articles, market intelligence reports, video materials, property monographs, and indicative data published on <span className="font-mono text-[#F5F4EF]">cristianvaduva.com</span> are purely informational and editorial in character. They reflect professional observations and analysis as of their publication date and do not constitute a binding commercial offer or generalized contractual undertaking.
            </p>
            <p>
              Bespoke advisory services are provided <strong className="text-[#F5F4EF] font-medium">exclusively under a formal written contract and an express bilateral mandate</strong> agreed upon with each private client. A client-advisor relationship does not arise from browsing this platform or submitting an exploratory message, but solely following defined objectives, requisite conflict checks, and execution of a binding representation agreement.
            </p>
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <Link
              href="/cum-lucrez"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#93C8FF] hover:underline"
            >
              <span>Review advisory remuneration principles and engagement phases on our dedicated framework page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 1: Professional Scope */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECTION 01</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">1. Professional Boundaries & External Counsel</h2>
          </div>
          <p className="text-sm">
            Cristian Văduva provides strategic real estate advisory, transaction negotiation, asset selection, and due diligence coordination. This professional activity <strong className="text-[#F5F4EF] font-medium">does not substitute for, nor does it constitute, statutory legal services reserved for licensed attorneys (Bar members)</strong>, certified public accounting/tax audit, or regulated securities investment advice under capital market frameworks.
          </p>
          <p className="text-sm">
            For notarized conveyance instruments, formal legal opinions, or complex cross-border corporate/tax structuring, we coordinate directly with accredited civil-law notaries, independent legal counsel, and chartered tax advisors, or recommend that clients retain their own independent specialist advisors.
          </p>
        </section>

        {/* Section 2: Real Estate Data */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECTION 02</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">2. Real Estate Data, Surfaces & Architectural Concepts</h2>
          </div>
          <p className="text-sm">
            Property descriptions, usable and gross floor areas, technical specifications, and catalog prices are compiled from documentation supplied by developers, property owners, or institutional partner networks. While reasonable diligence is applied to verify accuracy, prospective buyers must independently verify Land Registry (Carte Funciară) entries and cadastral documentation prior to executing financial commitments.
          </p>
          <p className="text-sm">
            Visuals designated as <span className="text-[#F5F4EF] font-mono text-xs">Architectural Concept</span> or <span className="text-[#F5F4EF] font-mono text-xs">Illustrative 3D Render</span> represent design and volumetric studies, rather than finished physical construction photographs.
          </p>
        </section>

        {/* Section 3: Remuneration */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECTION 03</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">3. Remuneration Transparency & Commercial Partnerships</h2>
          </div>
          <p className="text-sm">
            Remuneration structures vary according to mandate scope (buyer representation mandate, seller agency, or retained real estate advisory). Institutional affiliation with Generali România is conducted as an authorized insurance agent/partner, with remuneration deriving from standard regulated insurance brokerage commissions. The Chestertons alliance provides reciprocal access to an international prime property network.
          </p>
          <p className="text-sm">
            Complete commercial terms, retainer schedules, and engagement protocols are detailed on our <Link href="/cum-lucrez" className="text-[#93C8FF] underline">How I Work: Protocols, Analysis & Representation</Link> page and formalized in bilateral contracts executed with clients.
          </p>
        </section>

        {/* Section 4: Market Risks */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECTION 04</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">4. Absence of Absolute Guarantees & Market Risk Disclosures</h2>
          </div>
          <p className="text-sm">
            Real estate acquisitions are subject to macroeconomic cycles, regulatory shifts, interest rate volatility, and property-specific physical risks. We do not make speculative guarantees regarding future capital appreciation, yields, or absolute risk elimination. Structured due diligence is designed to systematically reduce informational asymmetry and identify documentable vulnerabilities, without claiming that every latent or macroeconomic risk can be preempted.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
