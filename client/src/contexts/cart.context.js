import React, { createContext, useState } from 'react';
export const CartContext = createContext();

import cartdata from './cartdata';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartdata);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};