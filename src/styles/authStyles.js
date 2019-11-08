import { StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
  authMain: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    height: "100%",
    backgroundColor: "#ebf7ee",
  },

  authWelcomeText: {
    fontSize: 20,
  },

  authInputArea: {
    width: "100%",
    alignItems: "center",
  },

  authUserNumberInput: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 1,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },

  authUserPasswordInput: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 1,
    marginBottom: 15,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },

  authLoginButton: {
    margin: 3,
  },
});

export { authStyles as style };
