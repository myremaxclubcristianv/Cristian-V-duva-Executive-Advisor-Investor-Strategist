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
   ARCHITECTURAL DIMENSIONS & CLEARANCE RULES
   
   - Corridor Width W = 14m (X: -7.0 to +7.0)
   - Wall Thickness WT = 0.3m
   - Doorway Width DW = 3.6m (Door corridor X: -1.8 to +1.8)
   - Doorway Height DH = 4.8m
   - Camera Height CAM_H = 1.70m (Human Eye Height)
   
   SPATIAL CLEARANCE RULE:
   No furniture is placed within the central doorway corridor (X: -2.0 to +2.0)
   at room transition boundaries, preventing camera obstruction & wall clipping.
   ═══════════════════════════════════════════════════════════════ */

const W = 14;
const WT = 0.3;
const DW = 3.6;
const DH = 4.8;
const CAM_H = 1.70;

const PALETTE = {
  wall: "#0D0D0D",
  floor: "#141414",
  ceiling: "#0A0A0A",
  walnut: "#1A1410",
  champagne: "#E6D5C0",
  dark: "#080808",
  stone: "#181818",
  metal: "#2A2A2A",
  fabric: "#0F0F0F",
};

/* ═══════════════════════════════════════════════════════════════
   ROOM INTERIOR — Enclosed 3D architectural room shell
   ═══════════════════════════════════════════════════════════════ */

function RoomInterior({
  zFront,
  depth,
  height,
  wallColor = PALETTE.wall,
  floorColor = PALETTE.floor,
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
      {/* 3D Floor Slab */}
      <mesh position={[0, 0, zCenter]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W, depth]} />
        <meshStandardMaterial
          color={floorColor}
          roughness={0.75}
          metalness={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3D Ceiling Slab */}
      {hasCeiling && (
        <mesh position={[0, height, zCenter]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[W, depth]} />
          <meshStandardMaterial
            color={PALETTE.ceiling}
            roughness={0.92}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Left Wall Slab */}
      {hasSideWalls && (
        <mesh position={[-W / 2, height / 2, zCenter]}>
          <boxGeometry args={[WT, height, depth]} />
          <meshStandardMaterial
            color={wallColor}
            roughness={0.88}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Right Wall Slab */}
      {hasSideWalls && (
        <mesh position={[W / 2, height / 2, zCenter]}>
          <boxGeometry args={[WT, height, depth]} />
          <meshStandardMaterial
            color={wallColor}
            roughness={0.88}
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
   DIVIDING WALL — Extruded 3D wall with doorway cutout
   ═══════════════════════════════════════════════════════════════ */

function DividingWall({
  z,
  height,
  doorWidth = DW,
  doorHeight = DH,
  wallColor = PALETTE.wall,
  hasDoorway = true,
  frameColor = PALETTE.champagne,
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
   BUILDING — Unified 10-space 3D architectural building
   ═══════════════════════════════════════════════════════════════ */

function Building() {
  return (
    <>
      {/* ═══ 01 ARRIVAL (z: 16 to 0, dusk exterior) ═══ */}
      <mesh position={[0, -0.02, 8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[28, 24]} />
        <meshStandardMaterial color={PALETTE.stone} roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      <ArchColumn position={[-3.2, 0, 1.5]} height={7} radius={0.28} color={PALETTE.stone} />
      <ArchColumn position={[3.2, 0, 1.5]} height={7} radius={0.28} color={PALETTE.stone} />
      <mesh position={[0, 7.3, 1.8]}>
        <boxGeometry args={[8.5, 0.18, 3.2]} />
        <meshStandardMaterial color={PALETTE.dark} roughness={0.8} side={THREE.DoubleSide} />
      </mesh>
      <ArtworkPanel
        position={[0, 4.6, 0.45]}
        width={5.2}
        height={3.1}
        textureSrc="/residence/exterior.png"
        frameColor={PALETTE.stone}
      />
      <pointLight position={[6, 9, 14]} intensity={1.8} color="#E6D5C0" distance={30} />
      <pointLight position={[-6, 8, 12]} intensity={1.0} color="#D5C4AF" distance={25} />

      {/* ═══ 02 FOYER (z: 0 to -10, 7h) ═══ */}
      <RoomInterior zFront={0} depth={10} height={7}>
        <pointLight position={[0, 6.2, -5]} intensity={1.1} color="#E6D5C0" distance={12} />
        <pointLight position={[0, 3.0, -3]} intensity={0.4} color="#F5F3EF" distance={8} />
      </RoomInterior>

      {/* ═══ 03 GRAND SALON (z: -10 to -24, 10h double-height) ═══ */}
      <RoomInterior zFront={-10} depth={14} height={10}>
        <ArtworkPanel
          position={[0, 5.2, -23.65]}
          width={6.2}
          height={3.6}
          textureSrc="/residence/living.png"
          frameColor={PALETTE.champagne}
        />
        <ArchColumn position={[-5.2, 0, -14]} height={10} />
        <ArchColumn position={[5.2, 0, -14]} height={10} />
        <ArchColumn position={[-5.2, 0, -20]} height={10} />
        <ArchColumn position={[5.2, 0, -20]} height={10} />
        {/* Sofas offset from central doorway axis X: -3.2 and +3.2 */}
        <Sofa position={[-3.2, 0, -17]} rotation={[0, Math.PI / 6, 0]} width={2.4} />
        <Sofa position={[3.2, 0, -17]} rotation={[0, -Math.PI / 6, 0]} width={2.4} />
        <pointLight position={[0, 9.2, -17]} intensity={1.6} color="#E6D5C0" distance={16} />
        <pointLight position={[-4, 5.0, -15]} intensity={0.5} color="#F5F3EF" distance={10} />
      </RoomInterior>

      {/* ═══ 04 EXECUTIVE STUDY (z: -24 to -34, 6h walnut) ═══ */}
      <RoomInterior zFront={-24} depth={10} height={6} wallColor={PALETTE.walnut} floorColor={PALETTE.stone}>
        <Desk position={[0, 0, -30]} width={2.8} color={PALETTE.walnut} />
        <Chair position={[0, 0, -28.6]} rotation={[0, Math.PI, 0]} color={PALETTE.fabric} />
        <Chair position={[0, 0, -31.4]} color={PALETTE.fabric} />
        <ArtworkPanel
          position={[-6.65, 3.0, -29]}
          rotation={[0, Math.PI / 2, 0]}
          width={3.0}
          height={2.0}
          textureSrc="/residence/office.png"
        />
        <pointLight position={[0, 2.6, -29.6]} intensity={1.6} color="#E6D5C0" distance={6} />
        <pointLight position={[0, 5.4, -29]} intensity={0.5} color="#D5C4AF" distance={10} />
      </RoomInterior>

      {/* ═══ 05 PRIVATE LIBRARY (z: -34 to -44, 8h walnut) ═══ */}
      <RoomInterior zFront={-34} depth={10} height={8} wallColor={PALETTE.walnut}>
        <Bookshelf position={[-6.5, 0, -37]} rotation={[0, Math.PI / 2, 0]} height={7} />
        <Bookshelf position={[-6.5, 0, -41]} rotation={[0, Math.PI / 2, 0]} height={7} />
        <Bookshelf position={[6.5, 0, -37]} rotation={[0, -Math.PI / 2, 0]} height={7} />
        <Bookshelf position={[6.5, 0, -41]} rotation={[0, -Math.PI / 2, 0]} height={7} />
        <ArtworkPanel
          position={[0, 4.2, -43.65]}
          width={4.2}
          height={2.6}
          textureSrc="/residence/library.png"
        />
        <pointLight position={[-4.5, 6.2, -39]} intensity={0.7} color="#E6D5C0" distance={8} />
        <pointLight position={[4.5, 6.2, -39]} intensity={0.7} color="#E6D5C0" distance={8} />
      </RoomInterior>

      {/* ═══ 06 GALLERY (z: -44 to -54, 7h clean walls) ═══ */}
      <RoomInterior zFront={-44} depth={10} height={7} wallColor="#101010" floorColor={PALETTE.stone}>
        <ArtworkPanel
          position={[-6.65, 3.5, -47]}
          rotation={[0, Math.PI / 2, 0]}
          width={2.6}
          height={1.8}
          textureSrc="/residence/gallery.png"
        />
        <ArtworkPanel
          position={[6.65, 3.5, -49]}
          rotation={[0, -Math.PI / 2, 0]}
          width={3.0}
          height={2.0}
          textureSrc="/residence/gallery.png"
        />
        <pointLight position={[-4.5, 5.8, -47]} intensity={1.0} color="#F5F3EF" distance={6} />
        <pointLight position={[4.5, 5.8, -49]} intensity={1.0} color="#F5F3EF" distance={6} />
      </RoomInterior>

      {/* ═══ 07 COMMAND ROOM (z: -54 to -64, 6h dark technical) ═══ */}
      <RoomInterior zFront={-54} depth={10} height={6} wallColor={PALETTE.dark}>
        <Desk position={[0, 0, -59.5]} width={3.2} color={PALETTE.metal} />
        <Chair position={[0, 0, -58.0]} rotation={[0, Math.PI, 0]} color={PALETTE.fabric} />
        <MonitorScreen position={[-0.8, 0.76, -60.0]} textureSrc="/residence/command.png" />
        <MonitorScreen position={[0, 0.76, -60.1]} textureSrc="/residence/command.png" />
        <MonitorScreen position={[0.8, 0.76, -60.0]} textureSrc="/residence/command.png" />
        <pointLight position={[0, 3.2, -59.0]} intensity={0.8} color="#8899BB" distance={7} />
      </RoomInterior>

      {/* ═══ 08 CINEMA (z: -64 to -74, 7h acoustic dark) ═══ */}
      <RoomInterior zFront={-64} depth={10} height={7} wallColor={PALETTE.dark} floorColor={PALETTE.fabric}>
        <LargeScreen position={[0, 0, -73.65]} width={9.6} height={5.2} textureSrc="/residence/cinema.png" />
        <Sofa position={[-2.8, 0, -68.5]} width={2.4} />
        <Sofa position={[2.8, 0, -68.5]} width={2.4} />
        <pointLight position={[0, 3.2, -73.0]} intensity={0.6} color="#8090AA" distance={9} />
      </RoomInterior>

      {/* ═══ 09 TERRACE (z: -74 to -84, open ceiling dusk) ═══ */}
      <RoomInterior zFront={-74} depth={10} height={1.2} wallColor={PALETTE.wall} floorColor={PALETTE.stone} hasCeiling={false} hasSideWalls={false}>
        <TerraceRailing position={[-W / 2, 0, -79]} rotation={[0, Math.PI / 2, 0]} length={10} />
        <TerraceRailing position={[W / 2, 0, -79]} rotation={[0, Math.PI / 2, 0]} length={10} />
        <TerraceRailing position={[0, 0, -83.7]} length={W} />
        <ArtworkPanel
          position={[0, 4.2, -87.0]}
          width={22.0}
          height={9.0}
          textureSrc="/residence/terrace.png"
          frameColor={PALETTE.dark}
        />
        <pointLight position={[0, 8.0, -79]} intensity={1.8} color="#E6D5C0" distance={18} />
      </RoomInterior>

      {/* ═══ 10 PRIVATE DESK (z: -84 to -94, 6h walnut) ═══ */}
      <RoomInterior zFront={-84} depth={10} height={6} wallColor={PALETTE.walnut}>
        <Desk position={[0, 0, -90.0]} width={2.4} color={PALETTE.walnut} />
        <Chair position={[0, 0, -88.5]} rotation={[0, Math.PI, 0]} color={PALETTE.fabric} />
        <Chair position={[-1.2, 0, -91.5]} rotation={[0, Math.PI * 0.85, 0]} color={PALETTE.fabric} />
        <Chair position={[1.2, 0, -91.5]} rotation={[0, -Math.PI * 0.85, 0]} color={PALETTE.fabric} />
        <ArtworkPanel position={[0, 3.5, -93.65]} width={2.2} height={1.6} textureSrc="/residence/office.png" />
        <pointLight position={[0, 2.6, -89.5]} intensity={1.6} color="#E6D5C0" distance={5} />
      </RoomInterior>

      {/* ═══ DIVIDING WALLS WITH EXTRUDED DOORWAYS ═══ */}
      <DividingWall z={0} height={7} doorWidth={3.6} doorHeight={5.2} wallColor={PALETTE.stone} />
      <DividingWall z={-10} height={10} doorWidth={4.0} doorHeight={6.0} />
      <DividingWall z={-24} height={10} />
      <DividingWall z={-34} height={8} />
      <DividingWall z={-44} height={8} />
      <DividingWall z={-54} height={7} />
      <DividingWall z={-64} height={7} />
      <DividingWall z={-74} height={7} doorWidth={4.0} doorHeight={5.2} />
      <DividingWall z={-84} height={6} />
      <DividingWall z={-94} height={6} hasDoorway={false} wallColor={PALETTE.walnut} />

      {/* Ambient Fill Light */}
      <ambientLight intensity={0.14} color="#E6D5C0" />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CAMERA DOLLY — Spline camera trajectory at human eye level
   ═══════════════════════════════════════════════════════════════ */

export function CameraDolly({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const posRef = useRef(new THREE.Vector3(0, CAM_H, 16));
  const lookRef = useRef(new THREE.Vector3(0, CAM_H, 10));

  const cameraPath = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, CAM_H, 16),
        new THREE.Vector3(0, CAM_H, 8),
        new THREE.Vector3(0, CAM_H, -2),
        new THREE.Vector3(0, CAM_H, -7),
        new THREE.Vector3(0, CAM_H, -14),
        new THREE.Vector3(0, CAM_H, -20),
        new THREE.Vector3(0, CAM_H, -26),
        new THREE.Vector3(0, CAM_H - 0.05, -30),
        new THREE.Vector3(0, CAM_H, -37),
        new THREE.Vector3(0, CAM_H, -42),
        new THREE.Vector3(0, CAM_H, -48),
        new THREE.Vector3(0, CAM_H, -52),
        new THREE.Vector3(0, CAM_H, -58),
        new THREE.Vector3(0, CAM_H, -62),
        new THREE.Vector3(0, CAM_H, -68),
        new THREE.Vector3(0, CAM_H, -72),
        new THREE.Vector3(0, CAM_H, -78),
        new THREE.Vector3(0, CAM_H + 0.05, -82),
        new THREE.Vector3(0, CAM_H, -87),
        new THREE.Vector3(0, CAM_H - 0.08, -90),
        new THREE.Vector3(0, CAM_H - 0.12, -92),
      ]),
    []
  );

  useFrame(() => {
    if (typeof window === "undefined") return;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const rawProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    const targetProgress = Math.min(1, Math.max(0, rawProgress));

    scrollRef.current += (targetProgress - scrollRef.current) * 0.045;
    const t = scrollRef.current;

    const targetPos = cameraPath.getPointAt(t);
    const lookT = Math.min(1, t + 0.035);
    const targetLook = cameraPath.getPointAt(lookT);

    const px = mouse.x * 0.15;
    const py = mouse.y * 0.08;

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
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════ */

export default function SpatialRoomController({
  mouse,
}: {
  mouse: { x: number; y: number };
}) {
  return (
    <>
      <fog attach="fog" args={["#080808", 4, 24]} />
      <CameraDolly mouse={mouse} />
      <Building />
    </>
  );
}
