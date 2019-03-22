import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';
import Camera from './Camera';
import Profile from './Profile';
import Register from './Register';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'; 

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera, 
  profile: Profile
});
const AppContainer2 = createAppContainer(Tabs);

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
});

const MainStack = createSwitchNavigator({
  intro: IntroStack,
  main: AppContainer2
 
});



const AppContainer = createAppContainer(MainStack);
 
class HomeScreen extends Component {

  render() {

    return <AppContainer />;
   

  }
} 

export default HomeScreen;



