import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

var firebaseConfig = {
  apiKey: "AIzaSyCqQNGErpAG2-PmAb2xm1CxpgdG54HmyPA",
  authDomain: "reactbootcamp-b3ef2.firebaseapp.com",
  databaseURL: "https://reactbootcamp-b3ef2.firebaseio.com",
  projectId: "reactbootcamp-b3ef2",
  storageBucket: "",
  messagingSenderId: "481982142827",
  appId: "1:481982142827:web:76f470bec41047ee"
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: {screen: LoadingScreen},
    SignIn: {screen: SigninScreen},
    SignUp: {screen: SignupScreen},
    Home: {screen: HomeScreen}
  },
  {
    initialRouteName: "Loading"
  }
)

const App = createAppContainer(MainNavigator);
export default App;