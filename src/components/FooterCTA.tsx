import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactSection from './ContactSection';
import { SocialTooltip } from './ui/social-media';

export default function FooterCTA() {
  return (
    <>
      <section className="relative py-32 bg-brand-red overflow-hidden flex items-center justify-center">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] rounded-full bg-brand-pink/40 blur-[100px] pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -top-[20%] -right-[20%] w-[70%] h-[120%] rounded-full bg-brand-black/20 blur-[100px] pointer-events-none"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
          >
            ¿Listo para despertar <br className="hidden md:block" />tu cuerpo?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Únete a la revolución de la fermentación y siente el verdadero poder vibrante de la naturaleza en cada botella.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-full bg-brand-black text-brand-beige font-bold text-xl overflow-hidden shadow-[0_0_40px_rgba(26,26,26,0.6)]"
          >
             <span className="relative z-10 flex items-center">
                Prueba GingerBug Hoy
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
             </span>
             {/* Glow inside button */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </section>

      <ContactSection />

      <footer className="bg-brand-black py-12 border-t border-white/5 text-brand-beige relative z-20">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="mb-6 md:mb-0 text-center md:text-left">
                  <a href="#" className="text-3xl font-bold tracking-tight text-white mb-2 block hover:text-brand-pink transition-colors">
                    <span className="text-brand-pink">Ginger</span>Bug
                  </a>
                  <p className="text-brand-beige/50 text-sm font-light">Fermentación artesanal premium.</p>
               </div>

               <div className="mb-6 md:mb-0">
                  <SocialTooltip items={[
                    {
                      href: "https://instagram.com",
                      ariaLabel: "Instagram",
                      tooltip: "Instagram",
                      color: "#E1306C",
                      svgUrl: "https://svgl.app/library/instagram-icon.svg",
                    },
                    {
                      href: "https://facebook.com",
                      ariaLabel: "Facebook",
                      tooltip: "Facebook",
                      color: "#1877F2",
                      svgUrl: "https://svgl.app/library/facebook-icon.svg",
                    },
                    {
                      href: "https://wa.me/529341023068",
                      ariaLabel: "WhatsApp",
                      tooltip: "WhatsApp",
                      color: "#25D366",
                      svgUrl: "https://svgl.app/library/whatsapp-icon.svg",
                    },
                    {
                      href: "https://twitter.com",
                      ariaLabel: "Twitter",
                      tooltip: "Twitter",
                      color: "#1DA1F2",
                      svgUrl: "https://svgl.app/library/x.svg",
                    },
                  ]} />
               </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-sm text-brand-beige/40 font-light">
               <p>&copy; {new Date().getFullYear()} GingerBug. Todos los derechos reservados.</p>
               <div className="space-x-6 mt-4 md:mt-0">
                  <a href="#" className="hover:text-brand-beige transition-colors">Términos</a>
                  <a href="#" className="hover:text-brand-beige transition-colors">Privacidad</a>
               </div>
            </div>
         </div>
      </footer>
    </>
  );
}
