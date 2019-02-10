import React, {Component} from 'react';
import { StyleSheet,View,Text,Image,ListView,FlatList} from 'react-native';
import { ProgressDialog } from 'react-native-simple-dialogs';
import ListItem from './ListItem';
import Moment from 'moment';

export default class PendingTab extends Component{
    constructor(props){
        super(props);
        
        this.state={progressVisible: true, loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,}; 
    }
    render(){
        return(
        <View style={styles.container}>
        <FlatList
            data={this.props.screenProps.data}
            renderItem={({item}) => (

                <View style={styles.containerFlat}>
                    <View style={styles.rowStyle}>
                        <View style={styles.nameViewStyle} numberOfLines={1}>
                            <Text>
                                <Text style={styles.nameStyle} numberOfLines={1}>{item.customer_name}</Text>
                                <Text style={styles.locationStyle} numberOfLines={1} vertical-align='bottom' ellipsizeMode='tail'> {item.caption+', '+item.location_state+', '+item.location_country}</Text>
                            </Text>
                        </View>
                            <Image source={require("../imageSrc/ic_more_dots.png")} style={styles.threedotsStyle}/> 
                    </View>
                    
                    <View style={styles.priceViewStyle}>
                    <Text style={styles.rupeeStyle} >&#8377;</Text>
                    <Text style={{marginLeft:5}}>
                        <Text style={styles.priceTextStyle} vertical-align='bottom'>{item.price}</Text>
                        <Text style={styles.dayTextStyle} vertical-align='bottom'>/night</Text>
                    </Text>
                    </View>
                    
                    <View style={styles.bottomPartStyle}>
                        <View style={styles.facilityViewStyle}>

                            <View style={styles.checkinoutColumnStyle}>
                                <Text style={{fontSize:13}}>Check In</Text>
                                <Text style={styles.dateTextStyle} verticle-align='bottom'>{Moment(item.checkin).format('DD')}<Text style={styles.dayTextStyle} vertical-align='bottom'>{Moment(item.checkin).format('MMM')}</Text></Text>
                            </View>

                            <View style={styles.checkinoutColumnStyle}>
                                <Text style={{fontSize:13}}>Check Out</Text>
                                <Text style={styles.dateTextStyle}>{Moment(item.checkout).format('DD')}<Text style={styles.dayTextStyle} vertical-align='bottom'>{Moment(item.checkout).format('MMM')}</Text></Text>
                            </View>

                            <View style={styles.facilityViewRoomStyle}>
                                <Image source={require('../imageSrc/ic_rooms_grey.png')} style={styles.imageStyle} ></Image>
                                <Text style={styles.facilityStyle}>{item.num_rooms}</Text>
                                <Image source={require('../imageSrc/ic_guest_grey.png')} style={styles.imageStyle} ></Image>
                                <Text style={styles.facilityStyle}>{parseInt(item.num_adults)+parseInt(item.num_children)}</Text>
                                <Image source={require('../imageSrc/ic_timer_grey.png')} style={styles.imageStyle} ></Image>
                                <Text style={styles.facilityStyle}>3 hrs 55 mins</Text>
                            </View>

                        </View>

                    
                    </View>
                    
                </View>
            )}
            keyExtractor={item => item.id}
        />
                
      
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#235874',
        paddingTop:6,
        
    },
    containerFlat:{
        minHeight:145,
        backgroundColor:'#eeeeee',
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        marginTop:5,
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