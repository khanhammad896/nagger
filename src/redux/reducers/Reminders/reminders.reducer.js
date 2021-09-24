import { SETUSER } from "../User/user.types";
const initialState = {
  reminders: [],
};
const remindersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SETUSER:
      return {
        ...initialState,
        reminders: actions.payload,
      };
    default:
      return state;
  }
};

export default remindersReducer;
