
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GenesisLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const logSequence = [
    "Initializing System...",
    "User Identity: Harshit Bhatia",
    "Compiling Skills Module...",
    "Syncing Project Data...",
    "Optimizing User Experience...",
    "System Status: READY"
  ];

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logSequence.length) {
        setLogs(prev => [...prev, logSequence[logIndex]]);
        logIndex++;
      }
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 text-[#00ff88]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-lg">
        <div className="mb-8 font-mono text-xs md:text-sm h-48 overflow-hidden flex flex-col justify-end">
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-1"
            >
              <span className="opacity-50">[{new Date().toLocaleTimeString()}]</span> {log}
            </motion.div>
          ))}
        </div>

        <div className="relative h-1 w-full bg-zinc-900 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#00ff88]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest opacity-60">
          <span>Loading Environment</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GenesisLoader;
