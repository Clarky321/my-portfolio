import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three"; // Импортируем THREE

export default function Model() {
  const group = useRef(); // Реф для группы
  const { scene, animations } = useGLTF("/models/nika.glb"); // Загружаем модель и анимации
  const { actions, clips } = useAnimations(animations, group); // Используем анимации

  // Лог анимационных клипов (полезно для отладки)
  useEffect(() => {
    console.log("Available animation clips:", clips); // Выводим доступные анимации
  }, [clips]);

  useEffect(() => {
    if (actions && actions["Animation"]) { // Замените "Animation" на реальное имя анимации из клипов
      const action = actions["Animation"];
      action.reset().play(); // Запускаем анимацию
      action.setLoop(THREE.LoopRepeat); // Устанавливаем зацикливание
    }
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
}

// Прелоад для оптимизации
useGLTF.preload("/models/nika.glb");