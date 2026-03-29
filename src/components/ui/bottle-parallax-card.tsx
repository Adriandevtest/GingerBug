"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

// CSS bounce animation
const bounceStyle = `
@keyframes bounceFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.bounce-premium {
  animation: bounceFloat 4s ease-in-out infinite;
}
`;

interface BottleParallaxCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  className?: string;
  onAddToCart?: () => void;
}

export function BottleParallaxCard({
  title,
  description,
  price,
  imageUrl,
  className,
  onAddToCart,
}: BottleParallaxCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <style>{bounceStyle}</style>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={cn("relative w-full max-w-[360px] group perspective-1000", className)}
      >
        {/* Glow behind card */}
        <div className="absolute -inset-2 bg-gradient-to-r from-brand-pink/20 to-brand-red/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card Body */}
        <Card className="relative z-10 rounded-[2rem] border-white/10 bg-black/40 backdrop-blur-xl p-2 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 blur-3xl rounded-full translate-x-10 -translate-y-10" />
          
          <CardHeader className="pt-8 px-6 pb-2">
            <CardTitle className="text-2xl font-black text-white tracking-tight">{title}</CardTitle>
            <CardDescription className="text-brand-beige/50 text-xs font-bold uppercase tracking-widest">{description}</CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-8 pt-4">
            <div className="flex flex-col gap-4 mt-20">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">{price}</span>
                <span className="text-[10px] text-brand-beige/40 font-bold uppercase tracking-widest">355ml • Naturalmente Fermentado</span>
              </div>
              
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart?.();
                }}
                className="w-full bg-brand-pink hover:bg-brand-red text-white font-black py-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
              >
                <ShoppingBag size={18} className="group-hover/btn:scale-110 transition-transform" />
                Agregar al Carrito
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottle image - The Parallax Hero */}
        <motion.div
          className="absolute -top-16 -right-12 w-56 h-80 pointer-events-none z-20 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d", translateZ: "50px" }}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] bounce-premium mix-blend-screen"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
