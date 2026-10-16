import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Scale, TrendingUp, ShieldCheck, Compass, CheckCircle2, MapPin, Award, Lock } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { SectionHeader, EditorialText, CTASection } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Despre & Mandat Fiduciar — Cristian Văduva",
  description:
    "Consilier strategic executiv, investitor și negociator fiduciar pe axa Monaco · Dubai · București. Sinteza academică între economie, drept și ecologie.",
};

const educationData = [
  {
    tier: "ACADEMIC TRINITY",
    title: "Trei Licențe Universitare Complete",
    field: "Științe Economice · Drept · Ecologie & Protecția Mediului",
    location: "România & Uniunea Europeană",
    description:
      "Fundamentare academică multidisciplinară ce îmbină modelarea economică cantitativă, jurisprudența contractuală riguroasă și analiza sistemică a riscurilor de mediu și dezvoltare durabilă.",
    icon: Scale,
  },
  {
    tier: "POST-GRADUATE MASTERY",
    title: "Master of Science (M.Sc.)",
    field: "Management Financiar & Auditul Riscului de Mediu",
    location: "Madrid & Amiens",
    description:
      "Studii postuniversitare aprofundate axate pe strategii financiare corporative, evaluarea activelor transfrontaliere și cuantificarea impactului climatic asupra valorii imobiliare pe termen lung.",
    icon: TrendingUp,
  },
  {
    tier: "EXECUTIVE SPECIALIZATION",
    title: "Executive Master's",
    field: "Securitate Privată & Supravegherea Patrimoniului",
    location: "Malta & Uniunea Europeană",
    description:
      "Specializare de nivel înalt în guvernanța securității datelor, supravegherea confidențială a activelor fizice și arhitectura de conformitate instituțională pentru familii cu averi mari (UHNW).",
    icon: ShieldCheck,
  },
];

const trajectorySteps = [
  {
    stage: "01",
    title: "PIEȚE DE CAPITAL & ANALIZĂ CANTITATIVĂ",
    desc: "Analiză cantitativă, infrastructură de tranzacționare, lichiditate macroeconomică și managementul structural al riscurilor în context financiar european.",
  },
  {
    stage: "02",
    title: "NEGOCIERE DE PRINCIPAL & JURISPRUDENȚĂ",
    desc: "Negociere strategică la nivel înalt, suveranitate contractuală transfrontalieră și execuția tranzacțiilor corporative complexe fără compromisuri fiduicare.",
  },
  {
    stage: "03",
    title: "ORIGINARE IMOBILIARĂ ULTRA-PRIME",
    desc: "Reprezentare exclusivă pentru achiziții confidențiale, evaluare arhitecturală riguroasă și originare off-market de proprietăți trofeu în Monaco, Coasta de Azur și București.",
  },
  {
    stage: "04",
    title: "SUPRAVEGHERE PATRIMONIALĂ & APĂRARE",
    desc: "Limitarea riscurilor de depreciere (downside containment), apărarea patrimoniului fizic și digital și arhitectură de conservare a averilor transgeneraționale.",
  },
  {
    stage: "05",
    title: "PRACTICĂ EXECUTIVĂ INDEPENDENTĂ",
    desc: "Consultanță confidențială dedicată unui număr restrâns de birouri de familie și principali UHNW pe axele București, Monaco, Zurich și Dubai.",
  },
];

const fiduciaryPillars = [
  {
    title: "Exclusivitate Unilaterală (Fără Agenție Dublă)",
    desc: "Reprezentăm o singură parte într-o tranzacție — fie cumpărătorul, fie vânzătorul. Eliminăm din start conflictul clasic de interese al agențiilor tradiționale care percep comisioane din ambele direcții.",
  },
  {
    title: "Protecție Sub Secret Profesional & Swiss NDA",
    desc: "Fiecare detaliu al tranzacției, structura patrimonială a clientului și identitatea beneficiarului final sunt protejate prin acorduri de confidențialitate stricte.",
  },
  {
    title: "Auditul Tehnic & Juridic Prealabil Fiecărui Euro",
    desc: "Nicio tranzacție nu este avizată înainte de verificarea completă a titlurilor de proprietate, sarcinilor cadastrale, istoricului autorizării și calității constructive efective.",
  },
  {
    title: "Viziune Generațională de Conservare a Valorii",
    desc: "Nu vânzăm iluzii de randament speculativ pe termen scurt. Fiecare activ selectat trebuie să reziste ciclurilor economice adverse și să asigure conservarea capitalului pe zeci de ani.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL MONOGRAPH HERO                           */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-24 sm:pb-32 lg:pb-36">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            {/* Top Eyebrow */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // PROFIL & MANDAT FIDUCIAR</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CRISTIAN VĂDUVA</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>BUCUREȘTI · MONACO · DUBAI</span>
              </div>
            </div>

            {/* Monograph Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] block font-semibold">
                    CONSILIER STRATEGIC EXECUTIV & INVESTITOR INDEPENDENT
                  </span>
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                    Consultanță Independentă.<br />
                    <span className="text-[#A97F60] italic font-normal">Capital Strategic.</span><br />
                    Apărare Generațională.
                  </h1>
                </div>

                <EditorialText size="lg" maxWidth="prose" color="secondary" className="leading-relaxed">
                  Cristian Văduva coordonează alocarea de capital, achizițiile imobiliare ultra-prime și mandatele executive confidențiale pe axa Monaco · București · Dubai · Zurich. Activând strict ca un consilier fiduciar independent, practica sa reunește modelarea financiară riguroasă, dreptul contractual și arhitectura de securitate a patrimoniului.
                </EditorialText>

                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[#B8C2CF]">
                  <div>
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px] font-semibold">AXE OPERAȚIONALE</span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm">București · Monaco · Dubai</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px] font-semibold">FOCUS DE PRACTICĂ</span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm">Active Trofeu & Apărare Patrimonială</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px] font-semibold">STANDARD FIDUCIAR</span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm">Exclusivitate Unilaterală (Fără Conflict)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl flex items-center gap-2"
                  >
                    <span>DESCHIDE PROTOCOL PRIVAT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 border border-white/[0.16] hover:border-[#93C8FF] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    WHATSAPP DIRECT
                  </a>
                </div>
              </div>

              {/* Official Monograph Portrait */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] w-full border border-white/[0.14] bg-[#0C1119] p-3 overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/personal/portraits/cristian-headshot.jpg"
                      alt="Cristian Văduva Official Monograph Portrait"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8A95A5] px-1">
                  <span>PORTRET OFICIAL MONOGRAFIE</span>
                  <span className="text-[#93C8FF]">DOSAR VERIFICAT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // MULTIDISCIPLINARY ACADEMIC SYNTHESIS                */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 bg-[#0C1119] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="02 // FUNDAMENT ACADEMIC MULTIDISCIPLINAR"
              badge="DEGREESE & SPECIALIZĂRI"
              title="Sinteza Academică între Economie, Drept și Mediu"
              description="O abordare fiduciară completă cere înțelegerea simultană a cifrelor din bilanț, a clauzelor contractuale subtile și a rezilienței fizice și ecologice a activelor construite."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.field}
                    className="p-8 sm:p-10 border border-white/[0.1] bg-[#1B2028]/70 backdrop-blur-md space-y-6 hover:border-[#93C8FF]/60 transition-all duration-300 flex flex-col justify-between relative group"
                  >
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF]" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                          {item.tier}
                        </span>
                        <IconComponent className="w-4 h-4 text-[#93C8FF]" />
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-mono text-xs text-[#8A95A5] block">
                          {item.location}
                        </span>
                        <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                          {item.title}
                        </h3>
                        <div className="text-xs text-[#A97F60] font-mono font-medium">
                          {item.field}
                        </div>
                      </div>

                      <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                        {item.description}
                      </EditorialText>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // FIDUCIARY PHILOSOPHY & PILLARS                      */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20">
          <SectionHeader
            eyebrow="03 // FILOSOFIE & ETICĂ PROFESIONALĂ"
            badge="STANDARDE TRANZACȚIONALE"
            title="Doctrina Fiduciară Cristian Văduva"
            description="Într-o industrie dominată adesea de intermedieri superficiale și comisioane ascunse, am fundamentat practica pe patru principii rigide de conduită profesională."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fiduciaryPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 border border-white/[0.08] bg-[#0C1119] space-y-4 hover:border-[#93C8FF]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl text-[#647082]">0{idx + 1}</span>
                  <div className="w-8 h-[1px] bg-[#93C8FF]/30" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF]">PRINCIPIU CARDINAL</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                  {pillar.title}
                </h3>

                <EditorialText size="sm" maxWidth="prose" color="secondary" className="leading-relaxed">
                  {pillar.desc}
                </EditorialText>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // CAREER EVOLUTION TRAJECTORY                        */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="04 // EVOLUȚIE & CRONOLOGIE DE PRACTICĂ"
              badge="TRAIECTORIE"
              title="Etapele Consolidării Experienței Executive"
              description="De la analize de lichiditate și piețe de capital până la negocierea confidențială a activelor trofeu și supravegherea averilor de familie."
            />

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {trajectorySteps.map((step) => (
                <div
                  key={step.stage}
                  className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-[#1B2028]/40 transition-colors px-4 sm:px-6"
                >
                  <div className="md:col-span-4 flex items-baseline gap-4">
                    <span className="font-mono text-base text-[#93C8FF] font-semibold">{step.stage}</span>
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#F5F4EF] font-semibold">
                      {step.title}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                      {step.desc}
                    </EditorialText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // PRIVATE MANDATE INTAKE                             */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="PROTOCOL PRIVAT DE CONSULTANȚĂ"
          title="Inițiază o Discuție Strategică Confidențială."
          description="Evaluez personal fiecare mandat de achiziție, structurare sau apărare a patrimoniului. Discuțiile inițiale se desfășoară sub secret profesional și acord de confidențialitate prealabil."
          primaryActionText="DESCHIDE PROTOCOL PRIVAT"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Mandatele de reprezentare sunt limitate ca număr pentru a garanta atenția deplină și lipsa oricărui conflict de interese."
        />
      </main>

      <Footer />
    </div>
  );
}
