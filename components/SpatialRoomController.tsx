"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  WallWithDoorway,
  DoorFrame,
  Desk,
  ConsoleTable,
  CoffeeTable,
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
   HUMAN ARCHITECTURAL SCALE & CLEARANCE CONSTANTS
   
   - Camera Eye Level CAM_H = 1.70m
   - Standard Door Height DH = 2.40m
   - Standard Door Width DW = 2.20m
   - Standard Ceiling Height = 3.20m (Grand Salon = 5.0m)
   - Corridor Width W = 12.0m (X: -6.0m to +6.0m)
   - Central Doorway Corridor (X: -1.6m to +1.6m) kept 100% obstruction-free.
   ═══════════════════════════════════════════════════════════════ */

const W = 12.0;
const WT = 0.3;
const DW = 2.2;
const DH = 2.4;
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
   ROOM INTERIOR — Physical 3D Enclosed Room Shell
   ═══════════════════════════════════════════════════════════════ */

function RoomInterior({
  zFront,
  depth,
  height = 3.2,
  wallColor = PALETTE.wall,
  floorColor = PALETTE.floor,
  hasCeiling = true,
  hasSideWalls = true,
  children,
}: {
  zFront: number;
  depth: number;
  height?: number;
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
   DIVIDING WALL — Extruded 3D wall with doorway threshold
   ═══════════════════════════════════════════════════════════════ */

function DividingWall({
  z,
  height = 3.2,
  doorWidth = DW,
  doorHeight = DH,
  wallColor = PALETTE.wall,
  hasDoorway = true,
  frameColor = PALETTE.champagne,
}: {
  z: number;
  height?: number;
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
   BUILDING — Unified 10-space 3D architectural private residence
   ═══════════════════════════════════════════════════════════════ */

function Building() {
  return (
    <>
      {/* ═══ 01 ARRIVAL (z: 14 to 0, dusk exterior, focal point: ENTRANCE) ═══ */}
      <mesh position={[0, -0.02, 7]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24, 20]} />
        <meshStandardMaterial color={PALETTE.stone} roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      <ArchColumn position={[-2.8, 0, 1.2]} height={4.2} radius={0.24} color={PALETTE.stone} />
      <ArchColumn position={[2.8, 0, 1.2]} height={4.2} radius={0.24} color={PALETTE.stone} />
      <mesh position={[0, 4.4, 1.4]}>
        <boxGeometry args={[7.2, 0.16, 2.5]} />
        <meshStandardMaterial color={PALETTE.dark} roughness={0.8} side={THREE.DoubleSide} />
      </mesh>
      <pointLight position={[5, 6, 12]} intensity={1.6} color="#E6D5C0" distance={25} />

      {/* ═══ 02 FOYER (z: 0 to -8, 3.8h, focal point: AXIS TOWARD SALON) ═══ */}
      <RoomInterior zFront={0} depth={8} height={3.8}>
        <ConsoleTable position={[-3.8, 0, -4]} width={1.6} height={0.82} depth={0.4} color={PALETTE.walnut} />
        <ArtworkPanel position={[-3.8, 2.2, -4]} width={1.8} height={1.2} textureSrc="/residence/exterior.png" />
        <pointLight position={[0, 3.4, -4]} intensity={1.0} color="#E6D5C0" distance={10} />
      </RoomInterior>

      {/* ═══ 03 GRAND SALON (z: -8 to -20, 5.0h double-height, focal point: ROOM) ═══ */}
      <RoomInterior zFront={-8} depth={12} height={5.0}>
        <ArchColumn position={[-4.5, 0, -12]} height={5.0} radius={0.22} />
        <ArchColumn position={[4.5, 0, -12]} height={5.0} radius={0.22} />
        <Sofa position={[-2.8, 0, -14]} rotation={[0, Math.PI / 6, 0]} width={2.2} />
        <CoffeeTable position={[-2.8, 0, -12.5]} width={1.2} height={0.35} depth={0.6} />
        <ArtworkPanel position={[0, 3.2, -19.65]} width={4.5} height={2.6} textureSrc="/residence/living.png" />
        <pointLight position={[0, 4.5, -14]} intensity={1.4} color="#E6D5C0" distance={14} />
      </RoomInterior>

      {/* ═══ 04 EXECUTIVE STUDY (z: -20 to -30, 3.2h, focal point: DESK) ═══ */}
      <RoomInterior zFront={-20} depth={10} height={3.2} wallColor={PALETTE.walnut} floorColor={PALETTE.stone}>
        <Desk position={[0, 0, -25.5]} width={2.6} surfaceHeight={0.75} color={PALETTE.walnut} />
        <Chair position={[0, 0, -24.2]} rotation={[0, Math.PI, 0]} color={PALETTE.fabric} />
        <Chair position={[-0.9, 0, -26.8]} rotation={[0, Math.PI * 0.85, 0]} color={PALETTE.fabric} />
        <Bookshelf position={[-5.65, 0, -25]} rotation={[0, Math.PI / 2, 0]} width={1.8} height={3.0} />
        <MonitorScreen position={[0, 0.75, -25.5]} screenWidth={0.65} screenHeight={0.4} textureSrc="/residence/office.png" />
        <ArtworkPanel position={[5.65, 2.0, -25]} rotation={[0, -Math.PI / 2, 0]} width={2.2} height={1.4} textureSrc="/residence/office.png" />
        <pointLight position={[0, 2.2, -25.5]} intensity={1.5} color="#E6D5C0" distance={5} />
      </RoomInterior>

      {/* ═══ 05 PRIVATE LIBRARY (z: -30 to -40, 3.6h, focal point: LIBRARY WALL) ═══ */}
      <RoomInterior zFront={-30} depth={10} height={3.6} wallColor={PALETTE.walnut}>
        <Bookshelf position={[-5.65, 0, -33]} rotation={[0, Math.PI / 2, 0]} width={2.2} height={3.4} />
        <Bookshelf position={[-5.65, 0, -37]} rotation={[0, Math.PI / 2, 0]} width={2.2} height={3.4} />
        <Chair position={[3.2, 0, -35]} rotation={[0, -Math.PI / 4, 0]} color={PALETTE.fabric} />
        <ArtworkPanel position={[0, 2.4, -39.65]} width={3.6} height={2.2} textureSrc="/residence/library.png" />
        <pointLight position={[-3.5, 3.0, -35]} intensity={0.8} color="#E6D5C0" distance={8} />
      </RoomInterior>

      {/* ═══ 06 GALLERY (z: -40 to -50, 3.2h, focal point: ARTWORKS) ═══ */}
      <RoomInterior zFront={-40} depth={10} height={3.2} wallColor="#101010" floorColor={PALETTE.stone}>
        <ArtworkPanel position={[-5.65, 2.0, -43]} rotation={[0, Math.PI / 2, 0]} width={2.4} height={1.5} textureSrc="/residence/gallery.png" />
        <ArtworkPanel position={[5.65, 2.0, -45]} rotation={[0, -Math.PI / 2, 0]} width={2.6} height={1.6} textureSrc="/residence/gallery.png" />
        <ArtworkPanel position={[-5.65, 2.0, -47]} rotation={[0, Math.PI / 2, 0]} width={2.2} height={1.4} textureSrc="/residence/gallery.png" />
        <pointLight position={[-3.5, 2.8, -43]} intensity={0.9} color="#F5F3EF" distance={5} />
        <pointLight position={[3.5, 2.8, -45]} intensity={0.9} color="#F5F3EF" distance={5} />
      </RoomInterior>

      {/* ═══ 07 COMMAND ROOM (z: -50 to -60, 3.2h, focal point: CAPITAL OFFICE WORKSTATION) ═══ */}
      <RoomInterior zFront={-50} depth={10} height={3.2} wallColor={PALETTE.dark}>
        <Desk position={[0, 0, -55]} width={3.0} surfaceHeight={0.75} color={PALETTE.metal} />
        <Chair position={[0, 0, -53.8]} rotation={[0, Math.PI, 0]} color={PALETTE.fabric} />
        <MonitorScreen position={[-0.7, 0.75, -55.5]} screenWidth={0.65} screenHeight={0.4} textureSrc="/residence/command.png" />
        <MonitorScreen position={[0, 0.75, -55.6]} screenWidth={0.65} screenHeight={0.4} textureSrc="/residence/command.png" />
        <MonitorScreen position={[0.7, 0.75, -55.5]} screenWidth={0.65} screenHeight={0.4} textureSrc="/residence/command.png" />
        <pointLight position={[0, 2.5, -55]} intensity={0.8} color="#8899BB" distance={6} />
      </RoomInterior>

      {/* ═══ 08 CINEMA (z: -60 to -70, 3.4h, focal point: SCREEN) ═══ */}
      <RoomInterior zFront={-60} depth={10} height={3.4} wallColor={PALETTE.dark} floorColor={PALETTE.fabric}>
        <LargeScreen position={[0, 0, -69.65]} width={8.5} height={4.6} textureSrc="/residence/cinema.png" />
        <Sofa position={[-2.4, 0, -64.5]} width={2.2} />
        <Sofa position={[2.4, 0, -64.5]} width={2.2} />
        <pointLight position={[0, 2.8, -69]} intensity={0.6} color="#8090AA" distance={8} />
      </RoomInterior>

      {/* ═══ 09 TERRACE (z: -70 to -80, open sky dusk, focal point: HORIZON) ═══ */}
      <RoomInterior zFront={-70} depth={10} height={1.2} wallColor={PALETTE.wall} floorColor={PALETTE.stone} hasCeiling={false} hasSideWalls={false}>
        <TerraceRailing position={[-W / 2, 0, -75]} rotation={[0, Math.PI / 2, 0]} length={10} />
        <TerraceRailing position={[W / 2, 0, -75]} rotation={[0, Math.PI / 2, 0]} length={10} />
        <TerraceRailing position={[0, 0, -79.7]} length={W} />
        <ArtworkPanel position={[0, 3.8, -83.0]} width={20.0} height={8.0} textureSrc="/residence/terrace.png" frameColor={PALETTE.dark} />
        <pointLight position={[0, 6.0, -75]} intensity={1.6} color="#E6D5C0" distance={16} />
      </RoomInterior>

      {/* ═══ 10 PRIVATE DESK (z: -80 to -90, 3.2h, focal point: CONSULTATION DESK) ═══ */}
      <RoomInterior zFront={-80} depth={10} height={3.2} wallColor={PALETTE.walnut}>
        <Desk position={[0, 0, -85.5]} width={2.4} surfaceHeight={0.75} color={PALETTE.walnut} />
        <Chair position={[0, 0, -84.2]} rotation={[0, Math.PI, 0]} color={PALETTE.fabric} />
        <Chair position={[-1.1, 0, -86.8]} rotation={[0, Math.PI * 0.85, 0]} color={PALETTE.fabric} />
        <Chair position={[1.1, 0, -86.8]} rotation={[0, -Math.PI * 0.85, 0]} color={PALETTE.fabric} />
        <ArtworkPanel position={[0, 2.2, -89.65]} width={2.0} height={1.4} textureSrc="/residence/office.png" />
        <pointLight position={[0, 2.2, -85.2]} intensity={1.5} color="#E6D5C0" distance={5} />
      </RoomInterior>

      {/* ═══ THRESHOLD DIVIDING WALLS ═══ */}
      <DividingWall z={0} height={3.8} doorWidth={DW} doorHeight={DH} wallColor={PALETTE.stone} />
      <DividingWall z={-8} height={5.0} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-20} height={5.0} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-30} height={3.6} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-40} height={3.6} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-50} height={3.2} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-60} height={3.4} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-70} height={3.4} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-80} height={3.2} doorWidth={DW} doorHeight={DH} />
      <DividingWall z={-90} height={3.2} hasDoorway={false} wallColor={PALETTE.walnut} />

      <ambientLight intensity={0.14} color="#E6D5C0" />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CAMERA DOLLY — Human-Height Eye Level Spline Path (Y = 1.70m)
   ═══════════════════════════════════════════════════════════════ */

export function CameraDolly({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const posRef = useRef(new THREE.Vector3(0, CAM_H, 14));
  const lookRef = useRef(new THREE.Vector3(0, CAM_H, 8));

  const cameraPath = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, CAM_H, 14),
        new THREE.Vector3(0, CAM_H, 7),
        new THREE.Vector3(0, CAM_H, -1),
        new THREE.Vector3(0, CAM_H, -5),
        new THREE.Vector3(0, CAM_H, -11),
        new THREE.Vector3(0, CAM_H, -16),
        new THREE.Vector3(0, CAM_H, -22),
        new THREE.Vector3(0, CAM_H, -26),
        new THREE.Vector3(0, CAM_H, -32),
        new THREE.Vector3(0, CAM_H, -36),
        new THREE.Vector3(0, CAM_H, -42),
        new THREE.Vector3(0, CAM_H, -46),
        new THREE.Vector3(0, CAM_H, -52),
        new THREE.Vector3(0, CAM_H, -56),
        new THREE.Vector3(0, CAM_H, -62),
        new THREE.Vector3(0, CAM_H, -66),
        new THREE.Vector3(0, CAM_H, -72),
        new THREE.Vector3(0, CAM_H, -76),
        new THREE.Vector3(0, CAM_H, -82),
        new THREE.Vector3(0, CAM_H, -86),
        new THREE.Vector3(0, CAM_H - 0.05, -88),
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

    const px = mouse.x * 0.12;
    const py = mouse.y * 0.06;

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
      <fog attach="fog" args={["#080808", 4, 22]} />
      <CameraDolly mouse={mouse} />
      <Building />
    </>
  );
}
