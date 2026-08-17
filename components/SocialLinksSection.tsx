import { contactInfo } from "@/lib/content/contact";
import { additionalSocials } from "@/lib/socials";

export default function SocialLinksSection() {
  const allSocials = [...contactInfo.socials, ...additionalSocials];

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
            DIGITAL PRESENCE & NETWORKS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary">
            Official Channels
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary/90 text-sm font-light leading-relaxed">
            Follow Cristian across verified platforms for real estate dispatches, media appearances, and investment perspectives.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {allSocials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-primary border border-surface-secondary/80 p-4 text-center hover:border-accent/50 transition-quick group block shadow-md"
            >
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-1">
                CHANNEL
              </span>
              <span className="font-display text-sm sm:text-base text-text-primary group-hover:text-accent transition-colors block">
                {social.displayName}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
