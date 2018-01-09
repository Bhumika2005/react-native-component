import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  NativeModules,
  ScrollView,
  TouchableHighlight,
  HeaderBarItem
} from 'react-native';
import Moment from 'moment';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

export default class ProfileScreen extends Component {
    constructor(props){
    super(props);
  }

  static navigationOptions=({navigation})=>({
    title:'Profile',
    headerTintColor:'#ffffff',
    headerStyle: {
      backgroundColor: '#235874',
    },
    headerTitleStyle:{color:'#ffffff',
    fontWeight:'normal'},
    style: {
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
    }
  });

  
  render() {
    const {params}=this.props.navigation.state;
    console.log('date : '+params.data.password_set_email);
    Moment.locale('en');
      return (
        <View style={styles.container}> 
           <ScrollView>
          <View style={styles.inlineStyle}>
          <Image source={{uri:params.data.profile_img}} indicator={Progress.Circle} style={styles.imageStyle} borderRadius={100}/>
            <Text style={styles.nameTextStyle}>{params.data.name}</Text>
            <Text style={styles.nameTextStyle}>
              Member since {Moment(params.data.registration_date).format('DD/MM/YYYY')}
            </Text>
          </View>
          
          <TextInput style={styles.welcome} value={params.data.name} editable={false}/>
          <TextInput  style={styles.emailTextStyle} value={params.data.email} editable={false}/>
          
         <View style={styles.phoneViewStyle}>
            <Image source={{uri: params.data.country.flag_url}} indicator={Progress.Circle} style={{height:30,width:35}}/>
            <Text style={{fontSize: 18,marginLeft:10,color:'#000000'}}>+91 {params.data.mobile}</Text>    
        </View>
        
        <View style={styles.bottomBorderStyle}/>
        
        </ScrollView>
        
        {/* <View style={{flex:1,borderTopWidth:1,borderTopColor:'#000000',justifyContent:'flex-end',flexDirection:'row'}}>
          <Text style={{fontSize:18,marginRight:10,textAlignVertical:'center'}}>Save</Text>
        </View>
       </View>  */}
        <TouchableHighlight  ref='loginTouchable' style={styles.buttonstyle} onPress={this.onPressListener} underlayColor='#68afcf'>
        <Text style={styles.buttontext}>Save</Text>
      </TouchableHighlight>
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'stretch',
      backgroundColor: '#ffffff',
    },
    welcome: {
      fontSize: 18,
      marginLeft:10,
      marginRight:10,
      marginTop: 10,
      color:'#000000',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    imageStyle:{
      width:200,
      height:200,
      marginTop:30,
      marginBottom:10,
      overflow:'hidden',
    },
    inlineStyle:{
      backgroundColor:'#235874',
      justifyContent:'center',
      alignItems:'center'
    },
    nameTextStyle:{
      fontSize: 18,
      textAlign: 'center',
      marginBottom:10,
      color:'#ffffff',
    },
    emailTextStyle:{
      fontSize: 18,
      marginLeft:10,
      marginRight:10,
      color:'#000000',
    },
    phoneViewStyle:{
      flexDirection:'row',
      alignSelf:'flex-start',
      marginTop:10,
      marginLeft:13,
      marginRight:12,
    },
    bottomBorderStyle:{
        borderBottomWidth:1,
        borderBottomColor:'#f1f1f1',
        marginLeft:90,
        marginTop:2,
        marginRight:15,
      },
      buttonstyle:{
        backgroundColor:'#235874',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        justifyContent:'center',
        height:50
      },
      buttontext:{
        fontSize:20,
        textAlign:'center',
        color:'#ffffff',
      },
  });