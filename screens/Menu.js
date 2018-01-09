
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

const window = Dimensions.get('window');

export default function Menu({onItemSelected}){

    return(
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <View style={styles.header}>
                <Image
                style={styles.imageStyle}
                source={require("../imageSrc/ic_profile_white.png")}/>
                <Text style={styles.headerTextStyle} textBreakStrategy='simple' >Test Developer</Text>
            </View>
           
            <Text onPress={() => onItemSelected('Referral Code')}
                style={styles.codeStyle}> Referral Code ROIA896</Text>
                <View style={styles.bottomBorderStyle}/>
                
                <View style={styles.menuItemStyle}>
                
                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_home.png")}/>
                    <Text onPress={() => onItemSelected('Home')} style={styles.itemTextStyle}>Home</Text>
                </View>
                
                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_history.png")}/>
                     <Text onPress={() => onItemSelected('Booking History')} style={styles.itemTextStyle}> Booking History </Text>
                </View>

                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_auto_response.png")}/>
                        <Text onPress={() => onItemSelected('Auto Response')} style={styles.itemTextStyle}> Auto Response </Text>
                </View>

                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_edit.png")}/>
                    <Text onPress={() => onItemSelected('Edit Profile')} style={styles.itemTextStyle}> Edit Profile </Text>
                </View>
                
                <View style={styles.bottomBorderStyle}/>
                
                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_message.png")}/>
                        <Text onPress={() => onItemSelected('Message Center')} style={styles.itemTextStyle}> Message Center </Text>
                </View>        
                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_invite.png")}/>
                <Text onPress={() => onItemSelected('Invite Friends')} style={styles.itemTextStyle}> Invite Friends </Text>
                </View>
                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_rate_us.png")}/>
                    <Text onPress={() => onItemSelected('Rate us')} style={styles.itemTextStyle}> Rate us </Text>
                </View>
                <View style={styles.itemViewStyle}>
                    <Image
                        style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_about.png")}/>
                    <Text onPress={() => onItemSelected('About')} style={styles.itemTextStyle}> About </Text>
                </View>
                
                <View style={styles.bottomBorderStyle}/>

                <View style={styles.itemViewStyle}>
                    <Image
                    style={[styles.itemImageStyle,{tintColor:'#235874'}]}
                        source={require("../imageSrc/ic_slide_menu_logout.png")}/>
                    <Text onPress={() => onItemSelected('Logout')} style={styles.itemTextStyle}> Logout </Text>
                </View>
             
                </View>
        </ScrollView>
    );
}

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
  };

const styles=StyleSheet.create({
    menu:{
        flex:1,
        width:window.width/1,
        height:window.height/1.5,
        backgroundColor:'#ffffff',
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#235874',
        paddingLeft:10,
        paddingTop:29,
        paddingBottom:29,
        paddingRight:10, 
    },
    imageStyle:{
        alignItems:'center',
        justifyContent:'center',
    },
    headerTextStyle:{
        flex:1,
        fontSize: 20,
        textAlign: 'auto',
        marginLeft:15,
        color:'#ffffff'
    },
    codeStyle:{
        fontSize:18,
        color:'#235874',
        fontWeight:'bold',
        margin:15
    },
    itemTextStyle:{
        marginLeft:5,
        fontSize:16,
        color:'#235874',
        textAlign:'center'
    },
    menuItemStyle:{
        margin:0
    },
    bottomBorderStyle:{
        borderBottomWidth:1,
        borderBottomColor:'#aaaaaa'
    },
    itemViewStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        margin:14
    },
    itemImageStyle:{
        width:22,
        height:22,
        alignItems:'center',
        justifyContent:'center'
    },

})
