// @flow

import {
  GET_CHATLIST_REQUEST,
  GET_CHATLIST_SUCCESS,
  GET_CHATLIST_FAILURE,
} from "../types/actionTypes";
import { RequestStatus } from "../utils/RequestStatus";

const initialValue = {
  requestStatus: RequestStatus.Default,
  data: [],
};

export const chatReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_CHATLIST_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.isLoading,
      };
    case GET_CHATLIST_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.isLoaded,
        // isValid: false,
        // isLogged: false,
        err: action.err,
      };
    case GET_CHATLIST_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.isLoaded,
        data: action.payload,
        // isValid: action.payload.isValid,
        // isLogged: action.payload.isLogged,
      };

    default:
      return state;
  }
};
