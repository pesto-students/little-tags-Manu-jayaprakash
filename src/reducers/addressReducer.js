import { SET_USER_ADDRESS } from "../actions/actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  appartment: "",
  city: "",
  country: "",
  state: "",
  pin: "",
  phone: "",
};

const addressReducer = (State = initialState, action) => {
  switch (action.type) {
    case SET_USER_ADDRESS:
      const {
        firstName,
        lastName,
        address,
        appartment,
        city,
        country,
        state,
        pin,
        phone,
      } = action.payload;

      return {
        ...State,
        firstName,
        lastName,
        address,
        appartment,
        city,
        country,
        state,
        pin,
        phone,
      };
    default:
      return State;
  }
};

export default addressReducer;
