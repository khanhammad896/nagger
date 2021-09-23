import { SETCONTACTS } from "./contacts.types";

const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SETCONTACTS:
      return {
        ...state,
        contacts: actions.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
