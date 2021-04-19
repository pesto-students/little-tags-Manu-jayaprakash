import { SET_CART_ITEMS, REMOVE_CART_ITEMS } from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalQuantity: 0,
};

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      const { id, title, price, image, description } = action.payload;
      const existing = state.cart.find((item) => item.id === id);
      if (!existing) {
        return {
          ...state,
          cart: [
            ...state.cart,
            { id, quantity: 1, title, price, image, description },
          ],
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        const updatedCartItems = [...state.cart]; //making a new array
        updatedCartItems[index].quantity = updatedCartItems[index].quantity + 1; //changing quantity in the new array
        return {
          ...state,
          cart: updatedCartItems,
          totalQuantity: state.totalQuantity + 1,
        };
      }

    case REMOVE_CART_ITEMS:
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const quantity = state.cart[index].quantity;
      if(quantity>1){
        const updatedCartItems = [...state.cart];
        updatedCartItems[index].quantity = updatedCartItems[index].quantity - 1;
        return {
          ...state,
          cart: updatedCartItems,
          totalQuantity: state.totalQuantity - 1,
        };
      }else{
        const updatedCartItems = [...state.cart];
        updatedCartItems.splice(index,1);
        return {
          ...state,
          cart: updatedCartItems,
          totalQuantity: state.totalQuantity - 1,
        };
      }
    default:
      return state;
  }
};

export default cartItemReducer;
