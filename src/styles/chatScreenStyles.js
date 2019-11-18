import { StyleSheet } from "react-native";

const chatScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: "center",
    marginTop: Platform.OS === "ios" ? 50 : 0,
    marginBottom: 30,
    backgroundColor: "#fafafa",
    height: "100%",
  },
  mainChatScreen: {
    flex: 1,
    height: "100%",
    marginBottom: 10,
    backgroundColor: "#fafafa",
    textAlign: "center",
  },
  chatMessageContainer: {
    width: "60%",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#c0c0c050",
  },
  chatMessageHeader: { padding: 5 },
  chatMessageText: {
    padding: 10,
    fontSize: 18,
    // fontWeight: "bold",
  },
  bottomChatScreen: {
    flexDirection: "row",
  },
  messageInput: {
    width: "80%",
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  mainText: {
    fontSize: 22,
  },
  lastMessage: {
    height: 70,
    width: "80%",
  },

  // userPhoto: {
  //   top: 25,
  //   width: 80,
  //   height: 80,
  //   borderRadius: 50,
  //   margin: 15,
  //   alignSelf: "flex-start",
  // },
  // separator: {
  //   height: 1,
  //   width: "85%",
  //   backgroundColor: "#000",
  //   alignSelf: "center",
  //   marginBottom: 4,
  // },
});

export { chatScreenStyles as style };
