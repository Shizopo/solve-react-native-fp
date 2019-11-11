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
};

class AuthContainer extends React.Component<Props, State> {
  state = {
    userNumber: "",
    userPassword: "",
    isValid: true,
  };

  handleInput = (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  // eslint-disable-next-line no-undef
  handleAuthSubmit = () => {
    const { userNumber, userPassword } = this.state;
    this.props.submitAuth(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <Auth
        handleInput={this.handleInput}
        handleAuthSubmit={this.handleAuthSubmit}
        isValid={this.props.userAuthData.isValid}
        requestStatus={this.props.userAuthData.requestStatus}
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
