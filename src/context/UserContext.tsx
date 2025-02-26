import React, { createContext, useContext, useReducer } from 'react';
import { UserProfile, Product } from '../types';

interface UserState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
}

type UserAction =
  | { type: 'LOGIN'; payload: UserProfile }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: Partial<UserProfile> }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string };

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
} | null>(null);

const initialState: UserState = {
  profile: null,
  isAuthenticated: false
};

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        profile: {
        ...action.payload,
        orders: action.payload.orders || [],
        wishlist: action.payload.wishlist || [],
        activities: action.payload.activities || [],
        notifications: action.payload.notifications || [],
        preferences: action.payload.preferences || {
          emailNotifications: true,
          priceAlerts: true,
          newsletter: false
        }
        },
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        profile: null,
        isAuthenticated: false
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: state.profile ? { ...state.profile, ...action.payload } : null
      };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        profile: state.profile ? {
          ...state.profile,
          wishlist: [...state.profile.wishlist, action.payload]
        } : null
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        profile: state.profile ? {
          ...state.profile,
          wishlist: state.profile.wishlist.filter(item => item.id !== action.payload)
        } : null
      };
    default:
      return state;
  }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}