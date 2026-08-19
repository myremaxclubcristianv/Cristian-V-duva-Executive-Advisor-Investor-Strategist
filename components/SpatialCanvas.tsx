"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * Architectural Sculpture Component
 * Dark stone and brushed metal geometric planes with studio lighting.
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

    meshGroupRef.current.position.y = -progress * 2.2;
    meshGroupRef.current.position.z = progress * 5;
    meshGroupRef.current.rotation.y = Math.sin(progress * Math.PI * 1.5) * 0.14 + Math.sin(t * 0.1) * 0.02;
    meshGroupRef.current.rotation.x = Math.cos(progress * Math.PI) * 0.08;
  });

  return (
    <group ref={meshGroupRef} position={[2.0, 0.1, 0]} scale={[0.85, 0.85, 0.85]}>
      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[12, 18, 14]} intensity={2.2} color="#E6D5C0" />
      <directionalLight position={[-14, -10, -12]} intensity={0.6} color="#A1A1A1" />
      <pointLight position={[0, 5, 8]} intensity={1.2} color="#E6D5C0" />

      {/* Main Monolithic Slabs */}
      <mesh position={[0, 0, 0]} rotation={[0.4, 0.5, 0.2]}>
        <boxGeometry args={[2.5, 4.4, 0.2]} />
        <meshStandardMaterial
          color="#1A1A1A"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      <mesh position={[-0.85, -0.65, 0.65]} rotation={[-0.3, 0.8, -0.2]}>
        <boxGeometry args={[1.9, 3.4, 0.15]} />
        <meshStandardMaterial
          color="#121212"
          roughness={0.35}
          metalness={0.65}
        />
      </mesh>

      {/* Champagne Accent Metallic Edge */}
      <mesh position={[0.95, 0.75, -0.3]} rotation={[0.2, -0.4, 0.5]}>
        <boxGeometry args={[1.3, 2.8, 0.09]} />
        <meshStandardMaterial
          color="#E6D5C0"
          roughness={0.18}
          metalness={0.9}
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
    <div className="fixed inset-0 z-1 pointer-events-none opacity-90 select-none overflow-hidden">
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
