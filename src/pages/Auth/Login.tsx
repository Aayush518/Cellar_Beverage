import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

export function Login() {
  const navigate = useNavigate();
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setError('');
    setIsSubmitting(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockProfile = {
        name: formData.email.split('@')[0],
        email: formData.email,
        orders: [],
        wishlist: [],
        activities: [
          {
            id: "1",
            type: "login" as const,
            description: "New login from Chrome browser",
            timestamp: new Date().toISOString()
          }
        ],
        notifications: [
          {
            id: "1",
            type: "order_update" as const,
            title: "Welcome!",
            message: "Thank you for joining CELLAR",
            timestamp: new Date().toISOString(),
            read: false
          }
        ],
        preferences: {
          emailNotifications: true,
          priceAlerts: true,
          newsletter: false
        }
      };
      
      // Simulate successful login with user data
      dispatch({
        type: 'LOGIN',
        payload: mockProfile
      });

      if (formData.rememberMe) {
        localStorage.setItem('auth_token', 'dummy_token');
      }
      
      navigate('/', { replace: true });
    } catch (err) {
      setError('Invalid email or password');
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-5rem)] py-24 relative overflow-hidden isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.15)_0%,transparent_70%)] -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-light mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-zinc-400">
              Sign in to your account to continue
            </p>
          </motion.div>

          <motion.form
            className="space-y-6"
            onSubmit={handleLogin}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors pl-10"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors pl-10"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="relative z-0 w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                />
                <span className="text-zinc-400">Remember me</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-amber-500 hover:text-amber-400 transition-colors relative group"
              >
                Forgot password?
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {error && (
              <motion.p
                className="text-red-500 text-sm text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              className={`relative z-0 w-full py-3 bg-amber-500 text-black rounded-lg font-medium flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-400 active:bg-amber-600'}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-center text-zinc-400 text-sm">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="text-amber-500 hover:text-amber-400 transition-colors relative group inline-block"
              >
                Sign up
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}