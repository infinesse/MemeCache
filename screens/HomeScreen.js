import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';
import Camera from './Camera';
import Profile from './Profile';
import { createAppContainer, createSwitchNavigator, createTabNavigator, TabNavigator } from 'react-navigation'; 

// const Tabs = createTabNavigator({
//   feed: MainStack,
//   camera: Camera, 
//   profile: Profile
// });

const MainStack = createSwitchNavigator({
  login: Login,
  main: MainFeed
 
});

const AppContainer = createAppContainer(MainStack);
 
class HomeScreen extends Component {

  render() {

    return <AppContainer />;
   

  }
} 

export default HomeScreen;



