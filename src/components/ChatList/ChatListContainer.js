// @flow

import React from "react";
import ChatList from "./ChatList";
import { connect } from "react-redux";
// import { authService } from "../../services/mockServer";
import { chatListReducer } from "../../reducers/chatListReducer";
// import { submitAuth } from "../../actions/onAuthSubmit";

type Props = {};

type State = {};

class ChatListContainer extends React.Component<Props, State> {
  state = {};
}

const AuthReduxContainer = connect(
  state => ({}),
  {}
)(ChatListContainer);

export default ChatListContainer;
