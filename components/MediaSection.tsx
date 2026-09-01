import Link from "next/link";
import { fetchOfficialYouTubeVideos } from "@/lib/youtubeAuto";
import { cleanText } from "@/lib/cleanText";

export default async function MediaSection() {
  const videos = await fetchOfficialYouTubeVideos();
  const featuredVideo = videos.length > 0 ? videos[0] : null;

  return (
    <section id="media" className="site-section bg-[#F7F7F5] text-[#111111] border-b border-black/5">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/5 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
              08 / MEDIA & BROADCAST
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight">
              Official Media & Strategic Commentary
            </h2>
          </div>
          <div className="font-mono text-xs text-[#6B6B6B] uppercase tracking-widest">
            INTERVIEWS · PODCASTS · YOUTUBE
          </div>
        </div>

        {/* Featured Video Player & List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Featured Video Player */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
              FEATURED BROADCAST
            </div>

            {featuredVideo ? (
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full border border-black/10 overflow-hidden bg-[#111111] shadow-md">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featuredVideo.id}`}
                    title={cleanText(featuredVideo.title)}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl text-[#111111] leading-snug">
                    {cleanText(featuredVideo.title)}
                  </h3>
                  <p className="font-sans text-xs text-[#6B6B6B] font-light">
                    Official YouTube commentary by Cristian Văduva.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-12 border border-black/10 bg-[#FFFFFF] text-center space-y-2">
                <span className="font-mono text-xs text-[#6B6B6B]">Media channel updating...</span>
              </div>
            )}
          </div>

          {/* Right Column: Media List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold border-b border-black/10 pb-3">
              OFFICIAL MEDIA DISPATCHES
            </div>

            <div className="space-y-4 divide-y divide-black/5">
              <div className="pt-3 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89B72]">01 · YOUTUBE BRIEFING</span>
                <h4 className="font-display text-base text-[#111111] leading-snug">
                  Real Estate Capital & Downside Asset Surveillance
                </h4>
                <p className="font-sans text-xs text-[#6B6B6B] font-light">
                  Strategic insights on European property positioning and risk mitigation.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89B72]">02 · INTERVIEW</span>
                <h4 className="font-display text-base text-[#111111] leading-snug">
                  Multidisciplinary Advisory in Volatile Economies
                </h4>
                <p className="font-sans text-xs text-[#6B6B6B] font-light">
                  Integrating economics, law, and environmental assessment into private investment decisions.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89B72]">03 · ARTICLE & PRESS</span>
                <h4 className="font-display text-base text-[#111111] leading-snug">
                  Cross-Border Wealth Structuring & Monaco Real Estate
                </h4>
                <p className="font-sans text-xs text-[#6B6B6B] font-light">
                  Key notes on Mediterranean luxury property acquisition and private wealth preservation.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B89B72] transition-colors py-2 touch-active"
              >
                <span>VIEW FULL MEDIA ARCHIVE →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
