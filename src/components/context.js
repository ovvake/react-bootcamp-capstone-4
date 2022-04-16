import React from 'react';
 
export const CartContext = React.createContext({
    carrito: [],
    addToCarrito: () => {},
  });
  