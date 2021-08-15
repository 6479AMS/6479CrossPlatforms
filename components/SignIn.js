import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto';

export function Signin (props){

   

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState()
    const[validPassword, setValidPassword] = useState()

     

    useEffect ( () => {
        const emailNoSpaces = email.split(' ').join('').length

        if (email.length >= 5 && email.length === emailNoSpaces){
            setValidEmail( true)
        }
        else {
            setValidEmail(false)
        }
        if (password.length >= 6){
            setValidPassword (true)
        }
        else {
            setValidPassword(false)
        }
    }, [email,password])

    useEffect ( () => {
        if (props.auth) {
            navigation.reset({index:0, routes:[{name: "Home"}]})
        }
    }, [props.auth])

    const SignIn = () => {
        props.handler(email, password)
    }

    return(
    <View style={signInStyles.container}>
        <Text style={signInStyles.heading}>Sign In to your Account</Text>
        <Text>Email:</Text>
        <TextInput style={signInStyles.input} 
        onChangeText={(val) => setEmail(val)}/>
        <Text>Password:</Text>
        <TextInput style={signInStyles.input} 
        secureTextEntry={true} onChangeText={(val) => setPassword(val)} />
        <TouchableOpacity 
        style={(!validEmail || !validPassword) ? signInStyles.btnDisabled :  signInStyles.signInBtn} 
        onPress={SignIn}
        disabled = {(!validEmail || !validPassword) ? true:false}
        >
            <Text style={signInStyles.btnText}>Sign In</Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text>Don't have an account?</Text>
            <Text style={signInStyles.signUp}>Create a new account</Text>
        </TouchableOpacity>
        
    </View>
)
}

const signInStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 30,
        backgroundColor: '#CAD5E2',
        paddingVertical:20,
        paddingHorizontal: 10,
        borderRadius:20,
      },
heading: {
    fontSize: 22,
    padding:10,
},
input: {
    fontSize:18,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
},
signInBtn: {
    backgroundColor: '#008CBA',
    padding: 3,
    marginVertical: 5,
    borderRadius: 15,
    padding:10,
    borderColor:'black',
},
btnText:{
    color : 'white' , 
    textAlign : 'center',
    fontWeight: 'bold',
    
},
signUp:{
    fontWeight: 'bold',
    color: '#008CBA',
},
btnDisabled: {
    backgroundColor: '#cccccc',
    padding: 3,
    marginVertical: 5,
    borderRadius: 15,
},
});