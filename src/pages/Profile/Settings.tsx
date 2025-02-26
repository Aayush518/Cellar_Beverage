import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserProfile } from '../../types';
import { useUser } from '../../context/UserContext';
import { Save } from 'lucide-react';

interface SettingsProps {
  profile: UserProfile;
}

export function Settings({ profile }: SettingsProps) {
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    street: profile.address?.street || '',
    city: profile.address?.city || '',
    state: profile.address?.state || '',
    zip: profile.address?.zip || '',
    country: profile.address?.country || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: {
        name: formData.name,
        email: formData.email,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country
        }
      }
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-display">Account Settings</h2>

      <motion.form
        className="space-y-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-zinc-400">Street Address</label>
          <input
            type="text"
            value={formData.street}
            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">State</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">ZIP Code</label>
            <input
              type="text"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-zinc-400">Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3 bg-amber-500 text-black rounded-lg font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Save className="w-4 h-4" />
          Save Changes
        </motion.button>
      </motion.form>
    </div>
  );
}