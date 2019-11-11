import {
  AUTH_SUBMIT_REQUEST,
  AUTH_SUBMIT_SUCCESS,
  AUTH_SUBMIT_FAILURE,
} from "../types/actionTypes";
import { RequestStatus } from "../utils/RequestStatus";

const initialValue = {
  requestStatus: RequestStatus.Default,
  userNumber: "",
  userPassword: "",
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AUTH_SUBMIT_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.isLoading,
      };
    case AUTH_SUBMIT_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.isLoaded,
        isValid: false,
        err: action.err,
      };
    case AUTH_SUBMIT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        requestStatus: RequestStatus.isLoaded,
        isValid: action.payload.isValid,
      };

    default:
      return state;
  }
};
