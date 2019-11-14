// @flow

import React from "react";
import ChatList from "./ChatList";
import { connect } from "react-redux";
import { contactsService } from "../../services/dataService";
import { chatReducer } from "../../reducers/chatReducer";
import { getChatListData } from "../../actions/onChatListLoading";

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

  render() {
    return (
      <ChatList
        style={{ marginTop: 50 }}
        chatListData={this.props.chatListData.data}
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
