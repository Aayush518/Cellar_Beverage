import { motion } from 'framer-motion';
import { Activity } from '../../types';
import { ShoppingBag, Heart, Star, LogIn } from 'lucide-react';

const activityIcons = {
  order: ShoppingBag,
  wishlist: Heart,
  review: Star,
  login: LogIn
};

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display">Activity Feed</h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
        
        <div className="space-y-6">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.type];
            return (
              <motion.div
                key={activity.id}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute left-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-amber-500" />
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                  <p className="text-zinc-300">{activity.description}</p>
                  <p className="text-sm text-zinc-500 mt-2">{activity.timestamp}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}