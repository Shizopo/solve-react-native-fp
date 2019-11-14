/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Auth from "../Auth";
import StartScreen from "../StartScreen";
import ChatList from "../ChatList";
import ChatScreen from "../ChatScreen";
import { Provider } from "react-redux";
import { store } from "../../configs/createStore";

import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

type Props = {};

type State = {};

const AppNavigator = createStackNavigator(
  {
    Home: StartScreen,
    Chats: ChatList,
    // Contacts: ContactsList,
    // Settings: Settings,
  },
  {
    initialRouteName: "Chats",
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Provider store={store}>
          <AppContainer />
          {/* <Auth /> */}
          {/* <StartScreen /> */}
          {/* <ChatList /> */}
          {/* <ChatScreen /> */}
        </Provider>
      </>
    );
  }
}

// export default createAppContainer(AppNavigator);

export default App;
