import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import image1 from './countryImages/Argentina/bariloche.jpg'
import image2 from './countryImages/Argentina/buenosaires.jpg'
import image3 from './countryImages/Argentina/patagonia.jpg'
import flagImg1 from './flagImg/argentina.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export function Country1(){
    return(
        <View>
            <img src={flagImg1} />
            <Text>Name:</Text>
        </View>
    )
}