import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function Home(props) {

    const navigation = useNavigation()
    const Signout = () => {

        props.signout()
        .then( (result) => {
            if (result === true) {
                navigation.reset({index:0, routes:[{name: "SignUp"}]})
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