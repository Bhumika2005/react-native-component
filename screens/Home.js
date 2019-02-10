import React, {Component} from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {TabNavigator} from 'react-navigation';
import ActiveTab from './ActiveTab';
import PendingTab from './PendingTab';
import Base from './Base';


export default class Home extends Component{

  constructor(props){
    super(props);
    this.state={data:[]};
  }

  componentWillMount(){
      const {param}=this.props.pData;
      fetch('PUT YOUR API HERE', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'remember-token':this.props.pData.data.remember_token,
        },
    
      }).then((response)=>response.json())
      .then((responseJson)=>{   
        if(responseJson.code===200)
          {
            let userData=responseJson;
            this.setState({data:responseJson,});
          }
          else{
            console.log('responseJson error Message : '+responseJson.message);                
          }
      })
      .catch((error)=>{console.log('error'+error)});
  }

  render(){
        return(
          <MyApp ref='tabnavigation' screenProps={this.state.data}/>
        );
    }
}

const MyApp = TabNavigator({
      Active: {
        screen: ActiveTab,
      },
      Pending: {
        screen: PendingTab,
      },
    }, 
    {
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#000000',
        fontSize:25,
        showLabel: true, 
        labelTabBar: {
          fontSize: 20,
          marginTop: 0, // <- This is the guilty one in my case, simply removed it and it worked as expected on iOS 10 & 11
        },  
          indicatorStyle: {
            borderBottomColor: '#ffffff',
            borderBottomWidth: 1,
          },
          style: {
            backgroundColor:'#ffffff',
            left: 0,
            right: 0,
            bottom: 0,
          },
          tabStyle:{
            backgroundColor:'#327fa7',
          },
      },
    }
  );

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
})