import { motion } from 'framer-motion';
import { BottleParallaxCard } from '../components/ui/bottle-parallax-card';
import { ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CardItem } from '../components/HoverRevealCards';

interface ProductsPageProps {
  onAddToCart: (product: CardItem) => void;
}

export default function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const products = [
    {
      id: "jamaica-1",
      title: "GingerBug Jamaica",
      subtitle: "Flor de Jamaica & Jengibre",
      description: "Nuestra mezcla insignia. Un vibrante elixir rojo profundamente antioxidante con el toque cítrico de la jamaica y el picante natural del jengibre.",
      price: "$65",
      imageUrl: "/gallery/jamaica.jpg",
    },
    {
      id: "menta-1",
      title: "GingerBug Menta",
      subtitle: "Menta Fresca & Jengibre",
      description: "La frescura definitiva. Infusión de menta orgánica que eleva las notas herbales del jengibre fermentado para un despertar instantáneo.",
      price: "$65",
      imageUrl: "/gallery/menta.jpg",
    },
    {
      id: "limon-1",
      title: "GingerBug Limón",
      subtitle: "Limón Eureka & Jengibre",
      description: "Explosión cítrica balanceada. Limones seleccionados a mano para brindar una claridad refrescante y energía pura en cada burbuja.",
      price: "$65",
      imageUrl: "/gallery/limon.jpg",
    },
    {
      id: "original-1",
      title: "GingerBug Original",
      subtitle: "Puro Jengibre Fermentado",
      description: "El sabor que lo inició todo. Notas terrosas, especiadas y potentes que celebran la pureza de la fermentación natural sin añadidos.",
      price: "$60",
      imageUrl: "/gallery/jamaica.jpg", // Placeholder for original
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24 px-6 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-brand-beige/50 hover:text-brand-pink transition-colors font-bold uppercase tracking-widest text-xs group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Regresar al inicio
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tight"
            >
              Catálogo <span className="text-brand-pink">GingerBug</span>
            </motion.h1>
            <p className="text-brand-beige/60 text-lg max-w-xl font-light">
              Explora nuestra colección de elixires vivos. Cada botella es una obra de arte fermentada durante 7 días para tu bienestar.
            </p>
          </div>

          <div className="flex items-center gap-4">
             <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 backdrop-blur-md">
                <Sparkles className="text-brand-pink" size={20} />
                <span className="text-white font-bold tracking-tight">4 Sabores Disponibles</span>
             </div>
             <button className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-brand-pink transition-all">
                <Filter size={20} />
             </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-24 gap-x-12 pt-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <BottleParallaxCard
                title={product.title}
                description={product.subtitle}
                price={product.price}
                imageUrl={product.imageUrl}
                onAddToCart={() => onAddToCart(product)}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Quality Badge */}
        <div className="mt-32 p-12 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-brand-pink/20 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-brand-pink" size={32} />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Calidad Viva Garantizada</h2>
            <p className="text-brand-beige/50 max-w-lg font-light leading-relaxed">
                Nuestros productos contienen cultivos vivos activos (SCOBY). 
                Mantener en refrigeración para preservar la efervescencia natural y el perfil de sabor.
            </p>
        </div>
      </div>
    </div>
  );
}
