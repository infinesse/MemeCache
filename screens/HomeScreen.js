import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';
import Camera from './Camera';
import Profile from './Profile';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation'; 

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera, 
  profile: Profile
});
const AppContainer2 = createAppContainer(Tabs);

const MainStack = createSwitchNavigator({
  login: Login,
  main: AppContainer2
 
});

const AppContainer = createAppContainer(MainStack);
 
class HomeScreen extends Component {

  render() {

    return <AppContainer />;
   

  }
} 

export default HomeScreen;



