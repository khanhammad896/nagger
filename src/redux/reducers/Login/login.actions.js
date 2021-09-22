import { LOGIN, LOGOUT } from "./login.types";

export const login = () => {
  return {
    type: LOGIN,
    payload: {
      login: () => {
        localStorage.setItem("isLogin", "true");
      },
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {
      login: () => {
        localStorage.setItem("isLogin", "false");
      },
    },
  };
};
