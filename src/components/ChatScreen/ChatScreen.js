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

const ChatScreen = ({ data }) => {
  console.log(data);
  return (
    <>
      <View style={style.container}>
        <View style={style.mainChatScreen}>
          <FlatList data={data.data} style={style.messageList} />
        </View>
        <View style={style.bottomChatScreen}>
          <TextInput multiline={true} />
          <Button title={"Send"} onPress={() => console.log("nope")} />
        </View>
      </View>
    </>
  );
};

export default ChatScreen;
