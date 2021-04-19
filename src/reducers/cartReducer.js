import { SET_CART_ITEMS } from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalQuantity:0
};

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      const { id, title, price, image,description } = action.payload;
      const existing = state.cart.find((item) => item.id === id);
      if (!existing) {
        return {
          ...state,
          cart: [...state.cart, { id, quantity: 1, title, price, image,description }],
          totalQuantity:state.totalQuantity+1
        };
      } else {

        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        const newArray = [...state.cart]; //making a new array
        newArray[index].quantity = newArray[index].quantity + 1; //changing quantity in the new array
        return {
          ...state, 
          cart: newArray, 
          totalQuantity:state.totalQuantity+1
        };
      }
    default:
      return state;
  }
};

export default cartItemReducer;
