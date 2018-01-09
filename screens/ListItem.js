import React, {Component} from 'react';
import { StyleSheet,View,Text,Image} from 'react-native';


const ListItem =(props)=>(
        
            <View style={styles.container}>
               
                <View style={styles.rowStyle}>

                    <View style={styles.nameViewStyle} numberOfLines={1}>
                        <Text>
                            <Text style={styles.nameStyle} numberOfLines={1}>User Name</Text>
                            <Text style={styles.locationStyle} numberOfLines={1} vertical-align='bottom' ellipsizeMode='tail'> Ahmedabad, Gujarat, India</Text>
                        </Text>
                    </View>

                        <Image source={require("../imageSrc/ic_more_dots.png")} style={styles.threedotsStyle}/> 
                </View>
                
                <View style={styles.priceViewStyle}>
                <Text style={styles.rupeeStyle} >&#8377;</Text>
                <Text style={{marginLeft:5}}>
                    <Text style={styles.priceTextStyle} vertical-align='bottom'>1150</Text>
                    <Text style={styles.dayTextStyle} vertical-align='bottom'>/night</Text>
                </Text>
                
                </View>

                
                <View style={styles.bottomPartStyle}>
                    <View style={styles.facilityViewStyle}>

                        <View style={styles.checkinoutColumnStyle}>
                            <Text style={{fontSize:13}}>Check In</Text>
                            <Text style={styles.dateTextStyle} verticle-align='bottom'>10<Text style={styles.dayTextStyle} vertical-align='bottom'>Jul.</Text></Text>
                        </View>

                        <View style={styles.checkinoutColumnStyle}>
                            <Text style={{fontSize:13}}>Check Out</Text>
                            <Text style={{ flexDirection:'row',alignItems:'baseline'}}><Text style={styles.dateTextStyle}>11<Text style={styles.dayTextStyle} vertical-align='bottom'>Jul.</Text></Text></Text>
                        </View>

                        <View style={styles.facilityViewRoomStyle}>
                            <Image source={require('../imageSrc/ic_rooms_grey.png')} style={styles.imageStyle} ></Image>
                            <Text style={styles.facilityStyle}>100</Text>
                            <Image source={require('../imageSrc/ic_guest_grey.png')} style={styles.imageStyle} ></Image>
                            <Text style={styles.facilityStyle}>100</Text>
                            <Image source={require('../imageSrc/ic_timer_grey.png')} style={styles.imageStyle} ></Image>
                            <Text style={styles.facilityStyle}>3 hrs 55 mins</Text>
                        </View>

                    </View>

                   
                </View>
                   
            </View>  
        );
   

const styles=StyleSheet.create({
    container:{
        minHeight:145,
        backgroundColor:'#ffffff',
        borderRadius:10,
        margin:10,
        padding:10,
    },
    nameStyle:{
        fontSize:18,
        color:'#000000',
        fontWeight:'bold',
        marginRight:5,
    },
    rowStyle:{
        flexDirection:'row',
        alignItems:'flex-start',
        
        
    },
    locationStyle:{
        fontSize:14,
        color:'#999999',
        alignItems:'baseline',
        marginLeft:5,
    },
    threedotsStyle:{
        flex:0.1,width:23,height:23,alignContent:'flex-end',justifyContent:'flex-end'
    },
    rupeeStyle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#000000',
        alignItems:'flex-start',
    },
    priceViewStyle:{
        flexDirection:'row',
        alignItems:'baseline',
        marginTop:10,
        
        
    },
    priceTextStyle:{
        fontSize:22,
        color:'#f00000',
        marginLeft:5,
        alignItems:'baseline',
        fontWeight:'bold'
    },
    dayTextStyle:{
        alignItems:'baseline',
        fontSize:13,
        color:'#999999',
    },
 
    checkinoutColumnStyle:{
        flexDirection:'column',
        alignItems:'baseline',
        justifyContent:'flex-end',
        marginTop:15,
        marginRight:10,
    },
    nameViewStyle:{
        flex:0.9, flexDirection:'row',alignItems:'baseline'
    },
    dateTextStyle:{
        fontSize:20,
        fontWeight:'200',
        color:'#000000',
    },
    facilityViewStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-start',
        
    },

    facilityViewRoomStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'flex-end',
        marginBottom:3,
        
    },

    imageStyle:{
        width:15,
        height:15,
        alignItems:'baseline'
    },
    bottomPartStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'baseline',
      
    },
    bottomPartColumnStyle:{
        flex:0.5,
        alignItems:'baseline',
        marginTop:15,
        flexBasis:50,
    },
    facilityStyle:{
        fontSize:11,
        alignItems:'baseline',
        marginLeft:4,
        marginRight:4,
        
    }
})