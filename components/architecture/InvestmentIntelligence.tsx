import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/editorial/SectionHeader";
import InsightPanel from "@/components/editorial/InsightPanel";

export default function InvestmentIntelligence() {
  return (
    <section className="relative w-full bg-[#0C1119] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <SectionHeader
            eyebrow="04 // INVESTMENT INTELLIGENCE & MACRO MONITORING"
            badge="EMPIRICAL METRICS"
            title="Quantitative Analysis & Market Surveillance"
            description="Empirical market intelligence calibrated through continuous monitoring of national cadastre transaction records, central bank liquidity signals, and proprietary valuation indices."
          />

          <Link
            href="/insights"
            className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>RESEARCH REPOSITORY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Structured Intelligence Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InsightPanel
            category="DINAMICĂ TRANZACȚIONALĂ · BUCUREȘTI"
            title="Volumul tranzacțiilor imobiliare rezidențiale"
            metric="Monitorizare ANCPI"
            change="Tranzacții Cadastrale"
            trend="neutral"
            date="Rapoarte Lunare Oficiale"
            source="Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI)"
            description="Urmărirea volumului de tranzacții înregistrate oficial în București și Ilfov pentru a măsura lichiditatea reală a pieței, separând prețurile cerute de tranzacțiile efectiv autentificate."
            actionUrl="/raport-piata"
          />

          <InsightPanel
            category="SEGMENTUL INTERNAȚIONAL"
            title="Piața rezidențială din Monaco & Coasta de Azur"
            metric="Statistici IMSEE"
            change="Date Publice"
            trend="neutral"
            date="Raport Anual IMSEE"
            source="Institut Monégasque de la Statistique (IMSEE)"
            description="Observații privind evoluția pieței din Monaco bazate pe date oficiale IMSEE. Aspectele fiscale depend de rezidența și structura fiecărui cumpărător și necesită verificare cu un consultant fiscal autorizat."
            actionUrl="/raport-piata"
          />

          <InsightPanel
            category="PROTECȚIA ACTIVELOR IMOBILIARE"
            title="Managementul riscului patrimonial"
            metric="Acoperiri Dedicate"
            change="Partener Generali"
            trend="neutral"
            date="Protecție Bunuri & Clădiri"
            source="Partener autorizat Generali România"
            description="Soluții de transfer al riscului și asigurare a proprietăților premium la cost de reconstrucție. Evaluarea deductibilității fiscale se realizează punctual cu un consultant fiscal calificat."
            actionUrl="/parteneri"
          />
        </div>

        {/* Supporting Analytical Thesis Banner */}
        <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#1B2028]/60 flex flex-col md:flex-row items-baseline justify-between gap-6 font-mono text-xs text-[#B8C2CF]">
          <div className="space-y-1">
            <span className="text-[#93C8FF] uppercase tracking-widest text-[10px] font-semibold block">
              RESEARCH METHODOLOGY STANDARDS
            </span>
            <p className="font-sans font-light text-sm text-[#F5F4EF]">
              Every metric cited in our advisory practice is verifiable through national registry archives, regulatory directives, or audited transactional settlement sheets.
            </p>
          </div>
          <span className="text-[#8A95A5] uppercase shrink-0 text-[10px] tracking-widest">
            STRICT ZERO-SPECULATION POLICY
          </span>
        </div>
      </div>
    </section>
  );
}
