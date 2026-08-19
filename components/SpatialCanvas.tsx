"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * Spatial Canvas Component - Quiet Ambient Architectural Detail
 * Renders an understated, minimal architectural plane floating quietly at opacity-20.
 */
function AmbientSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY || 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const maxScroll = Math.max(1, (document.body.scrollHeight || 1) - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollYRef.current / maxScroll));
    const t = state.clock.getElapsedTime();

    groupRef.current.position.y = -progress * 1.2;
    groupRef.current.rotation.y = Math.sin(progress * Math.PI) * 0.05 + Math.sin(t * 0.03) * 0.008;
  });

  return (
    <group ref={groupRef} position={[2.8, 0, 0]} scale={[0.6, 0.6, 0.6]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} color="#E6D5C0" />

      <mesh position={[0, 0, 0]} rotation={[0.3, 0.4, 0.1]}>
        <boxGeometry args={[1.8, 3.5, 0.1]} />
        <meshStandardMaterial
          color="#121212"
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
}

export default function SpatialCanvas() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20 select-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
          });
        }}
      >
        <AmbientSculpture />
      </Canvas>
    </div>
  );
}
