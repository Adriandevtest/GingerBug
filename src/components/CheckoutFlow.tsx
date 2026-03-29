import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  MapPin, 
  CheckCircle, 
  Loader2, 
  AlertCircle, 
  ChevronRight, 
  X,
  Lock
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface CheckoutFlowProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onSuccess: () => void;
}

type Step = 'payment' | 'processing' | 'address' | 'success';

export default function CheckoutFlow({ isOpen, onClose, total, onSuccess }: CheckoutFlowProps) {
  const [step, setStep] = useState<Step>('payment');

  // Bloquear scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('address');
    }, 2500);
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onSuccess();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={step === 'processing' ? undefined : onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-brand-black border border-white/10 rounded-2xl md:rounded-3xl overflow-y-auto max-h-[calc(100dvh-1rem)] shadow-[0_0_50px_rgba(0,0,0,0.5)] custom-scrollbar"
      >
        {/* Close Button (Hidden during processing) */}
        {step !== 'processing' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-brand-beige/50 hover:text-white transition-colors z-20 bg-black/20 rounded-full p-1"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        )}

        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 'payment' && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5 md:space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-brand-pink/10 rounded-xl flex items-center justify-center border border-brand-pink/20 shrink-0">
                    <CreditCard className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">Caja de Pago</h2>
                    <p className="text-brand-beige/40 text-[10px] md:text-xs uppercase tracking-widest font-bold">Paso 1 de 2: Transacción</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl md:rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-brand-beige/60 text-sm">Total a pagar</span>
                  <span className="text-xl md:text-2xl font-black text-white">${total} MXN</span>
                </div>

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-brand-beige/60 ml-1 text-sm">Nombre en la tarjeta</Label>
                    <Input required placeholder="JUAN PEREZ" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl focus:ring-brand-pink" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-brand-beige/60 ml-1 text-sm">Número de tarjeta</Label>
                    <div className="relative">
                      <Input required placeholder="0000 0000 0000 0000" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl pl-12" />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-brand-beige/60 ml-1 text-sm">Vencimiento</Label>
                      <Input required placeholder="MM/YY" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-brand-beige/60 ml-1 text-sm">CVV</Label>
                      <div className="relative">
                        <Input required type="password" maxLength={3} placeholder="000" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl pr-12" />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-brand-pink hover:bg-brand-red text-white font-black py-6 md:py-7 rounded-2xl mt-4 shadow-lg flex items-center justify-center gap-2 group text-sm md:text-base">
                    Pagar Ahora
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            )}

            {step === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="relative">
                  <Loader2 className="text-brand-pink animate-spin w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-brand-pink/20 blur-2xl rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-black text-white">Procesando Pago...</h2>
                  <p className="text-brand-beige/40 text-xs md:text-sm font-medium">Validando con tu institución bancaria</p>
                </div>
              </motion.div>
            )}

            {step === 'address' && (
              <motion.div
                key="address"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5 md:space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20 shrink-0">
                    <MapPin className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">Detalles de Envío</h2>
                    <p className="text-brand-beige/40 text-[10px] md:text-xs uppercase tracking-widest font-bold">Paso 2 de 2: Destino</p>
                  </div>
                </div>

                <div className="bg-green-500/5 p-4 rounded-xl md:rounded-2xl border border-green-500/20 flex gap-3 md:gap-4 items-start">
                  <AlertCircle className="text-green-500 shrink-0 mt-0.5 md:mt-1 w-[18px] h-[18px] md:w-5 md:h-5" />
                  <p className="text-green-500/90 text-xs md:text-sm font-medium leading-relaxed">
                    Por ahora solo hacemos envíos a <span className="font-black underline decoration-2">Balancán, Tenosique y Emiliano Zapata</span>.
                  </p>
                </div>

                <form onSubmit={handleAddressSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-brand-beige/60 ml-1 text-sm">Municipio / Ciudad</Label>
                    <div className="relative">
                      <select required className="w-full bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl px-4 focus:ring-brand-pink focus:outline-none appearance-none cursor-pointer">
                        <option className="bg-brand-black" value="">Selecciona tu ubicación</option>
                        <option className="bg-brand-black" value="balancan">Balancán, Tabasco</option>
                        <option className="bg-brand-black" value="tenosique">Tenosique, Tabasco</option>
                        <option className="bg-brand-black" value="zapata">Emiliano Zapata, Tabasco</option>
                        <option className="bg-brand-black" value="other" disabled>Otra ciudad (Próximamente)</option>
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-white/20 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-brand-beige/60 ml-1 text-sm">Correo Electrónico</Label>
                      <Input required type="email" placeholder="tu@email.com" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl focus:ring-brand-pink" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-brand-beige/60 ml-1 text-sm">WhatsApp / Teléfono</Label>
                      <Input required type="tel" placeholder="993 123 4567" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl focus:ring-brand-pink" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-brand-beige/60 ml-1 text-sm">Dirección Completa</Label>
                    <Input required placeholder="Calle, Número, Colonia..." className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl focus:ring-brand-pink" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-brand-beige/60 ml-1 text-sm">Referencias (Opcional)</Label>
                    <Input placeholder="Ej. Casa color rosa frente al parque" className="bg-white/5 border-white/10 text-white h-11 md:h-12 rounded-xl focus:ring-brand-pink" />
                  </div>

                  <Button type="submit" className="w-full bg-brand-green hover:bg-green-600 text-white font-black py-6 md:py-7 rounded-2xl mt-4 shadow-lg flex items-center justify-center gap-2 group text-sm md:text-base">
                    Confirmar Envío
                    <CheckCircle size={20} className="group-hover:scale-110 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 md:py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/20 rounded-full flex items-center justify-center relative shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                  <CheckCircle className="text-green-500 w-12 h-12 md:w-14 md:h-14" />
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 border-4 border-green-500 rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-black text-white">¡Pedido Exitoso!</h2>
                  <p className="text-brand-beige/60 max-w-xs mx-auto text-sm md:text-base">
                    Tu GingerBug llegará pronto a tu puerta. Revisa tu correo para el seguimiento.
                  </p>
                </div>
                <Button 
                  onClick={onClose}
                  variant="outline"
                  className="mt-4 md:mt-6 border-white/20 text-white hover:bg-white/10 rounded-full px-8 text-sm md:text-base"
                >
                  Regresar a la tienda
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
