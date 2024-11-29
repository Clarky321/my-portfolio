"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

// Компонент для отображения прогресса загрузки
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [0, 1, 5], fov: 50 }}>
      {/* Освещение */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />

      {/* Модель с анимацией */}
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>

      {/* Управление камерой */}
      <OrbitControls />
    </Canvas>
  );
}