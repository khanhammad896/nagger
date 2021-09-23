import { combineReducers } from "redux";
import loginReducer from "../reducers/Login/login.reducer";
import userReducer from "../reducers/User/user.reducer";
import contactsReducer from "../reducers/Contacts/contacts.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  contacts: contactsReducer,
});

export default rootReducer;
