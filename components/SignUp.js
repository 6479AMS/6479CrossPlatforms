import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Signup (props){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const[validEmail, setValidEmail] = useState(false)
    const[validPassword, setValidPassword] = useState(false)

    const HandleEmail = (emailVal) => {

        if (emailVal.indexOf('@') >  0){
            setValidEmail(true)
        }
        setEmail( emailVal )
    }

    const HandlePassword = (passwordVal) => {

        if (passwordVal.length >=8){
            setValidPassword(true)
        }
        setPassword( passwordVal)
    }
    const HandleSubmit = () => {
        props.handler(email, password)
    }

    return(
    <View>
        <Text style={signUpStyles.heading}>Create a New Account</Text>
        <Text>Email:</Text>
        <TextInput 
        style={signUpStyles.input} 
        onChangeText={ (val) => HandleEmail(val) } 
        />
        <Text>Password:</Text>
        <TextInput 
        style={signUpStyles.input} 
        secureTextEntry={true} 
        onChangeText = {(val) => HandlePassword(val) }
        />
        <TouchableOpacity 
        style={(validEmail && validPassword) ? signUpStyles.signUpBtn : signUpStyles.btnDisabled} 
        onPress={HandleSubmit}
        disabled={(validEmail && validPassword) ? false : true }
        >
            <Text style={signUpStyles.btnText}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity onPress={props.toggle}>
            <Text>Already Signed Up?</Text>
            <Text style={signUpStyles.signIn}>Sign In to your account</Text>
        </TouchableOpacity>
    </View>
)
}

const signUpStyles = StyleSheet.create({
heading: {
    fontSize: 22,
},
input: {
    fontSize:18,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 5,
},
signUpBtn: {
    backgroundColor: '#008CBA',
    padding: 3,
    marginVertical: 5,
    borderRadius: 15,
},
btnText:{
    color : 'white' , 
    textAlign : 'center',
    fontWeight: 'bold',
},
signIn:{
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