"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export interface RoomConfig {
  id: string;
  name: string;
  textureSrc: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  foregroundSrc?: string;
  lightColor: string;
  lightIntensity: number;
}

// 10 Physical Architectural Room Thresholds
export const ARCHITECTURAL_ROOMS: RoomConfig[] = [
  {
    id: "exterior",
    name: "01 EXTERIOR AT DUSK",
    textureSrc: "/residence/exterior.png",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [16, 9.5, 1],
    lightColor: "#E6D5C0",
    lightIntensity: 1.2,
  },
  {
    id: "arrival",
    name: "02 ENTRANCE THRESHOLD",
    textureSrc: "/residence/living.png",
    position: [0, -6, -3],
    rotation: [0, 0.05, 0],
    scale: [16, 9.5, 1],
    lightColor: "#F5F3EF",
    lightIntensity: 1.0,
  },
  {
    id: "living",
    name: "03 DOUBLE-HEIGHT SALON",
    textureSrc: "/residence/living.png",
    position: [0, -14, -6],
    rotation: [0, -0.05, 0],
    scale: [17, 10, 1],
    lightColor: "#E6D5C0",
    lightIntensity: 1.1,
  },
  {
    id: "study",
    name: "04 EXECUTIVE STUDY",
    textureSrc: "/residence/office.png",
    position: [3, -22, -9],
    rotation: [0, 0.08, 0],
    scale: [16, 9.5, 1],
    lightColor: "#D5C4AF",
    lightIntensity: 1.0,
  },
  {
    id: "library",
    name: "05 PRIVATE LIBRARY",
    textureSrc: "/residence/library.png",
    position: [-3, -30, -12],
    rotation: [0, -0.08, 0],
    scale: [16, 9.5, 1],
    lightColor: "#E6D5C0",
    lightIntensity: 0.9,
  },
  {
    id: "gallery",
    name: "06 ARCHITECTURAL GALLERY",
    textureSrc: "/residence/gallery.png",
    position: [0, -38, -15],
    rotation: [0, 0.04, 0],
    scale: [17, 10, 1],
    lightColor: "#F5F3EF",
    lightIntensity: 1.1,
  },
  {
    id: "command",
    name: "07 CAPITAL COMMAND",
    textureSrc: "/residence/command.png",
    position: [4, -46, -18],
    rotation: [0, 0.06, 0],
    scale: [16, 9.5, 1],
    lightColor: "#C5B49F",
    lightIntensity: 1.0,
  },
  {
    id: "cinema",
    name: "08 BROADCAST LOUNGE",
    textureSrc: "/residence/cinema.png",
    position: [-4, -54, -21],
    rotation: [0, -0.06, 0],
    scale: [16, 9.5, 1],
    lightColor: "#E6D5C0",
    lightIntensity: 0.95,
  },
  {
    id: "terrace",
    name: "09 PANORAMIC TERRACE",
    textureSrc: "/residence/terrace.png",
    position: [0, -62, -24],
    rotation: [0, 0, 0],
    scale: [18, 10.5, 1],
    lightColor: "#F5F3EF",
    lightIntensity: 1.3,
  },
  {
    id: "desk",
    name: "10 PRIVATE DESK",
    textureSrc: "/residence/office.png",
    position: [0, -70, -27],
    rotation: [0, 0, 0],
    scale: [16, 9.5, 1],
    lightColor: "#E6D5C0",
    lightIntensity: 1.1,
  },
];

function RoomMesh({ room }: { room: RoomConfig }) {
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(room.textureSrc);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [room.textureSrc]);

  return (
    <group position={room.position} rotation={room.rotation}>
      {/* Midground Room Texture Plane */}
      <mesh scale={room.scale}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} transparent opacity={0.68} />
      </mesh>

      {/* Foreground Architectural Framing Doorway Keyline */}
      <mesh position={[0, 0, 0.4]} scale={[room.scale[0] * 1.02, room.scale[1] * 1.02, 1]}>
        <ringGeometry args={[0.48, 0.50, 4]} />
        <meshBasicMaterial color="#E6D5C0" transparent opacity={0.15} wireframe />
      </mesh>

      {/* Threshold Spatial Occlusion Portal Silhouette */}
      <mesh position={[0, 0, 0.6]} scale={[room.scale[0] * 1.06, room.scale[1] * 1.06, 1]}>
        <ringGeometry args={[0.49, 0.53, 4]} />
        <meshBasicMaterial color="#080808" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export function CameraDolly({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  const scrollProgress = useRef(0);
  const targetCam = useRef({ x: 0, y: 0, z: 7, rx: 0, ry: 0 });

  useFrame(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
    }

    const p = scrollProgress.current;

    // Smooth continuous camera path through 10 room thresholds
    targetCam.current.y = -p * 70;
    targetCam.current.z = 7 - Math.sin(p * Math.PI) * 2;
    targetCam.current.x = Math.sin(p * Math.PI * 3) * 1.5;
    targetCam.current.ry = Math.sin(p * Math.PI * 2) * 0.06;
    targetCam.current.rx = Math.cos(p * Math.PI * 2) * 0.03;

    // Smooth lerp (t = 0.06)
    camera.position.x += (targetCam.current.x + mouse.x * 0.35 - camera.position.x) * 0.06;
    camera.position.y += (targetCam.current.y - camera.position.y) * 0.06;
    camera.position.z += (targetCam.current.z - camera.position.z) * 0.06;
    camera.rotation.y += (targetCam.current.ry - mouse.x * 0.02 - camera.rotation.y) * 0.06;
    camera.rotation.x += (targetCam.current.rx - mouse.y * 0.02 - camera.rotation.x) * 0.06;
  });

  return null;
}

export default function SpatialRoomController({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <>
      <fog attach="fog" args={["#080808", 4, 32]} />
      <CameraDolly mouse={mouse} />
      {ARCHITECTURAL_ROOMS.map((room) => (
        <RoomMesh key={room.id} room={room} />
      ))}
    </>
  );
}
