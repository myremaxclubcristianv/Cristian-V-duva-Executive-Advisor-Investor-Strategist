import { contactInfo } from "@/lib/content/contact";
import { getFeaturedForms } from "@/lib/forms";
import { getSocialByPlatform } from "@/lib/socials";
import PrivateConsultationForm from "@/components/PrivateConsultationForm";

export default function ContactSection() {
  const featuredForms = getFeaturedForms();
  const whatsappLink = getSocialByPlatform("whatsapp");
  const linktreeLink = getSocialByPlatform("linktree");
  const telegramLink = getSocialByPlatform("telegram");

  return (
    <section id="scene-contact" className="site-section bg-[#080808] text-[#F5F3EF] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Desk & Monograph */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
                <span>08 / DIRECT INTAKE</span>
                <span className="w-6 h-[1px] bg-accent/40" />
                <span>CONTACT DESK</span>
              </div>
              <h2 className="font-display text-display-lg-fluid text-text-primary">
                The Executive Desk
              </h2>
              <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
                Direct engagement for investors, property principals, and institutional partners requiring discreet private consultation.
              </p>
            </div>

            {/* Confidential Email Line */}
            <div className="py-6 border-y border-white/10 space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block">
                CONFIDENTIAL EMAIL
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-display text-xl sm:text-2xl text-text-primary hover:text-accent transition-colors block break-all"
              >
                {contactInfo.email}
              </a>
              <p className="font-sans text-xs text-text-secondary/70 font-light pt-1">
                Monitored directly by the executive advisory team.
              </p>
            </div>

            {/* Direct Messaging Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatsappLink && (
                <a
                  href={whatsappLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-white/10 bg-[#0D0D0D] hover:bg-[#141414] hover:border-accent/40 transition-quick group block touch-active min-h-[96px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">WHATSAPP</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                  <span className="font-display text-base text-text-primary block pt-1">Private Desk</span>
                  <span className="font-sans text-xs text-text-secondary/70 font-light block">Direct line for active mandates</span>
                </a>
              )}

              {telegramLink && (
                <a
                  href={telegramLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-white/10 bg-[#0D0D0D] hover:bg-[#141414] hover:border-accent/40 transition-quick group block touch-active min-h-[96px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">TELEGRAM</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                  <span className="font-display text-base text-text-primary block pt-1">Capital Channel</span>
                  <span className="font-sans text-xs text-text-secondary/70 font-light block">Dispatches & macro briefings</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Intake Desk Form */}
          <div className="lg:col-span-6 space-y-8">
            <PrivateConsultationForm />

            {/* External Service Applications (Jotform) */}
            <div className="py-6 border-t border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block">
                  EXTERNAL DOSSIERS
                </span>
                <h3 className="font-display text-xl text-text-primary">
                  Specialized Service Applications
                </h3>
              </div>

              {featuredForms.length > 0 && (
                <div className="space-y-3">
                  {featuredForms.map((form) => (
                    <a
                      key={form.id}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 border border-white/10 bg-[#0D0D0D] hover:bg-[#141414] hover:border-accent/40 transition-quick touch-active min-h-[48px]"
                    >
                      <span className="font-sans text-xs uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors font-medium">
                        {form.name}
                      </span>
                      <span className="text-accent font-mono text-xs group-hover:translate-x-1 transition-transform">
                        ACCESS DOSSIER ↗
                      </span>
                    </a>
                  ))}
                </div>
              )}

              {linktreeLink && (
                <a
                  href={linktreeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 border border-white/10 bg-[#0D0D0D] hover:bg-[#141414] hover:border-accent/40 transition-quick touch-active min-h-[48px]"
                >
                  <span className="font-sans text-xs uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors font-medium">
                    Complete Executive Linktree Hub
                  </span>
                  <span className="text-accent font-mono text-xs group-hover:translate-x-1 transition-transform">
                    OPEN ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
