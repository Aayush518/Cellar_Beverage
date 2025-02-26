export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  details: Record<string, string>;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: Array<{
    product: Product;
    quantity: number;
  }>;
  total: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  activities: Activity[];
  notifications: Notification[];
  preferences: {
    emailNotifications: boolean;
    priceAlerts: boolean;
    newsletter: boolean;
  };
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  orders: Order[];
  wishlist: Product[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export type ProductName = 'WINE' | 'BEER' | 'SPIRITS';

export interface Activity {
  id: string;
  type: 'order' | 'wishlist' | 'review' | 'login';
  description: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  type: 'order_update' | 'price_alert' | 'restock' | 'promotion';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}