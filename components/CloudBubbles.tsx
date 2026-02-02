
import React from 'react';
import { motion } from 'framer-motion';

const CloudBubbles: React.FC = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#00ff88]/5 blur-3xl"
          initial={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CloudBubbles;
