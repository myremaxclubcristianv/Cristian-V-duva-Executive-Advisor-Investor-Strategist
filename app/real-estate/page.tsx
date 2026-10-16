import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getPropertyById } from "@/lib/properties";
import {
  SectionHeader,
  EditorialText,
  PropertyFeature,
  ProjectFeature,
  InsightPanel,
  CTASection,
} from "@/components/editorial";
import {
  ArrowUpRight,
  ShieldCheck,
  Scale,
  Compass,
  FileCheck,
  Building,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate & Market Hub — Cristian Văduva | HomeFind & AiXLuxury",
  description: "Consultanță strategică în achiziția și vânzarea activelor imobiliare de mare valoare, reprezentare exclusivă, audit fiduciar și dezvoltări rezidențiale pe axa București · Monaco · Dubai.",
};

export default function RealEstateHubPage() {
  const plevneiPenthouse = getPropertyById("prop-plevnei");
  const piperaVillas = getPropertyById("prop-pipera-villas");
  const monacoVilla = getPropertyById("prop-monaco-coast");

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-44">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL HERO: ACQUISITIONS & REPRESENTATION      */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-arch-grid relative overflow-hidden">
          {/* Architectural Framing Elements */}
          <div className="absolute top-10 left-6 sm:left-12 lg:left-20 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 sm:right-12 lg:right-20 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
            <SectionHeader
              eyebrow="01 // REAL ESTATE & MARKET HUB"
              badge="REPREZENTARE EXCLUSIVĂ"
              title={
                <>
                  Arhitectura Achizițiilor Imobiliare &<br />
                  <span className="text-[#A97F60] italic font-normal">Strategia Reprezentării Fiduicare.</span>
                </>
              }
              description="În tranzacțiile de mare anvergură, accesul este o simplă premisă. Avantajul ireversibil se construiește la intersecția dintre jurisprudența contractelor transfrontaliere, auditul structural independent și negocierea exclusivă fără conflicte de interese."
            />

            {/* Strategic Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-white/[0.08]">
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 border border-[#93C8FF]/30 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                  Zero Agenție Dublă
                </h3>
                <EditorialText size="sm" maxWidth="full" color="secondary">
                  Brokerii clasici sunt stimulați de comisionul închiderii, indiferent de riscul suportat de cumpărător. Noi operăm exclusiv reținuți de un singur principal, auditând fiecare clauză contractuală și prezervând capitalul.
                </EditorialText>
              </div>

              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 border border-[#A97F60]/30 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                  Origination Off-Market
                </h3>
                <EditorialText size="sm" maxWidth="full" color="secondary">
                  Activele trofeu autentice nu ajung pe portalurile publice. Sunt identificate prin rețele private de birouri de familie în București, Monaco și Dubai, sub clauze riguroase de confidențialitate bilaterală.
                </EditorialText>
              </div>

              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 border border-[#93C8FF]/30 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                  Audit Structural & Fiscal
                </h3>
                <EditorialText size="sm" maxWidth="full" color="secondary">
                  Fiecare achiziție este stress-testată: de la calitatea structurii și riscurile de mediu (geodezice / ecologice), până la optimizarea deținerii prin entități corporative și polițe de protecție a patrimoniului.
                </EditorialText>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/real-estate/properties"
                className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl flex items-center gap-2"
              >
                <span>EXPLOREAZĂ PORTOFOLIUL CONFIRMAT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/real-estate/market"
                className="px-7 py-4 border border-white/[0.16] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] transition-colors"
              >
                TERMINAL DATE DE PIAȚĂ
              </Link>

              <a
                href="https://homefind.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 border border-white/[0.1] hover:border-white/[0.3] text-[#B8C2CF] font-mono text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5"
              >
                <span>PORTALUL HOMEFIND ↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // CONFIRMED PROPERTY FEATURE: CALEA PLEVNEI PENTHOUSE */}
        {/* ======================================================== */}
        {plevneiPenthouse && (
          <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
            <div className="max-w-7xl mx-auto space-y-12">
              <SectionHeader
                eyebrow="02 // PROPRIETATE CONFIRMATĂ · REPREZENTARE EXCLUSIVĂ"
                badge="SECTOR 1, BUCUREȘTI"
                title="Penthouse Monumental cu Terasă de 220 mp"
                description="O proprietate rară în inima Bucureștiului, oferind spațiul și intimitatea unei reședințe suspendate la ultimul etaj, cu panoramă urbană completă și finisaje de înaltă clasă."
              />

              <PropertyFeature property={plevneiPenthouse} />
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* 03 // RESIDENTIAL DEVELOPMENT: PIPERA ENCLAVE           */}
        {/* ======================================================== */}
        {piperaVillas && (
          <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119]">
            <div className="max-w-7xl mx-auto space-y-12">
              <SectionHeader
                eyebrow="03 // DEZVOLTARE REZIDENȚIALĂ ÎN PARTENERIAT"
                badge="PIPERA – VOLUNTARI"
                title="Ansamblu Rezidențial de Vile Moderne"
                description="36 de unități individuale proiectate pentru viața de familie, construite cu rigoare inginerească și amplasate strategic lângă polul educațional de prestigiu din nordul Capitalei."
              />

              <ProjectFeature
                title={piperaVillas.title}
                subtitle={piperaVillas.subtitle}
                location={piperaVillas.location}
                phase="PROIECT FINALIZAT · COMUNITATE PRIVATĂ"
                unitsSummary="36 VILE (14 TIP 1 + 22 TIP 2) · P+2"
                description={piperaVillas.description}
                developerNote="Infrastructură completă: străzi asfaltate cu rigole, rețele edilitare subterane, acces securizat și 2 locuri de parcare dedicate incluse în proprietate."
                image={piperaVillas.heroImage}
                specs={piperaVillas.specs}
                highlights={piperaVillas.features}
                sourceUrl={piperaVillas.sourceUrl}
                sourceName={piperaVillas.sourceName}
              />
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* 04 // INTERNATIONAL & TROPHY: MONACO & DUBAI AXIS        */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
          <div className="max-w-7xl mx-auto space-y-12">
            <SectionHeader
              eyebrow="04 // PORTOFOLIU INTERNAȚIONAL AIXLUXURY"
              badge="MONACO · DUBAI · MEDITERANA"
              title="Axa Trofeu: Monaco & Dubai Waterfront"
              description="Asistăm clienții privați în identificarea, tranzacționarea și protecția juridico-fiscală a activelor emblematice din marile centre financiare ale Europei și Orientului Mijlociu."
            />

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Monaco Pavilion Card */}
              <div className="border border-white/[0.1] bg-[#0C1119] p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full border border-white/[0.08] bg-[#1B2028] overflow-hidden">
                    <Image
                      src="/images/architecture/monaco-cliffside.jpg"
                      alt="Monaco Coastal Residence"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#07090D]/90 border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#93C8FF]">
                      MONACO AXIS
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                    CAP D'AIL / MEDITERRANEAN COASTLINE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                    Pavilion Travertin de Coastă
                  </h3>
                  <EditorialText size="sm" maxWidth="full" color="secondary">
                    480 mp living pe 1.400 mp teren faleză, piscină infinity suspendată deasupra mării, structurată prin vehicul corporativ monegasc sub deplină discreție fiduciară.
                  </EditorialText>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#93C8FF]">Valoare: Preț la cerere</span>
                  <Link
                    href="/contact"
                    className="text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-1 font-semibold"
                  >
                    <span>AUDIENȚĂ PRIVATĂ</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Dubai Islands / BRABUS Island Project */}
              <div className="border border-white/[0.1] bg-[#0C1119] p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full border border-white/[0.08] bg-[#1B2028] overflow-hidden">
                    <Image
                      src="/images/architecture/hero-monument.jpg"
                      alt="Dubai Ultra-Prime Development"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#07090D]/90 border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#A97F60]">
                      DUBAI WATERFRONT
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
                    DUBAI ISLANDS / PALM JUMEIRAH AXIS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                    BRABUS Island & Sky Mansions
                  </h3>
                  <EditorialText size="sm" maxWidth="full" color="secondary">
                    Vile branded pe apă și sky mansions în curs de dezvoltare (date oficiale publicate de dezvoltator), cu dane private yachting și eligibilitate UAE Golden Visa pe 10 ani.
                  </EditorialText>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#A97F60]">Off-Plan Developer Allocation</span>
                  <Link
                    href="/contact"
                    className="text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-1 font-semibold"
                  >
                    <span>DOSAR DEZVOLTATOR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // MARKET SURVEILLANCE & INTELLIGENCE PANELS          */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119]">
          <div className="max-w-7xl mx-auto space-y-12">
            <SectionHeader
              eyebrow="05 // SURVEILLANCE DESK · INDICATORI VERIFICAȚI"
              badge="HOMEFIND INTELLIGENCE FEED"
              title="Indicatori de Piață & Analiză Macroeconomică"
              description="Date extrase din monitorizările oficiale ANCPI, rapoartele BNR, studiile UNSAR și algoritmii de predicție HomeFind pentru segmentele rezidențiale de lux."
            />

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <InsightPanel
                category="DINAMICĂ PREȚ & YIELD"
                title="Apreciere Anuală Segment Premium Nord"
                metric="+7.2%"
                change="Prognoză 2026"
                trend="up"
                source="HomeFind Intelligence / ANCPI"
                date="T1 2026"
                description="Zonele Herăstrău, Kiseleff și Pipera mențin o primă de lichiditate susținută de oferta inelastică și cererea constantă din partea expaților și a capitalului instituțional."
                actionUrl="/real-estate/market"
              />

              <InsightPanel
                category="PATRIMONIU & ASIGURĂRI"
                title="Decalajul Dintre Polița PAD și Valoarea Reală"
                metric="20.000 €"
                change="Plafon PAD Limitat"
                trend="neutral"
                source="UNSAR / Insurance Desk"
                date="Actualizare 2026"
                description="Polița obligatorie PAD acoperă daune de bază în limita legală; proprietățile de peste 300.000 € necesită audit complet pentru asigurarea facultativă la cost de reconstrucție fără depreciere."
                actionUrl="https://insurance.cristianvaduva.com/stiri/asigurarea-obligatorie-pad-vs-facultativa-protectie-completa-locuinte"
              />

              <InsightPanel
                category="FISCALITATE & OPTIMIZARE"
                title="Impactul Modificărilor Cotei de TVA"
                metric="Paradox Fiscal"
                change="Impact Achiziții Noi"
                trend="neutral"
                source="AiX OS Economic Studies"
                date="2026 Analysis"
                description="Tranziția cotelor de TVA restructurează cererea spre segmentul secundar și favorizează achizițiile de proprietăți finalizate decomandate cu suprafețe terasate mari."
                actionUrl="/insights"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 06 // FINAL FIDUCIARY INTAKE CTA                         */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="MANDAT FIDUCIAR PERSONALIZAT"
          title="Planifici o achiziție sau dorești reprezentarea unui activ important?"
          description="Structurăm fiecare tranzacție cu discreție totală, protecție contractuală strictă și audit aprofundat de evaluare. Fără marketing agresiv și fără compromisuri de agenție dublă."
          primaryActionText="STABILEȘTE O AUDIENȚĂ PRIVATĂ"
          primaryActionHref="/contact"
          secondaryActionText="DISCUȚIE WHATSAPP DIRECT (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
        />
      </main>

      <Footer />
    </div>
  );
}
