import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Router from "./Router";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.viewStyle}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  }
});

export default App;
