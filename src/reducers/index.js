import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    authUserState : authReducer,
    cartState : cartReducer
})

export default rootReducer;