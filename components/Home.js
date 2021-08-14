import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Logout } from './LogOut';

export function Home(props) {

    const navigation = useNavigation()

    navigation.setOptions({
        headerRight: props => 
            <Logout {...props} handler={Signout}/>
        
    })

    const Signout = () => {

        props.signout()
        .then( (result) => {
            if (result === true) {
                navigation.reset({index:0, routes:[{name: "SignIn"}]})
            }
        })
        .catch( (error) => console.log(error) )
    }

    return (
        <View style={HomeStyles.pageContainer}>
            <TouchableOpacity onPress={  Signout }>
                <Text>Sign Out</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Home</Text>
        </View>
    )
}

const HomeStyles = StyleSheet.create({
    pageContainer: {
        minHeight: 300,
        backgroundColor: 'lightblue',
    },
})