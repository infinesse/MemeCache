import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import PostFeed from '../components/container/index.js';




class MainFeed extends Component {
  state = {
    textStyle: {
      color: 'purple',
    }
  }
  setTextColor = () => {
    var index = Math.round(Math.random() * 9);
    var ColorValue = "#FFFFFF";

    if (index == 1) ColorValue = "#f2f2f2"; //peach
    if (index == 2) ColorValue = "#cccccc"; //violet
    if (index == 3) ColorValue = "#a6a6a6"; //lt blue
    if (index == 4) ColorValue = "#808080"; //cyan
    if (index == 5) ColorValue = "#666666"; //tan
    if (index == 6) ColorValue = "#4d4d4d"; //lt green
    if (index == 7) ColorValue = "#333333"; //lt yellow
    if (index == 8) ColorValue = "#1a1a1a"; //lt orange
    if (index == 9) ColorValue = "#000000"; //lt grey

    return {
      color: ColorValue,
    }
  }

    componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          textStyle: this.setTextColor()
        })
      }, 75);
    }

  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text style={this.state.textStyle}>Meme Cache</Text>
           
          
        </View>
        <PostFeed />
      </View>
    );
}

  }


const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%", 
    height: 56,
    marginTop: 20, 
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(102,102,102)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"

  },
});



export default MainFeed;


