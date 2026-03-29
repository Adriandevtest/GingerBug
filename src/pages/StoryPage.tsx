import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Heart, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoryPage = () => {
  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden selection:bg-brand-pink selection:text-white">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/story-bg.jpg" 
          alt="GingerBug Story" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/20 backdrop-brightness-75" />
      </div>

      {/* Navigation & Back Button */}
      <div className="relative z-20 pt-28 pb-10 px-6 container mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-beige/60 hover:text-white transition-colors group mb-12"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="font-medium tracking-wide">Volver al Inicio</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/20 border border-brand-pink/30 text-brand-pink text-xs font-black uppercase tracking-[0.2em]"
              >
                Nuestra Historia
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                EL ORIGEN <br />
                <span className="text-brand-pink drop-shadow-[0_0_20px_rgba(214,69,107,0.3)]">DEL BUG.</span>
              </h1>
            </div>

            <div className="glass-dark border border-white/10 p-8 md:p-10 rounded-[2.5rem] space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 blur-3xl rounded-full -mr-10 -mt-10" />
              
              <p className="text-brand-beige/80 text-lg md:text-xl leading-relaxed font-medium">
                Todo comenzó en el corazón de Tabasco, entre los campos verdes y el calor vibrante de nuestra tierra. No buscábamos crear una bebida común, buscábamos un <span className="text-white font-bold italic">elixir natural</span> que capturara la esencia de la vida.
              </p>
              
              <p className="text-brand-beige/60 text-base md:text-lg leading-relaxed">
                GingerBug nació de un experimento familiar, combinando el picante audaz del jengibre orgánico con la dulzura de la miel regional. Ese "Bug" —nuestro cultivo vivo de fermentación natural— es el alma de cada botella, un regalo de la naturaleza para tu salud.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10 group-hover:scale-110 transition-transform">
                    <Leaf className="text-brand-pink" size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-beige/40">100% Orgánico</span>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10 group-hover:scale-110 transition-transform">
                    <Heart className="text-brand-pink" size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-beige/40">Con Amor</span>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10 group-hover:scale-110 transition-transform">
                    <Zap className="text-brand-pink" size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-beige/40">Vitalidad</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/productos" className="px-8 py-4 bg-white text-brand-black font-black rounded-2xl hover:bg-brand-pink hover:text-white transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-2">
                Explorar Sabores
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Experience Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
              <div className="absolute inset-0 bg-brand-pink/10 mix-blend-overlay" />
              <img src="/story-bg.jpg" alt="Experience" className="w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </div>
            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/20 blur-3xl rounded-full z-0 animate-pulse" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-brand-pink/10 blur-3xl rounded-full z-0" />
          </motion.div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="fixed bottom-10 right-10 z-20 hidden md:block">
        <div className="text-right">
          <p className="text-brand-pink font-black text-2xl tracking-tighter">GINGERBUG</p>
          <p className="text-brand-beige/20 text-[10px] font-bold tracking-[0.3em] uppercase">Est. 2024 • Tabasco</p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
