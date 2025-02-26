import { motion } from 'framer-motion';
import { Wine, Beer, GlassWater } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductDetails {
  name: string;
  price: number;
  description: string;
  details: Record<string, string>;
}

interface ProductDetailsProps {
  product: ProductDetails;
  onProductChange: (name: string) => void;
}

const productIcons = {
  WINE: Wine,
  BEER: Beer,
  SPIRITS: GlassWater
};

export function ProductDetails({ product, onProductChange }: ProductDetailsProps) {
  const Icon = productIcons[product.name as keyof typeof productIcons];
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <motion.div 
      className="p-8 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-zinc-900/50 via-black to-black overlay-blur relative overflow-hidden"
      style={{ zIndex: 'var(--z-elevate)' }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: [0.95, 1, 0.98],
      }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
        scale: {
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(245,158,11,0.1)_0%,transparent_50%)] animate-gradient-x" />
      <div className="mb-8">
        <motion.div 
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 8 }}
          >
            <Icon className="w-12 h-12 text-amber-500 relative z-10" />
            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent blur-2xl rounded-full animate-gradient-x" />
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 via-amber-500/20 to-zinc-800" />
        </motion.div>
        
        <motion.h2 
          className="font-display text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-extralight mb-6 tracking-tighter leading-none bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent animate-gradient-x"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
        >
          {product.name}
        </motion.h2>
        
        <motion.div 
          className="text-4xl font-display font-light tracking-tight text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ${product.price} USD
        </motion.div>
        
        <motion.p 
          className="text-zinc-400 text-xl leading-relaxed tracking-wide mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {product.description}
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Object.entries(product.details).map(([key, value], index) => (
          <motion.div
            key={key}
            className="relative group overflow-hidden overlay-blur bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10"
            style={{ zIndex: 'var(--z-elevate)' }}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgb(245, 158, 11, 0.5)",
              transition: { duration: 0.2 }
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-zinc-400 text-sm tracking-wider mb-2 font-medium">{key}</p>
            <p className="font-display text-lg tracking-tight">{value}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-12">
        {['WINE', 'BEER', 'SPIRITS'].map((name) => {
          const ItemIcon = productIcons[name as keyof typeof productIcons];
          const isActive = product.name === name;
          return (
            <motion.button
              key={name}
              onClick={() => onProductChange(name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border relative overflow-hidden ${
                isActive 
                  ? 'border-amber-500 text-amber-500 bg-amber-500/10' 
                  : 'border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:bg-white/5'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`} />
              <div className="relative z-10 flex items-center gap-2">
              <ItemIcon className="w-5 h-5" />
              {name}
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.button 
        className="relative group overflow-hidden bg-amber-500 text-black px-8 py-4 rounded-lg text-lg font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={addToCart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10">
        ADD TO CART
        </span>
      </motion.button>
    </motion.div>
  );
}