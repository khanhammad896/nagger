import { combineReducers } from "redux";
import loginReducer from "../reducers/Login/login.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
