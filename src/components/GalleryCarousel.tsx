import { motion } from 'framer-motion';

const slides = [
  { id: 1, img: "/gallery/jamaica.jpg", gradient: "from-brand-red to-brand-pink", label: "Jengibre + Jamaica" },
  { id: 2, img: "/gallery/menta.jpg", gradient: "from-brand-green to-emerald-700", label: "Jengibre + Menta" },
  { id: 3, img: "/gallery/limon.jpg", gradient: "from-yellow-400 to-yellow-600", label: "Limón + Jengibre" },
];

export default function GalleryCarousel() {
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <section id="galeria" className="py-32 bg-brand-black overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
          La Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-red text-glow">GingerBug</span>
        </h2>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left and Right Gradient Masks to fade the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex space-x-6 md:space-x-8 px-4"
          animate={{ x: [0, -2000] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {duplicatedSlides.map((slide, i) => (
            <motion.div 
              key={`${slide.id}-${i}`}
              whileHover={{ scale: 1.05 }}
              className={`min-w-[280px] md:min-w-[400px] h-[360px] md:h-[500px] rounded-[2.5rem] bg-gradient-to-br ${slide.gradient} border border-white/10 relative overflow-hidden group cursor-pointer shadow-2xl flex items-center justify-center hover:z-20`}
            >
              {/* Optional Glow Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
              
              {/* Component Image */}
              <img src={slide.img} alt={slide.label} className="absolute inset-0 w-full h-full object-contain p-6 relative z-0 transition-transform duration-700 group-hover:scale-110 mix-blend-screen opacity-90" />
              
              {/* Hover text label */}
              <div className="absolute bottom-10 left-8 right-8 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white font-bold text-2xl border-l-4 border-white pl-4 tracking-wide shadow-black drop-shadow-xl">
                  {slide.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
