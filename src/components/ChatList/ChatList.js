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
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { style } from "../../styles/chatListStyles";

type Props = {
  chatListData: [],
  openChat: number => void,
};
type State = {};

const renderItem = (item, openChat) => {
  return (
    <>
      <TouchableOpacity onPress={() => openChat(item.id)}>
        <View style={style.userCard}>
          <Image style={style.userPhoto} source={{ uri: item.photo }} />
          <View style={style.userCardMain}>
            {/*Temporary solution*/}
            {/* <Text>{item.id}</Text> */}

            <Text style={[style.mainText, style.userFirstName]}>
              {item.name}
            </Text>
            <Text style={style.lastMessage}>
              {item.messages[item.messages.length - 1].text.slice(0, 100)}
            </Text>
          </View>
        </View>

        <View style={style.separator} />
      </TouchableOpacity>
    </>
  );
};

const ChatList = ({ chatListData, openChat }: Props) => {
  return (
    <View style={style.container}>
      <FlatList
        style={style.listContainer}
        data={chatListData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => renderItem(item, openChat)}
        initialNumToRender={10}
        windowSize={11}
      />
    </View>
  );
};

export default ChatList;
