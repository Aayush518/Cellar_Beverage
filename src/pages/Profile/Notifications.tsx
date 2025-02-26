import { motion } from 'framer-motion';
import { Notification } from '../../types';
import { Bell, Package, Tag, Archive, Megaphone } from 'lucide-react';

const notificationIcons = {
  order_update: Package,
  price_alert: Tag,
  restock: Archive,
  promotion: Megaphone
};

interface NotificationsProps {
  notifications: Notification[];
}

export function Notifications({ notifications }: NotificationsProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display">Notifications</h2>
        <div className="flex items-center gap-4">
          <motion.button
            className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mark all as read
          </motion.button>
          <motion.button
            className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear all
          </motion.button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="text-center py-12 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <Bell className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
            <p className="text-zinc-400">No notifications</p>
          </div>
        ) : (
          notifications.map((notification, index) => {
            const Icon = notificationIcons[notification.type];
            return (
              <motion.div
                key={notification.id}
                className={`bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 relative ${
                  !notification.read ? 'bg-amber-500/5' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {!notification.read && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-amber-500" />
                )}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{notification.title}</h3>
                    <p className="text-sm text-zinc-400">{notification.message}</p>
                    <p className="text-xs text-zinc-500 mt-2">{notification.timestamp}</p>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}