import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import {render} from "react-native-web";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from "react-navigation";
import ListView from "react-native-web/dist/vendor/react-native/ListView";
import {Divider} from "react-native-paper";

export default class RuangCendekiawan extends React.Component{
    render() {
        return(
            <View style={{flex:1, flexDirection:"column", backgroundColor: "#ebebeb"}}>
                <View style={{flexDirection:"row", height:"8.5%", marginTop:30, alignItems:"center", backgroundColor:"#f5f5f5"}}>
                    <TouchableOpacity style={{backgroundColor:"#fff", width:30, height:30, justifyContent:"center", alignItems: "center", borderRadius:50, marginLeft:10}}>
                        <Ionicons size={20} name="md-arrow-dropleft" color="#000"/>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", marginLeft:5}}>
                        <TextInput placeholder={"Cari Pertanyaan.."} style={{width:"76%",paddingLeft:10, paddingRight:7.5,paddingTop:2, paddingBottom:2,
                            backgroundColor: 'transparent',
                            borderRadius:50,
                            borderColor: 'gray',
                            borderWidth: 1,
                            fontSize: 15
                        }}
                        />
                        <TouchableOpacity style={{backgroundColor:"#eb0007",position:"absolute", width:32, height:32, justifyContent:"center", alignItems: "center", borderRadius:50, marginLeft:175, marginTop:1}}>
                            <Ionicons size={15} name="md-search" color="#fff"/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image style={{width:"30%", height:"30%", borderRadius: 50}} source={require('../../assets/face_co2.png')}/>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={{ alignItems:"center", marginLeft:-65, marginTop:10}}>
                            <Ionicons size={32} name="md-add-circle-outline"/>
                            <Text style={{fontSize:10, marginTop:-3}}>Bertanya</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style={{width:32, height:32}} source={require('../../assets/face_co.png')}/>
                    </View>
                </View>
                <View style={{flex:1, padding:20}}>
                    <View style={{paddingLeft:25,paddingRight:25,paddingTop:25, paddingBottom:20,marginTop:5 , border:1, borderColor:"#000",borderRadius:10 , backgroundColor:"#ff8a4a", height:"auto"}}>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>Apa yang dimaksud Ureter?</Text>
                        <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingBottom:10}}>
                            <Image style={{width: 35, height: 35}} source={require('../../assets/face_co.png')}/>
                            <Text style={{marginLeft:10, fontSize:16, color:"#5a5a5a"}}>Sheilla Putri - XII Ankes 2 </Text>
                        </View>
                        <Text style={{lineHeight:17, letterSpacing:0.7, fontSize:15.2}}>Setelah saya belajar mengenai biologi, saya masih bingung mengenai bagian dalam ginjal yaitu ureter, mungkin teman-teman disini bisa membantu saya. Terimakasih</Text>
                        <Divider style={{marginTop:10}}/>
                        <View style={{marginTop:10, flexDirection:"row", alignItems: 'center'}}>
                            <Image style={{width:35, height:35, borderRadius: 50}} source={require('../../assets/face_co2.png')}/>
                            <TextInput placeholder={"Jawab Yuk.."} style={{width:"70%",paddingLeft:10, paddingRight:7.5,paddingTop:2, paddingBottom:2,
                                marginTop: 7,
                                backgroundColor: 'transparent',
                                borderRadius:50,
                                borderColor: 'gray',
                                borderWidth: 1,
                                fontSize: 15,
                                marginLeft:10
                            }}
                            />
                            <TouchableOpacity style={{backgroundColor:"#eb0007", width:30, height:30, justifyContent:"center", alignItems: "center", borderRadius:50, marginLeft:10, marginTop:5}}>
                                <Ionicons size={15} name="md-send" color="#fff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
