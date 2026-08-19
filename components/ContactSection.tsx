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
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/40">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Desk Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                DIRECT CHANNELS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-text-primary leading-tight">
                The Executive Desk
              </h2>
              <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
                Direct engagement for investors, property principals, and institutional partners requiring discreet private consultation.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="bg-surface-primary border border-surface-secondary/80 p-6 sm:p-8 space-y-3 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary/70 block">
                CONFIDENTIAL EMAIL
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-display text-xl sm:text-2xl text-text-primary hover:text-accent transition-colors block break-all"
              >
                {contactInfo.email}
              </a>
              <p className="font-sans text-xs text-text-secondary/80 font-light pt-1">
                Monitored directly by the executive advisory team.
              </p>
            </div>

            {/* Instant Messaging Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatsappLink && (
                <a
                  href={whatsappLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-primary border border-surface-secondary/80 p-5 space-y-2 hover:border-accent/40 transition-quick group block shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">WHATSAPP</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                  <span className="font-display text-base text-text-primary block">Private Desk</span>
                  <span className="font-sans text-xs text-text-secondary/80 font-light block">Direct line for active mandates</span>
                </a>
              )}

              {telegramLink && (
                <a
                  href={telegramLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-primary border border-surface-secondary/80 p-5 space-y-2 hover:border-accent/40 transition-quick group block shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">TELEGRAM</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                  <span className="font-display text-base text-text-primary block">Capital Channel</span>
                  <span className="font-sans text-xs text-text-secondary/80 font-light block">Dispatches & macro briefings</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Native Form & External Dossiers */}
          <div className="lg:col-span-6 space-y-8">
            {/* Native Private Consultation Form */}
            <PrivateConsultationForm />

            {/* External Service Dossiers (Jotforms) */}
            <div className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-6 shadow-2xl">
              <div className="space-y-2 border-b border-surface-secondary/60 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  EXTERNAL DOSSIERS
                </span>
                <h3 className="font-display text-xl text-text-primary">
                  Specialized Service Applications
                </h3>
                <p className="font-sans text-xs text-text-secondary/90 font-light leading-relaxed">
                  Select a structured dossier below for property acquisitions, asset protection, or club membership.
                </p>
              </div>

              {/* Service Form Links (Jotform) */}
              {featuredForms.length > 0 && (
                <div className="space-y-3">
                  {featuredForms.map((form) => (
                    <a
                      key={form.id}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 border border-surface-secondary/70 bg-background/50 hover:border-accent/60 hover:bg-background transition-quick"
                    >
                      <span className="font-sans text-xs uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors font-medium">
                        {form.name}
                      </span>
                      <span className="text-accent font-mono text-xs group-hover:translate-x-1 transition-transform">
                        ACCESS dossier ↗
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
                  className="group flex items-center justify-between p-4 border border-surface-secondary/70 bg-background/50 hover:border-accent/60 hover:bg-background transition-quick"
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
