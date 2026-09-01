import { contactInfo } from "@/lib/content/contact";
import { getSocialByPlatform } from "@/lib/socials";
import PrivateConsultationForm from "@/components/PrivateConsultationForm";

export default function ContactSection() {
  const whatsappLink = getSocialByPlatform("whatsapp");
  const telegramLink = getSocialByPlatform("telegram");

  return (
    <section id="scene-contact" className="site-section bg-[#070707] text-[#F4F1EA] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Editorial Split Header & Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Private Office Narrative & Direct Desk Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6D5C0] font-semibold">
                <span>10 / PRIVATE CONSULTATION</span>
                <span className="w-6 h-[1px] bg-[#E6D5C0]/40" />
                <span>CONFIDENTIAL DESK</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-[#F4F1EA] tracking-tight">
                A confidential conversation about the decision ahead.
              </h2>
              <p className="font-sans text-sm text-[#A1A09B] font-light leading-relaxed">
                Direct engagement for investors, property principals, and institutional partners requiring discreet private consultation.
              </p>
            </div>

            {/* Confidential Email Line */}
            <div className="py-6 border-y border-white/10 space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#E6D5C0] font-semibold block">
                DIRECT CONFIDENTIAL EMAIL
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-display text-xl sm:text-2xl text-[#F4F1EA] hover:text-[#E6D5C0] transition-colors block break-all"
              >
                {contactInfo.email}
              </a>
              <p className="font-sans text-xs text-[#A1A09B] font-light pt-1">
                Monitored directly by Cristian Văduva and executive advisory team.
              </p>
            </div>

            {/* Direct Messaging Channels */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#E6D5C0] font-semibold block">
                DIRECT SECURE CHANNELS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatsappLink && (
                  <a
                    href={whatsappLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/15 bg-[#0D0D0D] hover:bg-[#141414] transition-colors group block touch-active min-h-[48px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#E6D5C0] font-semibold">WHATSAPP DESK</span>
                      <span className="text-[#E6D5C0] group-hover:translate-x-1 transition-transform">↗</span>
                    </div>
                    <span className="font-sans text-xs text-[#A1A09B] font-light block pt-1">Direct line for active mandates</span>
                  </a>
                )}

                {telegramLink && (
                  <a
                    href={telegramLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/15 bg-[#0D0D0D] hover:bg-[#141414] transition-colors group block touch-active min-h-[48px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#E6D5C0] font-semibold">TELEGRAM DESK</span>
                      <span className="text-[#E6D5C0] group-hover:translate-x-1 transition-transform">↗</span>
                    </div>
                    <span className="font-sans text-xs text-[#A1A09B] font-light block pt-1">Capital & macro briefings</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Intake Desk Form */}
          <div className="lg:col-span-7">
            <PrivateConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
