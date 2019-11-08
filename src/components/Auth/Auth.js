// @flow

import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { style } from "../../styles/authStyles";

type Props = {
  handleInput: (name: string, val: string) => void,
  handleAuthSubmit: () => void,
};
type State = {};

const Auth = ({ handleInput, handleAuthSubmit }: Props) => {
  return (
    <>
      <View style={style.authMain}>
        <Text style={style.authWelcomeText}>Some text</Text>
        <View style={style.authInputArea}>
          <TextInput
            autoFocus={true}
            placeholder={"Phone number"}
            onChangeText={val => handleInput("userNumber", val)}
            style={style.authUserNumberInput}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={"Password"}
            onChangeText={val => handleInput("userPassword", val)}
            style={style.authUserPasswordInput}
          />
          <Button
            title={"Log in"}
            onPress={handleAuthSubmit}
            //   style={style.authLoginButton}
          />
        </View>
      </View>
    </>
  );
};

export default Auth;
