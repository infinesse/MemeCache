import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';
import { createAppContainer, createSwitchNavigator, createTabNavigator } from 'react-navigation'; 



const MainStack = createSwitchNavigator({
  login: Login,
  main: MainFeed
 
});

const AppContainer = createAppContainer(MainStack);
 
class HomeScreen extends Component {
  // static navigationOptions = {
  //   header: null,
  // };

  render() {

    return <AppContainer />;
   

  }
} 

export default HomeScreen;



