import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Blog } from './pages/Blog';
import { Process } from './pages/Process';
import { Profile } from './pages/Profile/Profile';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { Checkout } from './pages/Checkout';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname + location.search}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/process" element={<Process />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}px`
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white relative will-change-scroll">
            <Header />
            <main className="pt-20 relative">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;