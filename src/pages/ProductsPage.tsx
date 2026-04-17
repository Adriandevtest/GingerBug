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
      price: "$180",
      imageUrl: "/gallery/jamaica.jpg",
    },
    {
      id: "pina-1",
      title: "GingerBug Piña",
      subtitle: "Piña Tropical & Jengibre",
      description: "Una explosión tropical refrescante. La dulzura natural de la piña se fusiona perfectamente con el picante del jengibre fermentado para una experiencia única.",
      price: "$50",
      imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "naranja-1",
      title: "GingerBug Naranja",
      subtitle: "Naranja Cítrica & Jengibre",
      description: "La energía cítrica de la naranja fresca combinada con el jengibre vivo fermentado. Refrescante, vigorizante y lleno de vitamina C natural.",
      price: "$50",
      imageUrl: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "mango-1",
      title: "GingerBug Mango",
      subtitle: "Mango Tropical & Jengibre",
      description: "Lo mejor del trópico en cada burbuja. La dulzura exótica del mango maduro se encuentra con el jengibre fermentado para un elixir vibrante y lleno de vida.",
      price: "$50",
      imageUrl: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "limon-1",
      title: "GingerBug Limón",
      subtitle: "Limón Cítrico & Jengibre",
      description: "Explosión cítrica balanceada. Limones seleccionados a mano para brindar una claridad refrescante y energía pura en cada burbuja.",
      price: "$50",
      imageUrl: "/gallery/limon.jpg",
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
                <span className="text-white font-bold tracking-tight">5 Sabores Disponibles</span>
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
