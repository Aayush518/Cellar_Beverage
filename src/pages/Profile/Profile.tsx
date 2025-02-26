import { User, MapPin, Package, Heart, Settings as SettingsIcon, LogOut, Bell, Activity as ActivityIcon, Shield } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OrderHistory } from './OrderHistory';
import { Wishlist } from './Wishlist';
import { Settings as SettingsComponent } from './Settings';
import { ActivityFeed } from './ActivityFeed';
import { Notifications } from './Notifications';
import { Security } from './Security';

const tabs = [
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  { id: 'activity', label: 'Activity', icon: ActivityIcon },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'settings', label: 'Settings', icon: SettingsIcon }
];

export function Profile() {
  const [activeTab, setActiveTab] = useState('orders');
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/', { replace: true, state: { from: 'signout' } });
  };

  if (!state.profile) {
    return <Navigate to="/login" replace />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrderHistory orders={state.profile?.orders || []} />;
      case 'wishlist':
        return <Wishlist wishlist={state.profile?.wishlist || []} />;
      case 'activity':
        return <ActivityFeed activities={state.profile?.activities || []} />;
      case 'notifications':
        return <Notifications notifications={state.profile?.notifications || []} />;
      case 'security':
        return <Security />;
      case 'settings':
        return state.profile ? <SettingsComponent profile={state.profile} /> : null;
      default:
        return <OrderHistory orders={state.profile?.orders || []} />;
    }
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-5rem)] py-24 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-display font-extralight mb-12 bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent"
        >
          My Profile
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-center mb-6">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto mb-4 flex items-center justify-center overflow-hidden ring-4 ring-amber-500/20">
                    {state.profile.avatar ? (
                      <img 
                        src={state.profile.avatar} 
                        alt={state.profile.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-black" />
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-display">{state.profile.name}</h2>
                  <p className="text-zinc-400">{state.profile.email}</p>
                </div>
              </div>

              {state.profile.address && (
                <div className="flex items-start gap-3 text-sm text-zinc-400 mb-6">
                  <MapPin className="w-4 h-4 mt-1 text-amber-500" />
                  <div>
                    <p>{state.profile.address.street}</p>
                    <p>{state.profile.address.city}, {state.profile.address.state} {state.profile.address.zip}</p>
                    <p>{state.profile.address.country}</p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 relative group overflow-hidden ${
                      activeTab === tab.id
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                        : 'text-zinc-400 hover:bg-white/5 hover:text-amber-500'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 mt-8 border border-transparent hover:border-red-500/20"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}