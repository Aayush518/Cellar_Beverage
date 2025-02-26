import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1920"
          alt="Wine cellar"
          className="w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute inset-0 animate-gradient-xy bg-[linear-gradient(45deg,rgba(245,158,11,0.1)_0%,transparent_50%,rgba(245,158,11,0.1)_100%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15)_0%,transparent_50%)] animate-gradient-y" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.1)_0%,transparent_40%)] animate-gradient-y" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      </div>
      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-extralight mb-8 leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent animate-gradient-x">
            Tastes like nature
          </span>
          <span className="block text-4xl md:text-6xl lg:text-8xl mt-4 text-amber-500/90">
            because it is nature
          </span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl font-light tracking-wide text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Every drop, every sip, every moment - crafted with nature's finest ingredients, 
          delivering an experience that's pure, authentic, and extraordinary.
        </motion.p>
      </motion.div>
    </section>
  );
}