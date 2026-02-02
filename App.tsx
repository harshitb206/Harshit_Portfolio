
import React, { useState, Suspense, useCallback, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { AnimatePresence } from 'framer-motion';

import GenesisLoader from './components/GenesisLoader';
import UIOverlay from './components/UIOverlay';
import NeuralNetwork from './components/NeuralNetwork';
import BlockGeometry from './components/BlockGeometry';

const BLOCKS = [
  { pos: [0, 0, 0], title: 'HOME' },
  { pos: [0, -10, -25], title: 'ABOUT' },
  { pos: [25, -15, -50], title: 'SKILLS' },
  { pos: [0, 15, -75], title: 'PROJECTS' },
  { pos: [-15, 0, -100], title: 'ACHIEVEMENTS' },
  { pos: [0, 0, -130], title: 'CONTACT' },
];

const CameraController: React.FC<{ activeBlock: number }> = ({ activeBlock }) => {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 8));
  const lookAtPos = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const block = BLOCKS[activeBlock];
    if (!block) return;
    const bp = block.pos;
    
    targetPos.current.set(bp[0], bp[1], bp[2] + 12);
    camera.position.lerp(targetPos.current, 0.05);
    
    const targetLookAt = new THREE.Vector3(bp[0], bp[1], bp[2]);
    lookAtPos.current.lerp(targetLookAt, 0.05);
    camera.lookAt(lookAtPos.current);
  });

  return null;
};

const Scene: React.FC<{ activeBlock: number }> = ({ activeBlock }) => {
  return (
    <>
      <color attach="background" args={['#020202']} />
      <fog attach="fog" args={['#020202', 10, 100]} />
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00ff88" />
      <spotLight position={[-20, 30, 10]} angle={0.2} penumbra={1} intensity={3} castShadow />

      <NeuralNetwork />
      <Stars radius={150} depth={100} count={5000} factor={4} saturation={0} fade speed={1} />

      {BLOCKS.map((b, i) => (
        <BlockGeometry 
          key={i} 
          position={b.pos as [number, number, number]} 
          title={b.title} 
          active={activeBlock === i} 
        />
      ))}

      <CameraController activeBlock={activeBlock} />
    </>
  );
};

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeBlock, setActiveBlock] = useState(0);
  const scrollTimeout = useRef<number | null>(null);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (!loaded) return;
    if (scrollTimeout.current) return;

    if (Math.abs(e.deltaY) > 60) {
      if (e.deltaY > 0) {
        setActiveBlock(prev => Math.min(prev + 1, BLOCKS.length - 1));
      } else {
        setActiveBlock(prev => Math.max(prev - 1, 0));
      }
      
      scrollTimeout.current = window.setTimeout(() => {
        scrollTimeout.current = null;
      }, 1000);
    }
  }, [loaded]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!loaded) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
      setActiveBlock(prev => Math.min(prev + 1, BLOCKS.length - 1));
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      setActiveBlock(prev => Math.max(prev - 1, 0));
    }
  }, [loaded]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll, handleKeyDown]);

  return (
    <div className="h-screen w-screen bg-[#020202] overflow-hidden select-none">
      <AnimatePresence>
        {!loaded && <GenesisLoader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <div className="fixed inset-0 z-0">
        <Canvas shadows dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Scene activeBlock={activeBlock} />
          </Suspense>
        </Canvas>
      </div>

      {loaded && (
        <UIOverlay 
          activeBlock={activeBlock} 
          onNavigate={(idx) => setActiveBlock(idx)} 
        />
      )}

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4 lg:hidden z-20 pointer-events-auto">
        <button 
          onClick={() => setActiveBlock(prev => Math.max(0, prev - 1))}
          className="w-12 h-12 rounded-full border border-[#00ff88]/30 bg-black/50 text-[#00ff88] flex items-center justify-center backdrop-blur-md"
        >
          ↑
        </button>
        <button 
          onClick={() => setActiveBlock(prev => Math.min(BLOCKS.length - 1, prev + 1))}
          className="w-12 h-12 rounded-full border border-[#00ff88]/30 bg-black/50 text-[#00ff88] flex items-center justify-center backdrop-blur-md"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default App;
