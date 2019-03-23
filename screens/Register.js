import React, { Component } from 'react';
import config from '../config';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component {

    constructor(){
        super()
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        };
    }
    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        });
    }

    register(){
        //logs the url of the back end
        console.log(config.baseUrl);

        //alerts input of form & packages it into json
        console.log(JSON.stringify(this.state.credentials));

        //returns the result of fetching the baseUrl+signup, in the form of json with a string of the data returned in the body of the json
        fetch(config.baseUrl + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(this.state.credentials)
        })

        //then the response data is console logged in string form, but this isn't actually happening because the server isn't being reached.
        .then(data => {
            console.log(JSON.stringify(data));
        })

        //here the network request failed error is caught and logged, preventing error banner in app
        .catch(err => {
            console.log(err.message);
        });

        // .then((response) => response.json())
        // .then(jsonResponse =>{ 
        //     if(jsonResponse.confirmation==="success"){
        //         this.props.navigation.navigate('main')
        //     }else{
        //         throw new Error({message: 'Sorry, something went wrong; please try again.'});
        //     }
        // })
        // .catch(err => {           
        //     console.log(err.message);
        // });
    }  


    render(){
        return (
            <View 
                style={{
                    height: 100 + "%", 
                    width: 100 + "%", 
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'rgb(252,61,57)'
                }} 
                    
                    >
            {/* <Text>Register</Text> */}
            <TextInput 
            autoCorrect={false} 
            value={this.state.email} 
            onChangeText={text => this.updateText(text, 'email')} 
            placeholder="Email" 
            style={styles.input}/>
            <TextInput 
            autoCorrect={false} 
            value={this.state.password} 
            onChangeText={text => this.updateText(text, 'password')} 
            secureTextEntry 
            placeholder="Password" 
            style={styles.input}/>
            <Button 
                onPress={() => {
                    this.register();
                }}  
                title="Signup" 
            />
            </View>
        );
    }
}  

const styles = StyleSheet.create({
    input: {
    height: 50,
    width: 100 + "%",
    paddingHorizontal: 50,
    backgroundColor: 'rgb(255,255,255)',
    marginBottom: 10

    }
});

export default Register;