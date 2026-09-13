"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function DriftingForm() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;

    mesh.rotation.y += 0.0022;
    mesh.rotation.x = THREE.MathUtils.lerp(
      mesh.rotation.x,
      pointer.current.y * 0.3,
      0.03
    );
    mesh.rotation.z = THREE.MathUtils.lerp(
      mesh.rotation.z,
      pointer.current.x * 0.15,
      0.03
    );
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 4]} />
      <MeshDistortMaterial
        color="#c9c7c0"
        roughness={0.25}
        metalness={0.6}
        distort={0.28}
        speed={1.4}
      />
    </mesh>
  );
}

export default function ThreeDShowcase() {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-ink md:aspect-[16/10]">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <Suspense fallback={null}>
          <DriftingForm />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between p-6 text-[10px] uppercase tracking-widest2 text-smoke md:p-8">
        <span>3D / Placeholder Asset</span>
        <span>Move to Explore</span>
      </div>
    </div>
  );
}
