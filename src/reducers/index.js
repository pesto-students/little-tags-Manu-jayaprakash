import { combineReducers } from 'redux';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    authUserState : authReducer
})

export default rootReducer;