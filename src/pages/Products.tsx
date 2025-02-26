import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, ChevronDown, Wine, Beer, GlassWater, Heart } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const sortOptions = ['FEATURED', 'PRICE: LOW TO HIGH', 'PRICE: HIGH TO LOW', 'NEWEST'];

const typeIcons = {
  WINE: Wine,
  BEER: Beer,
  SPIRITS: GlassWater
};

export function Products() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeType, setActiveType] = useState('ALL');
  const [activePriceRange, setActivePriceRange] = useState('ALL');
  const [activeSort, setActiveSort] = useState('FEATURED');
  const [showFilters, setShowFilters] = useState(false);
  const { dispatch: cartDispatch } = useCart();
  const { state: userState, dispatch: userDispatch } = useUser();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleToggleWishlist = (product: Product) => {
    if (!userState.isAuthenticated) {
      navigate('/login');
      return;
    }

    const isInWishlist = userState.profile?.wishlist.some(item => item.id === product.id);
    if (isInWishlist) {
      userDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      userDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const filteredProducts = products.filter(product =>
    (activeType === 'ALL' || product.name === activeType) &&
    (activeCategory === 'ALL' || product.category === activeCategory) &&
    (activePriceRange === 'ALL' || 
      (product.price >= priceRanges[priceRanges.findIndex(range => range.label === activePriceRange)].range[0] &&
       product.price <= priceRanges[priceRanges.findIndex(range => range.label === activePriceRange)].range[1]))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (activeSort) {
      case 'PRICE: LOW TO HIGH':
        return a.price - b.price;
      case 'PRICE: HIGH TO LOW':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <motion.div
      className="py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-extralight bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Collection
          </motion.h1>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </motion.button>

            <div className="relative">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Sort
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          className={`space-y-8 ${
            showFilters ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
          }`}
          animate={{ opacity: showFilters ? 1 : 0, height: showFilters ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className="text-lg font-display mb-4">Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.button
                key="ALL"
                className={`px-4 py-3 rounded-lg backdrop-blur-sm border ${
                  activeType === 'ALL'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:border-amber-500/50'
                } transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveType('ALL')}
              >
                ALL
              </motion.button>
              {['WINE', 'BEER', 'SPIRITS'].map((type) => {
                const Icon = typeIcons[type as keyof typeof typeIcons];
                return (
                  <motion.button
                    key={type}
                    className={`px-4 py-3 rounded-lg backdrop-blur-sm border flex items-center justify-center gap-2 ${
                      activeType === type
                        ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:border-amber-500/50'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveType(type)}
                  >
                    <Icon className="w-4 h-4" />
                    {type}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display mb-4">Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-4 py-3 rounded-lg backdrop-blur-sm border ${
                    activeCategory === category
                      ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                      : 'bg-white/5 border-white/10 text-zinc-400 hover:border-amber-500/50'
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display mb-4">Price Range</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <motion.button
                key="ALL"
                className={`px-4 py-3 rounded-lg backdrop-blur-sm border ${
                  activePriceRange === 'ALL'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:border-amber-500/50'
                } transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePriceRange('ALL')}
              >
                ALL
              </motion.button>
              {priceRanges.map((range) => (
                <motion.button
                  key={range.label}
                  className={`px-4 py-3 rounded-lg backdrop-blur-sm border ${
                    activePriceRange === range.label
                      ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                      : 'bg-white/5 border-white/10 text-zinc-400 hover:border-amber-500/50'
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePriceRange(range.label)}
                >
                  {range.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 mb-8 flex justify-between items-center">
          <p className="text-zinc-400">
            Showing {sortedProducts.length} products
          </p>
          <select
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-zinc-400 focus:border-amber-500 transition-colors"
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.category}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1920';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4">
                    <motion.button
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        userState.profile?.wishlist.some(item => item.id === product.id) 
                          ? 'bg-red-500 text-white relative z-20'
                          : 'bg-white/10 backdrop-blur-sm text-white hover:bg-red-500 relative z-20'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleToggleWishlist(product)}
                    >
                      <Heart className={`w-4 h-4 ${
                        userState.profile?.wishlist.some(item => item.id === product.id) 
                          ? 'fill-current'
                          : ''
                      }`} />
                    </motion.button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                <motion.button
                  className="absolute bottom-4 left-4 right-4 py-3 bg-amber-500 text-black rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </motion.button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display tracking-wide">{product.name}</h3>
                  <span className="text-sm text-zinc-400">{product.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-amber-500 text-lg font-medium">${product.price.toFixed(2)} USD</p>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">{product.details.volume}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}