import { motion } from 'framer-motion';
import { HeartPulse, Zap, Activity } from 'lucide-react';

const benefits = [
  {
    title: "Sistema Digestivo",
    description: "Equilibra tu flora intestinal con probióticos vivos y activos creados a partir de la fermentación.",
    icon: <Activity size={32} strokeWidth={1.5} />,
    color: "text-brand-green",
    bgHover: "hover:shadow-[0_0_40px_rgba(107,163,104,0.2)]",
    borderHover: "hover:border-brand-green/30"
  },
  {
    title: "Probióticos Activos",
    description: "Millones de bacterias beneficiosas generadas en nuestro cultivo de jengibre salvaje.",
    icon: <HeartPulse size={32} strokeWidth={1.5} />,
    color: "text-brand-pink",
    bgHover: "hover:shadow-[0_0_40px_rgba(214,69,107,0.2)]",
    borderHover: "hover:border-brand-pink/30"
  },
  {
    title: "Energía Limpia",
    description: "El jengibre crudo activa tu metabolismo naturalmente sin el clásico bajón inducido por cafeína.",
    icon: <Zap size={32} strokeWidth={1.5} />,
    color: "text-brand-red",
    bgHover: "hover:shadow-[0_0_40px_rgba(139,30,63,0.2)]",
    borderHover: "hover:border-brand-red/30"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Beneficios Reales</h2>
          <p className="text-xl text-brand-beige/70 max-w-2xl mx-auto font-light leading-relaxed">
            Creado de la tierra para tu cuerpo. Una infusión viva que hace mucho más que refrescarte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`glass-dark p-10 rounded-[2.5rem] transition-all duration-500 border border-white/5 ${benefit.bgHover} ${benefit.borderHover} cursor-default relative overflow-hidden group`}
            >
              {/* Subtle gradient glow inside card on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 ${benefit.color} transition-transform duration-500 group-hover:scale-110`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-brand-beige/70 leading-relaxed text-lg font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
