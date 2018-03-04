import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

componentWillMount() {
  firebase.initializeApp({
   apiKey: 'AIzaSyCZTewM16gagvHY4y0gflXCx80aFYrS_Vk',
   authDomain: 'authentication-e5e05.firebaseapp.com',
   databaseURL: 'https://authentication-e5e05.firebaseio.com',
   projectId: 'authentication-e5e05',
   storageBucket: 'authentication-e5e05.appspot.com',
   messagingSenderId: '789834436521'
 });

firebase.auth().onAuthStateChanged((user) => {
  // if (user) {
  //   this.setState({ loggedIn: true });
  // } else {
  //   this.setState({ loggedIn: false });
  // }
  this.setState({ loggedIn: false });
});
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return <Button>Log out</Button>;
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
