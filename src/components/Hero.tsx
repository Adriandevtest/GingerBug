import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BubbleParticles from './BubbleParticles';
const heroBg = '/gallery/Heroo.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroBg} 
          alt="Gingerbug Bottle" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-black/20" /> {/* Extra base darkening */}
      <BubbleParticles />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-none tracking-tight mb-6 drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
        >
          <span className="text-white">GingerBug.</span>
          <br />
          <span className="text-brand-pink mt-2 md:mt-4 block font-extrabold pb-2">
            Un abrazo vivo en cada burbuja.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-relaxed px-4"
        >
          Una fusión vibrante de raíz de jengibre picante y flores de jamaica. Creado naturalmente para tu viaje de bienestar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md sm:max-w-none"
        >
          <Link 
            to="/productos"
            className="w-full sm:w-auto px-8 py-3 md:py-4 bg-[#1fb25c] text-white text-lg font-bold rounded-full hover:bg-green-600 transition-colors shadow-[0_0_20px_rgba(31,178,92,0.4)] tracking-wide text-center"
          >
            Explorar Ahora
          </Link>
          
          <Link 
            to="/historia"
            className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3 group shadow-lg tracking-wide"
          >
            Nuestra Historia 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
