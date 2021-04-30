import {
  SET_AUTH_USER,
  SET_CART_ITEMS,
  REMOVE_CART_ITEMS,
  DELETE_CART_ITEMS,
  SET_USER_ADDRESS,
} from "./actionTypes";

export const setAuthUser = (authUser) => {
  return {
    type: SET_AUTH_USER,
    payload: authUser,
  };
};

export const setCartItems = (cart) => {
  return {
    type: SET_CART_ITEMS,
    payload: cart,
  };
};

export const removeCartItems = (cart) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload: cart,
  };
};
export const deleteCartItems = (cart) => {
  return {
    type: DELETE_CART_ITEMS,
    payload: cart,
  };
};

export const setAddress = (address) => {
  return {
    type: SET_USER_ADDRESS,
    payload: address,
  };
};
