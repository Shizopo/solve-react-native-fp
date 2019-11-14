// @flow

import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { chatReducer } from "../reducers/chatReducer";

export const rootReducer = combineReducers({
  authReducer,
  chatReducer,
});
