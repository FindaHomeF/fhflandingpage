"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('fhf-cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (cart.length >= 0) {
      localStorage.setItem('fhf-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item, quantity = 1) => {
    setCart(prev => {
      // Check if already in cart
      const existingIndex = prev.findIndex(c => c.id === item.id && c.type === item.type);
      
      if (existingIndex !== -1) {
        // Update quantity
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        toast.success('Cart updated');
        return updated;
      }
      
      toast.success('Added to cart');
      return [...prev, { ...item, quantity, addedAt: new Date().toISOString() }];
    });
  };

  const removeFromCart = (itemId, itemType) => {
    setCart(prev => {
      const filtered = prev.filter(item => !(item.id === itemId && item.type === itemType));
      toast.success('Removed from cart');
      return filtered;
    });
  };

  const updateQuantity = (itemId, itemType, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, itemType);
      return;
    }

    setCart(prev => {
      const updated = prev.map(item => {
        if (item.id === itemId && item.type === itemType) {
          return { ...item, quantity };
        }
        return item;
      });
      return updated;
    });
  };

  const isInCart = (itemId, itemType) => {
    return cart.some(item => item.id === itemId && item.type === itemType);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      isInCart,
      clearCart,
      cartCount: getCartCount(),
      cartTotal: getCartTotal()
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

