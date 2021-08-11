import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebaseConfig } from './config';
import * as firebase from 'firebase'

import { Signin } from './components/SignIn';
import { Signup } from './components/SignUp';
import { Home } from './components/Home';

if ( !firebase.apps.length){
  firebase.initializeApp( firebaseConfig );
}

export default function App() {
  const [signup, setSignUp] = useState( true );
  const [auth, setAuth] = useState(false);

  const HandleSignUp = (email, password) => {
    //console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (response) => {
      console.log(response)
      setAuth(true)
    } )
    .catch((error)=> console.log(error))
  }

  const HandleSignIn = ( email, password) => {
    firebase.auth().signinWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response)
      setAuth(true)
    } )
    .catch((error) => console.log(error))
  } 


  const ToggleSignUp = () => {
    if (signup == true){
      setSignUp( false)
    } else {
      setSignUp( true)
    }
  }

const Stack = createStackNavigator();

        return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen name="SignIn">
                {(props) => <Signin {...props} handler={HandleSignIn}/>}
              </Stack.Screen>
              <Stack.Screen name="SignUp">
                {(props) => <Signup {...props} handler={HandleSignUp}/>}
              </Stack.Screen>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
        )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
