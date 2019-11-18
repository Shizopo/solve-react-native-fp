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
import { style } from "../../styles/authStyles";
import { ChatList } from "../ChatList";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

type Props = {
  handleInput: (name: string, val: string) => void,
  handleAuthSubmit: () => void,
  isValid: boolean,
  requestStatus: string,
  navigation: {
    navigate: string => void,
  },
};
type State = {};

const Auth = ({
  handleInput,
  handleAuthSubmit,
  isValid,
  requestStatus,
  navigation,
}: Props) => {
  return (
    <>
      <View style={style.authMain}>
        <Text style={style.authWelcomeText}>Welcome</Text>
        <View style={style.authInputArea}>
          <TextInput
            autoFocus={true}
            placeholder={"Phone number"}
            onChangeText={val => handleInput("userNumber", val)}
            style={[
              style.authUserNumberInput,
              {
                borderBottomColor: isValid === false ? "#ff0000" : "#000",
              },
            ]}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={"Password"}
            onChangeText={val => handleInput("userPassword", val)}
            style={[
              style.authUserPasswordInput,
              {
                borderBottomColor: isValid === false ? "#ff0000" : "#000",
              },
            ]}
          />
          {isValid === false ? (
            <View>
              <Text style={style.errorText}>
                Something wrong. Please check you number and password.
              </Text>
            </View>
          ) : null}
          {/* <Button title={"Log in"} onPress={handleAuthSubmit} /> */}
          <TouchableOpacity
            onPress={() => {
              handleAuthSubmit();
              navigation.navigate("ChatList");
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Modal
        animationType="fade"
        transparent={true}
        style={style.loadingModal}
        visible={requestStatus === "isLoading"}
      >
        <ActivityIndicator
          style={{ marginTop: 350 }}
          size="large"
          color="#0000ff"
        />
      </Modal> */}
    </>
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
    // ChatScreen: {
    //   screen: ChatScreen,
    // },
  },
  {
    initialRouteName: "Home",
  }
);

export default Auth;
