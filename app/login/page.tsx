"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lock, ArrowRight, ShieldCheck, KeyRound, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Vă rugăm introduceți codul de securitate.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Cod de securitate invalid.");
      }
    } catch {
      setError("Eroare de conexiune la server. Vă rugăm încercați din nou.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#0A0A0A] text-[#F5F5F7] selection:bg-[#B89B72]/30 selection:text-white">
      <Navigation />

      <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle Apple Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#B89B72]/15 via-[#8F7449]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Card / Bento Cadran */}
          <div className="bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/80 space-y-8">
            
            {/* Header / Security Badge */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 text-[#B89B72] shadow-inner mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B89B72]/10 border border-[#B89B72]/30 text-[#B89B72] text-[11px] font-mono tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Executive Access
              </div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Cristian Văduva
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xs mx-auto">
                Portal securizat pentru administrarea conținutului foto, sincronizarea YouTube și gestionarea platformei.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <KeyRound className="w-3.5 h-3.5 text-[#B89B72]" />
                  Cod de Securitate / Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Introduceți parola..."
                    autoFocus
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72] focus:ring-2 focus:ring-[#B89B72]/20 transition-all font-mono"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#B89B72]/20 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              >
                {loading ? (
                  <span className="inline-block animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                ) : (
                  <>
                    <span>Autentificare Securizată</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Helper */}
            <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-2 text-center text-[11px] text-neutral-500">
              <span className="flex items-center gap-1.5 text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-[#B89B72]" />
                Acces rezervat exclusiv administratorului
              </span>
              <Link href="/" className="hover:text-white transition-colors underline underline-offset-4">
                ← Înapoi la site-ul principal
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
