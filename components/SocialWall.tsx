import { socialLinks, additionalSocials } from "@/lib/socials";

export default function SocialWall() {
  const allLinks = [...socialLinks, ...additionalSocials];

  return (
    <section className="site-section bg-[#FFFFFF] text-[#111111] border-b border-black/5">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 border-b border-black/5 pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            09 / DIRECT ACCESS & SOCIAL CHANNELS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#111111] tracking-tight">
            Connect Across Verified Platforms
          </h2>
          <p className="font-sans text-sm text-[#6B6B6B] font-light">
            Direct channels for market briefings, real estate updates, and confidential inquiries.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allLinks.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-black/5 bg-[#F7F7F5] hover:bg-[#FFFFFF] hover:border-[#B89B72]/40 transition-colors group flex flex-col justify-between space-y-4 touch-active shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-black/5 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
                  {s.displayName}
                </span>
                <span className="text-[#B89B72] group-hover:translate-x-1 transition-transform">↗</span>
              </div>

              <div className="space-y-1">
                <span className="font-display text-lg text-[#111111] block">
                  Cristian Văduva Official
                </span>
                <span className="font-sans text-xs text-[#6B6B6B] font-light block">
                  Official verified channel for updates & direct desk access.
                </span>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-[#111111] font-semibold pt-2">
                OPEN PLATFORM →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
