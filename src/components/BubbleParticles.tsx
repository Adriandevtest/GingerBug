import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Bubble = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const [size] = useState(() => Math.random() * 8 + 4);
  const [initialX] = useState(() => Math.random() * 100);
  const [duration] = useState(() => Math.random() * 12 + 8);
  const [delay] = useState(() => Math.random() * 8);
  
  const springConfig = { damping: 25, stiffness: 120 };
  const offsetX = useSpring(0, springConfig);
  const offsetY = useSpring(0, springConfig);
  
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDistance = () => {
      if (!bubbleRef.current) return;
      
      const rect = bubbleRef.current.getBoundingClientRect();
      const bx = rect.left + rect.width / 2;
      const by = rect.top + rect.height / 2;
      
      const mx = mouseX.get();
      const my = mouseY.get();
      
      const dx = bx - mx;
      const dy = by - my;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        offsetX.set(dx * force * 0.6);
        offsetY.set(dy * force * 0.6);
      } else {
        offsetX.set(0);
        offsetY.set(0);
      }
    };

    const unsubscribeX = mouseX.onChange(checkDistance);
    const unsubscribeY = mouseY.onChange(checkDistance);
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, offsetX, offsetY]);

  return (
    <motion.div
      initial={{ y: '105vh', x: `${initialX}vw`, opacity: 0 }}
      animate={{ 
        y: '-10vh',
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      className="absolute"
      style={{ zIndex: 10 }}
    >
      <motion.div
        ref={bubbleRef}
        className="rounded-full bg-white/30 border border-white/50 backdrop-blur-[1px]"
        style={{
          width: size,
          height: size,
          x: offsetX,
          y: offsetY,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          mixBlendMode: 'plus-lighter'
        }}
      />
    </motion.div>
  );
};

export default function BubbleParticles() {
  const [bubbles, setBubbles] = useState<number[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setBubbles(Array.from({ length: 60 }, (_, i) => i));
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {bubbles.map((id) => (
        <Bubble key={id} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}
