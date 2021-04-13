import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";

export default combineReducers({
  usersResponse: UsersReducer,
});
