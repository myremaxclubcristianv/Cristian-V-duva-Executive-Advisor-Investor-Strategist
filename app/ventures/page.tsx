import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Compass, CheckCircle2, Lock, Scale, Building2 } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { SectionHeader, EditorialText, ServiceSection, CTASection, InsightPanel } from "@/components/editorial";
import { ServiceItem } from "@/components/editorial/ServiceSection";

export const metadata: Metadata = {
  title: "Venture-uri, Co-Investiții & Mandate Strategice — Cristian Văduva",
  description:
    "Plasamente de capital asimetric, sindicări private în active imobiliare de elită și vehicule de operare tehnologică dirijate de Cristian Văduva.",
};

const ventureServices: ServiceItem[] = [
  {
    number: "01",
    category: "DIRECT EQUITY & SYNDICATION",
    title: "Sindicare de Capital & Co-Investiții în Rezidențial de Elită",
    description:
      "Structurarea vehiculelor de tip SPV (Special Purpose Vehicle) pentru achiziții și dezvoltări imobiliare rezidențiale de mare anvergură în București Nord, Monaco și piețe europene selecte.",
    deliverables: [
      "Auditul tehnic, juridic și financiar complet al activului-țintă (Full Due Diligence)",
      "Modelare financiară avansată: scenarii de randament, IRR ponderat cu riscul și exituri multiple",
      "Gestiunea relației cu băncile creditoare și finanțatorii instituționali",
      "Păstrarea controlului decizional fiduciar și alinierea intereselor prin co-investiție directă",
    ],
    linkHref: "/contact",
    linkText: "SOLICITĂ DOSAR CO-INVESTIȚIE",
    external: false,
  },
  {
    number: "02",
    category: "PROPTECH & OPERATING INFRASTRUCTURE",
    title: "Dezvoltare & Scalare de Platforme Tehnologice Imobiliare",
    description:
      "Dezvoltarea continuă a infrastructurii digitale proprii (HomeFind, AiX OS™, AiXLuxury) ce furnizează flux continuu de date, lichiditate și cerere calificată.",
    deliverables: [
      "Integrarea inteligenței artificiale predictive pentru calificarea oportunităților înainte de piață",
      "Reverse Marketplace: potrivirea directă cu bugete confirmate de achiziție",
      "Acces exclusiv la tehnologie pentru partenerii și investitorii afiliați",
      "Optimizarea marjelor de operare și minimizarea timpilor de retenție a activelor",
    ],
    linkHref: "/ecosystem",
    linkText: "EXPLOREAZĂ INFRASTRUCTURA",
    external: false,
  },
  {
    number: "03",
    category: "ASSET ALLOCATION & OFF-MARKET TROPHY",
    title: "Origination & Mandate Exclusiv de Reprezentare a Cumpărătorului",
    description:
      "Identificarea și securizarea activelor trofeu (penthouse-uri panoramice, conace istorice, reședințe waterfront) fără expunere publică, sub strict contract fiduciar de exclusivitate.",
    deliverables: [
      "Reprezentare unilaterală fără conflict de interese (exclusiv cumpărător)",
      "Negociere directă la nivel de principal cu proprietarii de drept",
      "Structurare fiscală și protecție a patrimoniului prin parteneriate instituționale",
      "Anonimizarea completă a identității achizitorului pe tot parcursul tranzacției",
    ],
    linkHref: "/real-estate/properties",
    linkText: "VEZI ACTIVE DE REFERINȚĂ",
    external: false,
  },
];

export default function VenturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL VENTURES HERO                        */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-24 sm:pb-32 lg:pb-36">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            {/* Metadata Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // VENTURE CAPITAL & DEZVOLTARE STRATEGICĂ</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">PARTICIPAȚII ACTIVE</span>
              </div>
              <div className="hidden sm:block text-[#8A95A5]">
                DISCIPLINĂ DE CAPITAL PRIVAT
              </div>
            </div>

            {/* Dominant Title */}
            <div className="max-w-4xl space-y-8">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                Capital Asimetric &<br />
                <span className="text-[#A97F60] italic font-normal">Venture-uri Directe.</span>
              </h1>

              <EditorialText size="xl" maxWidth="prose" color="secondary" className="leading-relaxed">
                Desfășurăm capital propriu și co-investim alături de birouri de familie în active imobiliare rezidențiale premium și platforme operaționale unde experiența strategică a lui Cristian Văduva oferă un multiplicator asimetric de valoare.
              </EditorialText>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl flex items-center gap-2"
                >
                  <span>PROPUNE CO-INVESTIȚIE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="px-7 py-4 border border-white/[0.16] hover:border-[#93C8FF] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  TEZA FIDUCIARĂ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // INVESTMENT PILLARS & FIDUCIARY STRUCTURE           */}
        {/* ======================================================== */}
        <ServiceSection
          eyebrow="02 // LINII STRATEGICE DE OPERARE"
          badge="MANDATE ACTIVE"
          title="Modele de Co-Investiție & Sindicare de Capital"
          description="Structurăm fiecare parteneriat pe baze fiduciară ireproșabile: coinvestiție de capital, transparență decizională completă și protecția riguroasă a patrimoniului partenerilor."
          services={ventureServices}
        />

        {/* ======================================================== */}
        {/* 03 // MACRO & VENTURE INTELLIGENCE PANELS                */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="03 // INTELLIGENCE & INDICATORI DE RANDAMENT"
              badge="OBSERVATOR DE PIAȚĂ"
              title="Metrici Fundamentale & Teza de Alocare"
              description="Date extrase direct din rapoartele ANCPI, BNR și analizele AiX OS™ pentru a calibra randamentul real raportat la inflație și costul finanțării."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InsightPanel
                category="RANDAMENT REZIDENȚIAL NORD"
                title="București Nord: Randament Brut vs. Net"
                metric="6.8% – 8.2%"
                change="+0.6% YOY"
                trend="up"
                date="Trimestrul Curent 2026"
                source="AiX OS™ Proprietary Index & ANCPI"
                description="Randamentele de închiriere pe segmentul premium din Pipera și Herăstrău rămân printre cele mai atractive din marile capitale europene, susținute de cererea corporate stabilă."
                actionUrl="/real-estate/market"
              />

              <InsightPanel
                category="MONACO WATERFRONT"
                title="Monaco & Coasta de Azur: Conservare Trofeu"
                metric="52.000 €/mp"
                change="+3.4% Index"
                trend="up"
                date="Trimestrul Curent 2026"
                source="AiXLuxury Monégasque Bureau & IMSEE"
                description="Lichiditatea rămâne extrem de selectivă, cu un raport asimetric de cerere vs. ofertă fizică pe axa Carré d'Or și Cap d'Ail. Valoare de conservare pe termen generațional."
                actionUrl="https://www.aixluxury.com"
              />

              <InsightPanel
                category="PROTECȚIE PATRIMONIU"
                title="Optimizare Fiscală & Audit de Risc"
                metric="400 € / an"
                change="Deductibil 100%"
                trend="neutral"
                date="Norme Fiscale Active"
                source="Generali România & Codul Fiscal"
                description="Structurarea integrată a polițelor de sănătate corporate și răspundere managerială D&O protejează fluxurile de numerar împotriva volatilității legislative și incidentelor operaționale."
                actionUrl="https://insurance.cristianvaduva.com"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // ASYMMETRICAL EQUITY ALLOCATION THESIS              */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-12">
          <div className="p-10 sm:p-16 border border-white/[0.12] bg-[#0C1119] grid lg:grid-cols-12 gap-10 items-center shadow-2xl relative">
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#93C8FF]" />

            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>CRITERII DE SELECTABILITATE A PROIECTELOR</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] leading-tight">
                Plasamente de Mare Convingere în Infrastructură și Proprietăți Reale.
              </h2>

              <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                Nu alocăm capital în piețe speculative volatile. Fiecare euro este ancorat în terenuri de referință, structuri rezidențiale cu finisaje durabile sau tehnologii proprii de distribuție și analiză.
              </EditorialText>

              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs pt-4 border-t border-white/[0.08]">
                <div className="p-4 bg-[#1B2028]/80 border border-white/[0.06] space-y-1">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">SINDICARE CO-INVESTIȚIE</span>
                  <span className="text-[#F5F4EF] font-sans">Deschisă exclusiv partenerilor verificați și birourilor de familie</span>
                </div>
                <div className="p-4 bg-[#1B2028]/80 border border-white/[0.06] space-y-1">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">ORIZONT TEMPORAL</span>
                  <span className="text-[#F5F4EF] font-sans">Creștere compusă a capitalului · Orizont 5–10 ani</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:pl-8 lg:border-l lg:border-white/[0.08]">
              <Link
                href="/contact"
                className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold text-center transition-all shadow-xl"
              >
                DISCUTĂ O SINDICARE
              </Link>
              <div className="font-mono text-[10px] text-[#8A95A5] uppercase text-center tracking-wider">
                ACORD DE CONFIDENȚIALITATE MANDATORIU
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // PRIVATE CTA                                        */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="PROTOCOL PRIVAT DE CO-INVESTIȚIE"
          title="Ești Interesat de o Participație sau Ai o Oportunitate de Co-Dezvoltare?"
          description="Evaluez personal fiecare propunere de asociere sau achiziție strategică de teren și proiect rezidențial pe axele București, Monaco și Dubai."
          primaryActionText="DESCHIDE PROTOCOLUL DE ASOCIERE"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Toate asocierile și sindicările se realizează în deplină conformitate cu reglementările pieței de capital europene."
        />
      </main>

      <Footer />
    </div>
  );
}
