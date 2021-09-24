import { combineReducers } from "redux";
import loginReducer from "../reducers/Login/login.reducer";
import userReducer from "../reducers/User/user.reducer";
import contactsReducer from "../reducers/Contacts/contacts.reducer";
import remindersReducer from "../reducers/Reminders/reminders.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  contacts: contactsReducer,
  reminders: remindersReducer,
});

export default rootReducer;
