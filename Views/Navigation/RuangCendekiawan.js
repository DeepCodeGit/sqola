import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import {render} from "react-native-web";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class RuangCendekiawan extends React.Component{
    render() {
        return(
            <View style={{flex:1, flexDirection:"column"}}>
                <View style={{flexDirection:"row"}}>
                    <TextInput placeholder={"Cari Pertanyaan.."} style={{width:"70%",paddingLeft:10, paddingRight:7.5,paddingTop:2, paddingBottom:2,
                        marginTop: 7,
                        backgroundColor: 'transparent',
                        borderRadius:50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        fontSize: 15}}
                    />
                    <TouchableOpacity>
                        <Image style={{width:"30%", height:"30%", borderRadius: 50}} source={require('../../assets/face_co.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#eb0007", width:30, height:30, justifyContent:"center", alignItems: "center", borderRadius:50, marginLeft:10, marginTop:5}}>
                        <Ionicons size={15} name="md-send" color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}