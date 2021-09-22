import { SETUSER, REMOVEUSER } from "./user.types";

export const setUser = (value) => {
  return {
    type: SETUSER,
    payload: value,
  };
};

export const removeUser = (value) => {
  return {
    type: REMOVEUSER,
  };
};
