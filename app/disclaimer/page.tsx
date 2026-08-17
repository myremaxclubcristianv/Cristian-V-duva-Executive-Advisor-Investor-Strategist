import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer & Financial Notice — Cristian Văduva",
  description: "Important legal and financial disclaimer regarding editorial market perspectives, real estate valuations, and investment information.",
  alternates: {
    canonical: "https://cristianvaduva.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      kicker="REGULATORY NOTICE"
      title="Financial & Real Estate Disclaimer"
      subtitle="Important disclosures regarding editorial perspectives, market surveillance, property estimations, and investment analysis."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Critical Disclaimer Callout */}
        <section className="bg-surface-primary border border-accent/40 p-8 space-y-4 shadow-2xl">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
            <span>IMPORTANT NOTICE</span>
            <span className="w-4 h-[1px] bg-accent/40" />
            <span>NO INDIVIDUALIZED ADVICE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-text-primary leading-snug">
            Editorial Perspectives & Strategic Intelligence
          </h2>
          <p className="text-sm">
            All materials, market statistics, yield metrics, property analyses, video commentaries, and macroeconomic dispatches published on <span className="font-mono text-text-primary">cristianvaduva.com</span> are prepared strictly for general educational and editorial informational purposes.
          </p>
          <p className="text-sm">
            Nothing on this platform constitutes, or should be construed as, individualized financial, investment, legal, tax, or professional real estate valuation advice.
          </p>
        </section>

        {/* Section 1: Real Estate Information */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 01</span>
            <h2 className="font-display text-2xl text-text-primary">1. Real Estate & Property Representations</h2>
          </div>
          <p className="text-sm">
            Property descriptions, square meterage, architectural renderings, advisory perspectives, and valuation estimates represent subjective professional curation or market observations at the date of publication.
          </p>
          <p className="text-sm">
            Prospective purchasers, investors, and counterparties are required to conduct independent technical, cadastral, structural, legal, and financial due diligence through qualified licensed surveyors and attorneys prior to executing transactions.
          </p>
        </section>

        {/* Section 2: Macroeconomic & Financial Metrics */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 02</span>
            <h2 className="font-display text-2xl text-text-primary">2. Market Data & Third-Party Benchmark Sources</h2>
          </div>
          <p className="text-sm">
            Market pulse figures, interest-rate benchmarks (e.g. ROBOR, EURIBOR), inflation data, and transaction volume statistics are derived from reputable official sources (such as the Romanian National Bank — BNR, ANCPI, INS, and financial publications).
          </p>
          <p className="text-sm">
            While we strive for accuracy, market conditions fluctuate rapidly. We make no representations or warranties, express or implied, regarding the timeliness, completeness, or ongoing accuracy of historical or estimated market metrics.
          </p>
        </section>

        {/* Section 3: Risk Warning */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 03</span>
            <h2 className="font-display text-2xl text-text-primary">3. Risk Disclosures & Capital Preservation</h2>
          </div>
          <p className="text-sm">
            Real estate acquisitions, capital deployments, and private equity vehicles carry inherent financial risks, including illiquidity, market cyclicality, interest-rate exposure, and potential loss of invested capital. Past performance or historical returns discussed in editorial articles do not guarantee future performance.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
