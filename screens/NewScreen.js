import React, { Component } from 'react';
import { ScrollView, View, Text, Stylesheet, Image, Picker } from 'react-native';
import imageMeta from '../assets/config/images.json';


const imageData = [
    require('../assets/images/img1.jpg'),
    require('../assets/images/img2.jpg'),
    require('../assets/images/img3.jpg'),
];

export default class NewScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'New',
    // };

        constructor(props) {
            super(props);
            this.state = {
                pickerSelection: 'Default value!'
            }
        }

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
