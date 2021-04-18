import { SET_AUTH_USER } from "./actionTypes";

export const setAuthUser = (authUser) => {
  return {
    type: SET_AUTH_USER,
    authUser: authUser.displayName,
    authUserMail: authUser.email,
    authUserId: authUser.uid,
  };
};
