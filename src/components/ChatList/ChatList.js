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

type Props = {};
type State = {};

const renderItem = item => {
  return (
    <>
      <TouchableOpacity>
        <View style={style.userCard}>
          <Image style={style.userPhoto} source={{ uri: item.photo }} />
          <View style={style.userCardMain}>
            {/* <Text style={[style.mainText, style.userNumber]}>{item.id}</Text> */}
            <Text style={[style.mainText, style.userFirstName]}>
              {item.name}
            </Text>
            <Text style={style.lastMessage}>
              {item.messages[item.messages.length - 1].text.slice(0, 100)}
            </Text>
          </View>
          {/* <Switch
          onValueChange={val => handleCheckbox(val, user.key)}
          value={user.isChecked}
        /> */}
        </View>

        <View style={style.separator} />
      </TouchableOpacity>
    </>
  );
};

const ChatList = ({ chatListData }) => {
  console.log(chatListData);
  return (
    <View style={style.container}>
      <FlatList
        style={style.listContainer}
        data={chatListData}
        // extraData={chatListData}
        // keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => renderItem(item)}
        initialNumToRender={10}
        windowSize={11}
      />
    </View>
  );
};

export default ChatList;
