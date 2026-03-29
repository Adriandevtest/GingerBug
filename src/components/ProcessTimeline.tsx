import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    title: "1. Preparación del Cultivo",
    description: "Alimentamos nuestro SCOBY (cultivo simbiótico) con jengibre orgánico y azúcar de caña cruda.",
  },
  {
    title: "2. Infusión de Jamaica",
    description: "Extraemos el sabor intenso, color y antioxidantes de las flores de jamaica en agua filtrada a temperatura precisa.",
  },
  {
    title: "3. Fermentación Lenta",
    description: "Combinamos la infusión con el cultivo activo. Durante 7-14 días, la magia ocurre mientras ganamos probióticos y efervescencia.",
  },
  {
    title: "4. Embotellado Vivo",
    description: "Envasamos artesanalmente sin pasteurizar, manteniendo todas las bacterias beneficiosas vivas hasta tu refrigerador.",
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="py-32 bg-brand-beige text-brand-black relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-red mb-6">Artesanía Pura</h2>
          <p className="text-xl text-brand-black/70 max-w-2xl mx-auto font-light leading-relaxed">
            Nuestro proceso de fermentación salvaje toma tiempo, y esa es exactamente la clave de sus beneficios.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 flex justify-center -translate-x-1/2 rounded-full md:block">
            <div className="absolute inset-0 bg-brand-pink/20 rounded-full w-1"></div>
            <motion.div 
              className="absolute top-0 w-1.5 bg-brand-red rounded-full origin-top z-0 shadow-[0_0_10px_#8B1E3F]"
              style={{ scaleY: pathLength }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-brand-beige bg-brand-red flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,30,63,0.5)] mt-4 md:mt-0">
                     <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        viewport={{ margin: "-20%", once: false }}
                        className="w-2.5 h-2.5 rounded-full bg-white"
                     />
                </div>

                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ margin: "-100px", once: true }}
                  className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-pink/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                    <span className="text-[8rem] font-black text-brand-pink/5 absolute -top-8 -right-4 transform group-hover:scale-110 group-hover:text-brand-pink/10 transition-all duration-500 pointer-events-none select-none">{index + 1}</span>
                    <h3 className="text-2xl font-bold text-brand-red mb-4 relative z-10">{step.title}</h3>
                    <p className="text-lg text-brand-black/70 leading-relaxed relative z-10 font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Empty Space for the other side on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
