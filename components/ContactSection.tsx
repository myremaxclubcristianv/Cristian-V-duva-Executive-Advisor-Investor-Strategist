import { contactInfo } from "@/lib/content/contact";
import { getFeaturedForms } from "@/lib/forms";
import { getSocialByPlatform } from "@/lib/socials";

export default function ContactSection() {
  const featuredForms = getFeaturedForms();
  const whatsappLink = getSocialByPlatform("whatsapp");
  const linktreeLink = getSocialByPlatform("linktree");

  return (
    <section className="py-section-lg sm:py-section-xl bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Contact
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Start a Conversation
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Private consultations and strategic advisory engagements.
            </p>
          </div>

          {/* Contact Card */}
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-surface-secondary p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
              {/* Email */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-text-secondary uppercase tracking-wider text-xs sm:text-sm">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-serif text-display-md sm:text-display-lg text-text-primary hover:text-accent transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* WhatsApp */}
              {whatsappLink && (
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-text-secondary uppercase tracking-wider text-xs sm:text-sm">
                    WhatsApp
                  </p>
                  <a
                    href={whatsappLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-surface-primary text-text-primary hover:border-accent hover:text-accent transition-colors text-xs sm:text-sm uppercase tracking-wider"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              )}

              {/* Forms */}
              {featuredForms.length > 0 && (
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-text-secondary uppercase tracking-wider text-xs sm:text-sm">
                    Services
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {featuredForms.map((form) => (
                      <a
                        key={form.id}
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 sm:px-6 py-2 sm:py-3 border border-surface-primary text-text-primary hover:border-accent hover:text-accent transition-colors text-xs sm:text-sm uppercase tracking-wider"
                      >
                        {form.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Linktree */}
              {linktreeLink && (
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-text-secondary uppercase tracking-wider text-xs sm:text-sm">
                    Quick Links
                  </p>
                  <a
                    href={linktreeLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-surface-primary text-text-primary hover:border-accent hover:text-accent transition-colors text-xs sm:text-sm uppercase tracking-wider"
                  >
                    Linktree
                  </a>
                </div>
              )}

              {/* Primary CTA */}
              <div className="pt-3 sm:pt-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-block w-full text-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-background font-medium hover:bg-accent/90 transition-colors"
                >
                  Request Private Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
