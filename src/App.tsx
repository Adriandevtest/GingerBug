import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import CheckoutFlow from './components/CheckoutFlow';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';
import type { CartItemType } from './components/CartDrawer';
import type { CardItem } from './components/HoverRevealCards';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleAddToCart = (product: CardItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string | number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string | number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => {
    const priceNum = parseInt(item.price.replace('$', '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-brand-beige font-sans selection:bg-brand-pink selection:text-white overflow-x-hidden">
        <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/productos" element={<ProductsPage onAddToCart={handleAddToCart} />} />
        </Routes>

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
        />

        <CheckoutFlow 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          total={total}
          onSuccess={handleCheckoutSuccess}
        />
      </div>
    </Router>
  );
}

export default App;
