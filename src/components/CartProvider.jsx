/* eslint-disable react/prop-types */
// CartContext.js
import  { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cartCount");
    const wish = localStorage.getItem("wishCount");
    setCartCount(cart ? parseInt(cart) : 0);
    setWishCount(wish ? parseInt(wish) : 0);
  }, []);

  const updateCartCount = (count) => {
    setCartCount(count);
    localStorage.setItem("cartCount", count);
  };

  const updateWishCount = (count) => {
    setWishCount(count);
    localStorage.setItem("wishCount", count);
  };

  return (
    <CartContext.Provider value={{ cartCount, wishCount, updateCartCount, updateWishCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
