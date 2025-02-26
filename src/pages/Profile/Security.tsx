import { motion } from 'framer-motion';
import { Key, Smartphone, Shield, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function Security() {
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display">Security Settings</h2>
      </div>

      <div className="space-y-6">
        <motion.div
          className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
              <Key className="w-5 h-5 text-amber-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Password</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Change your password or set up a stronger one
              </p>
              <motion.button
                className="px-4 py-2 bg-amber-500 text-black rounded-lg text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Change Password
              </motion.button>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-amber-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Add an extra layer of security to your account
              </p>
              <div className="flex items-center gap-4">
                <motion.button
                  className="px-4 py-2 bg-amber-500 text-black rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowTwoFactor(!showTwoFactor)}
                >
                  {showTwoFactor ? 'Disable 2FA' : 'Enable 2FA'}
                </motion.button>
                {showTwoFactor && (
                  <motion.button
                    className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Setup Guide
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-amber-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Login History</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Review your recent login activity
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                  <div>
                    <p className="text-sm">Chrome on MacOS</p>
                    <p className="text-xs text-zinc-500">San Francisco, CA • Just now</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-500 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Current
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                  <div>
                    <p className="text-sm">Safari on iPhone</p>
                    <p className="text-xs text-zinc-500">San Francisco, CA • 2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 p-4 bg-red-500/10 text-red-500 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            For enhanced security, we recommend enabling two-factor authentication.
          </p>
        </motion.div>
      </div>
    </div>
  );
}