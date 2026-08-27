"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// 8 Core Architectural Scenes
const SCENE_ASSETS = [
  { id: "exterior", src: "/residence/exterior.png", pos: [0, 0, 0], scale: [16, 10, 1] },
  { id: "living", src: "/residence/living.png", pos: [0, -8, -4], scale: [16, 10, 1] },
  { id: "office", src: "/residence/office.png", pos: [4, -16, -8], scale: [16, 10, 1] },
  { id: "library", src: "/residence/library.png", pos: [-4, -24, -12], scale: [16, 10, 1] },
  { id: "gallery", src: "/residence/gallery.png", pos: [0, -32, -16], scale: [16, 10, 1] },
  { id: "command", src: "/residence/command.png", pos: [4, -40, -20], scale: [16, 10, 1] },
  { id: "cinema", src: "/residence/cinema.png", pos: [-4, -48, -24], scale: [16, 10, 1] },
  { id: "terrace", src: "/residence/terrace.png", pos: [0, -56, -28], scale: [16, 10, 1] },
];

function AmbientDustParticles() {
  const count = 120;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 60 - 25,
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
      <meshBasicMaterial color="#E6D5C0" transparent opacity={0.25} />
    </instancedMesh>
  );
}

function ArchitecturalPlane({ src, pos, scale }: { src: string; pos: [number, number, number]; scale: [number, number, number] }) {
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(src);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [src]);

  return (
    <mesh position={pos} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent opacity={0.55} />
    </mesh>
  );
}

function SpatialCameraController({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  const targetPos = useRef({ x: 0, y: 0, z: 8 });
  const targetRot = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

      // Map progress (0 -> 1) to camera vertical path
      targetPos.current.y = -progress * 56;
      targetPos.current.z = 8 - Math.sin(progress * Math.PI) * 2;
      targetPos.current.x = Math.sin(progress * Math.PI * 2) * 1.5;
      targetRot.current.y = Math.sin(progress * Math.PI * 2) * 0.05;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    // Eased camera interpolation (lerp t = 0.06)
    camera.position.x += (targetPos.current.x + mouse.x * 0.4 - camera.position.x) * 0.06;
    camera.position.y += (targetPos.current.y - camera.position.y) * 0.06;
    camera.position.z += (targetPos.current.z - camera.position.z) * 0.06;
    camera.rotation.y += (targetRot.current.y - mouse.x * 0.02 - camera.rotation.y) * 0.06;
    camera.rotation.x += (-mouse.y * 0.02 - camera.rotation.x) * 0.06;
  });

  return null;
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
      className="fixed inset-0 z-0 pointer-events-none select-none opacity-90"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#E6D5C0" />
        
        {SCENE_ASSETS.map((asset) => (
          <ArchitecturalPlane
            key={asset.id}
            src={asset.src}
            pos={asset.pos as [number, number, number]}
            scale={asset.scale as [number, number, number]}
          />
        ))}

        <AmbientDustParticles />
        <SpatialCameraController mouse={mouse} />
      </Canvas>
    </div>
  );
}
