import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const links = ['Origen', 'Beneficios', 'Proceso', 'Historia', 'Productos'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight text-white hover:text-brand-pink transition-colors">
          <span className="text-brand-pink">Ginger</span>Bug
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            link === 'Productos' ? (
              <Link 
                key={link} 
                to="/productos" 
                className="text-sm font-medium text-brand-beige hover:text-brand-pink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ) : link === 'Historia' ? (
              <Link 
                key={link} 
                to="/historia" 
                className="text-sm font-medium text-brand-beige hover:text-brand-pink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ) : (
              <a 
                key={link} 
                href={isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`} 
                className="text-sm font-medium text-brand-beige hover:text-brand-pink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            )
          ))}
          
          <div 
            onClick={onOpenCart}
            className="relative cursor-pointer group p-2"
          >
            <ShoppingBag size={22} className="text-white group-hover:text-brand-pink transition-colors" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-brand-pink text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-brand-black"
              >
                {cartCount}
              </motion.span>
            )}
          </div>

          <button 
            onClick={onOpenCart}
            className="px-5 py-2 rounded-full bg-brand-red text-white hover:bg-brand-pink transition-colors font-medium shadow-[0_0_15px_rgba(139,30,63,0.4)]"
          >
            Finalizar Compra
          </button>
        </div>

        {/* Mobile Menu Right Side */}
        <div className="flex items-center space-x-4 md:hidden">
          <div 
            onClick={onOpenCart}
            className="relative p-2"
          >
            <ShoppingBag size={24} className="text-white" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-pink text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-brand-black">
                {cartCount}
              </span>
            )}
          </div>
          <button className="text-white hover:text-brand-pink transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark border-t border-white/10 md:hidden flex flex-col items-center py-6 space-y-4 shadow-2xl"
          >
            {links.map((link) => (
              link === 'Productos' ? (
                <Link 
                  key={link} 
                  to="/productos" 
                  className="text-lg font-medium text-white hover:text-brand-pink transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ) : link === 'Historia' ? (
                <Link 
                  key={link} 
                  to="/historia" 
                  className="text-lg font-medium text-white hover:text-brand-pink transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ) : (
                <a 
                  key={link} 
                  href={isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`} 
                  className="text-lg font-medium text-white hover:text-brand-pink transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              )
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenCart();
              }}
              className="px-8 py-3 mt-4 rounded-full bg-brand-pink text-white font-medium shadow-[0_0_15px_rgba(214,69,107,0.4)]"
            >
              Ver Carrito
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
