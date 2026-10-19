import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, ShieldCheck, Database, Building2, ExternalLink, CheckCircle2, Lock } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { ecosystemPlatforms } from "@/lib/ecosystemData";
import { insuranceDivisions, insuranceOverview } from "@/lib/insuranceData";
import { SectionHeader, EditorialText, CTASection, InsightPanel } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Integrated Ecosystem & Operating Architecture — Cristian Văduva",
  description:
    "The integrated matrix of real estate intelligence, verified marketplaces, ultra-luxury offshore access, and strategic wealth protection directed by Cristian Văduva.",
};

export default function EcosystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL HERO & SYSTEM OVERVIEW               */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-28 sm:pb-36 lg:pb-44">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            {/* Metadata Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse shrink-0" />
                <span>01 // DIGITAL & OPERATIONAL INFRASTRUCTURE</span>
                <span className="text-white/20 hidden xs:inline">/</span>
                <span className="text-[#B8C2CF] hidden xs:inline">PRIVATE ECOSYSTEM</span>
              </div>
              <span className="text-[#8A95A5] hidden sm:block">BUCHAREST · MONACO · DUBAI</span>
            </div>

            {/* Dominant Title & Subtitle */}
            <div className="max-w-4xl space-y-8">
              <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[1.02] tracking-tight break-words">
                Architecture of an<br />
                <span className="text-[#A97F60] italic font-normal">Integrated Ecosystem.</span>
              </h1>

              <EditorialText size="xl" maxWidth="prose" color="secondary" className="leading-relaxed">
                A strategic synergy of proprietary analytical instruments, verified acquisition marketplaces, off-market international access, and asset protection mechanisms — engineered to provide asymmetric informational leverage to private investors and family offices.
              </EditorialText>

              {/* Ecosystem Quick Matrix */}
              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
                <div className="p-5 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-1.5 shadow-lg">
                  <span className="text-[#93C8FF] block text-[10px] uppercase tracking-wider font-semibold">NEURAL AI ENGINE</span>
                  <span className="text-[#F5F4EF] font-medium font-sans text-sm">AiX OS™</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-1.5 shadow-lg">
                  <span className="text-[#93C8FF] block text-[10px] uppercase tracking-wider font-semibold">VERIFIED MARKETPLACE</span>
                  <span className="text-[#F5F4EF] font-medium font-sans text-sm">HomeFind</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-1.5 shadow-lg">
                  <span className="text-[#93C8FF] block text-[10px] uppercase tracking-wider font-semibold">ULTRA-PRIME AXIS</span>
                  <span className="text-[#F5F4EF] font-medium font-sans text-sm">AiXLuxury.com</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-1.5 shadow-lg">
                  <span className="text-[#93C8FF] block text-[10px] uppercase tracking-wider font-semibold">ASSET PROTECTION</span>
                  <span className="text-[#F5F4EF] font-medium font-sans text-sm">Insurance Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // DETAILED PLATFORMS CATALOG (APPLE BENTO ROWS)      */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-24">
          <SectionHeader
            eyebrow="02 // ACTIVE ENTITIES & OPERATIONAL CAPACITY"
            badge="STRATEGIC PILLARS"
            title="The Cristian Văduva Ecosystem Platforms"
            description="Each platform within the ecosystem addresses a decisive node in the lifecycle of prime real estate capital: predictive discovery, contractual qualification, cross-border placement, and wealth conservation."
          />

          <div className="space-y-8">
            {ecosystemPlatforms.map((platform, idx) => (
              <div
                key={platform.id}
                className="p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/[0.08] bg-[#0C1119] grid lg:grid-cols-12 gap-8 lg:gap-12 items-start hover:border-white/[0.22] hover:bg-[#101622] transition-all duration-300 shadow-2xl"
              >
                {/* Index & Badge */}
                <div className="lg:col-span-2 space-y-2">
                  <span className="font-serif text-4xl sm:text-5xl text-[#647082]/60 font-light block">
                    0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#93C8FF]/10 border border-[#93C8FF]/20 font-mono text-[9px] uppercase tracking-[0.2em] text-[#93C8FF] font-semibold inline-block">
                    {platform.badge}
                  </span>
                </div>

                {/* Name, Role & Description */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] leading-snug">
                      {platform.name}
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#A97F60] font-medium">
                      {platform.role}
                    </p>
                  </div>

                  <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                    {platform.description}
                  </EditorialText>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] font-semibold block">
                      CORE CAPABILITIES:
                    </span>
                    <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#B8C2CF] font-light">
                      {platform.keyCapabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Synergy Context */}
                  <div className="p-5 rounded-2xl bg-[#1B2028]/70 border border-white/[0.06] text-xs font-mono space-y-1.5">
                    <span className="text-[#A97F60] uppercase tracking-wider block text-[10px] font-semibold">
                      ROLE IN THE EXECUTIVE MANDATE:
                    </span>
                    <p className="text-[#B8C2CF] font-sans font-light text-xs leading-relaxed">
                      {platform.synergyWithExecutive}
                    </p>
                  </div>
                </div>

                {/* Meta & Direct URL Action */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:pl-8 lg:border-l lg:border-white/[0.08]">
                  <div className="space-y-4">
                    <div className="space-y-1 font-mono text-xs text-[#8A95A5]">
                      <span className="text-[10px] uppercase tracking-wider text-white/40 block">TARGET AUDIENCE:</span>
                      <span className="text-[#F5F4EF] font-sans">{platform.audience}</span>
                    </div>

                    <div className="space-y-1 font-mono text-xs text-[#8A95A5]">
                      <span className="text-[10px] uppercase tracking-wider text-white/40 block">DEDICATED DOMAIN:</span>
                      <span className="text-[#93C8FF]">{platform.domain}</span>
                    </div>
                  </div>

                  {platform.url && platform.url !== "#" ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple-pill-primary w-full text-center"
                    >
                      <span>ACCESS PLATFORM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] font-mono text-[11px] uppercase tracking-wider text-[#8A95A5] text-center">
                      INTERNAL PRIVATE PROTOCOL
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // INSURANCE & ASSET PROTECTION CORNERSTONE           */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="03 // ASSET PROTECTION & GENERALI PARTNERSHIP"
              badge="ASSET DEFENSE"
              title={insuranceOverview.title}
              description={insuranceOverview.corePhilosophy}
              action={
                <a
                  href={insuranceOverview.externalPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apple-pill-primary"
                >
                  <span>DEDICATED INSURANCE PORTAL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              }
            />

            {/* General Information Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121721] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs shadow-xl">
              <div className="space-y-1">
                <span className="text-[#93C8FF] block text-[10px] uppercase tracking-wider font-semibold">
                  OFFICIAL ACCREDITATION & STRATEGIC ALLIANCE
                </span>
                <span className="text-[#F5F4EF] text-sm font-sans font-medium">
                  {insuranceOverview.partnerName} — {insuranceOverview.partnerRole}
                </span>
              </div>
              <div className="text-[#8A95A5] text-xs">
                Authorised Advisory · Under-Insurance Audit · Asymmetric Risk Structuring
              </div>
            </div>

            {/* Insurance Divisions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceDivisions.map((division) => (
                <div
                  key={division.id}
                  className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#07090D] hover:border-white/[0.22] hover:bg-[#0c1119] transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                        {division.category}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-[#93C8FF]" />
                    </div>

                    <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                      {division.title}
                    </h3>

                    <p className="font-mono text-xs text-[#A97F60]">
                      {division.tagline}
                    </p>

                    <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                      {division.description}
                    </EditorialText>

                    {/* Coverage Items */}
                    <div className="pt-2 space-y-1.5 border-t border-white/[0.06]">
                      {division.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#B8C2CF]/90">
                          <span className="text-[#93C8FF] font-mono text-[10px] shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={division.externalPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#93C8FF] hover:underline"
                  >
                    <span>DETAILED RISK AUDIT & POLICY SPECIFICATIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // STRATEGIC SYNERGY CALLOUT                          */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="SYSTEM INTEGRATION"
          title="Collaborate on Infrastructure or Propose a Strategic Alliance."
          description="Fie că doriți acces la catalogul de proprietăți HomeFind, prezentarea unei proprietăți reprezentative sau analizarea soluțiilor de asigurare și protecție a activelor prin parteneriatul cu Generali România, dialogul este direct și confidențial."
          primaryActionText="SOLICITĂ O DISCUȚIE STRATEGICĂ"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Toate datele și comunicările sunt procesate sub standarde europene de protecție a datelor și confidențialitate contractuală (NDA)."
        />
      </main>

      <Footer />
    </div>
  );
}
