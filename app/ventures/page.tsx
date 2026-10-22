import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Compass, CheckCircle2, Lock, Building2 } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { SectionHeader, EditorialText, ServiceSection, CTASection, InsightPanel } from "@/components/editorial";
import { ServiceItem } from "@/components/editorial/ServiceSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Consultanță Strategică & Proiecte — Cristian Văduva Executive",
  description:
    "Consultanță strategică pentru decizii imobiliare complexe, orientare în selecția activelor și coordonarea colaborărilor profesionale alături de Cristian Văduva.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/ventures",
  },
};

const ventureServices: ServiceItem[] = [
  {
    number: "01",
    category: "CONSULTANȚĂ IMOBILIARĂ",
    title: "Consultanță Strategică pentru Achiziții Rezidențiale",
    description:
      "Asistență în analiza oportunităților imobiliare pe piața din București și pe coridoare internaționale, în coordonare cu evaluatori și notari autorizați.",
    deliverables: [
      "Verificarea structurată a documentelor disponibile (cărți funciare, certificate de urbanism)",
      "Analiză comparativă de preț pe criterii like-for-like în aceeași micro-zonă",
      "Asistență la negocierea termenilor comerciali ai tranzacției",
      "Coordonarea etapelor tranzacției împreună cu profesioniștii independenți ai părților",
    ],
    linkHref: "/cum-lucrez",
    linkText: "CUM LUCREZ ȘI ETAPELE COLABORĂRII",
    external: false,
  },
  {
    number: "02",
    category: "ECOSISTEM & TEHNOLOGIE",
    title: "Platforme Digitale & Inteligență Imobiliară",
    description:
      "Inițiative tehnologice și media dezvoltate în cadrul ecosistemului Cristian Văduva (inclusiv HomeFind) pentru explorarea pieței și prezentarea activelor.",
    deliverables: [
      "Catalog centralizat de proprietăți și oportunități rezidențiale documentate",
      "Producție editorială și monografii detaliate pentru proprietăți reprezentative",
      "Instrumente de explorare și filtrare a oportunităților de piață",
      "Integrare cu rețele imobiliare internaționale partenere (Chestertons)",
    ],
    linkHref: "/parteneri",
    linkText: "VEZI PARTENERIATELE RELEVANTE",
    external: false,
  },
  {
    number: "03",
    category: "MANDATE DEDICATE",
    title: "Reprezentare Unilaterală & Confidențialitate Contractuală",
    description:
      "Mandate dedicate de asistență pentru cumpărători sau vânzători, desfășurate sub acorduri bilaterale de confidențialitate (NDA) și cu respectarea conformității KYC/AML.",
    deliverables: [
      "Reprezentarea exclusivă a intereselor clientului conform mandatului semnat",
      "Păstrarea confidențialității contractuale asupra termenilor negocierii",
      "Proceduri conforme de identificare a părților (KYC) și prevenire a spălării banilor (AML)",
      "Colaborare strânsă cu avocații și consilierii fiscali desemnați de client",
    ],
    linkHref: "/contact",
    linkText: "SOLICITĂ O CONVERSAȚIE INIȚIALĂ",
    external: false,
  },
];

export default function VenturesPage() {
  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="pt-24 sm:pt-32">
        {/* ======================================================== */}
        {/* 01 // HERO & STRATEGIC OVERVIEW                          */}
        {/* ======================================================== */}
        <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-8 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] font-semibold block">
              CONSULTANȚĂ & PROIECTE STRATEGICE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-tight break-words">
              Orientare Strategică în Tranzacții Imobiliare Complexe
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed">
              Consultanță imobiliară independentă, fundamentare analitică și coordonarea proceselor de achiziție alături de specialiști autorizați și parteneri instituționali.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#8A95A5] border-t border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-[#93C8FF] block uppercase text-[10px] font-semibold">CADRU CONTRACTUAL</span>
              <span className="text-[#F5F4EF] font-sans">Mandate clare · Transparență totală a remunerației</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#A97F60] block uppercase text-[10px] font-semibold">CONFIDENȚIALITATE</span>
              <span className="text-[#F5F4EF] font-sans">Acorduri bilaterale NDA · Conformitate KYC</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#93C8FF] block uppercase text-[10px] font-semibold">PARTENERIATE</span>
              <span className="text-[#F5F4EF] font-sans">Chestertons (Global) · Generali România (Agent)</span>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // STRATEGIC OPERATING LINES                          */}
        {/* ======================================================== */}
        <ServiceSection
          eyebrow="02 // LINII DE SERVICII"
          badge="MANDATE DEDICATE"
          title="Consultanță Imobiliară & Coordonare de Proiect"
          description="Fiecare colaborare este structurată pe baze contractuale clare: definirea exactă a obiectivelor, verificarea documentației și coordonarea cu profesioniști independenți."
          services={ventureServices}
        />

        {/* ======================================================== */}
        {/* 03 // MACRO & VENTURE INTELLIGENCE PANELS                */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="03 // ANALIZĂ DE PIAȚĂ & INDICATORI"
              badge="MONITORIZARE FAPTICĂ"
              title="Indicatori de Piață Fundamentați Factual"
              description="Date orientative bazate pe monitorizarea registrelor cadastrale oficiale (ANCPI) și a rapoartelor publice de piață."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InsightPanel
                category="DINAMICĂ TRANZACȚIONALĂ · BUCUREȘTI"
                title="Volumul tranzacțiilor imobiliare rezidențiale"
                metric="Monitorizare ANCPI"
                change="Date Cadastrale"
                trend="neutral"
                date="Rapoarte Oficiale Lunare"
                source="Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI)"
                description="Monitorizarea lunară a volumelor de tranzacționare autentificate notarial pentru a distinge între cererea reală și prețurile de listare promovate pe portaluri."
                actionUrl="/raport-piata"
              />

              <InsightPanel
                category="SEGMENTUL INTERNAȚIONAL"
                title="Piața rezidențială din Monaco & Coasta de Azur"
                metric="Statistici IMSEE"
                change="Date Publice"
                trend="neutral"
                date="Rapoarte Anuale IMSEE"
                source="Institut Monégasque de la Statistique (IMSEE)"
                description="Observații privind evoluția pieței din Monaco fundamentate pe datele statistice oficiale publicate de autoritățile monégasce. Tratamentul fiscal individual necesită consultanță fiscală autorizată."
                actionUrl="https://www.imsee.mc/Economie-et-Finances/Immobilier"
              />

              <InsightPanel
                category="PROTECȚIA ACTIVELOR IMOBILIARE"
                title="Managementul riscului patrimonial"
                metric="Polițe Dedicate"
                change="Partener Generali"
                trend="neutral"
                date="Protecție Patrimoniu"
                source="Partener autorizat Generali România"
                description="Soluții de transfer al riscului și asigurare a clădirilor de mare valoare la costul real de reconstrucție, în baza contractului de agent Generali România."
                actionUrl="/parteneri"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // STANDARDE DE SELECTIE                              */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-12">
          <div className="p-10 sm:p-16 rounded-3xl border border-white/[0.08] bg-[#0C1119] grid lg:grid-cols-12 gap-10 items-center shadow-2xl relative">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>CRITERII DE SELECȚIE ȘI PROCES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] leading-tight">
                Decizii Imobiliare Fundamentate pe Documente și Analiză
              </h2>

              <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                Nu promovăm speculații nerealiste sau promisiuni de randament fără bază verificabilă. Fiecare proprietate sau proiect analizat este evaluat din perspectiva calității construcției, a situației juridice și a fezabilității pe termen lung.
              </EditorialText>

              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs pt-4 border-t border-white/[0.08]">
                <div className="p-5 rounded-2xl bg-[#1B2028]/80 border border-white/[0.06] space-y-1.5">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">CUM LUCREZ</span>
                  <span className="text-[#F5F4EF] font-sans">Etape structurate, mandat scris și remunerație transparentă</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#1B2028]/80 border border-white/[0.06] space-y-1.5">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">CONFIDENȚIALITATE</span>
                  <span className="text-[#F5F4EF] font-sans">Protecție prin NDA bilateral la cererea părților</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:pl-8 lg:border-l lg:border-white/[0.08]">
              <Link
                href="/programare"
                className="btn-apple-pill-primary w-full shadow-xl"
              >
                <span>SOLICITĂ O DISCUȚIE (20 MIN)</span>
              </Link>
              <div className="font-mono text-[10px] text-[#8A95A5] uppercase text-center tracking-wider">
                OPȚIUNE DE SCHIMB NDA ÎN PREALABIL
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // PRIVATE CTA                                        */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="DIALOG CONFIDENȚIAL"
          title="Doriți să discutați o proprietate sau un mandat de consultanță?"
          description="Fiecare colaborare debutează cu o discuție inițială pentru clarificarea cerințelor și stabilirea compatibilității cu mandatul Executive."
          primaryActionText="PROGRAMEAZĂ O CONVERSAȚIE INIȚIALĂ"
          primaryActionHref="/programare"
          secondaryActionText="WHATSAPP (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Toate consultările se desfășoară sub principiul confidențialității contractuale și al conformității cu legislația aplicabilă."
        />
      </main>

      <Footer />
    </Section>
  );
}
