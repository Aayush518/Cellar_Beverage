import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-5rem)] py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-light mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-zinc-400">
              Join our community of beverage enthusiasts
            </p>
          </motion.div>

          <motion.form
            className="space-y-6"
            onSubmit={handleRegister}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors pl-10"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
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
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors pl-10"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-zinc-500">Must be at least 8 characters</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors pl-10"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                />
                <span className="text-sm text-zinc-400">
                  I agree to the{' '}
                  <Link 
                    to="/terms" 
                    className="text-amber-500 hover:text-amber-400 transition-colors relative group inline-block"
                  >
                    Terms of Service
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                  {' '}and{' '}
                  <Link 
                    to="/privacy" 
                    className="text-amber-500 hover:text-amber-400 transition-colors relative group inline-block"
                  >
                    Privacy Policy
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </span>
              </label>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-amber-500 text-black rounded-lg font-medium flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-center text-zinc-400 text-sm">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-amber-500 hover:text-amber-400 transition-colors relative group inline-block"
              >
                Sign in
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}