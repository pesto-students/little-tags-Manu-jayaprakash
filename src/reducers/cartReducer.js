import {
  SET_CART_ITEMS,
  REMOVE_CART_ITEMS,
  DELETE_CART_ITEMS,
} from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalQuantity: 0,
};

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      const { id, quantity=1, title, price, image, description, size='l' } = action.payload;
      const existing = state.cart.find((item) => item.id === id);
      if (!existing) {
        return {
          ...state,
          cart: [
            ...state.cart,
            { id, quantity, title, price, image, description, size },
          ],
          totalQuantity: state.totalQuantity + quantity,
        };
      } else {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        const updatedCartItems = [...state.cart]; //making a new array
        updatedCartItems[index].quantity = updatedCartItems[index].quantity + quantity; //changing quantity in the new array
        updatedCartItems[index].size = size; 
        return {
          ...state,
          cart: updatedCartItems,
          totalQuantity: state.totalQuantity + quantity,
        };
      }

    case REMOVE_CART_ITEMS:
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const itemQuantity = state.cart[index].quantity;
      if (itemQuantity > 1) {
        const updatedCartItems = [...state.cart];
        updatedCartItems[index].quantity = updatedCartItems[index].quantity - 1;
        return {
          ...state,
          cart: updatedCartItems,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        const updatedCartItems = [...state.cart];
        updatedCartItems.splice(index, 1);
        return {
          ...state,
          cart: updatedCartItems,
          totalQuantity: state.totalQuantity - 1,
        };
      }
    case DELETE_CART_ITEMS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default cartItemReducer;
