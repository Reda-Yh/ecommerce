// CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], (initial) => {
    // Retrieve cart items from localStorage on component mount
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : initial;
  });

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Fonction pour ajouter un produit au panier
  // const addToCart = (product, quantity) => {
  //   dispatch({ type: 'ADD_TO_CART', payload: {product, quantity} });
  // };

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Si le produit est déjà dans le panier, mettre à jour la quantité
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } else {
      // Si le produit n'est pas encore dans le panier, l'ajouter avec la quantité
      dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    }
  };

    // Fonction pour supprimer un produit du panier
    const removeFromCart = (product) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

      // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const updateQuantity = (productId, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, newQuantity } });
  };
  
  const getquantity = (quantity) => {
    
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     case 'REMOVE_FROM_CART':
//       return state.filter(item => item.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItemIndex = state.findIndex(item => item.id === action.payload.product.id);
//       if (existingItemIndex !== -1) {
//         // If the product is already in the cart, update the quantity
//         const updatedCart = [...state];
//         updatedCart[existingItemIndex].quantity += action.payload.quantity;
//         return updatedCart;
//       } else {
//         // If the product is not in the cart, add it with the quantity
//         return [...state, { ...action.payload.product, quantity: action.payload.quantity }];
//       }
//     case 'REMOVE_FROM_CART':
//       return state.filter(item => item.id !== action.payload.id);
//     default:
//       return state;
//       case 'UPDATE_QUANTITY':
//         const updatedCart = state.map(item =>
//           item.id === action.payload.productId
//             ? { ...item, quantity: action.payload.newQuantity }
//             : item
//         );
//         return updatedCart;
//   }
// };

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload.product, quantity: action.payload.quantity }];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    case 'UPDATE_QUANTITY':
      const updatedCart = state.map(item =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.newQuantity }
          : item
      );
      return updatedCart;
    case 'SET_CART':
      return action.payload;
    default:
      return state;
  }
};