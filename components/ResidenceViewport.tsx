"use client";

import { useEffect, useState, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";

export interface ResidenceScene {
  id: string;
  sectionId: string;
  number: string;
  name: string;
  subtitle: string;
  src: string;
  alt: string;
  tone: {
    brightness: number;
    contrast: number;
    vignette: string;
  };
  camera: {
    enterScale: number;
    focusScale: number;
    exitScale: number;
    panX: number;
    panY: number;
  };
}

export const RESIDENCE_SCENES: ResidenceScene[] = [
  {
    id: "arrive",
    sectionId: "scene-arrive",
    number: "01",
    name: "ARRIVE",
    subtitle: "Hillside Residence & Arrival",
    src: "/residence/exterior.png",
    alt: "Hillside Private Residence Exterior at Dusk",
    tone: {
      brightness: 0.95,
      contrast: 1.05,
      vignette: "from-background/80 via-background/20 to-transparent",
    },
    camera: {
      enterScale: 1.00,
      focusScale: 1.03,
      exitScale: 1.10,
      panX: -1.0,
      panY: -1.5,
    },
  },
  {
    id: "live",
    sectionId: "scene-live",
    number: "02",
    name: "ENTER & LIVE",
    subtitle: "Grand Double-Height Salon",
    src: "/residence/living.png",
    alt: "Grand Double-Height Living Room with Architectural Glazing",
    tone: {
      brightness: 0.92,
      contrast: 1.05,
      vignette: "from-background/80 via-background/25 to-transparent",
    },
    camera: {
      enterScale: 1.08,
      focusScale: 1.01,
      exitScale: 1.05,
      panX: 1.2,
      panY: 1.0,
    },
  },
  {
    id: "work",
    sectionId: "scene-work",
    number: "03",
    name: "WORK",
    subtitle: "Dark Walnut Executive Study",
    src: "/residence/office.png",
    alt: "Executive Private Office in Dark Walnut and Marble",
    tone: {
      brightness: 0.90,
      contrast: 1.08,
      vignette: "from-background/85 via-background/30 to-transparent",
    },
    camera: {
      enterScale: 1.06,
      focusScale: 1.00,
      exitScale: 1.06,
      panX: -1.0,
      panY: -0.5,
    },
  },
  {
    id: "think",
    sectionId: "scene-think",
    number: "04",
    name: "THINK",
    subtitle: "Private Executive Library",
    src: "/residence/library.png",
    alt: "Floor-to-Ceiling Private Archive & Study",
    tone: {
      brightness: 0.92,
      contrast: 1.05,
      vignette: "from-background/80 via-background/25 to-transparent",
    },
    camera: {
      enterScale: 1.05,
      focusScale: 1.01,
      exitScale: 1.07,
      panX: 0.8,
      panY: 1.5,
    },
  },
  {
    id: "analyze",
    sectionId: "scene-analyze",
    number: "05",
    name: "ANALYZE",
    subtitle: "Capital Command Suite",
    src: "/residence/command.png",
    alt: "Capital Command and High-Level Market Intelligence Suite",
    tone: {
      brightness: 0.88,
      contrast: 1.10,
      vignette: "from-background/85 via-background/35 to-transparent",
    },
    camera: {
      enterScale: 1.02,
      focusScale: 1.06,
      exitScale: 1.02,
      panX: -1.2,
      panY: 0,
    },
  },
  {
    id: "exhibit",
    sectionId: "scene-exhibit",
    number: "06",
    name: "EXHIBIT",
    subtitle: "Curated Architectural Gallery",
    src: "/residence/gallery.png",
    alt: "Luxury Real Estate Exhibition and Art Gallery",
    tone: {
      brightness: 0.92,
      contrast: 1.05,
      vignette: "from-background/80 via-background/25 to-transparent",
    },
    camera: {
      enterScale: 1.07,
      focusScale: 1.01,
      exitScale: 1.06,
      panX: 1.0,
      panY: -0.8,
    },
  },
  {
    id: "watch",
    sectionId: "scene-watch",
    number: "07",
    name: "WATCH & MEDIA",
    subtitle: "Acoustic Broadcast Lounge",
    src: "/residence/cinema.png",
    alt: "Private Home Cinema and Executive Broadcast Lounge",
    tone: {
      brightness: 0.88,
      contrast: 1.10,
      vignette: "from-background/85 via-background/35 to-transparent",
    },
    camera: {
      enterScale: 1.05,
      focusScale: 1.00,
      exitScale: 1.08,
      panX: 0,
      panY: 0.8,
    },
  },
  {
    id: "retreat",
    sectionId: "scene-retreat",
    number: "08",
    name: "RETREAT",
    subtitle: "Panoramic Infinity Terrace",
    src: "/residence/terrace.png",
    alt: "Cliffside Infinity Terrace Overlooking the Horizon at Dusk",
    tone: {
      brightness: 0.95,
      contrast: 1.05,
      vignette: "from-background/80 via-background/20 to-transparent",
    },
    camera: {
      enterScale: 1.01,
      focusScale: 1.05,
      exitScale: 1.10,
      panX: 0,
      panY: -2.0,
    },
  },
];

const emptySubscribe = () => () => {};

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export default function ResidenceViewport() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  const [currentProgress, setCurrentProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll <= 0) return;

    const sceneCount = RESIDENCE_SCENES.length;
    const sectionElements = RESIDENCE_SCENES.map((s) =>
      document.getElementById(s.sectionId)
    );

    const hasSections = sectionElements.every((el) => el !== null);

    if (hasSections) {
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + window.innerHeight * 0.45;

      const sectionCenters = sectionElements.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        return rect.top + scrollY + rect.height * 0.45;
      });

      let calculatedProgress = 0;
      if (viewportCenter <= sectionCenters[0]) {
        calculatedProgress = 0;
      } else if (viewportCenter >= sectionCenters[sectionCenters.length - 1]) {
        calculatedProgress = sceneCount - 1;
      } else {
        for (let i = 0; i < sectionCenters.length - 1; i++) {
          const start = sectionCenters[i];
          const end = sectionCenters[i + 1];
          if (viewportCenter >= start && viewportCenter <= end) {
            const fraction = end > start ? (viewportCenter - start) / (end - start) : 0;
            calculatedProgress = i + fraction;
            break;
          }
        }
      }
      targetProgressRef.current = Math.max(0, Math.min(sceneCount - 1, calculatedProgress));
    } else {
      const raw = (window.scrollY / totalScroll) * (sceneCount - 1);
      targetProgressRef.current = Math.max(0, Math.min(sceneCount - 1, raw));
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    updateProgress();

    const handleScroll = () => {
      updateProgress();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    let lastProgress = 0;
    const loop = () => {
      const target = targetProgressRef.current;
      const step = prefersReducedMotion ? 0.25 : 0.08;
      const next = lastProgress + (target - lastProgress) * step;
      if (Math.abs(next - lastProgress) > 0.0001) {
        lastProgress = next;
        setCurrentProgress(next);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHydrated, updateProgress, prefersReducedMotion]);

  if (!isHydrated) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background select-none opacity-85"
      aria-hidden="true"
    >
      {RESIDENCE_SCENES.map((scene, idx) => {
        const dist = currentProgress - idx;
        const absDist = Math.abs(dist);

        const isVisible = absDist < 1.12;
        if (!isVisible) return null;

        const rawWeight = Math.max(0, 1 - absDist);
        const opacity = Math.sin((rawWeight * Math.PI) / 2);

        let currentScale = scene.camera.focusScale;
        if (dist < 0) {
          const factor = Math.min(1, Math.abs(dist));
          currentScale = scene.camera.focusScale + (scene.camera.enterScale - scene.camera.focusScale) * factor;
        } else {
          const factor = Math.min(1, dist);
          currentScale = scene.camera.focusScale + (scene.camera.exitScale - scene.camera.focusScale) * factor;
        }

        const currentPanX = prefersReducedMotion ? 0 : scene.camera.panX * dist;
        const currentPanY = prefersReducedMotion ? 0 : scene.camera.panY * dist;
        const effectiveScale = prefersReducedMotion ? 1.0 : currentScale;

        return (
          <div
            key={scene.id}
            className="absolute inset-0 will-change-transform will-change-opacity"
            style={{
              opacity: Number(opacity.toFixed(3)),
              filter: `brightness(${scene.tone.brightness}) contrast(${scene.tone.contrast})`,
              transition: "opacity 160ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src={scene.src}
              alt={scene.alt}
              fill
              priority={idx <= 1}
              sizes="100vw"
              className="object-cover object-center transform-gpu"
              style={{
                transform: `scale(${effectiveScale.toFixed(4)}) translate3d(${currentPanX.toFixed(2)}%, ${currentPanY.toFixed(2)}%, 0)`,
                transition: "transform 60ms linear",
              }}
            />

            {/* Atmospheric lighting gradient overlay tailored to architectural room */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${scene.tone.vignette}`}
            />

            {/* Natural subtle image mask */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        );
      })}
    </div>
  );
}
