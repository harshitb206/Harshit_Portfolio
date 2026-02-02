
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface BlockProps {
  position: [number, number, number];
  title: string;
  active?: boolean;
}

const BlockGeometry: React.FC<BlockProps> = ({ position, title, active }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <MeshDistortMaterial
            color={active ? "#00ff88" : "#222"}
            speed={2}
            distort={0.4}
            transparent
            opacity={0.8}
            wireframe={!active}
          />
        </mesh>
      </Float>
      
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.25}
        color={active ? "#00ff88" : "#444"}
        font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2oWUg02q24uO-K_7O-v-6fH.woff2"
      >
        {title}
      </Text>
    </group>
  );
};

export default BlockGeometry;
