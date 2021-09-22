import { combineReducers } from "redux";
import loginReducer from "../reducers/Login/login.reducer";
import userReducer from "../reducers/User/user.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
