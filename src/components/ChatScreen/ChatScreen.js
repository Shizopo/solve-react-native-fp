// @flow

import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { style } from "../../styles/chatScreenStyles";

type Props = {};
type State = {};

const renderMessage = message => {
  return (
    <View style={style.chatMessageContainer}>
      <Text style={style.chatMessageText}>{message.text}</Text>
    </View>
  );
};

const ChatScreen = ({ data }) => {
  console.log("view data", data.data);
  console.log("something", data[0].messages);
  return (
    <>
      <View style={style.container}>
        <View style={style.mainChatScreen}>
          <FlatList
            data={data.data}
            style={style.messageList}
            // renderItem={(data.data[0].messages) => renderMessage(data.data[0].messages)}
          />
        </View>
        <View style={style.bottomChatScreen}>
          <TextInput multiline={true} style={style.messageInput} />
          <Button title={"Send"} onPress={() => console.log("nope")} />
        </View>
      </View>
    </>
  );
};

export default ChatScreen;
