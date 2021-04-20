import { SET_AUTH_USER, SET_CART_ITEMS, REMOVE_CART_ITEMS } from "./actionTypes";

export const setAuthUser = (authUser) => {
  return {
    type: SET_AUTH_USER,
    payload:authUser
  };
};

export const setCartItems = (cart) => {
  return {
    type: SET_CART_ITEMS,
    payload: cart
  };
};

export const removeCartItems = (cart) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload: cart
  };
};
