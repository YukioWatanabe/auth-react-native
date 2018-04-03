import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';


export default class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCxx4aoyZKoe4SaZEjQ4Lwv0dtllabGQD0",
      authDomain: "auth-80afc.firebaseapp.com",
      databaseURL: "https://auth-80afc.firebaseio.com",
      projectId: "auth-80afc",
      storageBucket: "auth-80afc.appspot.com",
      messagingSenderId: "1038094070005"
    });

    firebase.auth().onAuthStateChanged((user) => {

      this.setState({ loggedIn: !!user });
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    );
  };
}