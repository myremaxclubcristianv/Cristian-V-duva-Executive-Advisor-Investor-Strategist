"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  WallWithDoorway,
  DoorFrame,
  Desk,
  Chair,
  Bookshelf,
  MonitorScreen,
  LargeScreen,
  Sofa,
  TerraceRailing,
  ArtworkPanel,
  ArchColumn,
} from "./architecture/Geometry";

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS — Building dimensions & material palette
   
   All rooms are 14 units wide (consistent corridor).
   Camera at human eye-level (1.7 units).
   Building extends along -Z axis from z=0 (entrance) to z=-94.
   ═══════════════════════════════════════════════════════════════ */

const W = 14;
const WT = 0.3;
const DW = 3.2;
const DH = 4.8;
const CAM_H = 1.7;

const COL = {
  wall: "#0D0D0D",
  floor: "#141414",
  ceiling: "#0A0A0A",
  walnut: "#1A1410",
  accent: "#E6D5C0",
  dark: "#080808",
  stone: "#181818",
  metal: "#2A2A2A",
  fabric: "#0F0F0F",
};

/* ═══════════════════════════════════════════════════════════════
   ROOM INTERIOR — Floor + ceiling + side walls
   
   Creates the four enclosing surfaces of a room (no front/back).
   Front and back dividing walls are created separately to avoid
   z-fighting at shared boundaries.
   ═══════════════════════════════════════════════════════════════ */

function RoomInterior({
  zFront,
  depth,
  height,
  wallColor = COL.wall,
  floorColor = COL.floor,
  hasCeiling = true,
  hasSideWalls = true,
  children,
}: {
  zFront: number;
  depth: number;
  height: number;
  wallColor?: string;
  floorColor?: string;
  hasCeiling?: boolean;
  hasSideWalls?: boolean;
  children?: React.ReactNode;
}) {
  const zCenter = zFront - depth / 2;
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, 0, zCenter]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W, depth]} />
        <meshStandardMaterial
          color={floorColor}
          roughness={0.7}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ceiling */}
      {hasCeiling && (
        <mesh position={[0, height, zCenter]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[W, depth]} />
          <meshStandardMaterial
            color={COL.ceiling}
            roughness={0.95}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Left wall */}
      {hasSideWalls && (
        <mesh position={[-W / 2, height / 2, zCenter]}>
          <boxGeometry args={[WT, height, depth]} />
          <meshStandardMaterial
            color={wallColor}
            roughness={0.9}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Right wall */}
      {hasSideWalls && (
        <mesh position={[W / 2, height / 2, zCenter]}>
          <boxGeometry args={[WT, height, depth]} />
          <meshStandardMaterial
            color={wallColor}
            roughness={0.9}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {children}
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DIVIDING WALL — Wall between two rooms (with or without doorway)
   ═══════════════════════════════════════════════════════════════ */

function DividingWall({
  z,
  height,
  doorWidth = DW,
  doorHeight = DH,
  wallColor = COL.wall,
  hasDoorway = true,
  frameColor = COL.accent,
}: {
  z: number;
  height: number;
  doorWidth?: number;
  doorHeight?: number;
  wallColor?: string;
  hasDoorway?: boolean;
  frameColor?: string;
}) {
  if (hasDoorway) {
    return (
      <group>
        <WallWithDoorway
          wallWidth={W}
          wallHeight={height}
          doorWidth={doorWidth}
          doorHeight={doorHeight}
          position={[0, 0, z]}
          color={wallColor}
        />
        <DoorFrame
          position={[0, 0, z]}
          doorWidth={doorWidth}
          doorHeight={doorHeight}
          color={frameColor}
        />
      </group>
    );
  }
  return (
    <mesh position={[0, height / 2, z]}>
      <boxGeometry args={[W, height, WT]} />
      <meshStandardMaterial
        color={wallColor}
        roughness={0.9}
        metalness={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BUILDING — Complete 10-space architectural assembly
   
   Layout (along -Z axis):
   ───────────────────────────────────────────────────────────
   EXTERIOR    z > 0          Open approach
   ARRIVAL     z: 0 → -10     Entrance hall, 7h
   LIVING      z: -10 → -24   Grand salon, 10h (double height)
   STUDY       z: -24 → -34   Executive study, 6h
   LIBRARY     z: -34 → -44   Private library, 8h
   GALLERY     z: -44 → -54   Exhibition space, 7h
   COMMAND     z: -54 → -64   Capital intelligence, 6h
   CINEMA      z: -64 → -74   Broadcast lounge, 7h
   TERRACE     z: -74 → -84   Panoramic terrace, open ceiling
   DESK        z: -84 → -94   Private consultation, 6h
   ═══════════════════════════════════════════════════════════════ */

function Building() {
  return (
    <>
      {/* ═══ EXTERIOR ZONE ═══ */}
      {/* Ground plane (approach) */}
      <mesh position={[0, -0.02, 7]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 28]} />
        <meshStandardMaterial
          color={COL.stone}
          roughness={0.85}
          metalness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Exterior columns flanking entrance */}
      <ArchColumn position={[-2.8, 0, 1.2]} height={7} radius={0.25} color={COL.stone} />
      <ArchColumn position={[2.8, 0, 1.2]} height={7} radius={0.25} color={COL.stone} />
      {/* Canopy / overhang above entrance */}
      <mesh position={[0, 7.3, 1.5]}>
        <boxGeometry args={[8, 0.15, 3]} />
        <meshStandardMaterial color={COL.dark} roughness={0.8} side={THREE.DoubleSide} />
      </mesh>
      {/* Exterior facade artwork (above entrance) */}
      <ArtworkPanel
        position={[0, 4.5, 0.5]}
        width={5}
        height={3}
        textureSrc="/residence/exterior.png"
        frameColor={COL.stone}
      />
      {/* Exterior lighting (dusk) */}
      <pointLight position={[8, 10, 16]} intensity={2.0} color="#E6D5C0" distance={35} />
      <pointLight position={[-6, 9, 14]} intensity={1.2} color="#D5C4AF" distance={28} />

      {/* ═══ 02 ARRIVAL (z: 0 to -10, 7h) ═══ */}
      <RoomInterior zFront={0} depth={10} height={7}>
        <pointLight position={[0, 6.5, -5]} intensity={1.0} color="#E6D5C0" distance={14} />
        <pointLight position={[0, 3, -3]} intensity={0.4} color="#F5F3EF" distance={8} />
      </RoomInterior>

      {/* ═══ 03 LIVING (z: -10 to -24, 10h double-height) ═══ */}
      <RoomInterior zFront={-10} depth={14} height={10}>
        <ArtworkPanel
          position={[0, 5, -23.7]}
          width={6}
          height={3.5}
          textureSrc="/residence/living.png"
          frameColor={COL.accent}
        />
        <ArchColumn position={[-5, 0, -14]} height={10} />
        <ArchColumn position={[5, 0, -14]} height={10} />
        <ArchColumn position={[-5, 0, -20]} height={10} />
        <ArchColumn position={[5, 0, -20]} height={10} />
        <Sofa position={[-2, 0, -17]} rotation={[0, Math.PI / 7, 0]} width={2.5} />
        <Sofa position={[2.5, 0, -17]} rotation={[0, -Math.PI / 7, 0]} width={2.5} />
        <pointLight position={[0, 9.5, -17]} intensity={1.5} color="#E6D5C0" distance={18} />
        <pointLight position={[-4, 5.5, -14]} intensity={0.5} color="#F5F3EF" distance={10} />
        <pointLight position={[4, 5.5, -20]} intensity={0.5} color="#F5F3EF" distance={10} />
      </RoomInterior>

      {/* ═══ 04 STUDY (z: -24 to -34, 6h, walnut) ═══ */}
      <RoomInterior zFront={-24} depth={10} height={6} wallColor={COL.walnut} floorColor={COL.stone}>
        <Desk position={[0, 0, -30]} width={2.8} color={COL.walnut} />
        <Chair position={[0, 0, -28.5]} rotation={[0, Math.PI, 0]} color={COL.fabric} />
        <Chair position={[0, 0, -31.5]} color={COL.fabric} />
        <ArtworkPanel
          position={[-6.7, 3, -29]}
          rotation={[0, Math.PI / 2, 0]}
          width={3}
          height={2}
          textureSrc="/residence/office.png"
        />
        <pointLight position={[0, 2.5, -29.5]} intensity={1.6} color="#E6D5C0" distance={5} />
        <pointLight position={[0, 5.5, -29]} intensity={0.5} color="#D5C4AF" distance={10} />
      </RoomInterior>

      {/* ═══ 05 LIBRARY (z: -34 to -44, 8h, walnut) ═══ */}
      <RoomInterior zFront={-34} depth={10} height={8} wallColor={COL.walnut}>
        <Bookshelf position={[-6.5, 0, -37]} rotation={[0, Math.PI / 2, 0]} height={7} />
        <Bookshelf position={[-6.5, 0, -41]} rotation={[0, Math.PI / 2, 0]} height={7} />
        <Bookshelf position={[6.5, 0, -37]} rotation={[0, -Math.PI / 2, 0]} height={7} />
        <Bookshelf position={[6.5, 0, -41]} rotation={[0, -Math.PI / 2, 0]} height={7} />
        <Desk position={[0, 0, -39]} width={2.0} surfaceHeight={0.76} color={COL.walnut} />
        <ArtworkPanel
          position={[0, 4, -43.7]}
          width={4}
          height={2.5}
          textureSrc="/residence/library.png"
        />
        <pointLight position={[-5, 6.5, -39]} intensity={0.7} color="#E6D5C0" distance={8} />
        <pointLight position={[5, 6.5, -39]} intensity={0.7} color="#E6D5C0" distance={8} />
        <pointLight position={[0, 7.5, -39]} intensity={0.4} color="#F5F3EF" distance={12} />
      </RoomInterior>

      {/* ═══ 06 GALLERY (z: -44 to -54, 7h, clean walls) ═══ */}
      <RoomInterior zFront={-44} depth={10} height={7} wallColor="#101010" floorColor={COL.stone}>
        <ArtworkPanel
          position={[-6.7, 3.5, -47]}
          rotation={[0, Math.PI / 2, 0]}
          width={2.5}
          height={1.8}
          textureSrc="/residence/gallery.png"
        />
        <ArtworkPanel
          position={[-6.7, 3.5, -51]}
          rotation={[0, Math.PI / 2, 0]}
          width={2}
          height={1.5}
          frameColor="#181818"
        />
        <ArtworkPanel
          position={[6.7, 3.5, -49]}
          rotation={[0, -Math.PI / 2, 0]}
          width={3}
          height={2}
          textureSrc="/residence/gallery.png"
        />
        <pointLight position={[-5, 6, -47]} intensity={1.0} color="#F5F3EF" distance={5} />
        <pointLight position={[-5, 6, -51]} intensity={0.8} color="#F5F3EF" distance={5} />
        <pointLight position={[5, 6, -49]} intensity={1.0} color="#F5F3EF" distance={5} />
        <pointLight position={[0, 6.5, -49]} intensity={0.3} color="#E6D5C0" distance={12} />
      </RoomInterior>

      {/* ═══ 07 COMMAND (z: -54 to -64, 6h, dark technical) ═══ */}
      <RoomInterior zFront={-54} depth={10} height={6} wallColor={COL.dark}>
        <Desk position={[0, 0, -59.5]} width={3.2} color={COL.metal} />
        <Chair position={[0, 0, -58]} rotation={[0, Math.PI, 0]} color={COL.fabric} />
        <MonitorScreen position={[-0.8, 0.76, -60]} textureSrc="/residence/command.png" />
        <MonitorScreen position={[0, 0.76, -60.1]} textureSrc="/residence/command.png" />
        <MonitorScreen position={[0.8, 0.76, -60]} textureSrc="/residence/command.png" />
        <pointLight position={[0, 3, -59]} intensity={0.7} color="#8899BB" distance={6} />
        <pointLight position={[0, 5.5, -59]} intensity={0.3} color="#0D0D15" distance={10} />
      </RoomInterior>

      {/* ═══ 08 CINEMA (z: -64 to -74, 7h, acoustic dark) ═══ */}
      <RoomInterior zFront={-64} depth={10} height={7} wallColor={COL.dark} floorColor={COL.fabric}>
        <LargeScreen position={[0, 0, -73.6]} width={10} height={5.5} textureSrc="/residence/cinema.png" />
        <Sofa position={[-2, 0, -68]} width={2.5} />
        <Sofa position={[2, 0, -68]} width={2.5} />
        <pointLight position={[0, 3, -73]} intensity={0.5} color="#8090AA" distance={8} />
        <pointLight position={[0, 6.5, -69]} intensity={0.25} color="#E6D5C0" distance={12} />
      </RoomInterior>

      {/* ═══ 09 TERRACE (z: -74 to -84, open ceiling) ═══ */}
      <RoomInterior zFront={-74} depth={10} height={1.2} wallColor={COL.wall} floorColor={COL.stone} hasCeiling={false} hasSideWalls={false}>
        <TerraceRailing position={[-W / 2, 0, -79]} rotation={[0, Math.PI / 2, 0]} length={10} />
        <TerraceRailing position={[W / 2, 0, -79]} rotation={[0, Math.PI / 2, 0]} length={10} />
        <TerraceRailing position={[0, 0, -83.7]} length={W} />
        <ArtworkPanel
          position={[0, 4, -87]}
          width={22}
          height={9}
          textureSrc="/residence/terrace.png"
          frameColor={COL.dark}
        />
        <pointLight position={[0, 8, -79]} intensity={1.8} color="#E6D5C0" distance={18} />
        <pointLight position={[-5, 5, -79]} intensity={0.7} color="#D5C4AF" distance={12} />
      </RoomInterior>

      {/* ═══ 10 DESK (z: -84 to -94, 6h, walnut intimate) ═══ */}
      <RoomInterior zFront={-84} depth={10} height={6} wallColor={COL.walnut}>
        <Desk position={[0, 0, -90]} width={2.4} color={COL.walnut} />
        <Chair position={[0, 0, -88.5]} rotation={[0, Math.PI, 0]} color={COL.fabric} />
        <Chair position={[-1.2, 0, -91.5]} rotation={[0, Math.PI * 0.85, 0]} color={COL.fabric} />
        <Chair position={[1.2, 0, -91.5]} rotation={[0, -Math.PI * 0.85, 0]} color={COL.fabric} />
        <ArtworkPanel position={[0, 3.5, -93.7]} width={2} height={1.5} textureSrc="/residence/office.png" />
        <pointLight position={[0, 2.5, -89.5]} intensity={1.6} color="#E6D5C0" distance={5} />
        <pointLight position={[0, 5.5, -89]} intensity={0.4} color="#D5C4AF" distance={10} />
      </RoomInterior>

      {/* ═══════════════════════════════════════════════
         DIVIDING WALLS (between rooms)
         
         Each wall uses ExtrudeGeometry with a doorway hole.
         Height = max(adjacent rooms) for clean transitions.
         ═══════════════════════════════════════════════ */}

      {/* Facade entrance (z=0), height=7 */}
      <DividingWall z={0} height={7} doorWidth={3.5} doorHeight={5.5} wallColor={COL.stone} />

      {/* Arrival → Living (z=-10), height=10 (living double-height) */}
      <DividingWall z={-10} height={10} doorWidth={4} doorHeight={6} />

      {/* Living → Study (z=-24), height=10 */}
      <DividingWall z={-24} height={10} />

      {/* Study → Library (z=-34), height=8 */}
      <DividingWall z={-34} height={8} />

      {/* Library → Gallery (z=-44), height=8 */}
      <DividingWall z={-44} height={8} />

      {/* Gallery → Command (z=-54), height=7 */}
      <DividingWall z={-54} height={7} />

      {/* Command → Cinema (z=-64), height=7 */}
      <DividingWall z={-64} height={7} />

      {/* Cinema → Terrace (z=-74), height=7, wide opening */}
      <DividingWall z={-74} height={7} doorWidth={4} doorHeight={5} />

      {/* Terrace → Desk (z=-84), height=6 */}
      <DividingWall z={-84} height={6} />

      {/* Back wall of Desk (z=-94), solid, no doorway */}
      <DividingWall z={-94} height={6} hasDoorway={false} wallColor={COL.walnut} />

      {/* ═══ GLOBAL AMBIENT ═══ */}
      <ambientLight intensity={0.12} color="#E6D5C0" />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CAMERA DOLLY — CatmullRom spline through building
   
   Scroll progress (0→1) maps to camera position along a smooth
   3D path through all 10 spaces. Subtle lateral offsets create
   architectural rhythm. Mouse parallax adds presence.
   ═══════════════════════════════════════════════════════════════ */

export function CameraDolly({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const posRef = useRef(new THREE.Vector3(0, CAM_H, 16));
  const lookRef = useRef(new THREE.Vector3(0, CAM_H, 10));

  const cameraPath = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, CAM_H, 16),            // Exterior far
        new THREE.Vector3(0, CAM_H, 8),             // Approaching facade
        new THREE.Vector3(0, CAM_H, -2),            // Inside arrival
        new THREE.Vector3(0, CAM_H, -7),            // Arrival deep
        new THREE.Vector3(-0.3, CAM_H, -14),        // Living entrance
        new THREE.Vector3(0.3, CAM_H, -20),         // Living center
        new THREE.Vector3(0, CAM_H, -26),           // Study entrance
        new THREE.Vector3(0.2, CAM_H - 0.1, -30),  // Study (near desk)
        new THREE.Vector3(-0.2, CAM_H, -37),        // Library entrance
        new THREE.Vector3(0, CAM_H, -42),           // Library deep
        new THREE.Vector3(0.2, CAM_H, -48),         // Gallery
        new THREE.Vector3(-0.2, CAM_H, -52),        // Gallery deep
        new THREE.Vector3(0, CAM_H, -58),           // Command entrance
        new THREE.Vector3(0.2, CAM_H, -62),         // Command at workstation
        new THREE.Vector3(-0.2, CAM_H, -68),        // Cinema entrance
        new THREE.Vector3(0, CAM_H, -72),           // Cinema viewing
        new THREE.Vector3(0, CAM_H, -78),           // Terrace entrance
        new THREE.Vector3(0, CAM_H + 0.1, -82),     // Terrace edge
        new THREE.Vector3(0, CAM_H, -87),           // Desk entrance
        new THREE.Vector3(0, CAM_H - 0.1, -90),    // At desk
        new THREE.Vector3(0, CAM_H - 0.15, -92),   // Final position
      ]),
    []
  );

  useFrame(() => {
    if (typeof window === "undefined") return;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const rawProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    const targetProgress = Math.min(1, Math.max(0, rawProgress));

    // Smooth scroll → camera interpolation
    scrollRef.current += (targetProgress - scrollRef.current) * 0.04;
    const t = scrollRef.current;

    // Camera position from spline
    const targetPos = cameraPath.getPointAt(t);

    // Look slightly ahead on the path for natural forward gaze
    const lookT = Math.min(1, t + 0.035);
    const targetLook = cameraPath.getPointAt(lookT);

    // Mouse parallax offset (subtle architectural sway)
    const px = mouse.x * 0.25;
    const py = mouse.y * 0.12;

    // Smooth lerp to target
    posRef.current.lerp(
      new THREE.Vector3(targetPos.x + px, targetPos.y + py, targetPos.z),
      0.06
    );
    lookRef.current.lerp(targetLook, 0.06);

    camera.position.copy(posRef.current);
    camera.lookAt(lookRef.current);
  });

  return null;
}

/* ═══════════════════════════════════════════════════════════════
   AMBIENT DUST — Instanced particles throughout the building
   ═══════════════════════════════════════════════════════════════ */

function AmbientDust() {
  const count = 100;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const arr: { x: number; y: number; z: number; speed: number; scale: number }[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 18,
        y: Math.random() * 7 + 0.5,
        z: -Math.random() * 96,
        speed: 0.12 + Math.random() * 0.25,
        scale: 0.018 + Math.random() * 0.035,
      });
    }
    return arr;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + i) * 0.18,
        p.y + Math.cos(time * p.speed * 0.5 + i) * 0.12,
        p.z + Math.sin(time * 0.15 + i) * 0.12
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#E6D5C0" transparent opacity={0.15} />
    </instancedMesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT — Scene root
   ═══════════════════════════════════════════════════════════════ */

export default function SpatialRoomController({
  mouse,
}: {
  mouse: { x: number; y: number };
}) {
  return (
    <>
      <fog attach="fog" args={["#080808", 3, 22]} />
      <CameraDolly mouse={mouse} />
      <Building />
      <AmbientDust />
    </>
  );
}
