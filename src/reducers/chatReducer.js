// @flow

import {
  GET_CHATLIST_REQUEST,
  GET_CHATLIST_SUCCESS,
  GET_CHATLIST_FAILURE,
  ADD_NEW_MESSAGE,
} from "../types/actionTypes";
import { RequestStatus } from "../utils/RequestStatus";

// type Props = {
//   state: {
//     requestStatus: string,
//     data: [],
//   },
//   action: {
//     type: string,
//     payload?: any,
//     err?: string,
//   },
// };

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
        err: action.err,
      };
    case GET_CHATLIST_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.isLoaded,
        data: action.payload,
      };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
