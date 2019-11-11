/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Auth from "../Auth";
import { Provider } from "react-redux";
import { store } from "../../configs/createStore";

type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Provider store={store}>
          <Auth />
        </Provider>
      </>
    );
  }
}

export default App;
