import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import config from '../config';
// import { WebBrowser } from 'expo';
// import { MonoText } from '../components/StyledText';



export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };


  render() {
  
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>Meme Cache</Text>

        </View>
      </View>
    );


  };
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


