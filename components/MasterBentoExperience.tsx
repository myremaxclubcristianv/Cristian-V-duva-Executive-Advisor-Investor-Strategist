"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoredPhoto } from "@/lib/photoStore";
import {
  ArrowUpRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  Play,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Lock,
  ArrowRight,
  CheckCircle,
  Phone,
  Send,
  Mail,
  Share2,
  Globe,
  Database,
  Compass,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

interface VideoItemDisplay {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail?: string;
  publishedDate?: string;
  category: string;
  youtubeUrl: string;
}

export default function MasterBentoExperience() {
  // Photos State
  const [photos, setPhotos] = useState<StoredPhoto[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Videos State
  const [videos, setVideos] = useState<VideoItemDisplay[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItemDisplay | null>(null);

  // Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formInterest, setFormInterest] = useState("Luxury Acquisition");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    // Load Photos
    async function loadPhotos() {
      try {
        const res = await fetch("/api/photos");
        const data = await res.json();
        if (data.success && Array.isArray(data.photos)) {
          setPhotos(data.photos);
        }
      } catch (e) {
        console.error("Error loading photos:", e);
      }
    }

    // Load Videos
    async function loadVideos() {
      try {
        const res = await fetch("/api/youtube/videos");
        const data = await res.json();
        if (data.status === "success" && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideos(data.videos);
        }
      } catch (e) {
        console.error("Error loading YouTube:", e);
      }
    }

    loadPhotos();
    loadVideos();
  }, []);

  // Explicit separation: Hero (Max 1) vs Featured (Multiple)
  const heroPhoto = photos.find((p) => p.hero === true) || photos[0];
  const featuredPhotos = photos.filter((p) => p.featured === true);
  const heroVideo = videos[0];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          interest: formInterest,
          message: formMessage,
        }),
      });
      setFormSubmitted(true);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormMessage("");
    } catch {
      window.open(
        `https://wa.me/436509536345?text=${encodeURIComponent(
          `Bună ziua Cristian, mă numesc ${formName} (${formEmail}, ${formPhone}). Solicitare: ${formInterest}. Detalii: ${formMessage}`
        )}`,
        "_blank"
      );
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#080809] text-[#F5F5F7] selection:bg-[#B89B72]/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* CADRAN 01 — IDENTITY / HERO MONOGRAPH (The Opening Masterpiece)           */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-white/10">
        <div className="site-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Narrative Pillar (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                {/* Geographic Positioning Tag */}
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#B89B72]">
                  <span>BUCHAREST · MONACO · DUBAI</span>
                </div>

                {/* Main Name & Titles */}
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                    Cristian Văduva
                  </h1>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-[#B89B72] font-serif italic tracking-wide">
                    Luxury Real Estate · Asset Protection · Investments
                  </div>
                </div>

                {/* Core Synthesis */}
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                  Consultanță executivă și reprezentare privată pentru achiziții imobiliare de elită, structuri de protecție a capitalului și tranzacții off-market în principalele hub-uri europene.
                </p>
              </div>

              {/* Action Array */}
              <div className="space-y-6 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-full bg-[#B89B72] hover:bg-[#C9AE85] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#B89B72]/20 group cursor-pointer"
                  >
                    <span>Consultanță Privată Directă</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <Link
                    href="/gallery"
                    className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <ImageIcon className="w-4 h-4 text-[#B89B72]" />
                    <span>Galeria Foto</span>
                  </Link>

                  <Link
                    href="/tv"
                    className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <Play className="w-4 h-4 text-red-400 fill-red-400" />
                    <span>YouTube TV</span>
                  </Link>
                </div>

                {/* Sub-Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 text-[10px] uppercase block">Piață Principală</span>
                    <span className="font-semibold text-white mt-0.5 block">București · Monaco</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400 text-[10px] uppercase block">Parteneriat</span>
                    <span className="font-semibold text-white mt-0.5 block">Generali România</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                    <span className="text-neutral-400 text-[10px] uppercase block">Educație</span>
                    <span className="font-semibold text-white mt-0.5 block">6 Diplome & Master</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Master Visual Portrait Frame (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[500px] lg:min-h-[540px] rounded-3xl overflow-hidden bg-[#121214] border border-white/10 shadow-2xl group flex flex-col justify-end">
              {heroPhoto ? (
                <Image
                  src={heroPhoto.src}
                  alt={heroPhoto.alt || "Cristian Văduva"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#121214] text-neutral-400 font-mono text-xs">
                  Cristian Văduva Official Monograph
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />

              <div className="relative z-10 p-6 sm:p-8 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                  <Sparkles className="w-3 h-3" />
                  {heroPhoto?.title || "Executive Visual Monograph"}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2">
                  {heroPhoto?.caption || "Reprezentare și arhitectură de capital în Europa."}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CADRAN 02 & 03 — PROFILE STORY & REAL ESTATE ARCHITECTURE                */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10">
        <div className="site-container space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* CADRAN 02: PROFILE / EDITORIAL STORY (5 Cols) */}
            <div className="lg:col-span-5 bg-[#111214] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89B72]">
                    CADRAN 02 / PROFIL & VIZIUNE
                  </span>
                  <Sparkles className="w-4 h-4 text-[#B89B72]" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  Rigoare Strategică & Integritate de Decizie
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  <p>
                    Cristian Văduva activează la intersecția dintre tranzacțiile imobiliare de mare anvergură, protecția activelor și plasamentele strategice de capital.
                  </p>
                  <p>
                    Cu o fundație academică multidisciplinară (Economie, Drept și Ecologie) și masterate specializate în Management Financiar și Securitatea Informației, fiecare mandat de achiziție sau vânzare beneficiază de o analiză exhaustivă de risc, randament și confidențialitate.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Perspectivă Internațională</span>
                <Link href="/about" className="text-[#B89B72] hover:underline flex items-center gap-1">
                  Citește Biografia →
                </Link>
              </div>
            </div>

            {/* CADRAN 03: REAL ESTATE CANVAS (7 Cols) */}
            <div className="lg:col-span-7 bg-[#111214] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89B72]">
                    CADRAN 03 / LUXURY REAL ESTATE
                  </span>
                  <Building2 className="w-4 h-4 text-[#B89B72]" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    Monaco · Dubai · București · Europa
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    Reprezentare exclusivă pentru cumpărători și vânzători de reședințe de lux, proprietăți istorice și terenuri de dezvoltare strategică.
                  </p>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#B89B72] uppercase">București Prime</span>
                    <h3 className="text-sm font-semibold text-white">Herăstrău · Primăverii</h3>
                    <p className="text-[11px] text-neutral-400 font-light">Penthouse-uri și vile istorice</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#B89B72] uppercase">Monaco Riviera</span>
                    <h3 className="text-sm font-semibold text-white">Monte Carlo · Côte d&#39;Azur</h3>
                    <p className="text-[11px] text-neutral-400 font-light">Tranzacții transfrontaliere</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#B89B72] uppercase">Dubai Hub</span>
                    <h3 className="text-sm font-semibold text-white">Palm · Downtown</h3>
                    <p className="text-[11px] text-neutral-400 font-light">Portofolii de investiții UHNW</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
                <span className="text-neutral-400">Buyer & Seller Representation</span>
                <Link href="/real-estate" className="text-[#B89B72] hover:underline flex items-center gap-1">
                  Explorează Portofoliul →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CADRAN 04 & 05 — EXPERTISE / DECISION & ACADEMIC RIGOR                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10">
        <div className="site-container space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* CADRAN 04: EXPERTISE & ASSET PROTECTION (6 Cols) */}
            <div className="lg:col-span-6 bg-[#111214] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89B72]">
                    CADRAN 04 / PROTECȚIE & CAPITAL
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    Asset Protection & Parteneriat Generali România
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    Structurare avansată de asigurări de bunuri și protecție a patrimoniului imobiliar pentru investitori și deținători de active de mare valoare.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#B89B72] shrink-0" />
                    <span>Asigurări complexe de proprietăți rezidențiale și comerciale</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#B89B72] shrink-0" />
                    <span>Consultanță de reducere a riscului și securitate a investiției</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#B89B72] shrink-0" />
                    <span>Planificare de continuitate pentru capitalul privat</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
                Soluții Strategice Generali
              </div>
            </div>

            {/* CADRAN 05: EDUCATION & INTERNATIONAL PERSPECTIVE (6 Cols) */}
            <div className="lg:col-span-6 bg-[#111214] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89B72]">
                    CADRAN 05 / STUDII & EXPERIENȚĂ
                  </span>
                  <GraduationCap className="w-4 h-4 text-[#B89B72]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    Fundație Academică Multidisciplinară
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    Trei diplome de licență și trei masterate universitare ce completează expertiza pe piața imobiliară:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="font-semibold text-white">Licențe Universitare</div>
                    <div className="text-neutral-400 font-light">Economie · Drept · Ecologie</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="font-semibold text-white">Masterate</div>
                    <div className="text-neutral-400 font-light">Management Financiar · Impact Mediu · Securitate Privată</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Traiectorie: Madrid · Amiens · Malta</span>
                <span className="text-[#B89B72]">Rigoare & Guvernanță</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CADRAN 06 — VISUAL ARCHIVE / PHOTO MONOGRAPH                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10">
        <div className="site-container space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>CADRAN 06 / ARHIVĂ FOTOGRAFICĂ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Galeria Vizuală & Portrete Oficiale
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Momente captate din activitatea de consultanță executivă, arhitectură și reședințe de lux.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2 transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-[#B89B72]" />
                <span>Încarcă Poze (Admin)</span>
              </Link>

              <Link
                href="/gallery"
                className="px-5 py-2.5 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-lg shadow-[#B89B72]/20"
              >
                <span>Toată Galeria</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Asymmetric Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {(featuredPhotos.length > 0 ? featuredPhotos : photos).slice(0, 4).map((photo, index) => {
              const isWide = index === 0 || index === 3;
              const colSpan = isWide ? "md:col-span-7" : "md:col-span-5";

              return (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`${colSpan} bg-[#111214] border border-white/10 hover:border-[#B89B72]/50 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 relative min-h-[340px] sm:min-h-[400px] flex flex-col justify-end shadow-xl`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt || photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />

                  <div className="relative z-10 p-6 sm:p-8 space-y-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                      {photo.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                      {photo.title}
                    </h3>
                    {photo.caption && (
                      <p className="text-xs text-neutral-300 font-light line-clamp-2">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CADRAN 07 — VIDEO JOURNAL / YOUTUBE TV AUTO-IMPORT                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10">
        <div className="site-container space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-400">
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>CADRAN 07 / YOUTUBE TV AUTO-IMPORT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Cristian Văduva Video Journal
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Episoade exclusive, analize de piață și tururi imobiliare importate automat de pe canalul oficial.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@CristianVaduvaCV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-red-600/20"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Canal @CristianVaduvaCV</span>
            </a>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {heroVideo && (
              <div
                onClick={() => setSelectedVideo(heroVideo)}
                className="lg:col-span-7 bg-[#111214] border border-white/10 hover:border-red-500/40 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                  <Image
                    src={heroVideo.thumbnail || "https://img.youtube.com/vi/zl56URC7eFM/maxresdefault.jpg"}
                    alt={heroVideo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-2">
                  <div className="text-[10px] font-mono text-red-400 uppercase">Episod Recomandat</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {heroVideo.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Secondary Videos Bento (5 Cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {videos.slice(1, 4).map((vid) => (
                <div
                  key={vid.id || vid.youtubeId}
                  onClick={() => setSelectedVideo(vid)}
                  className="bg-[#111214] border border-white/10 hover:border-red-500/30 rounded-2xl p-4 flex gap-4 items-center group cursor-pointer transition-all"
                >
                  <div className="relative w-28 aspect-[16/9] rounded-xl overflow-hidden bg-black shrink-0">
                    <Image
                      src={vid.thumbnail || "https://img.youtube.com/vi/zl56URC7eFM/hqdefault.jpg"}
                      alt={vid.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[10px] font-mono uppercase text-[#B89B72] block">Video</span>
                    <h4 className="text-xs sm:text-sm font-medium text-white line-clamp-2 group-hover:text-red-400 transition-colors">
                      {vid.title}
                    </h4>
                  </div>
                </div>
              ))}

              <Link
                href="/tv"
                className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all"
              >
                <span>Deschide Studio Video Complet ({videos.length}+)</span>
                <ArrowRight className="w-4 h-4 text-[#B89B72]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CADRAN 08 — ECOSYSTEM (cristianvaduva.com, aixluxury.com, HomeFind, etc.) */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 border-b border-white/10">
        <div className="site-container space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CADRAN 08 / ECOSISTEM INTEGRAT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Platforme & Divizii Conectate
              </h2>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Surse: cristianvaduva.com · aixluxury.com
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CristianVaduva.com */}
            <a
              href="https://cristianvaduva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111214] border border-white/10 hover:border-[#B89B72]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Sparkles className="w-5 h-5 text-[#B89B72]" />
                  <span className="text-[10px] font-mono text-[#B89B72] uppercase px-2.5 py-1 rounded-full bg-white/5">Brand Principal</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#B89B72] transition-colors flex items-center justify-between">
                    CristianVaduva.com <ArrowUpRight className="w-4 h-4" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Prezența digitală centrală și consultanță executivă.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 mt-6">
                Vizitează site-ul →
              </div>
            </a>

            {/* AiXLuxury.com */}
            <a
              href="https://aixluxury.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111214] border border-white/10 hover:border-[#B89B72]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Building2 className="w-5 h-5 text-[#B89B72]" />
                  <span className="text-[10px] font-mono text-[#B89B72] uppercase px-2.5 py-1 rounded-full bg-white/5">Luxury Portal</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#B89B72] transition-colors flex items-center justify-between">
                    AiXLuxury.com <ArrowUpRight className="w-4 h-4" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Portofoliu imobiliar ultra-prime și lifestyle premium.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 mt-6">
                Vizitează site-ul →
              </div>
            </a>

            {/* HomeFind */}
            <a
              href="https://homefind.cristianvaduva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111214] border border-white/10 hover:border-[#B89B72]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Compass className="w-5 h-5 text-[#B89B72]" />
                  <span className="text-[10px] font-mono text-[#B89B72] uppercase px-2.5 py-1 rounded-full bg-white/5">Tech Match</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#B89B72] transition-colors flex items-center justify-between">
                    HomeFind <ArrowUpRight className="w-4 h-4" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Platformă de căutare imobiliară și identificare proprietăți.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 mt-6">
                Vizitează site-ul →
              </div>
            </a>

            {/* Subventii */}
            <a
              href="https://subventii.cristianvaduva.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111214] border border-white/10 hover:border-[#B89B72]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Globe className="w-5 h-5 text-[#B89B72]" />
                  <span className="text-[10px] font-mono text-[#B89B72] uppercase px-2.5 py-1 rounded-full bg-white/5">Grants</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#B89B72] transition-colors flex items-center justify-between">
                    Subvenții <ArrowUpRight className="w-4 h-4" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Platformă de analiză a fondurilor și programelor guvernamentale.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 mt-6">
                Vizitează site-ul →
              </div>
            </a>

            {/* AiX OS */}
            <div className="bg-[#111214] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Database className="w-5 h-5 text-[#B89B72]" />
                  <span className="text-[10px] font-mono text-[#B89B72] uppercase px-2.5 py-1 rounded-full bg-white/5">Market Pulse</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AiX OS Intelligence</h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Analiză în timp real a indicatorilor imobiliari și a randamentelor.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 mt-6">
                PropTech Framework
              </div>
            </div>

            {/* Asset Protection Generali */}
            <div className="bg-[#111214] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-5 h-5 text-[#B89B72]" />
                  <span className="text-[10px] font-mono text-[#B89B72] uppercase px-2.5 py-1 rounded-full bg-white/5">Parteneriat</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Insurance & Protection</h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Protecție de active în parteneriat cu Generali România.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 mt-6">
                Generali Romania Advisory
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CADRAN 09 — CONTACT & PRIVATE INTAKE DESK                                */}
      {/* ========================================================================= */}
      <section id="contact" className="relative w-full py-16 sm:py-24">
        <div className="site-container space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
                <Mail className="w-3.5 h-3.5" />
                <span>CADRAN 09 / DIALOG & CONSULTANȚĂ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Contact & Programare Privată
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Comunicați direct prin canalele securizate sau completați formularul de mai jos.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B89B72]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DISCREȚIE STRICTĂ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Verified Contacts List (5 Cols) */}
            <div className="lg:col-span-5 bg-[#111214] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                Canale Oficiale Verificate
              </span>

              {/* WhatsApp */}
              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">WhatsApp Direct</div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      +43 650 953 6345
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-all" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/capitalinvestcristianvaduva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-sky-500/10 border border-white/5 hover:border-sky-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Telegram</div>
                    <div className="text-xs font-semibold text-white group-hover:text-sky-400 transition-colors">
                      @capitalinvestcristianvaduva
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-sky-400 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:cristianvaduva@duck.com"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-[#B89B72]/10 border border-white/5 hover:border-[#B89B72]/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B89B72]/15 text-[#B89B72] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">E-mail</div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                      cristianvaduva@duck.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B89B72] transition-all" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@CristianVaduvaCV"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-red-500/10 border border-white/5 hover:border-red-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
                    <YoutubeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Canal YouTube</div>
                    <div className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors">
                      @CristianVaduvaCV
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-red-400 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/cristianvaduva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">LinkedIn</div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                      cristianvaduva
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-all" />
              </a>
            </div>

            {/* Direct Intake Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#111214] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">
                  Formular de Inițiere Mandat
                </h3>
                <p className="text-xs text-neutral-400 font-light">
                  Transmiteți parametrii căutării sau cererii dumneavoastră.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-300">Nume *</label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                      placeholder="Numele dumneavoastră"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#B89B72]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-300">E-mail *</label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      required
                      placeholder="adresa@email.com"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#B89B72]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-300">Telefon</label>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+40 7XX XXX XXX"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#B89B72]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-300">Domeniu Interes</label>
                    <select
                      value={formInterest}
                      onChange={(e) => setFormInterest(e.target.value)}
                      className="w-full px-4 py-3 bg-[#1A1A1C] border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#B89B72]"
                    >
                      <option value="Luxury Acquisition">Achiziție Imobiliară de Lux</option>
                      <option value="Seller Representation">Reprezentare Vânzare</option>
                      <option value="Asset Protection">Protecție Active & Generali</option>
                      <option value="Capital Placement">Plasamente de Capital</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-300">Detalii / Mesaj</label>
                    <textarea
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      rows={3}
                      placeholder="Detalii privitoare la proprietate sau solicitare..."
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#B89B72] resize-none"
                    />
                  </div>
                </div>

                {formSubmitted && (
                  <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Mesajul a fost transmis. Cristian Văduva vă va contacta în cel mai scurt timp.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-3.5 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#B89B72]/20 cursor-pointer disabled:opacity-50"
                >
                  {formLoading ? "Se transmite..." : "Transmite Solicitarea"}
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL FOR PHOTOS                                                 */}
      {/* ========================================================================= */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-5xl bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase text-[#B89B72]">
                  {photos[selectedPhotoIndex].category}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {photos[selectedPhotoIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
              <Image
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].title}
                fill
                className="object-contain"
              />
            </div>

            {photos[selectedPhotoIndex].caption && (
              <div className="p-4 sm:p-6 bg-[#141414] border-t border-white/10 text-xs sm:text-sm text-neutral-300 font-light">
                {photos[selectedPhotoIndex].caption}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL PLAYER FOR VIDEOS                                                   */}
      {/* ========================================================================= */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-4xl bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate pr-4">
                {selectedVideo.title}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId || selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
