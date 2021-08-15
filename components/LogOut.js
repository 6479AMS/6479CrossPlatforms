import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#ffffff",
    },
  }));

export function Logout (props) {

    const classes = useStyles();

    const PressHandler = () => {
        props.handler()
    }
    return(
        <View>
            
        <TouchableOpacity  onPress={PressHandler}>
        <Button variant="outlined" color="primary" className={classes.button}  endIcon={<ExitToAppIcon/>}  >
                Logout
        </Button>
        </TouchableOpacity>
        </View>
    )
}

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "#ffffff",
//     },
    
// })