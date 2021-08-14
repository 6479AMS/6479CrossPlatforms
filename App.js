import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebaseConfig } from './config';
import   firebase from 'firebase';
import { useNavigation } from '@react-navigation/core';


import { Signin } from './components/SignIn';
import { Signup } from './components/SignUp';
import { Home } from './components/Home';
import { reject } from 'async';

if ( !firebase.apps.length){
  firebase.initializeApp( firebaseConfig );
}

export default function App() {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState();

  const db = firebase.firestore()
  
  firebase.auth().onAuthStateChanged((user) =>{
    if ( user ){
      setAuth( true )
    }
    else {
      setAuth( false )
    }
  })


  useEffect( () => {
    if ( !data) {
      readData()
    }
  })

  const addData = ( data ) => {
    return new Promise((resolve, reject) => {
      if ( !auth ) {
        reject("User cannot be authenticated.")
      } else
      {
        const ref = db.collection('users').doc(user.uid).collection('read')
        ref.add(data)
        .then(() => {resolve(true)})
        .catch((error) => {reject(error)})
      }
    })
  }

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
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response)
      setAuth(true)
    } )
    .catch((error) => console.log(error))
  } 

  const HandleSignOut = () => {
    return new Promise( (resolve, reject) => {
    firebase.auth().signOut()
      .then( () => {
        setAuth(false)
        resolve(true)
      })
    .catch((error) => {
      console.log(error)
      reject(error)
     })
    })
  }



  const readData = () => {
    let countries = []
    db.collection('countries').get()
    .then( ( snapshot ) => {
        snapshot.forEach( (doc) => {
          let country = doc.data()
          country.id = doc.id;
          countries.push(country)
        })
    })

    setData(countries)
  }

  const Stack = createStackNavigator();

        return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignIn">
                {(props) => <Signin {...props} handler={HandleSignIn} auth ={auth}/>}
              </Stack.Screen>
              <Stack.Screen name="SignUp">
                {(props) => <Signup {...props} handler={HandleSignUp} auth={auth}/>}
              </Stack.Screen>
              <Stack.Screen name="Home"  
              options={{title: "Get Familiar"}}
              >
                { (props) => <Home {...props} 
                signout = {HandleSignOut} auth={auth} listData={data}  add={addData}/> }
              </Stack.Screen>
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
