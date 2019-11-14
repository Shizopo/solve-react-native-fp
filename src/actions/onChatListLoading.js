// import { authService } from "../services/mockServer";
import { contactsService } from "../services/dataService";
import {
  GET_CHATLIST_REQUEST,
  GET_CHATLIST_SUCCESS,
  GET_CHATLIST_FAILURE,
} from "../types/actionTypes";

export const getChatListData = arr => (
  dispatch: ({ type: string, payload?: {} }) => void,
  getState: () => void
) => {
  dispatch({
    type: GET_CHATLIST_REQUEST,
  });
  contactsService
    .callContactsApi(arr)
    .then(resp => {
      console.log("resp", resp);
      dispatch({ type: GET_CHATLIST_SUCCESS, payload: resp });
    })
    .catch(err => {
      dispatch({ type: GET_CHATLIST_FAILURE, err });
    });
};
