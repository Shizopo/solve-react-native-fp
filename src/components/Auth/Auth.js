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
import { style } from "../../styles/authStyles";

type Props = {
  handleInput: (name: string, val: string) => void,
  handleAuthSubmit: () => void,
  isValid: boolean,
  requestStatus: string,
};
type State = {};

const Auth = ({
  handleInput,
  handleAuthSubmit,
  isValid,
  requestStatus,
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
          <Button title={"Log in"} onPress={handleAuthSubmit} />
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

export default Auth;
