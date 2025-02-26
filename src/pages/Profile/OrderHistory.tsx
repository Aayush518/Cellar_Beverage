import { motion } from 'framer-motion';
import { Order } from '../../types';
import { Package, Truck, CheckCircle } from 'lucide-react';

const statusIcons = {
  pending: Package,
  processing: Package,
  shipped: Truck,
  delivered: CheckCircle
};

const statusColors = {
  pending: 'text-yellow-500',
  processing: 'text-blue-500',
  shipped: 'text-purple-500',
  delivered: 'text-green-500'
};

interface OrderHistoryProps {
  orders: Order[];
}

export function OrderHistory({ orders }: OrderHistoryProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display">Order History</h2>
        <div className="text-sm text-zinc-400">
          {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
        </div>
      </div>
      
      {orders.length === 0 ? (
        <div className="text-center py-16 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Package className="w-16 h-16 text-zinc-500 mx-auto mb-4" />
            <p className="text-zinc-400 text-lg mb-4">No orders yet</p>
            <motion.button
              className="px-6 py-2 bg-amber-500 text-black rounded-lg font-medium text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/products'}
            >
              Start Shopping
            </motion.button>
          </motion.div>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const StatusIcon = statusIcons[order.status];
            return (
              <motion.div
                key={order.id}
                className="bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-zinc-400">Order #{order.id}</p>
                      <p className="text-sm text-zinc-500">{order.date}</p>
                    </div>
                    <div className={`flex items-center gap-2 ${statusColors[order.status]}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span className="text-sm capitalize">{order.status}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.product.id} className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-zinc-400">Quantity: {item.quantity}</p>
                        </div>
                        <p className="text-amber-500">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                    <p className="text-zinc-400">Total</p>
                    <p className="text-xl font-display text-amber-500">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}