"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SpatialRoomController from "./SpatialRoomController";

function AmbientDustParticles() {
  const count = 140;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 32,
        y: (Math.random() - 0.5) * 80 - 35,
        z: (Math.random() - 0.5) * 30 - 10,
        speed: 0.2 + Math.random() * 0.4,
        scale: 0.03 + Math.random() * 0.05,
      });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + i) * 0.3,
        p.y + Math.cos(time * p.speed * 0.5 + i) * 0.2,
        p.z + Math.sin(time * 0.3 + i) * 0.2
      );
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#E6D5C0" transparent opacity={0.28} />
    </instancedMesh>
  );
}

export default function SpatialOfficeCanvas() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none opacity-100 bg-[#080808]"
    >
      <Canvas
        camera={{ position: [0, 1.7, 16], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.3} color="#E6D5C0" />

        <SpatialRoomController mouse={mouse} />
        <AmbientDustParticles />
      </Canvas>
    </div>
  );
}

