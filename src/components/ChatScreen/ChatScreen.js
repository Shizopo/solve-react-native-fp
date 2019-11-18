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

type Props = {
  data: {
    messages: [],
  },
  handleInput: string => void,
  sendMessage: () => void,
};
type State = {};

const renderMessage = message => {
  return (
    <View style={style.chatMessageContainer}>
      <View style={style.chatMessageHeader}>
        <Text style={style.chatMessageAuthor}>{message.item.author}</Text>
      </View>
      <Text style={style.chatMessageText}>{message.item.text}</Text>
    </View>
  );
};

const ChatScreen = ({ data, handleInput, sendMessage }: Props) => {
  return (
    <>
      <View style={style.container}>
        <View style={style.mainChatScreen}>
          <FlatList
            data={data.messages}
            keyExtractor={item => item.id}
            style={style.messageList}
            renderItem={item => renderMessage(item)}
          />
        </View>
        <View style={style.bottomChatScreen}>
          <TextInput
            multiline={true}
            style={style.messageInput}
            onChangeText={val => handleInput(val)}
          />
          <Button title={"Send"} onPress={sendMessage} />
        </View>
      </View>
    </>
  );
};

export default ChatScreen;
