import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: "The Art of Wine Tasting",
    excerpt: "Discover the subtle nuances and complex flavors that make each wine unique. Learn how to appreciate the depth of character in every glass.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1920",
    author: "Sarah Williams",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Wine"
  },
  {
    title: "Craft Beer Revolution",
    excerpt: "Explore the growing world of craft beers and the passionate brewers behind them. From IPAs to Stouts, uncover the creativity in every brew.",
    image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=1920",
    author: "Mike Thompson",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Beer"
  },
  {
    title: "The History of Distillation",
    excerpt: "Journey through time to discover the ancient art of distillation and how it shaped the spirits we enjoy today.",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=1920",
    author: "James Anderson",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Spirits"
  }
];

export function Blog() {
  return (
    <motion.section 
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
          Latest Stories
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-display tracking-tight group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h2>

                <p className="text-zinc-400 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}