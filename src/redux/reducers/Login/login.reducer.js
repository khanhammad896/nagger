import { LOGIN, LOGOUT } from "./login.types";

const initialState = {
  isLogin: false,
};

const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogout: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
