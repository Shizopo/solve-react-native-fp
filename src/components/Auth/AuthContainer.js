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
  navigation: {
    navigate: string => void,
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
        navigation={this.props.navigation}
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
