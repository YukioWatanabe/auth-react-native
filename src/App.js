import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './component/common';
import LoginForm from './component/LoginForm';


export default class App extends Component {

  state = { loggedIn: null };

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

  renderContent() {
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={ () => firebase.auth().signOut()} >
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm/>;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  };
}