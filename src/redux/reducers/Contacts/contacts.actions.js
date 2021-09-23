import { SETCONTACTS } from "./contacts.types";

export const setContacts = (value) => {
  return {
    type: SETCONTACTS,
    payload: value,
  };
};
