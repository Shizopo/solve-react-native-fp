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
  TouchableOpacity,
} from "react-native";
import Auth from "../Auth";
import ChatList from "../ChatList";
import ChatScreen from "../ChatScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

type Props = {
  isLogged: boolean,
};

type State = {};

const StartScreen = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Auth");
        }}
      >
        <Text>Auth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("ChatList");
        }}
      >
        <Text>ChatList</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const StartScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: Auth,
      navigationOptions: {
        header: null,
        footer: null,
      },
    },
    // Auth: {
    //   screen: Auth,
    // },
    ChatList: {
      screen: ChatList,
    },
    ChatScreen: {
      screen: ChatScreen,
    },
  },
  {
    initialRouteName: "Home",
  }
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       return <Text size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: "tomato",
  //     inactiveTintColor: "gray",
  //     showIcon: false,
  //   },
  // }
);

export default createAppContainer(StartScreenNavigator);
