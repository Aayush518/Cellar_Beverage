import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { name, quantity } });
  };

  const removeItem = (name: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: name });
  };

  return (
    <motion.div
      className="py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-display font-extralight mb-16 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent">
          Your Cart
        </h1>

        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-zinc-400 mb-8">Your cart is empty</p>
            <motion.button
              className="px-8 py-4 bg-amber-500 text-black rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
            >
              Continue Shopping
            </motion.button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {state.items.map((item) => (
                <motion.div
                  key={item.name}
                  className="flex gap-6 p-6 bg-white/5 rounded-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-32 h-32 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-display">{item.name}</h3>
                      <motion.button
                        className="text-zinc-500 hover:text-red-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.name)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                    
                    <p className="text-amber-500 mt-2">${item.price}</p>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <motion.button
                        className="p-1 hover:text-amber-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      
                      <span className="w-12 text-center">{item.quantity}</span>
                      
                      <motion.button
                        className="p-1 hover:text-amber-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="lg:sticky lg:top-24">
              <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-display mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 flex justify-between text-xl">
                    <span>Total</span>
                    <span className="text-amber-500">${state.total.toFixed(2)}</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full py-4 bg-amber-500 text-black rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/checkout')}
                >
                  <span className="flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}