import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { ProductDetails } from './ProductDetails';
import { useLocation } from 'react-router-dom';

interface ProductShowcaseProps {
  product: Product;
  onProductChange: (name: string) => void;
}

export function ProductShowcase({ product, onProductChange }: ProductShowcaseProps) {
  const location = useLocation();

  return (
    <section id="collection" className="scroll-mt-20">
      <AnimatePresence mode="wait">
      <div key={product.name} className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh] overflow-hidden">
        {/* Product Image */}
        <motion.div 
          className="relative group overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 brightness-110 contrast-125"
          />
          <motion.div 
            className="absolute inset-0"
            style={{ zIndex: 'var(--z-elevate)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 mix-blend-soft-light" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15)_0%,transparent_70%)] mix-blend-overlay animate-pulse" />
          </motion.div>
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
            style={{
              background: `
                radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.3) 0%, transparent 60%),
                radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.3) 0%, transparent 60%)
              `,
              mixBlendMode: 'overlay'
            }}
          >
            <div className="absolute inset-0 animate-gradient-xy bg-gradient-to-br from-amber-500/30 via-transparent to-amber-500/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse" />
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.4)_0%,transparent_60%)] mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.4)_0%,transparent_60%)] mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Product Info */}
        <ProductDetails
          product={product}
          onProductChange={onProductChange}
          style={{ zIndex: 'var(--z-elevate)' }}
        />
      </div>
      </AnimatePresence>
    </section>
  );
}