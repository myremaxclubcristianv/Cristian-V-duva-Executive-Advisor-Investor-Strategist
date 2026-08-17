import { contactInfo } from "@/lib/content/contact";
import { additionalSocials } from "@/lib/socials";

export default function SocialLinksSection() {
  const allSocials = [...contactInfo.socials, ...additionalSocials];

  return (
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Connect
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Social Presence
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Follow Cristian across platforms for insights, updates, and exclusive content.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {allSocials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 border border-surface-primary text-text-primary hover:border-accent hover:text-accent transition-colors text-xs sm:text-sm uppercase tracking-wider"
              >
                {social.displayName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
