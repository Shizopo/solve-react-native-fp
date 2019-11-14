// @flow

import React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import { authService } from "../../services/mockServer";
import { authReducer } from "../../reducers/authReducer";
import { submitAuth } from "../../actions/onAuthSubmit";

type Props = {
  submitAuth: State => void,
  userAuthData: {
    isValid: boolean,
    requestStatus: string,
  },
};

type State = {
  userNumber: string,
  userPassword: string,
  // isValid: boolean,
  // isLogged: boolean,
};

class AuthContainer extends React.Component<Props, State> {
  state = {
    userNumber: "",
    userPassword: "",
    // isValid: true,
    // isLogged: false,
  };

  handleInput = (name: string, value: string) => {
    console.log(this.state);
    this.setState({ [name]: value });
  };

  // eslint-disable-next-line no-undef
  handleAuthSubmit = () => {
    this.props.submitAuth(this.state);
  };

  render() {
    let isValid = this.props.userAuthData.isValid;
    let requestStatus = this.props.userAuthData.requestStatus;
    return (
      <Auth
        handleInput={this.handleInput}
        handleAuthSubmit={this.handleAuthSubmit}
        isValid={isValid}
        requestStatus={requestStatus}
      />
    );
  }
}

const AuthReduxContainer = connect(
  state => ({
    userAuthData: state.authReducer,
  }),
  {
    submitAuth,
  }
)(AuthContainer);

export default AuthReduxContainer;
