"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { StoredPhoto, PhotoCategory, PhotoOrientation } from "@/lib/photoStore";
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  Star,
  RefreshCw,
  Shield,
  LogOut,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Plus,
  Sparkles,
  MapPin,
  Calendar,
  Grid,
  Crown,
} from "lucide-react";
import { YoutubeIcon } from "@/components/icons/SocialIcons";

const CATEGORIES: PhotoCategory[] = [
  "PORTRAITS",
  "REAL ESTATE",
  "BUSINESS",
  "EDITORIAL",
  "LIFESTYLE",
  "TRAVEL",
  "MEDIA",
  "ARCHIVE",
];

export default function AdminPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth & UI States
  const [authChecking, setAuthChecking] = useState(true);
  const [photos, setPhotos] = useState<StoredPhoto[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Upload Form State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState<PhotoCategory>("PORTRAITS");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("Bucharest / Monaco");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [orientation, setOrientation] = useState<PhotoOrientation>("landscape");
  const [featured, setFeatured] = useState(true);
  const [hero, setHero] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // YouTube Stats State
  const [youtubeCount, setYoutubeCount] = useState<number | null>(null);
  const [syncingYoutube, setSyncingYoutube] = useState(false);

  // Verify Auth on Mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth/check");
        if (!res.ok) {
          router.push("/login");
        } else {
          setAuthChecking(false);
          loadPhotos();
          loadYouTubeStats();
        }
      } catch {
        router.push("/login");
      }
    }
    checkAuth();
  }, [router]);

  // Fetch Photos
  const loadPhotos = async () => {
    setLoadingPhotos(true);
    try {
      const res = await fetch("/api/photos");
      const data = await res.json();
      if (data.success && Array.isArray(data.photos)) {
        setPhotos(data.photos);
      }
    } catch (err) {
      console.error("Error loading photos:", err);
    } finally {
      setLoadingPhotos(false);
    }
  };

  // Fetch YouTube Stats
  const loadYouTubeStats = async () => {
    setSyncingYoutube(true);
    try {
      const res = await fetch("/api/youtube/videos");
      const data = await res.json();
      if (data.status === "success") {
        setYoutubeCount(data.count || data.videos?.length || 0);
      }
    } catch (err) {
      console.error("Error loading YouTube stats:", err);
    } finally {
      setSyncingYoutube(false);
    }
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
      }
    }
  };

  // Handle Photo Upload
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError("Vă rugăm să selectați o fotografie pentru încărcare.");
      return;
    }

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", title || "Cristian Văduva");
      formData.append("subtitle", subtitle);
      formData.append("category", category);
      formData.append("caption", caption);
      formData.append("location", location);
      formData.append("year", year);
      formData.append("orientation", orientation);
      formData.append("featured", featured.toString());
      formData.append("hero", hero.toString());

      const res = await fetch("/api/photos", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUploadSuccess(true);
        // Reset form
        setSelectedFile(null);
        setPreviewUrl(null);
        setTitle("");
        setSubtitle("");
        setCaption("");
        setHero(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        // Reload photos list
        await loadPhotos();
      } else {
        setUploadError(data.error || "Eroare la încărcarea fotografiei.");
      }
    } catch {
      setUploadError("A apărut o problemă de rețea. Vă rugăm să reîncercați.");
    } finally {
      setUploading(false);
    }
  };

  // Toggle Featured
  const handleToggleFeatured = async (photo: StoredPhoto) => {
    try {
      const res = await fetch(`/api/photos/${photo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !photo.featured }),
      });
      if (res.ok) {
        setPhotos((prev) =>
          prev.map((p) => (p.id === photo.id ? { ...p, featured: !p.featured } : p))
        );
      }
    } catch (err) {
      console.error("Error updating featured status:", err);
    }
  };

  // Set as Hero (Strictly 1 active Hero)
  const handleSetHero = async (photo: StoredPhoto) => {
    if (photo.hero) return; // Already hero

    if (!confirm(`Setați fotografia "${photo.title}" ca imagine principală HERO pe homepage? Aceasta va înlocui fotografia Hero actuală.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/photos/${photo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hero: true }),
      });
      if (res.ok) {
        setPhotos((prev) =>
          prev.map((p) => ({
            ...p,
            hero: p.id === photo.id,
          }))
        );
      }
    } catch (err) {
      console.error("Error setting hero photo:", err);
    }
  };

  // Delete Photo
  const handleDeletePhoto = async (photo: StoredPhoto) => {
    if (!confirm(`Sigur doriți să ștergeți fotografia "${photo.title}" din galerie și storage?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/photos/${photo.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPhotos((prev) => prev.filter((p) => p.id !== photo.id));
      } else {
        alert("Eroare la ștergerea fotografiei.");
      }
    } catch (err) {
      console.error("Error deleting photo:", err);
      alert("A apărut o eroare la ștergere.");
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
    }
  };

  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#B89B72]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-[#B89B72] border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Verificare acces executiv...
          </span>
        </div>
      </div>
    );
  }

  const filteredPhotos =
    selectedCategory === "ALL"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  const currentHeroPhoto = photos.find((p) => p.hero);

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F7] selection:bg-[#B89B72]/30 selection:text-white">
      <Navigation />

      <main className="pt-28 sm:pt-36 pb-28">
        <div className="site-container space-y-12">
          
          {/* Top Header / Control Center Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89B72]/15 border border-[#B89B72]/30 text-[#B89B72] text-[11px] font-mono tracking-widest uppercase">
                <Shield className="w-3.5 h-3.5" />
                Cristian Văduva Control Center
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Executive Media & Architecture Studio
              </h1>
              <p className="text-sm text-neutral-400 font-light">
                Gestionați stocarea fotografiilor, definiți fotografia Hero, arhiva Featured și monitorizați sincronizarea YouTube.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/gallery"
                target="_blank"
                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono tracking-wider uppercase flex items-center gap-2 text-neutral-300 hover:text-white transition-all"
              >
                <span>Vezi Galeria Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/tv"
                target="_blank"
                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono tracking-wider uppercase flex items-center gap-2 text-neutral-300 hover:text-white transition-all"
              >
                <span>Vezi YouTube TV</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-2xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Deconectare</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Cadrane Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Cadran 1: Total Photos & Roles */}
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-xs font-mono uppercase tracking-wider">Fotografii în Galerie</span>
                <ImageIcon className="w-5 h-5 text-[#B89B72]" />
              </div>
              <div className="mt-4">
                <div className="text-4xl font-semibold text-white">{photos.length}</div>
                <div className="text-xs text-neutral-400 mt-1">
                  {photos.filter((p) => p.featured).length} marcate Featured · 1 Hero activ
                </div>
              </div>
            </div>

            {/* Cadran 2: Active Hero Photo Status */}
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-xs font-mono uppercase tracking-wider">Fotografie Hero Activă</span>
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <div className="mt-4">
                <div className="text-sm font-semibold text-white truncate">
                  {currentHeroPhoto?.title || "Implicită"}
                </div>
                <div className="text-xs text-neutral-400 mt-1 font-mono">
                  {currentHeroPhoto?.category || "PORTRAIT"} · {currentHeroPhoto?.location || "București"}
                </div>
              </div>
            </div>

            {/* Cadran 3: YouTube Channel Sync Status */}
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-xs font-mono uppercase tracking-wider">YouTube Channel Sync</span>
                <YoutubeIcon className="w-5 h-5 text-red-500" />
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">
                    {youtubeCount !== null ? `${youtubeCount} video-uri` : "Sincronizat"}
                  </span>
                  <span className="text-xs text-green-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Auto-Sync
                  </span>
                </div>
                <div className="text-xs text-neutral-400 mt-1 flex items-center justify-between">
                  <span>@CristianVaduvaCV</span>
                  <button
                    onClick={loadYouTubeStats}
                    disabled={syncingYoutube}
                    className="text-[#B89B72] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${syncingYoutube ? "animate-spin" : ""}`} />
                    Sincronizează
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 1: UPLOAD NEW PHOTO CADRAN */}
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <div className="p-2.5 rounded-2xl bg-[#B89B72]/15 text-[#B89B72] border border-[#B89B72]/30">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Încărcare Fotografie & Atribuire Roluri
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Adăugați fotografii de înaltă rezoluție în storage persistent și atribuiți rolul (Hero, Featured sau Galerie).
                </p>
              </div>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Drag & Drop / Image Preview */}
                <div className="lg:col-span-5 space-y-4">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                    Fișier Imagine (JPG, PNG, WEBP, AVIF — max 25MB)
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-3xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[300px] overflow-hidden group ${
                      previewUrl
                        ? "border-[#B89B72]/50 bg-black/40"
                        : "border-white/15 hover:border-[#B89B72]/40 bg-white/[0.02] hover:bg-white/[0.04]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {previewUrl ? (
                      <div className="relative w-full h-full min-h-[260px] flex items-center justify-center">
                        <Image
                          src={previewUrl}
                          alt="Preview"
                          fill
                          className="object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl backdrop-blur-sm">
                          <span className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold">
                            Schimbă imaginea
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#B89B72] group-hover:scale-110 transition-transform">
                          <Plus className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-white">
                            Faceți clic sau trageți fotografia aici
                          </p>
                          <p className="text-xs text-neutral-400">
                            Recomandat: Rezoluție înaltă, portret sau landscape
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Metadata Fields */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Title */}
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Titlu Fotografie *
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ex: Cristian Văduva — Executive Advisory Desk"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72]"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Categorie Galerie
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as PhotoCategory)}
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/15 rounded-2xl text-white text-sm focus:outline-none focus:border-[#B89B72]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B89B72]" />
                      Locație
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ex: Bucharest / Monaco / Dubai"
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72]"
                    />
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B89B72]" />
                      An
                    </label>
                    <input
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="2026"
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72]"
                    />
                  </div>

                  {/* Orientation */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Format Orientare
                    </label>
                    <select
                      value={orientation}
                      onChange={(e) => setOrientation(e.target.value as PhotoOrientation)}
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/15 rounded-2xl text-white text-sm focus:outline-none focus:border-[#B89B72]"
                    >
                      <option value="landscape">Landscape (Orizontal)</option>
                      <option value="portrait">Portrait (Vertical)</option>
                      <option value="square">Square (Pătrat)</option>
                    </select>
                  </div>

                  {/* Caption */}
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Descriere / Context Editorial
                    </label>
                    <textarea
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      rows={3}
                      placeholder="Ex: Reprezentare privată și tranzacții ultra-prime..."
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72] resize-none"
                    />
                  </div>

                  {/* Role Checkboxes: Featured & Hero */}
                  <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Featured Checkbox */}
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <input
                        type="checkbox"
                        id="featured-toggle"
                        checked={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                        className="w-5 h-5 accent-[#B89B72] rounded cursor-pointer"
                      />
                      <label htmlFor="featured-toggle" className="text-xs text-neutral-200 cursor-pointer">
                        <span className="font-semibold block text-white">★ Featured Archive</span>
                        <span>Apare în secțiunea vizuală homepage</span>
                      </label>
                    </div>

                    {/* Hero Checkbox */}
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/[0.05] border border-amber-500/20">
                      <input
                        type="checkbox"
                        id="hero-toggle"
                        checked={hero}
                        onChange={(e) => setHero(e.target.checked)}
                        className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                      />
                      <label htmlFor="hero-toggle" className="text-xs text-neutral-200 cursor-pointer">
                        <span className="font-semibold block text-amber-300">👑 Setează ca Imagine Hero</span>
                        <span>Devine fotografia principală (max 1)</span>
                      </label>
                    </div>

                  </div>

                </div>
              </div>

              {/* Status Messages */}
              {uploadSuccess && (
                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Fotografia a fost încărcată cu succes în storage și publicată!</span>
                </div>
              )}

              {uploadError && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>{uploadError}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={uploading}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#B89B72]/20 disabled:opacity-50 cursor-pointer"
              >
                {uploading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Se încarcă în storage...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Încarcă & Salvează Fotografia</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* SECTION 2: PHOTO MANAGER & ROLES GRID */}
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#B89B72]/15 text-[#B89B72] border border-[#B89B72]/30">
                  <Grid className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    Galeria Activă & Gestiune Roluri ({filteredPhotos.length})
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Definiți fotografia principală Hero, marcați elementele Featured sau ștergeți imagini.
                  </p>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {["ALL", ...CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#B89B72] text-black font-semibold"
                        : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Bento Grid */}
            {loadingPhotos ? (
              <div className="py-16 text-center text-neutral-400">
                <div className="w-8 h-8 border-2 border-[#B89B72] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="font-mono text-xs">Se încarcă arhiva foto...</p>
              </div>
            ) : filteredPhotos.length === 0 ? (
              <div className="py-16 text-center text-neutral-500 space-y-2">
                <ImageIcon className="w-10 h-10 mx-auto opacity-40 text-[#B89B72]" />
                <p className="text-sm">Nu există fotografii în această categorie.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`bg-[#181818] border rounded-3xl overflow-hidden flex flex-col justify-between group transition-all shadow-xl ${
                      photo.hero
                        ? "border-amber-500/80 ring-2 ring-amber-500/20"
                        : "border-white/10 hover:border-[#B89B72]/50"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt || photo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                          {photo.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                        {photo.hero && (
                          <div className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-mono font-semibold flex items-center gap-1 shadow-md">
                            <Crown className="w-3 h-3 fill-black" />
                            HERO ACTIV
                          </div>
                        )}
                        {photo.featured && (
                          <div className="px-2.5 py-1 rounded-full bg-[#B89B72] text-black text-[10px] font-mono font-semibold flex items-center gap-1 shadow-md">
                            <Star className="w-3 h-3 fill-black" />
                            Featured
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-white line-clamp-1">
                          {photo.title}
                        </h3>
                        {photo.caption && (
                          <p className="text-xs text-neutral-400 line-clamp-2 mt-1 font-light">
                            {photo.caption}
                          </p>
                        )}
                        <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-mono mt-3">
                          {photo.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#B89B72]" />
                              {photo.location}
                            </span>
                          )}
                          {photo.year && <span>· {photo.year}</span>}
                        </div>
                      </div>

                      {/* Action Bar: Hero Toggle, Featured Toggle, Delete */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                        
                        {/* Set as Hero Button */}
                        <button
                          onClick={() => handleSetHero(photo)}
                          disabled={photo.hero}
                          className={`px-3 py-2 rounded-xl text-xs font-mono uppercase flex items-center gap-1.5 transition-colors cursor-pointer ${
                            photo.hero
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-default"
                              : "bg-white/5 hover:bg-amber-500/10 text-neutral-400 hover:text-amber-300 border border-white/5"
                          }`}
                          title="Setează ca imagine Hero"
                        >
                          <Crown className={`w-3.5 h-3.5 ${photo.hero ? "fill-amber-400" : ""}`} />
                          <span>{photo.hero ? "Hero Activ" : "Setează Hero"}</span>
                        </button>

                        {/* Featured Toggle Button */}
                        <button
                          onClick={() => handleToggleFeatured(photo)}
                          className={`px-3 py-2 rounded-xl text-xs font-mono uppercase flex items-center gap-1.5 transition-colors cursor-pointer ${
                            photo.featured
                              ? "bg-[#B89B72]/20 text-[#B89B72] border border-[#B89B72]/30"
                              : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
                          }`}
                          title="Comută prezența în Featured Archive"
                        >
                          <Star className={`w-3.5 h-3.5 ${photo.featured ? "fill-[#B89B72]" : ""}`} />
                          <span>{photo.featured ? "Featured" : "Fă Featured"}</span>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeletePhoto(photo)}
                          className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
                          title="Șterge fotografia"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
