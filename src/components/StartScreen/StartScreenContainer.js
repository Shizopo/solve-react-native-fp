// @flow

import React from "react";
import StartScreen from "./StartScreen";
import { connect } from "react-redux";
import { contactsService } from "../../services/dataService";
// import { chatReducer } from "../../reducers/chatReducer";
import { getChatListData } from "../../actions/onChatListLoading";
// import { authService } from "../../services/mockServer";
import { authReducer } from "../../reducers/authReducer";
// import { submitAuth } from "../../actions/onAuthSubmit";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { withNavigation } from "react-navigation";

type Props = {
  isLogged: boolean,
};

type State = {};

class StartScreenContainer extends React.PureComponent<Props, State> {
  state = {
    isLogged: false,
  };

  componentDidMount() {
    let data = this.props.getChatListData([1, 2, 8, 14, 25, 38, 43, 18, 29]);
  }

  // userLoginStatus = this.props.isLogged;

  componentDidUpdate(prevProps) {
    if (prevProps.isLogged !== this.props.isLogged) {
      this.setState({ isLogged: true });
    }
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <>
        <StartScreen
          toAuth={this.props.navigation.navigate("Auth")}
          toChatList={this.props.navigation.navigate("ChatList")}
          // isLogged={this.props.isLogged}
        />
      </>
    );
  }
}

const StartScreenReduxContainer = connect(
  state => ({
    isLogged: state.authReducer.isLogged,
  }),
  {
    getChatListData,
  }
)(StartScreenContainer);

export default StartScreenReduxContainer;
