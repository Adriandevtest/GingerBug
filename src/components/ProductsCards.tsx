import HoverRevealCards from './HoverRevealCards';
import type { CardItem } from './HoverRevealCards';

const gingerbugProducts: CardItem[] = [
  {
    id: 1,
    title: 'Jengibre + Jamaica',
    subtitle: '500 Mililitros - Antioxidante',
    imageUrl: '/images/catalogo/jamaica-Photoroom.png',
    price: '$180',
  },
  {
    id: 2,
    title: 'Jengibre + Piña',
    subtitle: '500 Mililitros - Vigorizante',
    imageUrl: '/images/catalogo/bug-amarillo.png',
    price: '$50',
  },
  {
    id: 3,
    title: 'Jengibre + Naranja',
    subtitle: '500 Mililitros - Cítrico & Energizante',
    imageUrl: '/images/catalogo/naranja-Photoroom.png',
    price: '$50',
  },
  {
    id: 4,
    title: 'Jengibre + Mango',
    subtitle: '500 Mililitros - Tropical & Dulce',
    imageUrl: '/images/catalogo/mango-Photoroom.png',
    price: '$50',
  },
  {
    id: 5,
    title: 'Jengibre + Limón',
    subtitle: '500 Mililitros - Cítrico & Refrescante',
    imageUrl: '/images/catalogo/limon-Photoroom.png',
    price: '$50',
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
