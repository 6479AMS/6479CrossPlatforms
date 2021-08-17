import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Logout } from './LogOut';
import { Country1 } from './Country';
import { Country2 } from './Country2';
import { Country3 } from './Country3';
import { Country4 } from './Country4';
import { Country5 } from './Country5';
import { Country6 } from './Country6';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import image1 from './flagImg/argentina.png'
import image2 from './flagImg/brazil.png'
import image3 from './flagImg/ecuador.png'
import image4 from './flagImg/japan.png'
import image5 from './flagImg/nepal.png'
import image6 from './flagImg/thailand.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      borderRadius:10,
     // maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));


      const Drawer = createDrawerNavigator();
      const Stack = createStackNavigator();

export function Home(props) {
    const [user,setUser] = useState();

    const [country, setCountry] = useState();
    

    const navigation = useNavigation()

    // navigation.setOptions({
    //     headerRight: props => 
    //         <Logout {...props} handler={Signout}/>
        
    // })
    useEffect( () => {
        if( props.auth ) {
          setUser( props.auth )
        }
        else {
          setUser(null)
        }
        navigation.setOptions({
          headerRight: props => <Logout {...props} handler={Signout}/>
        })
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
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DrawerRoutes} options= {{
        headerShown: false
          }} />
        <Stack.Screen name="Country" component={Country1} options= {{
        headerShown: false
          }}/>
        <Stack.Screen name="Country2" component={Country2} options= {{
        headerShown: false
          }}/>
          <Stack.Screen name="Country3" component={Country3} options= {{
        headerShown: false
          }}/>
          <Stack.Screen name="Country4" component={Country4} options= {{
        headerShown: false
          }}/>
          <Stack.Screen name="Country5" component={Country5} options= {{
        headerShown: false
          }}/>
          <Stack.Screen name="Country6" component={Country6} options= {{
        headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>  
    )
}

function DrawerRoutes() {
  return(

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Country" component={Country1} options={{title: "Argentina"}}/>
        <Drawer.Screen name="Country2" component={Country2} options={{title: "Brazil"}} />
        <Drawer.Screen name="Country3" component={Country3} options={{title: "Ecuador"}}/>
        <Drawer.Screen name="Country4" component={Country4} options={{title: "Japan"}}/>
        <Drawer.Screen name="Country5" component={Country5} options={{title: "Nepal"}}/>
        <Drawer.Screen name="Country6" component={Country6} options={{title: "Thailand"}}/>
      </Drawer.Navigator>

  )
}



function HomeScreen({navigation}){
  const classes = useStyles();
return(
<View style={HomeStyles.pageContainer}>
            
            <AliceCarousel autoPlay autoPlayInterval="3000" >
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
                <img src={image4} className="sliderimg"/>
                <img src={image5} className="sliderimg"/>
                <img src={image6} className="sliderimg"/>
            </AliceCarousel>

            <List className={classes.root}>
        <TouchableOpacity onPress={() => navigation.navigate("Country")}>
      <ListItem >
        <ListItemAvatar>
        <Avatar variant="square" src={image1} className={classes.square} />
        </ListItemAvatar>
        <ListItemText primary="Argentina" secondary="South America" />
      </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Country2")}>
      <ListItem>
        <ListItemAvatar>
        <Avatar variant="square" src={image2} className={classes.square} />
        </ListItemAvatar>
        <ListItemText primary="Brazil" secondary="South America" />
      </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Country3")}>
      <ListItem>
        <ListItemAvatar>
        <Avatar variant="square" src={image3} className={classes.square} />
        </ListItemAvatar>
        <ListItemText primary="Ecuador" secondary="South America" />
      </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Country4")}>
      <ListItem>
        <ListItemAvatar>
        <Avatar variant="square" src={image4} className={classes.square} />
        </ListItemAvatar>
        <ListItemText primary="Japan" secondary="Asia" />
      </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Country5")}>
      <ListItem>
        <ListItemAvatar>
        <Avatar variant="square" src={image5} className={classes.square} />
        </ListItemAvatar>
        <ListItemText primary="Nepal" secondary="Asia" />
      </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Country6")}>
      <ListItem>
        <ListItemAvatar>
        <Avatar variant="square" src={image6} className={classes.square} />
        </ListItemAvatar>
        <ListItemText primary="Thailand" secondary="Asia" />
      </ListItem>
      </TouchableOpacity>
      
    </List>

        </View>
)
}

const HomeStyles = StyleSheet.create({
    pageContainer: {
      maxHeight: "100%",
        overflow: 'auto',
        backgroundColor: '#CAD5E2',
    },
    listItem: {
        borderRadius:15,
    },
    carousel:{
        borderRadius:10,
    },
})