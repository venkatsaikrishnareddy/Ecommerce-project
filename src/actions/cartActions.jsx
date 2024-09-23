// src/actions/cartActions.jsx
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (name) => ({
  type: REMOVE_FROM_CART,
  payload: { name },
});
