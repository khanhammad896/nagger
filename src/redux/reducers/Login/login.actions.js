import { LOGIN, LOGOUT } from "./login.types";

const login = () => {
  return {
    type: LOGIN,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};
