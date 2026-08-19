"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * Atmospheric Architectural Sculpture Component
 * Subtle dark stone and brushed metal geometric planes floating as a tertiary background layer.
 */
function ArchitecturalSculpture() {
  const meshGroupRef = useRef<THREE.Group>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY || 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!meshGroupRef.current) return;
    const maxScroll = Math.max(1, (document.body.scrollHeight || 1) - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollYRef.current / maxScroll));
    const t = state.clock.getElapsedTime();

    meshGroupRef.current.position.y = -progress * 1.8;
    meshGroupRef.current.position.z = progress * 4;
    meshGroupRef.current.rotation.y = Math.sin(progress * Math.PI) * 0.08 + Math.sin(t * 0.05) * 0.01;
    meshGroupRef.current.rotation.x = Math.cos(progress * Math.PI) * 0.04;
  });

  return (
    <group ref={meshGroupRef} position={[2.4, 0.2, 0]} scale={[0.75, 0.75, 0.75]}>
      {/* Studio Key Light */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 12]} intensity={1.5} color="#E6D5C0" />
      <directionalLight position={[-12, -8, -10]} intensity={0.3} color="#888888" />

      {/* Main Monolithic Slabs */}
      <mesh position={[0, 0, 0]} rotation={[0.4, 0.5, 0.2]}>
        <boxGeometry args={[2.2, 4.0, 0.15]} />
        <meshStandardMaterial
          color="#141414"
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      <mesh position={[-0.8, -0.6, 0.5]} rotation={[-0.3, 0.8, -0.2]}>
        <boxGeometry args={[1.6, 3.0, 0.12]} />
        <meshStandardMaterial
          color="#0E0E0E"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>

      {/* Champagne Accent Edge */}
      <mesh position={[0.85, 0.7, -0.3]} rotation={[0.2, -0.4, 0.5]}>
        <boxGeometry args={[1.1, 2.4, 0.08]} />
        <meshStandardMaterial
          color="#E6D5C0"
          roughness={0.25}
          metalness={0.85}
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
    <div className="fixed inset-0 z-0 pointer-events-none opacity-35 select-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
          });
        }}
      >
        <ArchitecturalSculpture />
      </Canvas>
    </div>
  );
}
