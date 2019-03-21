import React, { Component } from 'react';
import { ScrollView, View, Text, Stylesheet, Image } from 'react-native';
import imageMeta from '../assets/config/images.json';


const imageData = [
    require('../assets/images/img1.jpg'),
    require('../assets/images/img2.jpg'),
    require('../assets/images/img3.jpg'),
];

export default class LinkScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Public',
    // };

    render() {
        return(
    
            <ScrollView>
                {imageMeta.items.map((imageName, imageId) =>
                    <Image
                        key={imageName}
                        source={imageData[imageId]}
                        style={{width: 256, height: 256}}
                    />
                )}
            </ScrollView>

        )
    }
}

// import React from 'react';
// import { FlatList, StyleSheet, View, Text } from 'react-native';

// export default class LinksScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Public',
//   };

//   render() {
//     return (
//       <FlatList style={styles.container}>
//         <View> <Text>My Instagram Clone</Text></View>
        
//       </FlatList>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });