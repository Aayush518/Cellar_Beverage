import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset
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
              Reset Password
            </h1>
            <p className="text-zinc-400">
              Enter your email to receive password reset instructions
            </p>
          </motion.div>

          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
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
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors pl-10"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <p className="text-xs text-zinc-500">We'll send you a link to reset your password</p>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-amber-500 text-black rounded-lg font-medium flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Reset Link
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-center text-zinc-400 text-sm">
              Remember your password?{' '}
              <Link to="/login" className="text-amber-500 hover:text-amber-400">
                Sign in
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}