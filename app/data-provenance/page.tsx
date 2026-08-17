import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { DATA_PROVENANCE_REGISTRY } from "@/lib/data-provenance";

export const metadata: Metadata = {
  title: "Data Provenance & Methodology — Cristian Văduva",
  description: "Methodology, official data sources, cadastre verification, and market intelligence provenance across Cristian Văduva platforms.",
  alternates: {
    canonical: "https://cristianvaduva.com/data-provenance",
  },
};

export default function DataProvenancePage() {
  return (
    <LegalPageLayout
      kicker="INTELLIGENCE METHODOLOGY"
      title="Data Provenance"
      subtitle="Complete transparency regarding data sourcing, public institutional registries, and analytical methodology."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Methodology Framework */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">STANDARDS</span>
            <h2 className="font-display text-2xl text-text-primary">Source Attribution & Integrity Protocol</h2>
          </div>
          <p className="text-sm">
            All analytical figures, macroeconomic trends, and property intelligence published on this platform adhere to strict factual attribution standards. We reference verified institutional datasets and maintain clear distinctions between raw public data and subjective strategic commentary.
          </p>
        </section>

        {/* Primary Data Sources Table */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">REGISTRY OF PRIMARY SOURCES</span>
            <h2 className="font-display text-2xl text-text-primary">Institutional Data Sources</h2>
          </div>

          <div className="space-y-4">
            {DATA_PROVENANCE_REGISTRY.map((s) => (
              <div
                key={s.id}
                className="bg-surface-primary border border-surface-secondary/80 p-6 space-y-3 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <span className="text-accent font-semibold">{s.institution}</span>
                  <span className="text-text-secondary/60 uppercase tracking-widest text-[10px]">{s.domain}</span>
                </div>
                <p className="font-sans text-sm text-text-primary/90 font-light">
                  {s.dataset}
                </p>
                <div className="pt-2 border-t border-surface-secondary/50 font-mono text-[10px] text-text-secondary/70 flex items-center justify-between">
                  <span>FREQUENCY: {s.updateFrequency}</span>
                  <span className="text-accent">{s.verificationStatus}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Handling Unavailable Data */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">CORRECTIONS & DELAYS</span>
            <h2 className="font-display text-2xl text-text-primary">Handling of Delayed or Unavailable Data</h2>
          </div>
          <p className="text-sm">
            Where live financial market feeds or specific micro-location transaction details are unavailable or delayed by external registry authorities, the platform explicitly notes the observation date. We do not synthesize artificial transaction data or fabricate estimations.
          </p>
          <p className="text-sm">
            If an error is identified in any published dispatch or analytical piece, our editorial desk issues a factual correction and updates the corresponding record immediately.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
