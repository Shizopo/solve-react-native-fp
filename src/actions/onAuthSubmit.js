// @flow

import { authService } from "../services/mockServer";
import {
  AUTH_SUBMIT_REQUEST,
  AUTH_SUBMIT_SUCCESS,
  AUTH_SUBMIT_FAILURE,
} from "../types/actionTypes";

export const submitAuth = (userAuthData: {
  userNumber: string,
  userPassword: string,
  isValid: boolean,
  isLogged: boolean,
}) => (
  dispatch: ({ type: string, payload?: {} }) => void,
  getState: () => void
) => {
  dispatch({
    type: AUTH_SUBMIT_REQUEST,
  });
  authService
    .validateUser(userAuthData)
    .then(resp => {
      dispatch({ type: AUTH_SUBMIT_SUCCESS, payload: resp });
    })
    .catch(err => {
      dispatch({ type: AUTH_SUBMIT_FAILURE, err });
    });
};
