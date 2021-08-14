import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Logout } from './LogOut';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import image1 from './flagImg/argentina.png'
import image2 from './flagImg/brazil.png'
import image3 from './flagImg/ecuador.png'
import image4 from './flagImg/japan.png'
import image5 from './flagImg/nepal.png'
import image6 from './flagImg/thailand.png'


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

    const Greeting = () => {
        if(!user) {
          return null
        }
        else{
          return <Text>{user.email}</Text>
        }
      }
    
      const handleDate = (event,selectedDate) => {
        setDate( selectedDate)
      }

    return (
        <View style={HomeStyles.pageContainer}>
            <Text style={{textAlign: 'center'}}>Get Familiar</Text>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
                <img src={image4} className="sliderimg"/>
                <img src={image5} className="sliderimg"/>
                <img src={image6} className="sliderimg"/>
            </AliceCarousel>
        </View>
    )
}

const HomeStyles = StyleSheet.create({
    pageContainer: {
        minHeight: 300,
        backgroundColor: 'lightblue',
    },
})