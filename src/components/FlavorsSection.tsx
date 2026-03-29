import { StackedCardsInteraction } from './StackedCardsInteraction';
import { Link } from 'react-router-dom';

export default function FlavorsSection() {
  const cards = [
    {
      image: "/gallery/jamaica.jpg",
      title: "Jengibre + Jamaica",
      description: "Elixir rojo vibrante, profundo y antioxidante.",
    },
    {
      image: "/gallery/menta.jpg",
      title: "Jengibre + Menta",
      description: "Fresco, vigorizante y con un toque herbal.",
    },
    {
      image: "/gallery/limon.jpg",
      title: "Limón + Jengibre",
      description: "Explosión cítrica y energía pura para tu día.",
    },
  ];

  return (
    <section className="py-24 bg-brand-black flex flex-col items-center justify-center min-h-[80vh] overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,69,107,0.1)_0,rgba(26,26,26,1)_60%)] pointer-events-none"></div>
      
      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Descubre los demás <span className="text-brand-pink">sabores</span>
        </h2>
        <p className="text-brand-beige/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Cada botella de GingerBug es un proceso artesanal de fermentación natural con ingredientes únicos. <strong className="text-white font-medium">Pasa el cursor sobre la botella</strong> para explorarlos.
        </p>
      </div>
      
      {/* Card Interaction */}
      <div className="w-full flex justify-center scale-100 md:scale-110 pt-10 pb-20 relative z-10">
        <Link to="/productos" className="cursor-pointer">
          <StackedCardsInteraction 
            cards={cards} 
            spreadDistance={120} 
            rotationAngle={12} 
          />
        </Link>
      </div>
    </section>
  );
}
