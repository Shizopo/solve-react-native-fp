// @flow

import React from "react";
import ChatScreen from "./ChatScreen";
import { connect } from "react-redux";
import { contactsService } from "../../services/dataService";
import { chatReducer } from "../../reducers/chatReducer";

import { onSendMessage } from "../../actions/onSendMessage";

type Props = {
  requestStatus: string,
  chatData: [],
  navigation: { getParam: (string, string) => void },
};

type State = {
  newMessage: string,
};

class ChatScreenContainer extends React.Component<Props, State> {
  state = {
    newMessage: "",
  };

  static navigationOptions = {
    title: "Chat Screen",
  };

  selectedId = this.props.navigation.getParam("itemId", "SelectedChat");

  handleInput = value => {
    this.setState({ newMessage: value });
  };

  onSendMessage = () => {
    const data = this.props.chatData;
    const selectedChatData = this.props.chatData.find(item => {
      return item.id === this.selectedId ? item : null;
    });
    const index = data.findIndex(el => el.id === selectedChatData.id);

    selectedChatData.messages.push({
      author: "me",
      status: "new",
      text: this.state.newMessage,
    });
    data[index] = selectedChatData;
    return data;
  };

  openSelectedChat = () => {
    const selectedChat = this.props.chatData.find(item => {
      return item.id === this.selectedId ? item : null;
    });
    return selectedChat;
  };

  render() {
    return (
      <ChatScreen
        data={this.openSelectedChat()}
        handleInput={this.handleInput}
        sendMessage={this.onSendMessage}
      />
    );
  }
}

const ChatScreenReduxContainer = connect(
  state => ({
    requestStatus: state.chatReducer.requestStatus,
    chatData: state.chatReducer.data,
  }),
  {
    onSendMessage,
  }
)(ChatScreenContainer);

export default ChatScreenReduxContainer;
