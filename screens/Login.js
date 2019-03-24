import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native'

class Login extends Component {
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

    login(){
        //logs the url of the back end
        // console.log(config.baseUrl + '/api/signup');

        //alerts input of form & packages it into json
        // console.log(JSON.stringify(this.state.credentials));
       
        //returns the result of fetching the baseUrl+signup, in the form of json with a string of the data returned in the body of the json
        fetch(config.baseUrl + '/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(this.state.credentials)
        })

        //then the response data is console logged in string form, but this isn't actually happening because the server isn't being reached.
        // .then(data => {
        //     console.log(JSON.stringify(data));
        // })

        // //here the network request failed error is caught and logged, preventing error banner in app
        // .catch(err => {
        //     console.log(err.message);
        // });

        .then(response => response.json())
        .then(jsonResponse =>{ 
            console.log(JSON.stringify(jsonResponse));
            if(jsonResponse.confirmation==="success"){
                //this nav line isn;t nav-ing
                this.props.navigation.navigate('main')
            }else{
                throw new Error({message: 'Sorry, something went wrong; please try again.'});
            }
        })
        .catch(err => {           
            console.log(err.message);
        });
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
                    this.login();
                }}  
                title="Login" 
            />
            <Button title="No Account? Sign up here!" onPress={()=>this.props.navigation.navigate('register')}/>
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
export default Login;