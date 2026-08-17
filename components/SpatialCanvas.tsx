"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function ArchitecturalScene() {
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
    const maxScroll = (document.body.scrollHeight || 1) - window.innerHeight;
    const progress = Math.min(1, Math.max(0, scrollYRef.current / (maxScroll || 1)));

    const t = state.clock.getElapsedTime();
    groupRef.current.position.z = progress * 40;
    groupRef.current.position.y = -progress * 5;
    groupRef.current.rotation.y = Math.sin(progress * Math.PI * 2) * 0.05 + Math.sin(t * 0.1) * 0.01;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[30, 40, 30]} intensity={1.5} color="#E6D5C0" />
      <pointLight position={[0, -2, -10]} intensity={1.2} color="#E6D5C0" />
      <Stars radius={200} depth={100} count={1200} factor={4} saturation={0} fade speed={1.0} />
    </group>
  );
}

export default function SpatialCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-95">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
          });
        }}
      >
        <ArchitecturalScene />
      </Canvas>
    </div>
  );
}
