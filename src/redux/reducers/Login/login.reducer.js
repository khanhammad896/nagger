import { LOGIN, LOGOUT } from "./login.types";

const initialState = {
  isLogin:
    localStorage.getItem("isLogin") === "false" ||
    localStorage.getItem("isLogin") === null
      ? false
      : true,
  login: null,
};

const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        login: actions.payload.login(),
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        login: actions.payload.login(),
      };
    default:
      return state;
  }
};

export default loginReducer;
