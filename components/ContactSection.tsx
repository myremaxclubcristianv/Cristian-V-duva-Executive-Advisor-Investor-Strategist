import PrivateConsultationForm from "./PrivateConsultationForm";
import { socialLinks } from "@/lib/socials";

export default function ContactSection() {
  return (
    <section id="contact" className="site-section bg-[#F7F7F5] text-[#111111] border-b border-[#E5E5E1]">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#E5E5E1] pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            12 / DIRECT DESK & CONTACT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[#111111] tracking-tight leading-tight">
            LET'S TALK ABOUT<br />
            <span className="text-[#B89B72] italic font-normal">THE DECISION.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#5E5E5E] font-light max-w-2xl leading-relaxed">
            Direct mandate inquiries for real estate acquisitions, capital placement, or board engagements with complete discretion.
          </p>
        </div>

        {/* Contact Split: Direct Desk Info + Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Desk Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-[#111111]">
                Direct Desk Communication
              </h3>
              <p className="font-sans text-sm text-[#5E5E5E] font-light leading-relaxed">
                Whether evaluating a high-stakes real estate acquisition, structuring international capital placement, or seeking independent advisory counsel, direct channels ensure immediate confidential response.
              </p>
            </div>

            <div className="space-y-6 font-mono text-xs uppercase tracking-wider">
              {/* Direct Email */}
              <div className="space-y-1 border-b border-[#E5E5E1] pb-4">
                <span className="text-[#B89B72] block font-semibold">DIRECT EMAIL</span>
                <a
                  href="mailto:cristianvaduva@duck.com"
                  className="text-base text-[#111111] hover:text-[#B89B72] transition-colors block font-sans lowercase font-normal"
                >
                  cristianvaduva@duck.com
                </a>
              </div>

              {/* Direct Phone */}
              <div className="space-y-1 border-b border-[#E5E5E1] pb-4">
                <span className="text-[#B89B72] block font-semibold">PHONE / WHATSAPP</span>
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#111111] hover:text-[#B89B72] transition-colors block font-sans font-normal"
                >
                  +43 650 953 6345
                </a>
              </div>

              {/* Telegram */}
              <div className="space-y-1 border-b border-[#E5E5E1] pb-4">
                <span className="text-[#B89B72] block font-semibold">TELEGRAM DESK</span>
                <a
                  href="https://t.me/cristianvaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#111111] hover:text-[#B89B72] transition-colors block font-sans font-normal"
                >
                  @cristianvaduva
                </a>
              </div>
            </div>

            {/* Verified Social Index */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">
                VERIFIED SOCIAL DESKS
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider px-3 py-2 bg-[#FFFFFF] border border-[#E5E5E1] text-[#111111] hover:border-[#B89B72] hover:text-[#B89B72] transition-colors"
                  >
                    {s.displayName} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Intake Form */}
          <div className="lg:col-span-7">
            <PrivateConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
