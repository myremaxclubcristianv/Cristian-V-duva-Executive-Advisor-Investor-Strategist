import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Building2,
  ArrowRight,
  Scale,
  FileText,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ArchitecturalFeaturePanel from "@/components/ui/ArchitecturalFeaturePanel";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Institutional Partnerships & Professional Affiliations | Executive Cristian Văduva",
  description:
    "Institutional affiliations and professional advisory collaborations across international luxury real estate and asset protection.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/parteneri",
  },
  openGraph: {
    title: "Partnerships & Professional Affiliations | Cristian Văduva",
    description:
      "Professional network and institutional affiliations presented by Cristian Văduva.",
    url: "https://executive.cristianvaduva.com/parteneri",
    type: "website",
    locale: "en_US",
  },
};

export default function ParteneriPage() {
  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background atmospheric glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="max-w-4xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                <Globe className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>AFFILIATIONS & SPECIALIZED COORDINATION</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                Professional Partnerships & Institutional Affiliations
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-3xl">
                Executive collaborates with established global real estate networks and leading institutional insurers. Every partnership operates with defined boundaries, providing private clients with direct international reach and institutional asset protection.
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
                  href="/pentru-clienti"
                  className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>PRIVATE CLIENT ADVISORY</span>
                </Link>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // CHESTERTONS GLOBAL NETWORK */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="INTERNATIONAL REAL ESTATE NETWORK"
              title="Chestertons Global Network — Founded in London in 1805"
              description="An associate professional relationship providing private clients with direct access to prime residential markets across the United Kingdom, Western Europe, and the United Arab Emirates."
            />

            <ArchitecturalFeaturePanel
              tag="CONFIRMED AFFILIATION // CHESTERTONS GLOBAL"
              title="Direct Access to the Global Prime Residential Portfolio"
              description="Cristian Văduva operates as an international partner/associate for the Romanian market within the Chestertons Global network, providing preliminary portfolio filtering and direct coordination with partner desks in London, the French Riviera, Monaco, Dubai, and Spain."
              imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
              imageAlt="Cristian Văduva at Chestertons Global Network office"
              imageCaption="Cristian Văduva · Chestertons Global Network"
              imagePosition="right"
              bullets={[
                {
                  title: "Presence in over 30 countries",
                  desc: "Network of over 100 local partner offices across key global residential markets.",
                },
                {
                  title: "On & off-market acquisitions",
                  desc: "Direct access to historic estates, penthouses, and private residences not publicly advertised.",
                },
                {
                  title: "Bilingual coordination in Bucharest",
                  desc: "Direct briefing, asset curation, and preliminary documentation before traveling for on-site viewings.",
                },
              ]}
              ctaText="EXPLORE GLOBAL PORTFOLIO"
              ctaHref="/programare"
              stats={[
                { value: "1805", label: "Year Founded" },
                { value: "30+ Countries", label: "Global Reach" },
                { value: "100+", label: "Partner Desks" },
              ]}
            />

            {/* Disclaimer Chestertons */}
            <div className="p-5 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">Factual trademark delimitation:</strong>
              Chestertons Global is an independent international entity, and its trademark belongs to its lawful proprietors. The Executive platform does not own or operate the Chestertons brand, operating as an international associate/partner for specific transaction mandates.
            </div>
          </section>

          {/* CHAPTER 02 // GENERALI ROMÂNIA */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="ASSET PROTECTION & RISK STRUCTURING"
              title="Authorized Partner — Generali România Asigurare Reasigurare S.A."
              description="Specialized asset protection and physical risk advisory for prime residential estates, commercial assets, and private collections."
            />

            <ArchitecturalFeaturePanel
              tag="AUTHORIZED CONTRACT // GENERALI ROMÂNIA"
              title="Property Asset Protection & Physical Risk Engineering"
              description="Cristian Văduva holds an authorized insurance partner agreement with Generali România Asigurare Reasigurare S.A., structuring comprehensive prime real estate policies, verifying accurate reconstruction replacement valuations (preventing underinsurance), and securing bespoke architectural finishes."
              imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-generali-portfolio-protection.png"
              imageAlt="Cristian Văduva — Generali România certification and practice"
              imageCaption="Cristian Văduva · Prime Property Risk & Protection Solutions"
              imagePosition="left"
              bullets={[
                {
                  title: "Comprehensive coverage for high-value properties",
                  desc: "Complete protection against catastrophic risk, fire, water ingress, and structural defects.",
                },
                {
                  title: "Accurate replacement cost valuation",
                  desc: "Independent assessment of imported materials, bespoke craftsmanship, and rebuilding costs to eliminate underinsurance.",
                },
                {
                  title: "Regulated ASF framework",
                  desc: "All insurance solutions are brokered in compliance with the Financial Supervisory Authority (ASF) standards.",
                },
              ]}
              ctaText="REQUEST ASSET PROTECTION AUDIT"
              ctaHref="/programare"
              stats={[
                { value: "ASF", label: "Regulated Framework" },
                { value: "Generali", label: "Institutional Underwriter" },
                { value: "100%", label: "Asset Coverage Focus" },
              ]}
            />

            {/* Disclaimer Generali */}
            <div className="p-5 bg-white/[0.02] border-l-2 border-[#93C8FF] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">Regulatory delimitation:</strong>
              Insurance policies are underwritten exclusively by Generali România Asigurare Reasigurare S.A. pursuant to approved policy terms and conditions. Executive provides risk profile structuring and physical property audit advisory.
            </div>
          </section>

          {/* CHAPTER 03 // OPEN NETWORK OF ACCREDITED COLLABORATORS */}
          <section className="space-y-12">
            <ChapterDivider
              number="03"
              category="INDEPENDENT ACCREDITED EXPERTISE"
              title="Open Network of Accredited Professionals"
              description="High-stakes transactions require rigorous multidisciplinary oversight. Depending on mandate specifications, we collaborate seamlessly with your existing family counsel or assemble vetted independent practitioners."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Bar Attorneys</h3>
                <p className="leading-relaxed">
                  Specialized law practices focused on real estate law, urban planning compliance, and title verification for complete legal audits.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  BUCHAREST BAR ASSOCIATION
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Public Notaries</h3>
                <p className="leading-relaxed">
                  Established notary offices with extensive experience in high-value asset transfers, solemn deed execution, and title registration.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  NOTARIAL AUTHENTICATION
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Certified Building Engineers</h3>
                <p className="leading-relaxed">
                  Certified structural engineers and authorized site inspectors auditing structural integrity, MEP installations, and execution standards.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  STRUCTURE & MEP AUDITS
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">ANEVAR Certified Appraisers</h3>
                <p className="leading-relaxed">
                  Independent appraisers certified under International Valuation Standards (IVS) for market value and lending compliance determinations.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  IVS / ANEVAR STANDARDS
                </div>
              </div>
            </div>
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="INITIATE PARTNERSHIP OR MANDATE"
            title="Ready to leverage our institutional partner network for your transaction?"
            description="Whether securing international residences via Chestertons or structuring prime asset coverage with Generali, we provide direct, vetted channels."
            primaryCtaText="SCHEDULE CONSULTATION (20 MIN)"
            primaryCtaHref="/programare"
            secondaryCtaText="PRIVATE CLIENT ADVISORY"
            secondaryCtaHref="/pentru-clienti"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
          />
        </div>
      </main>

      <Footer />
    </Section>
  );
}
