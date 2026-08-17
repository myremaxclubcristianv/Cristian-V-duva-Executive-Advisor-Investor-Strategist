import Link from "next/link";

export default function YouTubeChannelCTA() {
  return (
    <div className="text-center py-8 sm:py-12">
      <p className="text-accent uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
        YouTube Channel
      </p>
      <Link
        href="https://www.youtube.com/@CristianVaduvaCV"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-accent text-accent hover:bg-accent hover:text-background transition-colors text-sm uppercase tracking-wider"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122-2.136C.75 4.645 0 5.836 0 12c0 6.164.75 7.355.75 7.355.75 0 6.164.75 7.355 9.377.755a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136c.75-1.51.75-2.191.75-7.355 0-6.164-.75-7.355-.75-7.355 0-6.164.75-7.355-.75-9.377-.505a3.016 3.016 0 0 0-2.122 2.136C.75 17.355 0 18.546 0 12c0-6.164-.75-7.355-.75-7.355z" />
          <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        Explore YouTube
      </Link>
    </div>
  );
}
