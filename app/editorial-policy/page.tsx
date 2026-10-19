import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { contactInfo } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Editorial Policy & Standards — Cristian Văduva",
  description: "Editorial integrity principles, fact-checking standards, source attribution, and correction guidelines for Cristian Văduva and AiX Media publications.",
  alternates: {
    canonical: "https://cristianvaduva.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  const principles = [
    {
      title: "1. Primary Source Attribution",
      desc: "Every data point, regulatory quotation, and transaction statistic is attributed directly to verified institutional primary sources (such as BNR, ANCPI, INS, official corporate investor relations, or established financial journals).",
    },
    {
      title: "2. Zero Fabrication Policy",
      desc: "We enforce an absolute zero-tolerance standard against fabricated personalities, fictitious quotes, synthetic transactions, artificial client testimonials, or invented statistical performance.",
    },
    {
      title: "3. Separation of Fact and Commentary",
      desc: "Editorial articles maintain a rigorous boundary between verified empirical market data and strategic executive commentary or market perspectives.",
    },
    {
      title: "4. Rapid Correction Protocol",
      desc: "When factual inaccuracies or regulatory revisions are identified, our editorial desk transparently updates the affected content with a clear revision note.",
    },
    {
      title: "5. Independence & Conflict Transparency",
      desc: "Advisory opinions represent professional analysis. Any commercial partnership, joint venture, or sponsored mandate is clearly and prominently disclosed.",
    },
  ];

  return (
    <LegalPageLayout
      kicker="JOURNALISTIC INTEGRITY"
      title="Editorial Policy & Standards"
      subtitle="The governance principles, verification rigor, and ethics underpinning all publications, broadcasts, and intelligence briefings."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Editorial Charter */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">THE EDITORIAL CHARTER</span>
            <h2 className="font-display text-2xl text-text-primary">Executive Precision & Uncompromising Standards</h2>
          </div>
          <p className="text-sm">
            AiX Media and the executive desk of Cristian Văduva publish intelligence aimed at high-net-worth investors, family offices, and business leaders. Maintaining absolute credibility requires unwavering adherence to factual verification, intellectual honesty, and editorial discipline.
          </p>
        </section>

        {/* Core Principles */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">PRINCIPLES</span>
            <h2 className="font-display text-2xl text-text-primary">Core Editorial Standards</h2>
          </div>

          <div className="space-y-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-surface-primary border border-surface-secondary/80 p-6 space-y-2 shadow-md"
              >
                <h3 className="font-display text-lg text-text-primary">{p.title}</h3>
                <p className="font-sans text-sm text-text-secondary/90 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Submitting Editorial Corrections */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">EDITORIAL CORRECTIONS</span>
            <h2 className="font-display text-2xl text-text-primary">Contact the Editorial Desk</h2>
          </div>
          <p className="text-sm">
            If you notice a factual discrepancy or wish to submit an editorial inquiry regarding any published brief, contact the editorial desk directly at:
          </p>
          <div className="p-4 border border-surface-secondary/70 bg-background/50 font-mono text-xs text-text-primary">
            <a href={`mailto:${contactInfo.email}?subject=Editorial%20Correction%20Inquiry`} className="text-accent underline">
              {contactInfo.email}
            </a>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
