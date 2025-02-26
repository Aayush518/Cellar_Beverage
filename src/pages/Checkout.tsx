import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

const formFields = [
  { label: 'Email', type: 'email', placeholder: 'your@email.com' },
  { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
  { label: 'Address', type: 'text', placeholder: '123 Main St' },
  { label: 'City', type: 'text', placeholder: 'New York' },
  { label: 'Country', type: 'text', placeholder: 'United States' },
  { label: 'Postal Code', type: 'text', placeholder: '10001' }
];

export function Checkout() {
  const { state } = useCart();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
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
        <motion.h1 
          className="text-6xl md:text-8xl font-display font-extralight mb-16 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 mb-12">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-1 rounded-full ${
                    i <= step ? 'bg-amber-500' : 'bg-zinc-800'
                  }`}
                />
              ))}
            </div>

            {step === 1 ? (
              <motion.form
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map((field) => (
                    <div key={field.label}>
                      <label className="block text-sm text-zinc-400 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full py-4 bg-amber-500 text-black rounded-lg font-medium mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                >
                  Continue to Payment
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <CreditCard className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl">Payment Details</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Lock className="w-4 h-4" />
                  Your payment information is secure
                </div>

                <motion.button
                  className="w-full py-4 bg-amber-500 text-black rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Complete Order
                </motion.button>
              </motion.div>
            )}
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-display mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-zinc-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-amber-500">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}

                <div className="border-t border-zinc-800 pt-4 mt-6">
                  <div className="flex justify-between text-zinc-400 mb-2">
                    <span>Subtotal</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-xl mt-4">
                    <span>Total</span>
                    <span className="text-amber-500">${state.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}