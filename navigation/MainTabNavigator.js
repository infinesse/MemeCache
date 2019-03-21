import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewScreen from '../screens/NewScreen';

const PersonalStack = createStackNavigator({
  Home: HomeScreen,
});

PersonalStack.navigationOptions = {
  tabBarLabel: 'Personal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinkStack = createStackNavigator({
  Links: LinksScreen,
});

LinkStack.navigationOptions = {
  tabBarLabel: 'Public',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const NewScreenStack = createStackNavigator ({
  New: NewScreen,
});

NewScreenStack.navigationOptions = {
  tabBarLabel: 'NewScreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  PersonalStack,
  LinkStack,
  NewScreenStack,
  SettingsStack
});
