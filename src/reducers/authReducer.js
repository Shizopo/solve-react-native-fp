// @flow

import {
  AUTH_SUBMIT_REQUEST,
  AUTH_SUBMIT_SUCCESS,
  AUTH_SUBMIT_FAILURE,
} from "../types/actionTypes";

type State = {};

const initialValue = {
  userNumber: "",
  userPassword: "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_SUBMIT_REQUEST:
      return {
        ...state,
      };
    case AUTH_SUBMIT_FAILURE:
      return {
        ...state,
        err: action.err,
      };
    case AUTH_SUBMIT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
