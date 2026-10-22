import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Scale,
  TrendingUp,
  ShieldCheck,
  Compass,
  CheckCircle2,
  MapPin,
  Award,
  Lock,
  GraduationCap,
  FileText,
  BarChart3,
  ExternalLink,
  Building2,
  Globe2,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/editorial/SectionHeader";
import EditorialText from "@/components/editorial/EditorialText";
import CTASection from "@/components/editorial/CTASection";
import PersonalArchiveGallery from "@/components/editorial/PersonalArchiveGallery";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Biografie & Experiență Profesională — Cristian Văduva | EXECUTIVE",
  description:
    "Consilier strategic și investitor în proprietăți rezidențiale de prestigiu. Sinteză academică verificată: 3 licențe, 3 masterate și experiențe internaționale la Madrid, Amiens și Malta.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/about",
  },
};

interface DegreeItem {
  discipline: string;
  field: string;
  institution: string;
  focus: string;
  relevance: string;
}

interface MasterItem {
  degree: string;
  specialization: string;
  domain: string;
  description: string;
}

interface ResidencyItem {
  location: string;
  country: string;
  duration: string;
  focus: string;
  description: string;
}

const academicDegrees: DegreeItem[] = [
  {
    discipline: "Economics",
    field: "Economic Strategy & Quantitative Analysis",
    institution: "Studii Academice de Licență",
    focus: "Analiză economică, cicluri de lichiditate și evaluarea fezabilității financiare a activelor imobiliare.",
    relevance: "Furnizează fundamentul analitic pentru evaluarea randamentelor, rezistenței la inflație și viabilității achizițiilor.",
  },
  {
    discipline: "Law",
    field: "Cadru Juridic și Drept Imobiliar",
    institution: "Studii Academice de Licență",
    focus: "Înțelegerea regimului proprietății, a publicității imobiliare și a structurii clauzelor contractuale (fără a practica avocatura sau oferi consultanță juridică autorizată).",
    relevance: "Sprijină analiza preliminară a documentelor și coordonarea eficientă cu avocați și notari autorizați.",
  },
  {
    discipline: "Ecology",
    field: "Ecologie și Durabilitate Ambientală",
    institution: "Studii Academice de Licență",
    focus: "Evaluarea expunerii microclimatice, a durabilității ecologice a amplasamentelor și a standardelor de eficiență energetică.",
    relevance: "Asigură analiza rezistenței fizice și a conformității de mediu pentru proprietăți pe malul lacurilor sau în zone verzi.",
  },
];

const postGraduateMasters: MasterItem[] = [
  {
    degree: "Master's Degree",
    specialization: "Financial Management",
    domain: "Gestiune Financiară & Analiză de Capital",
    description: "Specializare aprofundată în gestiunea financiară a capitalului, analiza fluxurilor de numerar și evaluarea riscurilor investiționale.",
  },
  {
    degree: "Master's Degree",
    specialization: "Environmental Impact Assessment",
    domain: "Evaluarea Impactului asupra Mediului",
    description: "Cercetare axată pe evaluarea impactului de mediu, analiza durabilității terenurilor și rezistența la factori microclimatici.",
  },
  {
    degree: "Master's Degree",
    specialization: "Information Security",
    domain: "Securitatea Informației & Comunicații Confidențiale",
    description: "Pregătire avansată în arhitectura comunicațiilor protejate, confidențialitatea datelor și securitatea schimburilor de informații.",
  },
];

const internationalResidencies: ResidencyItem[] = [
  {
    location: "Madrid",
    country: "Spania",
    duration: "1 An",
    focus: "Studii de Management Financiar",
    description: "Un an de studii de gestiune financiară în Madrid, Spania, analizând mecanismele piețelor financiare europene.",
  },
  {
    location: "Amiens",
    country: "Franța",
    duration: "6 Luni",
    focus: "Studii Academice",
    description: "Șase luni de studii universitare de specializare în Amiens, Franța.",
  },
  {
    location: "Valletta",
    country: "Malta",
    duration: "3 Luni",
    focus: "Stagiu Ecologic",
    description: "Trei luni de stagiu practic pe teren privind sustenabilitatea ecologică și conservarea ecosistemelor.",
  },
];

const trajectorySteps = [
  {
    stage: "01",
    phase: "ANALIZĂ ECONOMICĂ & FINANCIARĂ",
    title: "Fundamentare cantitativă și analiza piețelor",
    desc: "Evaluare econometrică, monitorizarea lichidității și managementul riscurilor pe piețele imobiliare și de capital.",
    focus: "Analiză Riguroasă & Modele Financiare",
  },
  {
    stage: "02",
    phase: "COORDONARE CONTRACTUALĂ",
    title: "Asistență în negociere și documentare",
    desc: "Consultanță strategică în tranzacții imobiliare complexe și coordonarea procesului de documentare alături de profesioniști calificați.",
    focus: "Reprezentare Dedicată & Claritate Contractuală",
  },
  {
    stage: "03",
    phase: "IMOBILIAR PREMIUM & ORIENTARE",
    title: "Identificare oportunități și analiză de proprietăți",
    desc: "Orientare pentru achiziții discrete, verificarea preliminară a documentelor disponibile și selecție de proprietăți reprezentative.",
    focus: "Proprietăți Rezidențiale Prime & Patrimoniu",
  },
  {
    stage: "04",
    phase: "PROTECȚIA ACTIVELOR",
    title: "Parteneriat autorizat cu Generali România",
    desc: "Soluții de transfer al riscurilor și asigurare a proprietăților de mare valoare la cost real de reconstrucție, în calitate de partener Generali România.",
    focus: "Protecția Patrimoniului & Managementul Riscului",
  },
  {
    stage: "05",
    phase: "CONSULTANȚĂ IMOBILIARĂ INDEPENDENTĂ",
    title: "Mandate de consultanță imobiliară pentru clienți privați",
    desc: "Consultanță dedicată pentru investitori privați și familii, axată pe proprietăți din București și oportunități internaționale prin rețeaua Chestertons.",
    focus: "București & Oportunități Internaționale",
  },
];

const advisoryPillars = [
  {
    number: "01",
    title: "Reprezentare Unilaterală Dedicată",
    subtitle: "Claritate și eliminarea conflictelor de interese",
    desc: "La solicitarea clientului și conform mandatului concret convenit, reprezentăm exclusiv interesele uneia dintre părți (cumpărător sau vânzător), asigurând transparență totală pe parcursul tranzacției.",
    impact: "Reprezentare orientată transparent spre obiectivele mandantului.",
  },
  {
    number: "02",
    title: "Confidențialitate Contractuală (NDA)",
    subtitle: "Protecția informațiilor private convenită în scris",
    desc: "Toate comunicările sensibile, circumstanțele tranzacției și datele contractuale sunt protejate prin acorduri bilaterale de confidențialitate (NDA) și proceduri sigure de schimb de documente.",
    impact: "Discreție comercială și respectarea normelor legale aplicabile.",
  },
  {
    number: "03",
    title: "Procedură Structurată de Due Diligence",
    subtitle: "Verificarea documentelor și a riscurilor identificate",
    desc: "Procedură riguroasă de analiză a actelor de proprietate, a extraselor de carte funciară și a informațiilor urbanistice disponibile, în strânsă coordonare cu specialiști tehnici, notari și avocați.",
    impact: "Identificarea din timp a riscurilor semnalate în documentație.",
  },
  {
    number: "04",
    title: "Orientare spre Valoare Durabilă",
    subtitle: "Decizii imobiliare fundamentate pe termen lung",
    desc: "Nu promovăm speculații nerealiste. Fiecare oportunitate recomandată este analizată din perspectiva calității arhitecturale, a calității amplasamentului și a sustenabilității pe termen lung.",
    impact: "Consultanță prudentă orientată spre păstrarea valorii capitalului.",
  },
];

export default function AboutPage() {
  return (
    <Section variant="dark" className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36 lg:pt-44">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL MONOGRAPH HERO                           */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.08] bg-arch-grid pb-24 sm:pb-32 lg:pb-36">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#93C8FF]/[0.025] blur-[140px] pointer-events-none" />

          {/* Corner Structural Crosshairs */}
          <div className="absolute top-8 left-6 sm:left-12 lg:left-20 w-3 h-3 border-t border-l border-[#93C8FF]/60" />
          <div className="absolute top-8 right-6 sm:right-12 lg:right-20 w-3 h-3 border-t border-r border-[#93C8FF]/60" />

          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16 relative z-10">
            {/* Top Eyebrow Index */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse shrink-0" />
                <span className="font-semibold">01 // PROFILE & ADVISORY MANDATE</span>
                <span className="text-white/20 hidden xs:inline">/</span>
                <span className="text-[#B8C2CF] hidden xs:inline">CRISTIAN VADUVA</span>
              </div>
              <div className="flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#A97F60] shrink-0" />
                <span>BUCHAREST · MONACO · DUBAI</span>
              </div>
            </div>

            {/* Monograph Master Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Thesis & Directives (~58% on desktop) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A97F60]/10 border border-[#A97F60]/30 font-mono text-[9px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#A97F60] font-semibold max-w-full">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate sm:overflow-visible">EXECUTIVE STRATEGIC ADVISOR & INVESTOR</span>
                  </div>
                  <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.03] tracking-tight break-words">
                    Independent Advisory.<br />
                    <span className="text-[#A97F60] italic font-normal">Strategic Capital.</span><br />
                    Generational Defense.
                  </h1>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed max-w-2xl">
                  <p>
                    Cristian Văduva oferă consultanță strategică, orientare pentru tranzacții imobiliare premium și coordonarea structurilor de protecție a patrimoniului, cu activitate principală în București și acces la piețe internaționale.
                  </p>

                  {/* Professional Services Focus */}
                  <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0C1119] space-y-3">
                    <h2 className="font-serif text-lg text-[#F5F4EF] font-medium">
                      Consultanță Imobiliară & Reprezentare Dedicată
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      Reprezentare adaptată obiectivelor clientului — cumpărător, vânzător sau investitor. De la identificarea și analiza comparativă a activelor până la negociere strategică și coordonarea etapelor tranzacției, colaborarea este ghidată de claritate, rigoare analitică și protecția intereselor dumneavoastră.
                    </p>
                    <div className="pt-2">
                      <Link href="/cum-lucrez" className="text-xs font-mono text-[#93C8FF] hover:underline inline-flex items-center gap-1.5">
                        <span>Vezi metodologia de lucru și etapele colaborării</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Key Rail */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
                  <div className="space-y-1">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[9px] font-semibold">
                      PREZENȚĂ PRINCIPALĂ
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      București, România
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">Parteneriate Internaționale</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[#A97F60] block uppercase tracking-widest text-[9px] font-semibold">
                      PARTENERIATE RELEVANTE
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      Chestertons · Generali
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">Colaborări Verificate</span>
                  </div>

                  <div className="space-y-1 col-span-2 sm:col-span-1">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[9px] font-semibold">
                      CATALOG IMOBILIAR
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      433 Proprietăți Documentate
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">Selecție Structurată</span>
                  </div>
                </div>

                {/* Action Buttons - Apple Pills */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="btn-apple-pill-primary shadow-xl shadow-[#93C8FF]/15"
                  >
                    <span>INITIATE PRIVATE PROTOCOL</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#archive"
                    className="btn-apple-pill-secondary"
                  >
                    <span>EXPLORE VERIFIED ARCHIVE (18)</span>
                  </a>

                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.16em] font-medium border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all min-h-[44px]"
                  >
                    <span>WHATSAPP DIRECT</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Official Monograph Portrait (~42% on desktop) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] w-full rounded-3xl border border-white/[0.12] bg-[#0C1119] p-3 overflow-hidden shadow-2xl group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/personal/portraits/cristian-vaduva-desk-advisor.jpg"
                      alt="Cristian Văduva Official Monograph Portrait"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-65 pointer-events-none" />

                    {/* Portrait Caption Card */}
                    <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <div className="font-serif text-lg text-[#F5F4EF] font-medium">
                        Cristian Văduva
                      </div>
                      <div className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                        Consultanță Executivă & Reprezentare Imobiliară
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // MULTIDISCIPLINARY ACADEMIC SYNTHESIS                */}
        {/* Separated: Degrees · Masters · Residencies · Generali     */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 bg-[#0C1119] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-20">
            {/* Section Header */}
            <SectionHeader
              eyebrow="02 // MULTIDISCIPLINARY ACADEMIC FOUNDATION"
              badge="DEGREES & SPECIALIZATIONS"
              title="Academic Synthesis: Economics, Law & Ecology"
              description="Comprehensive strategic advisory requires concurrent mastery of corporate balance sheets, nuanced contractual covenants, and the physical environmental durability of real estate assets."
            />

            {/* Sub-Module A: Tripartite University Degrees */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded border border-[#93C8FF]/40 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                      ACADEMIC FOUNDATION // 3 DEGREES
                    </span>
                    <h2 className="font-serif text-2xl text-[#F5F4EF]">
                      Tripartite University Qualifications (Economics · Law · Ecology)
                    </h2>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#8A95A5]">VALAHIA UNIVERSITY</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {academicDegrees.map((item, idx) => (
                  <div
                    key={item.discipline}
                    className="p-8 rounded-2xl border border-white/[0.08] bg-[#121721] flex flex-col justify-between space-y-6 hover:border-white/[0.22] hover:bg-[#161c28] transition-all duration-300 shadow-xl"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                          DEGREE 0{idx + 1}{" // BACHELOR"}
                        </span>
                        <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                          {item.discipline}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                          {item.field}
                        </h3>
                        <span className="font-mono text-xs text-[#8A95A5] block">
                          {item.institution}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                        {item.focus}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#93C8FF] block font-semibold">
                        UNDERWRITING APPLICATION
                      </span>
                      <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                        {item.relevance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Module B: Post-Graduate Specializations (3 Master's Degrees) */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#A97F60]/40 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A97F60] block font-semibold">
                      POST-GRADUATE SPECIALIZATION // 3 MASTER&apos;S DEGREES
                    </span>
                    <h2 className="font-serif text-2xl text-[#F5F4EF]">
                      Advanced Post-Graduate Master&apos;s Specializations
                    </h2>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#8A95A5]">POST-GRADUATE INSTITUTIONS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {postGraduateMasters.map((m, idx) => (
                  <div
                    key={m.specialization}
                    className="p-8 rounded-2xl border border-white/[0.08] bg-[#121721] space-y-5 hover:border-[#A97F60]/60 hover:bg-[#161c28] transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A97F60] font-semibold">
                        MASTER 0{idx + 1}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#A97F60]/10 border border-[#A97F60]/30 font-mono text-[9px] uppercase text-[#C49A78] font-semibold">
                        POST-GRADUATE
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                        {m.specialization}
                      </h3>
                      <span className="font-mono text-xs text-[#93C8FF] block">
                        {m.domain}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Module C & D: International Residencies + Generali Alliance */}
            <div className="grid lg:grid-cols-12 gap-8 pt-4">
              {/* International Residencies (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[#93C8FF]/40 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                        INTERNATIONAL RESIDENCIES
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                        Madrid (1 Yr) · France (6 Mo) · Malta (3 Mo)
                      </h2>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#8A95A5]">EUROPEAN STUDY AXIS</span>
                </div>

                <div className="space-y-4">
                  {internationalResidencies.map((res) => (
                    <div
                      key={res.location}
                      className="p-6 rounded-2xl border border-white/[0.08] bg-[#121721] space-y-2.5 hover:border-white/[0.2] hover:bg-[#161c28] transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base text-[#F5F4EF] font-medium">{res.location}</span>
                          <span className="text-[#8A95A5]">·</span>
                          <span className="text-[#A97F60]">{res.country}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#93C8FF]/10 text-[#93C8FF] border border-[#93C8FF]/20 text-[10px] uppercase font-semibold">
                          {res.duration}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-[#93C8FF]">{res.focus}</div>
                      <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                        {res.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generali Romania Strategic Collaboration (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="border-b border-white/[0.08] pb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#A97F60]/40 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A97F60] block font-semibold">
                      STRATEGIC INSTITUTIONAL ALLIANCE
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                      Generali Romania Collaboration
                    </h2>
                  </div>
                </div>

                <div className="p-8 rounded-3xl border border-[#A97F60]/30 bg-[#121721] space-y-6 relative shadow-xl">
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold block">
                      ASSET PROTECTION PROTOCOL
                    </span>
                    <p className="font-serif text-xl text-[#F5F4EF] leading-snug">
                      Soluții Structurate de Protecție a Reședințelor & Asigurare Clădiri de Valoare Mare
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      Parteneriatul autorizat (contract de agent) cu Generali România permite integrarea directă a soluțiilor de protecție a proprietăților de mare valoare, evaluarea corectă a costului de reconstrucție și acoperirea riscurilor patrimoniale.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/[0.08] font-mono text-xs">
                    <div className="flex items-start gap-2.5 text-[#B8C2CF]">
                      <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                      <span>Ultra-Prime Property & Architectural Casualty Underwriting</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#B8C2CF]">
                      <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                      <span>Executive Health & Managerial Liability Shielding</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#B8C2CF]">
                      <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                      <span>Full Romanian Fiscal Code 2026 Deductibility Compliance</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://insurance.cristianvaduva.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple-pill-secondary w-full"
                    >
                      <span>INSPECT GENERALI ALLIANCE DESK</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // METODOLOGIE DE ANALIZĂ COMPARATIVĂ PIAȚĂ             */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 border-b border-white/[0.08]">
          <SectionHeader
            eyebrow="03 // METODOLOGIE & ANALIZĂ COMPARATIVĂ"
            badge="STANDARDE DE EVALUARE"
            title="Analiza Prețurilor Rezidențiale: Criterii Like-for-Like"
            description="O evaluare obiectivă a pieței rezidențiale din București impune separarea strictă a prețurilor de ofertă de cele efectiv tranzacționate și compararea exclusivă a proprietăților cu caracteristici similare în aceeași micro-zonă."
          />

          {/* Master Comparative Dossier Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Box 1: Prețuri de Listare vs Tranzacție */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border border-[#93C8FF]/30 bg-[#0C1119] space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  <span className="text-[#93C8FF] uppercase tracking-[0.2em] font-semibold">
                    PREȚURI DE LISTARE VS. TRANZACȚIE
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#93C8FF]/10 text-[#93C8FF] border border-[#93C8FF]/30 text-[10px] font-semibold">
                  DISCIPLINĂ METODOLOGICĂ
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Distincția între așteptări și contracte
                </h3>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                  Prețurile cerute pe portalurile imobiliare reflectă așteptările inițiale ale proprietarilor, în timp ce prețurile autentificate la notariat reflectă valoarea reală la care capitalul a fost transferat. Compararea datelor din zone ultracentrale (Herăstrău, Floreasca) cu cele din zone periferice distorsionează concluziile dacă nu se normalizează pentru aceeași micro-zonă.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">ACEEAȘI MICRO-ZONĂ</span>
                  <span className="text-[#F5F4EF]">Criteriu eliminatoriu</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">SUPRAFAȚĂ & FINISAJE</span>
                  <span className="text-[#93C8FF]">Normalizare etalon util</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A95A5]">SURSE CITATE</span>
                  <span className="text-[#93C8FF] font-semibold">ANCPI & Documente Verificabile</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#93C8FF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Analize fundamentate exclusiv pe eșantioane comparabile direct</span>
              </div>
            </div>

            {/* Box 2: Factori Cheie în Evaluare */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#0C1119] space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A97F60]" />
                  <span className="text-[#A97F60] uppercase tracking-[0.2em] font-semibold">
                    STANDARDE DE COMPARABILITATE
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] text-[#8A95A5] border border-white/[0.1] text-[10px]">
                  LIKE-FOR-LIKE
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Criteriile unei decizii de achiziție sănătoase
                </h3>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                  Pentru a stabili dacă un activ imobiliar oferă un preț corect, evaluăm statutul juridic, istoricul cadastral, calitatea structurii și disponibilitatea utilităților, fără a promite randamente garantate sau a emite estimări fără suport faptic reproductibil.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">CALITATE CONSTRUCTIVĂ</span>
                  <span className="text-[#A97F60]">Audit tehnic de specialitate</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">CADRU JURIDIC</span>
                  <span className="text-[#8A95A5]">Verificare cărți funciare</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A95A5]">TRANSPARENȚĂ</span>
                  <span className="text-[#F5F4EF]">Fără garanții de randament speculate</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Procedură meticuloasă de documentare înaintea oricărei oferte</span>
              </div>
            </div>
          </div>

          {/* Analytical Takeaway Callout */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#121721] flex flex-col md:flex-row items-baseline justify-between gap-6 font-mono text-xs">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-[#93C8FF] uppercase tracking-[0.24em] text-[10px] font-semibold block">
                METODOLOGIE & RAPORT DE PIAȚĂ TRIMESTRIAL
              </span>
              <p className="font-sans text-sm sm:text-base text-[#F5F4EF] font-light leading-relaxed">
                Consultă metodologia completă și structura raportului trimestrial dedicat pieței rezidențiale premium din București.
              </p>
            </div>
            <Link
              href="/raport-piata"
              className="btn-apple-pill-primary shadow-lg shrink-0"
            >
              <span>VEZI RAPORT PIAȚĂ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // ADVISORY PHILOSOPHY & PRINCIPLES                    */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 border-b border-white/[0.08]">
          <SectionHeader
            eyebrow="04 // PROFESSIONAL PHILOSOPHY & ETHICS"
            badge="GOVERNANCE STANDARDS"
            title="The Cristian Văduva Advisory Principles"
            description="In an industry plagued by superficial brokerage and concealed transaction fees, this practice is grounded upon four uncompromising principles of professional conduct."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0C1119] space-y-5 hover:border-white/[0.22] hover:bg-[#121721] transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl text-[#93C8FF] font-light">
                      {pillar.number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#93C8FF]/40" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                      CARDINAL PRINCIPLE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed font-light">
                  {pillar.desc}
                </p>

                <div className="pt-4 border-t border-white/[0.06] font-mono text-xs text-[#93C8FF] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] text-[#8A95A5]">{pillar.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // THE CRISTIAN VĂDUVA ARCHIVE (18 MONOGRAPHS & STUDIES) */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 bg-[#0C1119] border-b border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-[#93C8FF] uppercase tracking-[0.28em] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>05 // ARHIVĂ VIZUALĂ & MOMENTE PROFESIONALE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-tight">
                Galerie & Documentare Profesională
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] max-w-3xl font-light leading-relaxed">
                O privire în activitatea de consultanță executivă, întâlniri de lucru, inspecții ale proprietăților și momente profesionale alături de parteneri și colaboratori.
              </p>
            </div>

            {/* Interactive Archive Component */}
            <PersonalArchiveGallery />
          </div>
        </section>

        {/* ======================================================== */}
        {/* 06 // CAREER EVOLUTION TRAJECTORY                        */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 bg-[#07090D] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="06 // EVOLUTION & PRACTICE CHRONOLOGY"
              badge="PRACTICE TRAJECTORY"
              title="Phases of Executive & Strategic Consolidation"
              description="From capital market liquidity research and econometric underwriting to sovereign trophy asset negotiations and multi-generational family office defense."
            />

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {trajectorySteps.map((step) => (
                <div
                  key={step.stage}
                  className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline hover:bg-[#121721]/50 transition-colors px-4 sm:px-6 relative group"
                >
                  <div className="md:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg text-[#93C8FF] font-semibold">{step.stage}</span>
                      <div className="w-6 h-[1px] bg-[#93C8FF]/40" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A97F60] font-semibold">
                        {step.phase}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <div className="md:col-span-8 space-y-3">
                    <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed font-light max-w-2xl">
                      {step.desc}
                    </p>
                    <div className="font-mono text-[11px] text-[#8A95A5] flex items-center gap-2">
                      <span className="text-[#93C8FF]">MANDATE FOCUS:</span>
                      <span>{step.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 07 // PRIVATE MANDATE INTAKE                             */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="PRIVATE ADVISORY PROTOCOL"
          title="Initiate a Confidential Strategic Consultation."
          description="Every acquisition, capital structuring, or asset preservation mandate is evaluated personally by Cristian Văduva. Initial consultations operate under strict confidentiality agreements and pre-execution non-disclosure covenants."
          primaryActionText="INITIATE PRIVATE PROTOCOL"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Representation mandates are strictly limited in volume to ensure undivided principal attention and complete insulation from conflicts of interest."
        />
      </main>

      <Footer />
    </Section>
  );
}
