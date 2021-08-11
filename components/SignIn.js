import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Signin (props){
    

    return(
    <View>
        <Text style={signInStyles.heading}>Sign In to your Account</Text>
        <Text>Email:</Text>
        <TextInput style={signInStyles.input} />
        <Text>Password:</Text>
        <TextInput style={signInStyles.input} secureTextEntry={true}/>
        <TouchableOpacity style={signInStyles.signInBtn}><Text style={signInStyles.btnText}>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={props.toggle}>
            <Text>Don't have an account?</Text>
            <Text style={signInStyles.signUp}>Create a new account</Text>
        </TouchableOpacity>
    </View>
)
}

const signInStyles = StyleSheet.create({
heading: {
    fontSize: 22,
},
input: {
    fontSize:18,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 5,
},
signInBtn: {
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
signUp:{
    fontWeight: 'bold',
    color: '#008CBA',
},
});