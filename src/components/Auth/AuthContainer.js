// @flow

import React from "react";
import Auth from "./Auth";
import { authService } from "../../services/mockServer";

type Props = {};
type State = {};

class AuthContainer extends React.Component<Props, State> {
  state = {
    userNumber: "",
    userPassword: "",
  };

  handleInput = (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  // eslint-disable-next-line no-undef
  handleAuthSubmit = () => {
    // this.props.submitForm(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <Auth
        handleInput={this.handleInput}
        handleAuthSubmit={this.handleAuthSubmit}
      />
    );
  }
}

export default AuthContainer;
