import { motion } from 'framer-motion';
import { Product } from '../../types';
import { Heart, ShoppingCart } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface WishlistProps {
  wishlist: Product[];
}

export function Wishlist({ wishlist }: WishlistProps) {
  const { dispatch: userDispatch } = useUser();
  const { dispatch: cartDispatch } = useCart();
  const navigate = useNavigate();

  const removeFromWishlist = (productId: string) => {
    userDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const addToCart = (product: Product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    removeFromWishlist(product.id);
    navigate('/cart', { replace: true });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-display">Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
          <Heart className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
          <p className="text-zinc-400">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display mb-2">{product.name}</h3>
                <p className="text-zinc-400 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-amber-500 text-lg">${product.price.toFixed(2)}</p>
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}