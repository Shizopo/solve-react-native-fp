/**
 * @format
 */

import { AppRegistry } from "react-native";
import React from "react";
import App from "./src/components/App/App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { store } from "./src/configs/createStore";

console.disableYellowBox = true;

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
