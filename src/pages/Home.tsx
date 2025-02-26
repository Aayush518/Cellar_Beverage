import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ProductShowcase } from '../components/ProductShowcase';
import { RelatedProducts } from '../components/RelatedProducts';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { products, relatedProducts } from '../data/products';
import { ProductName } from '../types';

export function Home() {
  const [activeProduct, setActiveProduct] = React.useState<ProductName>('WINE');
  const currentProduct = products.find(p => p.name === activeProduct)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProductShowcase
        product={currentProduct}
        onProductChange={setActiveProduct}
      />
      <RelatedProducts products={relatedProducts} />
      <Hero />
      <About />
    </motion.div>
  );
}