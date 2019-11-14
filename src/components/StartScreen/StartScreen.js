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

type Props = {
  isLogged: boolean,
};

type State = {};

const StartScreen = (isLogged: boolean) => {
  return (
    <>
      {/* {isLogged ? <ChatList /> : <Auth />} */}
      <View>
        {/* <Text style={{ marginTop: 50 }}> */}
        {isLogged === true ? <ChatList /> : <Auth />}
        {/* </Text> */}
      </View>
    </>
  );
};

export default StartScreen;
