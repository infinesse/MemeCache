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
} from 'react-native';
import config from '../../config/index.js';




class Post extends Component {
  // static navigationOptions = {
  //   header: null,
  // };
  constructor(){
    super();
      this.state = {
        liked: false,
        screenWidth: Dimensions.get("window").width
      };
    
  }

likeToggled(){
  this.setState({
    liked: !this.state.liked
  })
}

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageSelection = 
        this.props.item % 2 == 0 
        ? "https://lh3.googleusercontent.com/9I5OAAJtwe7hlgLnSjqWCeyIZR5eLFvzaOpG6VpsNyUJuUmK-Zn3e4yHcrfyQXL9dMAOMpgc5VxSmUEEz-8zAZL8h54" 
        : "https://lh3.googleusercontent.com/aGRFIJYViJ6yWzE2P14MzvOmREvqOSNXZt5TylD7C-x07TXpy0UbBHUkqE3PmNGFtjU0Tjgpq_phwxrD0tzrv6ZKVTw"
    const imageUri = 
    imageSelection + "=s" + imageHeight + "-c";
    const heartIconColor = (this.state.liked) ? 'rgb(252,61, 57)' : null;

    return (
    <View style={{ flex: 1, width: 100 + "%" }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.userPic} source={{ uri: "https://lh3.googleusercontent.com/eEXfHEeFvXSMLrcd7bj1Z4k1FKPuch5KQsFmWR3k_vU5skz5btAW2PJuerM0XSnSD7zC-aHABHt7EyUIdsPH66he9g" }}/>
              <Text style={{ marginLeft: 10 }}>Meowterspace</Text>

          </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {
          this.likeToggled();
        }}>
      
          <Image
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}source={config.images.heartIcon}/>
          <Image style={[styles.icon, { height: 40, width: 40 }]}source={config.images.messageIcon}/>
          <Image style={[styles.icon, { height: 40, width: 40 }]}source={config.images.returnIcon}/>
        </View></View>
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

  userBar: { 
    width: 100 + "%",
    height: config.styleConstants.rowHeight, 
    backgroundColor:"rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"

  },

  userPic: {
    height: 40, 
    width: 40,
    borderRadius:20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100+"%",
    borderColor: "rgb(102,102,102)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },

  icon: {
    marginLeft: 5,
  
  }
});


export default Post;