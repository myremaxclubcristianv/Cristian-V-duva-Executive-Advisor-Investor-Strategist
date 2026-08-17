// components/OfficialYouTube.tsx
"use client";

/**
 * OfficialYouTube component – securely embeds a YouTube video that belongs to Cristian Văduva's official channel.
 *
 * Verification is performed server‑side via the `/api/verify-youtube` endpoint.
 * The component renders only after the endpoint confirms the video is from the official channel.
 * In all other cases (verification failure, missing API key, missing channel ID, network error,
 * invalid video ID) the iframe is **not** rendered – the component fails closed.
 */

import React, { useEffect, useState } from "react";

export type OfficialYouTubeProps = {
  /** YouTube video identifier (the part after `v=` in the URL). */
  videoId: string;
  /** Optional title for accessibility purposes. */
  title?: string;
};

export default function OfficialYouTube({
  videoId,
  title = "Official YouTube video",
}: OfficialYouTubeProps) {
  const [status, setStatus] = useState<"loading" | "valid" | "invalid">(
    "loading",
  );

  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch(`/api/verify-youtube?videoId=${videoId}`);
        if (!res.ok) {
          // Any non‑2xx response is treated as verification failure (fail‑closed)
          setStatus("invalid");
          return;
        }
        const data = await res.json();
        if (data.isValid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        // Network or unexpected error – fail closed
        setStatus("invalid");
      }
    }
    verify();
  }, [videoId]);

  if (status === "loading") {
    return (
      <p className="text-sm text-text-secondary" aria-live="polite">
        Verifying video…
      </p>
    );
  }

  if (status === "invalid") {
    return (
      <div className="border border-surface-secondary bg-surface-primary p-6">
        <p className="text-sm text-text-secondary">
          This video could not be verified as belonging to Cristian Văduva&#x27;s official
          YouTube channel.
        </p>
      </div>
    );
  }

  // status === "valid"
  return (
    <div className="relative w-full pt-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-md border border-surface-secondary"
      ></iframe>
    </div>
  );
}
