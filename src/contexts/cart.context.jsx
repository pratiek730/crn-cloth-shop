import { createContext, useEffect, useState } from "react";

function addCartItem(cartItems, productToAdd) {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}
function redCartItem(cartItems, productToReduce) {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToReduce.id
  );

  if (existingCartitem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== productToReduce.id);
  else
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToReduce.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
}
function delCartItem(cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  reduceItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + (cartItem.price * cartItem.quantity),0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(delCartItem(cartItems, productToRemove));
  };

  const reduceItemFromCart = (productToReduce) => {
    setCartItems(redCartItem(cartItems, productToReduce));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    reduceItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
