import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  NativeModules,
  AppRegistry,
  TouchableHighlight,
  ToastAndroid,
  Keyboard,
} from 'react-native';
import { ProgressDialog } from 'react-native-simple-dialogs';
import ProfileScreen from './ProfileScreen';
import Base from './Base';

class Signin extends Component{
  constructor(props){
    super(props);
    this.state={textName:'',textSecondName:'', progress: 0,progressVisible: false};
    this.onPressListener=this.onPressListener.bind(this);
    this.validateEmail=this.validateEmail.bind(this);
  }

  validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  onPressListener()
  {
      if(this.state.textName!=='')
        {
          if(this.validateEmail(this.state.textName))
            {
              if(this.state.textSecondName!=='')
                {
                   if(this.state.textSecondName.length>5) 
                    {
                      this.setState({ progressVisible: true });
                      this.refs.progressDialog.visible=this.state.progressVisible;
                      
                      fetch('PUT YOUR API HERE', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          'email': this.state.textName,
                          'password': this.state.textSecondName,
                        })
                      }).then((response)=>response.json())
                      .then((responseJson)=>{
                        this.setState({ progressVisible: false });
                        this.refs.progressDialog.visible=this.state.progressVisible;
                        const{navigate}=this.props.screenProps;
                        if(responseJson.code===200)
                          {
                            let userData=responseJson.data;
                            this.refs.emailInput.clear();
                            this.refs.passwordInput.clear();
                            this.refs.emailInput.focus();
                            this.setState({textName:'',textSecondName:''});
                            Keyboard.dismiss();
                            navigate('Base',{data:userData});
                          }
                          else{
                            ToastAndroid.show(responseJson.message,ToastAndroid.SHORT);                       
                          }
                      })
                      .catch((error)=>{console.error(error)});
                    }
                    else{
                        ToastAndroid.show('Password must be 6 character long',ToastAndroid.SHORT);
                    }
                }
                else{
                  ToastAndroid.show('Please enter password',ToastAndroid.SHORT);    
                }
            }
            else{
              ToastAndroid.show('Invalid email',ToastAndroid.SHORT);
            }
        }
        else{
          ToastAndroid.show('Please enter email',ToastAndroid.SHORT);
        }
  }
   render(){
    return(
      <View style={styles.container} >
      
        <TextInput ref='emailInput' placeholder='Email' keyboardType='email-address' returnKeyType={'next'}
        onChangeText={(textName)=>this.setState({textName})} onSubmitEditing={(event)=>{this.refs.passwordInput.focus();}}></TextInput> 
      
        <TextInput  ref='passwordInput' placeholder='Password' secureTextEntry={true} selectTextOnFocus={false}
        onChangeText={(textSecondName)=>this.setState({textSecondName})}></TextInput>

        <TouchableHighlight  ref='loginTouchable' style={styles.buttonstyle} onPress={this.onPressListener} underlayColor='#68afcf'>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableHighlight>
      
      <ProgressDialog 
        ref='progressDialog'
        visible={this.state.progressVisible} 
        title='Progress Dialog' 
        message='Please, wait...'
      />
     
      </View>
    );
  }
}

export default class Login extends Component {
  constructor(props){
  super(props);
  this.state={textName:'',number:10};
}
static navigationOptions = {
  header: null // !!! Hide Header
}

render() {
  const {navigate}=this.props.navigation;
  return (
      <View style={styles.container}>   
        <Signin screenProps={this.props.navigation}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin:5,
    backgroundColor: '#F5FCFF',
    borderRadius:10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    height:50,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonstyle:{
    backgroundColor:'#235874',
    marginTop:10,
    justifyContent:'center',
    height:50
  },
  buttontext:{
    fontSize:20,
    textAlign:'center',
    color:'#ffffff',
  },
});