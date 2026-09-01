"use client";

import { useMemo } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════════
   WALL WITH DOORWAY — Shape + ExtrudeGeometry with rectangular hole
   ═══════════════════════════════════════════════════════════════ */

export function WallWithDoorway({
  wallWidth,
  wallHeight,
  doorWidth,
  doorHeight,
  thickness = 0.3,
  position,
  color = "#0D0D0D",
  roughness = 0.9,
}: {
  wallWidth: number;
  wallHeight: number;
  doorWidth: number;
  doorHeight: number;
  thickness?: number;
  position: [number, number, number];
  color?: string;
  roughness?: number;
}) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-wallWidth / 2, 0);
    shape.lineTo(wallWidth / 2, 0);
    shape.lineTo(wallWidth / 2, wallHeight);
    shape.lineTo(-wallWidth / 2, wallHeight);
    shape.closePath();

    const hole = new THREE.Path();
    hole.moveTo(-doorWidth / 2, 0);
    hole.lineTo(doorWidth / 2, 0);
    hole.lineTo(doorWidth / 2, doorHeight);
    hole.lineTo(-doorWidth / 2, doorHeight);
    hole.closePath();
    shape.holes.push(hole);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: thickness,
      bevelEnabled: false,
    });
    geo.translate(0, 0, -thickness / 2);
    return geo;
  }, [wallWidth, wallHeight, doorWidth, doorHeight, thickness]);

  return (
    <mesh geometry={geometry} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DOOR FRAME — Architectural jambs + lintel around opening
   ═══════════════════════════════════════════════════════════════ */

export function DoorFrame({
  position,
  doorWidth,
  doorHeight,
  color = "#E6D5C0",
}: {
  position: [number, number, number];
  doorWidth: number;
  doorHeight: number;
  color?: string;
}) {
  const fw = 0.08;
  const fd = 0.4;
  return (
    <group position={position}>
      <mesh position={[-doorWidth / 2 - fw / 2, doorHeight / 2, 0]}>
        <boxGeometry args={[fw, doorHeight, fd]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh position={[doorWidth / 2 + fw / 2, doorHeight / 2, 0]}>
        <boxGeometry args={[fw, doorHeight, fd]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh position={[0, doorHeight + fw / 2, 0]}>
        <boxGeometry args={[doorWidth + fw * 2, fw, fd]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.15} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXECUTIVE DESK — Surface + leg supports + back panel
   ═══════════════════════════════════════════════════════════════ */

export function Desk({
  position = [0, 0, 0] as [number, number, number],
  width = 2.8,
  surfaceHeight = 0.75,
  depth = 1.0,
  color = "#1A1410",
}: {
  position?: [number, number, number];
  width?: number;
  surfaceHeight?: number;
  depth?: number;
  color?: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, surfaceHeight, 0]}>
        <boxGeometry args={[width, 0.06, depth]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh position={[-width / 2 + 0.06, surfaceHeight / 2, 0]}>
        <boxGeometry args={[0.06, surfaceHeight, depth * 0.9]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[width / 2 - 0.06, surfaceHeight / 2, 0]}>
        <boxGeometry args={[0.06, surfaceHeight, depth * 0.9]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[0, surfaceHeight * 0.45, -depth / 2 + 0.03]}>
        <boxGeometry args={[width - 0.14, surfaceHeight * 0.65, 0.04]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONSOLE TABLE — Foyer entrance console
   ═══════════════════════════════════════════════════════════════ */

export function ConsoleTable({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  width = 1.8,
  height = 0.82,
  depth = 0.42,
  color = "#1A1410",
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, height, 0]}>
        <boxGeometry args={[width, 0.04, depth]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh position={[-width / 2 + 0.05, height / 2, 0]}>
        <boxGeometry args={[0.04, height, depth * 0.8]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
      <mesh position={[width / 2 - 0.05, height / 2, 0]}>
        <boxGeometry args={[0.04, height, depth * 0.8]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COFFEE TABLE — Low profile salon table
   ═══════════════════════════════════════════════════════════════ */

export function CoffeeTable({
  position = [0, 0, 0] as [number, number, number],
  width = 1.4,
  height = 0.38,
  depth = 0.7,
  color = "#181818",
}: {
  position?: [number, number, number];
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, height, 0]}>
        <boxGeometry args={[width, 0.04, depth]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[width * 0.85, height * 0.9, depth * 0.85]} />
        <meshStandardMaterial color="#0F0F0F" roughness={0.6} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OFFICE CHAIR — Seat + backrest + pedestal + star base
   ═══════════════════════════════════════════════════════════════ */

export function Chair({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  color = "#141414",
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[0.5, 0.06, 0.5]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.75, -0.22]}>
        <boxGeometry args={[0.48, 0.55, 0.05]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.44, 8]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.04, 5]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BOOKSHELF — Back panel + sides + shelves + book blocks
   ═══════════════════════════════════════════════════════════════ */

export function Bookshelf({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  width = 1.6,
  height = 3.2,
  depth = 0.35,
  color = "#1A1410",
  shelfCount = 5,
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
  shelfCount?: number;
}) {
  const shelves = useMemo(() => {
    const s: number[] = [];
    for (let i = 0; i < shelfCount; i++) {
      s.push((i + 1) * (height / (shelfCount + 1)));
    }
    return s;
  }, [shelfCount, height]);

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, height / 2, -depth / 2 + 0.015]}>
        <boxGeometry args={[width, height, 0.03]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
      </mesh>
      <mesh position={[-width / 2 + 0.015, height / 2, 0]}>
        <boxGeometry args={[0.03, height, depth]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      <mesh position={[width / 2 - 0.015, height / 2, 0]}>
        <boxGeometry args={[0.03, height, depth]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {shelves.map((y, i) => (
        <mesh key={`shelf-${i}`} position={[0, y, 0]}>
          <boxGeometry args={[width - 0.06, 0.025, depth]} />
          <meshStandardMaterial color={color} roughness={0.6} />
        </mesh>
      ))}
      {shelves.map((y, i) =>
        i % 2 === 0 ? (
          <mesh key={`books-${i}`} position={[0, y + 0.14, 0.02]}>
            <boxGeometry args={[width * 0.65, 0.22, depth * 0.65]} />
            <meshStandardMaterial
              color={i % 4 === 0 ? "#1E1815" : "#15120F"}
              roughness={0.85}
            />
          </mesh>
        ) : null
      )}
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MONITOR SCREEN — Screen + bezel + stand + base
   ═══════════════════════════════════════════════════════════════ */

export function MonitorScreen({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  screenWidth = 0.7,
  screenHeight = 0.42,
  textureSrc,
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  screenWidth?: number;
  screenHeight?: number;
  textureSrc?: string;
}) {
  const texture = useMemo(() => {
    if (!textureSrc) return null;
    const t = new THREE.TextureLoader().load(textureSrc);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [textureSrc]);

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, screenHeight / 2 + 0.3, -0.015]}>
        <boxGeometry args={[screenWidth, screenHeight, 0.02]} />
        {texture ? (
          <meshBasicMaterial map={texture} />
        ) : (
          <meshStandardMaterial
            color="#111118"
            roughness={0.3}
            metalness={0.4}
            emissive="#08080F"
            emissiveIntensity={0.4}
          />
        )}
      </mesh>
      <mesh position={[0, screenHeight / 2 + 0.3, -0.028]}>
        <boxGeometry args={[screenWidth + 0.04, screenHeight + 0.04, 0.012]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.05]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.01, 0.04]}>
        <boxGeometry args={[0.22, 0.02, 0.14]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LARGE SCREEN — Cinema / presentation projection surface
   ═══════════════════════════════════════════════════════════════ */

export function LargeScreen({
  position = [0, 0, 0] as [number, number, number],
  width = 8,
  height = 4.5,
  textureSrc,
}: {
  position?: [number, number, number];
  width?: number;
  height?: number;
  textureSrc?: string;
}) {
  const texture = useMemo(() => {
    if (!textureSrc) return null;
    const t = new THREE.TextureLoader().load(textureSrc);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [textureSrc]);

  return (
    <group position={position}>
      <mesh position={[0, height / 2 + 1, 0]}>
        <planeGeometry args={[width, height]} />
        {texture ? (
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        ) : (
          <meshStandardMaterial
            color="#0A0A12"
            roughness={0.3}
            emissive="#060610"
            emissiveIntensity={0.3}
            side={THREE.DoubleSide}
          />
        )}
      </mesh>
      <mesh position={[0, height / 2 + 1, -0.02]}>
        <boxGeometry args={[width + 0.12, height + 0.12, 0.04]} />
        <meshStandardMaterial color="#141414" roughness={0.5} metalness={0.3} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOFA — Modern low-profile sofa with base, back, arms
   ═══════════════════════════════════════════════════════════════ */

export function Sofa({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  width = 2.2,
  color = "#0F0F0F",
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  color?: string;
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[width, 0.35, 0.85]} />
        <meshStandardMaterial color={color} roughness={0.92} />
      </mesh>
      <mesh position={[0, 0.55, -0.35]}>
        <boxGeometry args={[width, 0.5, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.92} />
      </mesh>
      <mesh position={[-width / 2 + 0.075, 0.42, 0]}>
        <boxGeometry args={[0.12, 0.22, 0.85]} />
        <meshStandardMaterial color={color} roughness={0.92} />
      </mesh>
      <mesh position={[width / 2 - 0.075, 0.42, 0]}>
        <boxGeometry args={[0.12, 0.22, 0.85]} />
        <meshStandardMaterial color={color} roughness={0.92} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TERRACE RAILING — Posts + rails + glass panels
   ═══════════════════════════════════════════════════════════════ */

export function TerraceRailing({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  length = 14,
  height = 1.1,
  postCount = 8,
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  length?: number;
  height?: number;
  postCount?: number;
}) {
  const posts = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < postCount; i++) {
      arr.push(-length / 2 + (i / (postCount - 1)) * length);
    }
    return arr;
  }, [length, postCount]);

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, height, 0]}>
        <boxGeometry args={[length, 0.05, 0.05]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[length, 0.03, 0.05]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0, height / 2 + 0.07, 0]}>
        <boxGeometry args={[length - 0.08, height * 0.72, 0.01]} />
        <meshStandardMaterial
          color="#1A2030"
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
      {posts.map((x, i) => (
        <mesh key={`post-${i}`} position={[x, height / 2, 0]}>
          <boxGeometry args={[0.035, height, 0.035]} />
          <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ARTWORK PANEL — Framed picture with optional PNG texture
   ═══════════════════════════════════════════════════════════════ */

export function ArtworkPanel({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  width = 3,
  height = 2,
  textureSrc,
  frameColor = "#E6D5C0",
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  textureSrc?: string;
  frameColor?: string;
}) {
  const texture = useMemo(() => {
    if (!textureSrc) return null;
    const t = new THREE.TextureLoader().load(textureSrc);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [textureSrc]);

  const fw = 0.06;
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, -0.018]}>
        <boxGeometry args={[width + fw * 2, height + fw * 2, 0.025]} />
        <meshStandardMaterial color={frameColor} roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh>
        <planeGeometry args={[width, height]} />
        {texture ? (
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        ) : (
          <meshStandardMaterial color="#1A1A1A" roughness={0.8} side={THREE.DoubleSide} />
        )}
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ARCHITECTURAL COLUMN — Shaft + base + capital
   ═══════════════════════════════════════════════════════════════ */

export function ArchColumn({
  position = [0, 0, 0] as [number, number, number],
  height = 7,
  radius = 0.2,
  color = "#181818",
}: {
  position?: [number, number, number];
  height?: number;
  radius?: number;
  color?: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry args={[radius, radius, height, 12]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[radius * 1.35, radius * 1.35, 0.1, 12]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.15} />
      </mesh>
      <mesh position={[0, height - 0.05, 0]}>
        <cylinderGeometry args={[radius * 1.35, radius * 1.35, 0.1, 12]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.15} />
      </mesh>
    </group>
  );
}
