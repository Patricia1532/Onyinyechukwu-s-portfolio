import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
}

const SparkleCursor: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const addSparkle = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    const newSparkle: Sparkle = {
      id,
      x,
      y,
      size: Math.random() * 20 + 10, // Size between 10 and 30
      color: '#ef3985', // Using the primary pink color
      rotation: Math.random() * 360,
    };

    setSparkles((prev) => [...prev.slice(-20), newSparkle]); // Keep last 20 sparkles for performance

    // Remove sparkle after animation
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add a sparkle every few pixels of movement to avoid over-spawning
      if (Math.random() > 0.7) {
        addSparkle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addSparkle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ 
              opacity: 1, 
              scale: 0, 
              x: sparkle.x, 
              y: sparkle.y, 
              rotate: sparkle.rotation 
            }}
            animate={{ 
              opacity: 0, 
              scale: 1.5, 
              y: sparkle.y - 50, // Float upwards
              rotate: sparkle.rotation + 180 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{ 
              color: sparkle.color,
              left: -sparkle.size / 2,
              top: -sparkle.size / 2,
            }}
          >
            <span 
              className="material-symbols-outlined" 
              style={{ fontSize: sparkle.size }}
            >
              auto_awesome
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SparkleCursor;