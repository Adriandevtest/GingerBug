import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import ProcessTimeline from '../components/ProcessTimeline';
import ProductsCards from '../components/ProductsCards';
import ScrollExpandMedia from '../components/ScrollExpandMedia';
import FlavorsSection from '../components/FlavorsSection';
import FooterCTA from '../components/FooterCTA';
import type { CardItem } from '../components/HoverRevealCards';

interface HomePageProps {
  onAddToCart: (product: CardItem) => void;
}

export default function HomePage({ onAddToCart }: HomePageProps) {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <ProcessTimeline />
      <ProductsCards onAddToCart={onAddToCart} />
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/gallery/tu-video.mp4"
        bgImageSrc="/gallery/fondo.jpg"
        title="Experiencia Viva"
        date="100% natural"
        scrollToExpand="Desliza para expandir"
      />
      <FlavorsSection />
      <FooterCTA />
    </main>
  );
}
