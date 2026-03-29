import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import type { CardItem } from './HoverRevealCards';

export interface CartItemType extends CardItem {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItemType[];
  onRemove: (id: string | number) => void;
  onUpdateQuantity: (id: string | number, delta: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onUpdateQuantity,
  onCheckout,
}: CartDrawerProps) {
  const total = items.reduce((sum, item) => {
    const priceNum = parseInt(item.price.replace('$', '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-black border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
              <div className="flex items-center gap-3 text-white">
                <ShoppingBag className="text-brand-pink" size={24} />
                <h2 className="text-xl font-bold tracking-tight">Tu Carrito</h2>
                <span className="bg-brand-pink/20 text-brand-pink text-xs font-bold px-2 py-0.5 rounded-full border border-brand-pink/30">
                  {items.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-brand-beige hover:text-white hover:rotate-90 transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag size={40} className="text-white/20" />
                  </div>
                  <p className="text-brand-beige/60 font-medium">Tu carrito está vacío</p>
                  <a
                    href="#productos"
                    onClick={onClose}
                    className="text-brand-pink hover:text-brand-red font-bold text-sm underline underline-offset-4 cursor-pointer"
                  >
                    Empezar a comprar
                  </a>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-24 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/5 shadow-inner">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover mix-blend-screen scale-110 opacity-90"
                      />
                    </div>
                    <div className="flex-1 min-w-0 py-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white font-bold truncate text-lg leading-tight group-hover:text-brand-pink transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-brand-beige/60 truncate uppercase tracking-wider mb-2">
                          {item.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-brand-beige hover:text-white transition-colors disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-brand-beige hover:text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-brand-pink font-bold">{item.price}</span>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="p-1.5 text-white/20 hover:text-brand-red transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-brand-beige">
                    <span className="text-sm">Subtotal</span>
                    <span className="font-medium">${total}</span>
                  </div>
                  <div className="flex justify-between items-center text-white text-xl font-black tracking-tight">
                    <span>Total estimado</span>
                    <span className="text-brand-pink">${total} MXN</span>
                  </div>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-brand-pink hover:bg-brand-red text-white font-black rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(214,69,107,0.3)] flex items-center justify-center gap-2 group transform hover:-translate-y-1"
                >
                  Finalizar Pedido
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-4 text-[10px] text-center text-brand-beige/40 uppercase tracking-widest font-black">
                  Impuestos y envío calculados al finalizar
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
