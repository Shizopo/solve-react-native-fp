// @flow

import React from "react";
import ChatList from "./ChatList";
import { connect } from "react-redux";
import { contactsService } from "../../services/dataService";
import { chatReducer } from "../../reducers/chatReducer";
import { getChatListData } from "../../actions/onChatListLoading";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

type Props = {
  getChatListData: ([]) => void,
};

type State = {};

class ChatListContainer extends React.Component<Props, State> {
  state = {};

  componentDidMount() {
    let data = this.props.getChatListData([1, 2, 8, 14, 25, 38, 43, 18, 29]);
    console.log("hmmm", this.props.chatListData.data);
  }

  // openChat = () => {
  //   console.log("clicked");
  //   this.props.navigation.navigate("Details");
  // };

  render() {
    return (
      <ChatList
        style={{ marginTop: 50 }}
        chatListData={this.props.chatListData.data}
        openChat={this.props.navigation.navigate("Chat", {
          itemId: 2,
          otherParam: "anything you want here",
        })}
        // openChat={this.openChat}
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
