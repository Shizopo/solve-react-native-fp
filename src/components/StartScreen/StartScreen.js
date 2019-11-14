// @flow

import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  ActivityIndicator,
} from "react-native";
import Auth from "../Auth";
import ChatList from "../ChatList";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

type Props = {
  isLogged: boolean,
};

type State = {};

const StartScreen = (toAuth, toChatList) => {
  return (
    <>
      {/* {isLogged ? <ChatList /> : <Auth />} */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title={"Auth"} onPress={toAuth} />
        <Button title={"ChatList"} onPress={toChatList} />

        {/* {isLogged === true ? <ChatList /> : <Auth />} */}
      </View>
    </>
  );
};

export default StartScreen;
