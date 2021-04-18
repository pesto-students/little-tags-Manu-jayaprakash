import { SET_AUTH_USER } from '../actions/actionTypes';

const initialState = {
  authUser: null,
  authUserMail: null,
  authUserId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
          ...state,
        authUser: action.authUser,
        authUserMail: action.authUserMail,
        authUserId: action.authUserId,
      };
    default:
      return state;
  }
};

export default authReducer;
