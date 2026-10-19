import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import Link from "next/link";
import { contactInfo } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Legal & Corporate Information — Cristian Văduva",
  description: "Institutional legal notice, operator identity, intellectual property, and regulatory transparency for Cristian Văduva and AiX Media platforms.",
  alternates: {
    canonical: "https://cristianvaduva.com/legal",
  },
};

export default function LegalPage() {
  return (
    <LegalPageLayout
      kicker="INSTITUTIONAL"
      title="Legal & Corporate Notice"
      subtitle="Corporate identity, operator transparency, intellectual property rights, and platform governance framework."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Section 1: Operator Identity */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 01</span>
            <h2 className="font-display text-2xl text-text-primary">1. Platform Operator & Identity</h2>
          </div>
          <p className="text-sm">
            This digital platform (<span className="text-text-primary font-mono">cristianvaduva.com</span>) and related digital channels operate as the official professional identity, executive advisory desk, and editorial media platform of <strong className="text-text-primary font-medium">Cristian Văduva</strong> (Executive Advisor · Investor · Strategist).
          </p>
          <div className="pt-4 border-t border-surface-secondary/60 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="text-accent block uppercase tracking-widest text-[10px]">PRINCIPAL OPERATOR</span>
              <span className="text-text-primary">Cristian Văduva</span>
            </div>
            <div>
              <span className="text-accent block uppercase tracking-widest text-[10px]">OFFICIAL INQUIRY DESK</span>
              <a href={`mailto:${contactInfo.email}`} className="text-text-primary hover:text-accent underline">
                {contactInfo.email}
              </a>
            </div>
            <div>
              <span className="text-accent block uppercase tracking-widest text-[10px]">OPERATIONAL HUBS</span>
              <span className="text-text-primary">Bucharest · Monaco · Europe</span>
            </div>
            <div>
              <span className="text-accent block uppercase tracking-widest text-[10px]">PRIMARY SECTORS</span>
              <span className="text-text-primary">Ultra-Prime Real Estate · Capital Advisory</span>
            </div>
          </div>
        </section>

        {/* Section 2: Platform Scope */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 02</span>
            <h2 className="font-display text-2xl text-text-primary">2. Nature of Platform & Editorial Scope</h2>
          </div>
          <p className="text-sm">
            The platform publishes executive perspectives, strategic market intelligence, macro research, architectural showcases, and professional media appearances. Content is curated strictly for institutional, high-net-worth individual (HNWI), and professional informational purposes.
          </p>
          <p className="text-sm">
            Unless expressly formalized via an executed private advisory agreement, publications on this website do not constitute binding bilateral investment advice, formal real estate brokerage mandates, or regulated financial guarantees.
          </p>
        </section>

        {/* Section 3: Intellectual Property */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 03</span>
            <h2 className="font-display text-2xl text-text-primary">3. Intellectual Property & Trademark Protection</h2>
          </div>
          <p className="text-sm">
            All visual assets, architectural photography, graphic design elements, proprietary text, editorial structures, and software code on this platform are protected under Romanian, European, and international copyright and intellectual property conventions.
          </p>
          <p className="text-sm">
            Reproduction, extraction, modification, scraping, or redistribution of proprietary materials without prior written consent from Cristian Văduva is strictly prohibited.
          </p>
        </section>

        {/* Section 4: External Providers */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 04</span>
            <h2 className="font-display text-2xl text-text-primary">4. External Integrations & Third-Party Content</h2>
          </div>
          <p className="text-sm">
            This platform references publicly available verified macroeconomic data (including Romanian National Bank - BNR, INS, ANCPI, BVB) and provides direct links to verified social channels and external forms (Jotform). Third-party service trademarks remain the intellectual property of their respective owners.
          </p>
        </section>

        {/* Section 5: Institutional Governance Hub */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-6">
          <h3 className="font-display text-xl text-text-primary">Institutional Policy Framework</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <Link href="/privacy" className="p-3 border border-surface-secondary/70 bg-background/50 hover:border-accent hover:text-accent transition-quick flex items-center justify-between">
              <span>PRIVACY POLICY</span>
              <span>→</span>
            </Link>
            <Link href="/gdpr" className="p-3 border border-surface-secondary/70 bg-background/50 hover:border-accent hover:text-accent transition-quick flex items-center justify-between">
              <span>GDPR RIGHTS GUIDE</span>
              <span>→</span>
            </Link>
            <Link href="/cookies" className="p-3 border border-surface-secondary/70 bg-background/50 hover:border-accent hover:text-accent transition-quick flex items-center justify-between">
              <span>COOKIE POLICY</span>
              <span>→</span>
            </Link>
            <Link href="/terms-of-use" className="p-3 border border-surface-secondary/70 bg-background/50 hover:border-accent hover:text-accent transition-quick flex items-center justify-between">
              <span>TERMS OF USE</span>
              <span>→</span>
            </Link>
            <Link href="/disclaimer" className="p-3 border border-surface-secondary/70 bg-background/50 hover:border-accent hover:text-accent transition-quick flex items-center justify-between">
              <span>DISCLAIMER</span>
              <span>→</span>
            </Link>
            <Link href="/data-provenance" className="p-3 border border-surface-secondary/70 bg-background/50 hover:border-accent hover:text-accent transition-quick flex items-center justify-between">
              <span>DATA PROVENANCE</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
