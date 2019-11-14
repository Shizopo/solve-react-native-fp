// @flow

import React from "react";
import ChatScreen from "./ChatScreen";
import { connect } from "react-redux";
// import ChatList from "../ChatList/ChatList";
import { contactsService } from "../../services/dataService";
import { chatReducer } from "../../reducers/chatReducer";
import { getChatListData } from "../../actions/onChatListLoading";

type Props = {};

type State = {};

class ChatScreenContainer extends React.Component<Props, State> {
  state = { isLoading: true };

  componentDidMount() {
    let data = this.props.getChatListData([1, 2, 8, 14, 25, 38, 43, 18, 29]);
    // this.setState({ isLoading: false });
    // console.log("hmmm", this.props.chatListData.data);
  }

  render() {
    console.log(this.props.chatData.requestStatus);
    console.log("chatScreen", this.props.chatData);
    if (this.state.isLoading === false) {
      return <ChatScreen data={this.props.chatData} />;
    } else {
      return null;
    }
    // return (
    //   // <ChatScreen data={this.props.chatData} id={this.props.chatData.id} />
    // );
  }
}

const ChatScreenReduxContainer = connect(
  state => ({
    chatData: state.chatReducer,
  }),
  {
    getChatListData,
  }
)(ChatScreenContainer);

export default ChatScreenReduxContainer;
