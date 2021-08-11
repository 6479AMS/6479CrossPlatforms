import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './config';
import * as firebase from 'firebase'

import { Signin } from './components/SignIn';
import { Signup } from './components/SignUp';

if ( !firebase.apps.length){
  firebase.initializeApp( firebaseConfig );
}

export default function App() {
  const [signup, setSignUp] = useState( true );

  const HandleSignUp = (email, password) => {
    //console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (response) => console.log(response))
    .catch((error)=> console.log(error))
  }


  const ToggleSignUp = () => {
    if (signup == true){
      setSignUp( false)
    } else {
      setSignUp( true)
    }
  }
  
   if (signup)
   {
    return (
      <View style={styles.container}>
        <Signup toggle={ToggleSignUp} handler={HandleSignUp}/>
      </View>
   
    );
    } else{
    return (
      <View style={styles.container}>
        <Signin toggle={ToggleSignUp} />
      </View>
   
    );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
