import { SETUSER, REMOVEUSER } from "./user.types";
const initialState = {
  userDetails: {},
};
const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SETUSER:
      return {
        ...state,
        userDetails: actions.payload,
      };
    case REMOVEUSER:
      return {
        ...state,
        userDetails: {},
      };
    default:
      return state;
  }
};

export default userReducer;
