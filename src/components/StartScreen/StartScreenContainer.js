// @flow

import React from "react";
import StartScreen from "./StartScreen";
import { connect } from "react-redux";
// import { authService } from "../../services/mockServer";
import { authReducer } from "../../reducers/authReducer";
// import { submitAuth } from "../../actions/onAuthSubmit";

type Props = {
  isLogged: boolean,
};

type State = {};

class StartScreenContainer extends React.PureComponent<Props, State> {
  state = {
    isLogged: false,
  };

  // userLoginStatus = this.props.isLogged;

  componentDidUpdate(prevProps) {
    if (prevProps.isLogged !== this.props.isLogged) {
      this.setState({ isLogged: true });
    }
  }

  render() {
    return (
      <>
        <StartScreen isLogged={this.props.isLogged} />
      </>
    );
  }
}

const StartScreenReduxContainer = connect(
  state => ({
    isLogged: state.authReducer.isLogged,
  }),
  {}
)(StartScreenContainer);

export default StartScreenReduxContainer;
