import HoverRevealCards from './HoverRevealCards';
import type { CardItem } from './HoverRevealCards';

const gingerbugProducts: CardItem[] = [
  {
    id: 1,
    title: 'Jengibre + Jamaica',
    subtitle: '1 Litro - Antioxidante',
    imageUrl: '/gallery/jamaica.jpg',
    price: '$180',
  },
  {
    id: 2,
    title: 'Jengibre + Menta',
    subtitle: '1 Litro - Vigorizante',
    imageUrl: '/gallery/menta.jpg',
    price: '$180',
  },
  {
    id: 3,
    title: 'Limón + Jengibre',
    subtitle: '1 Litro - Cítrico',
    imageUrl: '/gallery/limon.jpg',
    price: '$165',
  },
  {
    id: 4,
    title: 'Sabor Clásico',
    subtitle: '1 Litro - Receta Original',
    imageUrl: 'https://images.unsplash.com/photo-1622484210636-f84bed3da7fb?q=80&w=800&auto=format&fit=crop',
    price: '$150',
  },
];

interface ProductsCardsProps {
  onAddToCart: (item: CardItem) => void;
}

export default function ProductsCards({ onAddToCart }: ProductsCardsProps) {
  return (
    <section id="catalogo-preview" className="py-24 bg-brand-black flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
          La Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-red">GingerBug</span>
        </h2>
        <p className="text-brand-beige/80 text-lg md:text-xl font-light leading-relaxed">
          Nuestra línea completa de elixires probióticos. Descubre y adquiere el sabor que mejor se adapte a tu energía natural. Pasa el cursor para revelar.
        </p>
      </div>

      <div className="flex w-full items-center justify-center px-4 relative z-10">
        <HoverRevealCards items={gingerbugProducts} onAddToCart={onAddToCart} />
      </div>
    </section>
  );
}
