
import SideMenu from 'react-native-side-menu';

import React, {Component} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import Menu from './Menu';
import {StackNavigator,NavigationActions,TabNavigator} from 'react-navigation';
import Home from './Home';
import ActiveTab from './ActiveTab';
import PendingTab from './PendingTab';
import ProfileScreen from './ProfileScreen';
import ElevatedView from 'react-native-elevated-view';

export default class Base extends Component{
    static navigationOptions = {
        header: null // !!! Hide Header
      }

    //define static variable to keep store data of logged in user.
    static userProfile=[];
         
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={
            selectedItem: 'Home',
            isOpen:false,
        };  
    }
   
    //side menu open/close status
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      }

    updateMenuState(isOpen){
        this.setState({isOpen});
    }
   
    //This method is identify which menu item is selected.
    // And do next step on selected menu item.
    onMenuItemSelected=item=>{
        if(item==='Edit Profile'){
            const {params}=this.props.navigation.state;
            //send data from one .js file to other .js file.
            this.props.navigation.navigate('ProfileScreen',{data:userProfile.data});
        }  
        this.setState({
            isOpen:false,
            selectedItem:item,
        });      
    }

    componentDidMount(){
        const {params} = this.props.navigation.state;
        userProfile=params;
    }

    render(){
        const {params}=this.props.navigation.state;
        const {navigate}=this.props.navigation;
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        const shadowStyle={shadowRadius:20,shadowOpacity:2,shadowColor:'#ffffff',shadowOffset:{width:2,height:2},elevation:2}
        return(
        <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={isOpen=>this.updateMenuState(isOpen)}>
            {/*This is Header. Side menu icon on Header to open side menu.*/}
             <View style={styles.menuImageStyle}>
                <TouchableOpacity onPress={isOpen=>this.updateMenuState(!this.state.isOpen)} style={styles.touchableStyle}>
                    <Image source={require('../imageSrc/icons_0024_Menu.png')} style={styles.menuImage} />
                </TouchableOpacity>
                <View style={styles.textHeaderStyle}>
                    <Text style={styles.textStyle}>Home</Text>
                </View>
             </View>  
             {/*Launch home screen by default*/}
             <Home pData={params}/> 
        </SideMenu>       
        );
    }
}

const BaseDemo=
   StackNavigator({
        Home:{screen:Home},
        },{
            navigationOptions: ({ navigation }) => ({
        headerLeft:
                ( <View style={{ flex:1,
                    justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center',
                    backgroundColor:'#ffffff'}}><TouchableOpacity onPress={isOpen=>this.updateMenuState(!this.state.isOpen)} style={{flex:0.1,alignItems:'center',}}>
                <Image  source={image1} style={{width:30,height:30,marginLeft:10,tintColor:'#8E49B0'}} />
            </TouchableOpacity></View>)
        })
    });
       
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    menuImageStyle:{
        flex:0.1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#235874',
        shadowRadius:20,
        shadowOpacity:1,
        shadowColor:'#000000',
        shadowOffset:{width:10,height:10},
        elevation:3
    },
    touchableStyle:{
        flex:0.1,alignItems:'center',
    },
    menuImage:{
        width:20,
        height:20,
        marginLeft:10,
        tintColor:'#ffffff'
    },
    textHeaderStyle:{
        flex:0.9, 
        alignItems:'flex-start', 
        justifyContent:'center',
        marginLeft:40,
    },
    textStyle:{
        alignItems:'center',
        fontSize:20,
        color:'#ffffff'
    },
})