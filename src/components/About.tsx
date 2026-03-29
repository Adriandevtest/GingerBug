import { motion } from 'framer-motion';
import { Leaf, Flame } from 'lucide-react';

export default function About() {
  return (
    <section id="origen" className="py-32 bg-brand-beige text-brand-black relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-brand-red tracking-tight"
          >
            La Magia de la Fermentación
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-black/80 font-medium leading-relaxed"
          >
            GingerBug nace del cultivo natural de bacterias beneficiosas en un ambiente controlado. 
            Nuestra receta utiliza solo ingredientes orgánicos para crear una bebida viva.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Hibiscus */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-brand-pink/10 flex items-center justify-center text-brand-pink shadow-sm">
                 <Leaf size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-brand-pink">Flor de Jamaica</h3>
              <p className="text-lg text-brand-black/70 leading-relaxed">
                Rica en antioxidantes y vitamina C. Aporta ese color vibrante y rojo profundo, 
                junto con un toque de acidez refrescante que equilibra el dulce natural de la fermentación.
              </p>
            </motion.div>

            {/* Ginger */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-brand-red/10 flex items-center justify-center text-brand-red shadow-sm">
                 <Flame size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-brand-red">Jengibre Fresco</h3>
              <p className="text-lg text-brand-black/70 leading-relaxed">
                El corazón energético del GingerBug. Aporta notas especiadas, mejora la digestión 
                y enciende tu metabolismo de forma completamente natural sin estimulantes artificiales.
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
