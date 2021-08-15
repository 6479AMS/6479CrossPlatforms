import "./App.css";
import React from "react";
import { firebaseConfig } from './config';
import   firebase from 'firebase';

class Country extends React.Component {
    const auth=firebase.auth();
    

    state = {
        countries: null
    }

    componentDidMount(){
        console.log('mounted')
    }

    render() {
        return (
            <div className="Country"></div>
        )
    }
}

export default Country();