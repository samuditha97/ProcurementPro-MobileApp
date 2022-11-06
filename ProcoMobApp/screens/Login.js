import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ImageBackground


} from 'react-native';

export default function Login(props) {
    return (
        
        <ImageBackground source={require('../assets/cover.jpg')} style={styles.container1}>

         <View style={styles.container}>
             <View style={styles.inputContainer}>
             
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              />
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => props.navigation.navigate('Purchase')} >
          <Text style={styles.loginText} >Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => props.navigation.navigate('Signup')}>
            <Text>Register</Text>
        </TouchableHighlight>
        </View>
        </ImageBackground>

    
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        marginTop:0,
        width:400
    
        
    },
    container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C9D8E',
    height: 50,
    width: 700,
    marginTop: 290,
    borderTopLeftRadius: 10000,
    opacity: 0.7
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        opacity: 10.9
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#000000",
      opacity: 10.9
    },
    loginText: {
      color: 'white',
    }
  });