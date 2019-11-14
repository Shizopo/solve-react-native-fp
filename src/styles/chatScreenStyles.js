import { StyleSheet } from "react-native";

const chatScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: "center",
    marginTop: Platform.OS === "ios" ? 70 : 20,
    marginBottom: 30,
    backgroundColor: "#fafafa",
    height: "100%",
  },
  mainChatScreen: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fafafa",
    height: "100%",
  },
  bottomChatScreen: {},

  userCard: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 135,
    paddingRight: 10,
    paddingLeft: 10,
  },
  userCardMain: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  userName: {
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 40,
  },
  mainText: {
    fontSize: 22,
  },
  lastMessage: {
    height: 70,
    width: "80%",
  },
  userPhoto: {
    top: 25,
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 15,
    alignSelf: "flex-start",
  },
  separator: {
    height: 1,
    width: "85%",
    backgroundColor: "#000",
    alignSelf: "center",
    marginBottom: 4,
  },
});

export { chatScreenStyles as style };
