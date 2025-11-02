"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('fhf-wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading wishlist:', error);
      }
    }
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    if (wishlist.length >= 0) {
      localStorage.setItem('fhf-wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (item) => {
    setWishlist(prev => {
      // Check if already in wishlist
      if (prev.some(w => w.id === item.id && w.type === item.type)) {
        toast.info('Item already in wishlist');
        return prev;
      }
      toast.success('Added to wishlist');
      return [...prev, { ...item, addedAt: new Date().toISOString() }];
    });
  };

  const removeFromWishlist = (itemId, itemType) => {
    setWishlist(prev => {
      const filtered = prev.filter(item => !(item.id === itemId && item.type === itemType));
      toast.success('Removed from wishlist');
      return filtered;
    });
  };

  const isInWishlist = (itemId, itemType) => {
    return wishlist.some(item => item.id === itemId && item.type === itemType);
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.success('Wishlist cleared');
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist,
      wishlistCount: wishlist.length
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
}

