import { contactsService } from "../services/dataService";
import { ADD_NEW_MESSAGE } from "../types/actionTypes";

export const onSendMessage = updatedData => (
  dispatch: ({ type: string, payload?: {} }) => void,
  getState: () => void
) => {
  dispatch({
    type: ADD_NEW_MESSAGE,
    payload: updatedData,
  });
};
