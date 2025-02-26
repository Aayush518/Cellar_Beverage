import { motion } from 'framer-motion';
import { Leaf, Droplets, FlaskRound as Flask, Wine, Star, Award } from 'lucide-react';

const processes = [
  {
    icon: Leaf,
    title: "Ingredient Selection",
    description: "Only the finest, hand-picked ingredients make it into our products. We source from sustainable farms and trusted partners worldwide."
  },
  {
    icon: Droplets,
    title: "Natural Fermentation",
    description: "We allow nature to work its magic, using traditional fermentation methods that have been perfected over generations."
  },
  {
    icon: Flask,
    title: "Artisanal Distillation",
    description: "Our master distillers use copper pot stills and precise temperature control to create perfectly balanced spirits."
  },
  {
    icon: Wine,
    title: "Aging Process",
    description: "Patience is key as we age our products in carefully selected barrels to develop complex flavors and smooth character."
  },
  {
    icon: Star,
    title: "Quality Testing",
    description: "Every batch undergoes rigorous testing and tasting by our expert panel to ensure exceptional quality."
  },
  {
    icon: Award,
    title: "Certification",
    description: "Only products that meet our stringent standards receive the CELLAR seal of approval."
  }
];

export function Process() {
  return (
    <motion.section 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-extralight mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent">
            Our Process
          </h1>
          <p className="text-xl text-zinc-400">
            From carefully selected ingredients to the final product, every step in our process is crafted with precision and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white/5 p-8 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="inline-block relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <process.icon className="w-12 h-12 text-amber-500" />
                    <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-display mb-4 group-hover:text-amber-500 transition-colors">
                    {process.title}
                  </h3>
                  
                  <p className="text-zinc-400">
                    {process.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}