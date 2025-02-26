import { motion } from 'framer-motion';
import { ShoppingCart, Menu, User, LogOut, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useCart();
  const { state: userState, dispatch: userDispatch } = useUser();
  const [showWishlistMenu, setShowWishlistMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = userState.profile?.wishlist.length || 0;

  const handleSignOut = () => {
    localStorage.removeItem('auth_token');
    userDispatch({ type: 'LOGOUT' });
    setShowUserMenu(false);
    navigate('/', { replace: true, state: { from: 'signout' } });
  };

  const handleLogoClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <motion.header 
      className="fixed w-full top-0 bg-black/30 overlay-blur border-b border-white/5"
      style={{ zIndex: 'var(--z-header)' }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          onClick={handleLogoClick}
          className="text-3xl font-display font-light tracking-[0.2em] bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 bg-clip-text text-transparent animate-gradient-x cursor-pointer relative z-[60]"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          CELLAR
        </motion.h1>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Collection', path: '/#collection' },
              { label: 'Products', path: '/products' },
              { label: 'Blog', path: '/blog' },
              { label: 'Process', path: '/process' }
            ].map((item) => (
              <motion.a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.path.includes('#')) {
                    navigate('/', { replace: true });
                    setTimeout(() => {
                      const element = document.getElementById(item.path.split('#')[1]);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    navigate(item.path);
                  }
                }}
                className={`text-sm tracking-wider transition-colors relative group ${
                  location.pathname === item.path ? 'text-amber-500' : 'text-zinc-400 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <div className="relative">
              <motion.button
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (!userState.isAuthenticated) {
                    navigate('/login');
                  } else {
                    setShowWishlistMenu(!showWishlistMenu);
                  }
                }}
              >
                <div className="absolute inset-0 bg-amber-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Heart className="w-6 h-6 relative z-10 group-hover:text-amber-500 transition-all duration-300 transform group-hover:scale-110" />
                {wishlistCount > 0 && (
                  <motion.span 
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }}
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </motion.button>

              {showWishlistMenu && userState.isAuthenticated && (
                <motion.div
                  className="absolute right-0 mt-2 w-80 py-2 bg-zinc-900/90 overlay-blur rounded-lg shadow-xl border border-white/10"
                  style={{ zIndex: 'var(--z-dropdown)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {userState.profile?.wishlist.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-zinc-400">
                      Your wishlist is empty
                    </div>
                  ) : (
                    <>
                      <div className="max-h-96 overflow-y-auto">
                        {userState.profile?.wishlist.map((item) => (
                          <div key={item.id} className="px-4 py-3 hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-medium">{item.name}</h4>
                                <p className="text-sm text-amber-500">${item.price}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-3 border-t border-white/10">
                        <button
                          className="w-full py-2 bg-amber-500 text-black rounded font-medium text-sm"
                          onClick={() => {
                            navigate('/profile');
                            setShowWishlistMenu(false);
                          }}
                        >
                          View Wishlist
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </nav>
          <motion.button 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              navigate('/cart');
              window.scrollTo(0, 0);
            }}
          >
            <div className="absolute inset-0 bg-amber-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <ShoppingCart className="w-6 h-6 relative z-10 group-hover:text-amber-500 transition-all duration-300 transform group-hover:scale-110" />
            {cartItemCount > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.button>
          <motion.button 
            className="lg:hidden hover:text-amber-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
          <div className="relative">
            <motion.button
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="absolute inset-0 bg-amber-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <User className="w-6 h-6 relative z-10 group-hover:text-amber-500 transition-all duration-300 transform group-hover:scale-110" />
            </motion.button>
            
            {showUserMenu && (
              <motion.div
                className="absolute right-0 mt-2 w-48 py-2 bg-zinc-900/90 overlay-blur rounded-lg shadow-xl border border-white/10"
                style={{ zIndex: 'var(--z-dropdown)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Link
                  to="/login"
                  className={`block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors ${
                    userState.isAuthenticated ? 'hidden' : ''
                  }`}
                  onClick={() => setShowUserMenu(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className={`block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors ${
                    userState.isAuthenticated ? 'hidden' : ''
                  }`}
                  onClick={() => setShowUserMenu(false)}
                >
                  Create Account
                </Link>
                {userState.isAuthenticated && (
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Profile
                  </Link>
                )}
                {userState.isAuthenticated && (
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                    onClick={handleSignOut}
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}