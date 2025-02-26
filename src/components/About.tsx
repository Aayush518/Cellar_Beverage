import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-6xl font-display font-extralight mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent">The Art of Selection</h3>
            <p className="text-zinc-300 text-xl leading-relaxed mb-8">
              In the heart of nature's finest vineyards and distilleries, our master craftsmen 
              meticulously select each ingredient. Every bottle tells a story of dedication, 
              passion, and the pursuit of perfection.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              From sun-kissed grapes to hand-picked botanicals, we honor nature's gifts 
              through time-honored traditions and innovative techniques. Each sip is a 
              testament to our commitment to authentic, exceptional flavors.
            </p>
            <motion.button 
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <div className="absolute inset-0 border border-amber-500 rounded-lg transition-colors group-hover:border-amber-400" />
              <div className="relative px-8 py-4 bg-gradient-to-r from-transparent to-transparent group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500">
                <span className="text-amber-500 font-medium tracking-wider group-hover:text-amber-400 transition-colors">
                  DISCOVER OUR PROCESS
                </span>
              </div>
            </motion.button>
          </motion.div>
          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-transparent to-amber-500/10 rounded-lg animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.2)_0%,transparent_60%)] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.2)_0%,transparent_60%)] mix-blend-overlay" />
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15)_0%,transparent_70%)] mix-blend-overlay" />
            </motion.div>
            <img 
              src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&q=80&w=1920"
              alt="Premium spirits selection"
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-110 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 mix-blend-soft-light" />
            <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}