import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  NativeModules
} from 'react-native';

const {ToastModule}=NativeModules

import {StackNavigator} from 'react-navigation';
import Login from './Login';
import ProfileScreen from './ProfileScreen';
import Base from './Base';
import Home from './Home';

const SideMenuDemo = StackNavigator({
    Login:{screen:Login},
    Base:{screen:Base},
    ProfileScreen:{screen:ProfileScreen},
    Home:{screen:Home},
     },{headerMode:'screen'});
  
  class App extends Component {
    componentDidMount () {
      console.log("volume is : 10");
    }
    render() {
      return (
        <View/>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  export default SideMenuDemo;