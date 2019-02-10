
import SideMenu from 'react-native-side-menu';

import React, {Component} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import Menu from './Menu';
import {StackNavigator} from 'react-navigation';
import ActiveTab from './ActiveTab';
import PendingTab from './PendingTab';
import Switch, {Case, Default} from 'react-switch-case';


export default class ReactBase extends Component{
    static navigationOptions = {
        header: null // !!! Hide Header
      }
// static navigationOptions = {headerLeft:(<TouchableOpacity onPress={isOpen=>this.updateMenuState(!this.state.isOpen)} style={{flex:0.1,alignItems:'center'}}>
//     <Image  source={require('./imageSrc/icons_0024_Menu.png')} style={{width:30,height:30,marginLeft:10,tintColor:'#8E49B0'}} /></TouchableOpacity>),};

     
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={
            selectedItem: 'Home',
            isOpen:false,
        };
        

    }
 

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      }

    updateMenuState(isOpen){
        this.setState({isOpen});
    }

    onMenuItemSelected=item=>{
        //if(item!==this.state.selectedItem){
            const {params}=this.props.navigation.state;
            
       //     this.props.navigation.navigate(item,{dataObj:params});
                
            //         headerLeft:
            //         ( <View style={styles.menuImageStyle}><TouchableOpacity onPress={isOpen=>this.updateMenuState(!this.state.isOpen)} style={styles.touchableStyle}>
            //         <Image  source={require('./imageSrc/icons_0024_Menu.png')} style={styles.menuImage} />
            //     </TouchableOpacity></View>)
               
            //     });
           
    this.setState({
        isOpen:false,
        selectedItem:item,
    });
        
    
}

    render(){
        const {params}=this.props.navigation.state;
        const {navigate}=this.props.navigation;
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return(     
        <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={isOpen=>this.updateMenuState(isOpen)}>
            
             <View style={styles.menuImageStyle}>   
                <TouchableOpacity onPress={isOpen=>this.updateMenuState(!this.state.isOpen)} style={styles.touchableStyle}>
                    <Image  source={require('./imageSrc/icons_0024_Menu.png')} style={styles.menuImage} />
                </TouchableOpacity>
                <View style={styles.textHeaderStyle}>
                    <Text style={styles.textStyle} >Home</Text>
                </View>
            </View> 

                <BaseDemo ref='basedemo' style={{flex:0.9}} data={params} screenProps={navigate} item={'Home'}/>     
        
        </SideMenu>       
        );
        
    }

}

class BaseDemo extends Component{
    constructor(props){
      super(props);
      this.navigateScreen = this.navigateScreen.bind(this);
    }
    
    render(){
         const{navigate}=this.props.screenProps;
        const {params}=this.props.data;
        let item=this.props.item;
        return(
            <View>

            </View>
            
          
        );
    }
    ComponentDidMount(){
        console.log("React base: ComponentDidMount");
        let item=this.props.item;
        const {params}=this.props.data;
        
            <Switch condition={item}>
            <Case value='Home'>
                <ActiveTab data={params}/>
            </Case>
            <Case value='Edit Profile'>
                <PendingTab data={params}/>
            </Case>
            <Default>
                Nothing!
                <strong>default state</strong>
            </Default>
            </Switch>
    }
}
     
 
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
        backgroundColor:'#ffffff',
    },
    touchableStyle:{
        flex:0.1,alignItems:'center',
    },
    menuImage:{
        width:30,height:30,marginLeft:10,tintColor:'#8E49B0'
    },
    textHeaderStyle:{
        flex:0.9, alignItems:'center', justifyContent:'center'
    },
    textStyle:{
        alignItems:'center',fontSize:18,fontWeight:'bold',color:'#000000'
    },
})