// @flow

import React from "react";
import ChatList from "./ChatList";
import { connect } from "react-redux";
import { contactsService } from "../../services/dataService";
import { chatReducer } from "../../reducers/chatReducer";
import { getChatListData } from "../../actions/onChatListLoading";

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

type Props = {
  getChatListData: ([]) => void,
};

type State = {};

class ChatListContainer extends React.Component<Props, State> {
  state = {};

  static navigationOptions = {
    title: "Active chats",
  };

  openChat = id => {
    this.props.navigation.navigate("ChatScreen", {
      itemId: id,
      otherParam: "anything you want here",
    });
  };

  render() {
    return (
      <ChatList
        style={{ marginTop: 50 }}
        chatListData={this.props.chatListData.data}
        openChat={this.openChat}
      />
    );
  }
}

const ChatListReduxContainer = connect(
  state => ({
    chatListData: state.chatReducer,
  }),
  {
    getChatListData,
  }
)(ChatListContainer);

export default ChatListReduxContainer;
