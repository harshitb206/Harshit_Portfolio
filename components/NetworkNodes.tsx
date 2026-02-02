
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NetworkNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 120;

  const { positions, linePositions } = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      ));
    }

    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < 7) {
          lines.push(pts[i].x, pts[i].y, pts[i].z);
          lines.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    
    return {
      positions: new Float32Array(pts.flatMap(p => [p.x, p.y, p.z])),
      linePositions: new Float32Array(lines)
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00ff88" size={0.08} transparent opacity={0.6} sizeAttenuation />
      </points>
      
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ff88" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
};

export default NetworkNodes;
