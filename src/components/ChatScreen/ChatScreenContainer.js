// @flow

import React from "react";
import ChatScreen from "./ChatScreen";
import { connect } from "react-redux";
// import ChatList from "../ChatList/ChatList";
// import { contactsService } from "../../services/dataService";
import { chatReducer } from "../../reducers/chatReducer";
// import { getChatListData } from "../../actions/onChatListLoading";

type Props = {};

type State = {};

class ChatScreenContainer extends React.Component<Props, State> {
  state = {};
  render() {
    console.log("chatScreen", this.props.chatData);
    return (
      <ChatScreen data={this.props.chatData} id={this.props.chatData.id} />
    );
  }
}

const ChatScreenReduxContainer = connect(
  state => ({
    chatData: state.chatReducer,
  }),
  {
    // getChatListData,
  }
)(ChatScreenContainer);

export default ChatScreenReduxContainer;
