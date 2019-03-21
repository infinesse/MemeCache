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

  render() {
  
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>Meme Cache</Text>
           
          
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


