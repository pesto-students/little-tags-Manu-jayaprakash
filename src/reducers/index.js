import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  authUserState: authReducer,
  cartState: cartReducer,
  addressState: addressReducer,
});

export default rootReducer;
