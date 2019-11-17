import * as React from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Constants } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from "react-native-router-flux";

export default class JobVacancy extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={{flex:2, backgroundColor: "#fff", marginTop:40}}>
                    <TouchableOpacity style={{marginLeft:20}}
                       onPress= {() => {Actions.DashboardScreen(); }}
                    >
                        <Ionicons size={30} name="md-arrow-dropleft" color="#f04447"/>
                    </TouchableOpacity>
                    <Text style={{alignSelf:"center", marginTop:"-1%", fontSize:17, fontWeight:"bold"}}>Job Vacancy</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={{marginTop:50 ,backgroundColor: "#fff", borderRadius:5, padding:5}}>
                        <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10, borderRadius:10 }}>
                            <View syle={{flexDirection:"row"}}>
                                <Image style={{width:"100%", height:100}} source={require('../../assets/nutrifood.jpeg')}/>
                                <Text style={{color:"#292929",fontSize:17, fontWeight:"bold"}}>PT. Nutrifood Indonesia</Text>
                                <Text style={{fontSize:12, color:"#9c9c9c"}}><Ionicons name="md-pin"/> Palmerah, Jakarta</Text>
                                <View style={{borderRadius:10,marginTop:10,padding:10, backgroundColor:"rgba(0,0,0,0.05)"}}>
                                    <Text>We are urgently needed Mobile Programmer</Text>
                                    <View>
                                        <Text>For requirement as is follows : </Text>
                                        <Text>- Have min 1 years on Android & IOS Developer</Text>
                                        <Text>- Can speak english fluently</Text>
                                        <Text>- Can work in team work</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{margin:10,fontWeight:"bold",backgroundColor: "rgba(194,194,0,0.8)", color:"#fff", padding:5, borderRadius:10}}>RPL</Text>
                                    <Text style={{margin:10,fontWeight:"bold",backgroundColor: "rgba(255,0,0,0.8)", color:"#fff", padding:5, borderRadius:10}}>TEI</Text>
                                    <View style={{alignSelf:"flex-end", marginBottom:10, marginLeft:"36%"}}>
                                        <TouchableOpacity style={{ backgroundColor: "rgba(98,255,79,0.8)",paddingRight:10,paddingTop:5, paddingBottom:5, paddingLeft:10, width:70, borderRadius:100, justifyContent:"center"}}>
                                            <Text style={{fontSize:15, fontWeight:"bold", color:"#fff", alignItems:"center", marginLeft:5}}>Apply</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:50 ,backgroundColor: "#fff", borderRadius:5, padding:5}}>
                        <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10, borderRadius:10 }}>
                            <View syle={{flexDirection:"row"}}>
                                <Image style={{width:"100%", height:100}} source={require('../../assets/google.jpeg')}/>
                                <Text style={{color:"#292929",fontSize:17, fontWeight:"bold"}}>Google Inc.</Text>
                                <Text style={{fontSize:12, color:"#9c9c9c"}}><Ionicons name="md-pin"/> MM2100, Cibitung</Text>
                                <View style={{borderRadius:10,marginTop:10,padding:10, backgroundColor:"rgba(0,0,0,0.05)"}}>
                                    <Text>Di butuhkan Tenaga PKL</Text>
                                    <View> 
                                        <Text>Persyaratan : </Text>
                                        <Text>- Sehat jasmani dan Rohani</Text>
                                        <Text>- Bersedia ditempatkan di berbagai divisi</Text>
                                        <Text>- Disiplin</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{margin:10,fontWeight:"bold",backgroundColor: "rgba(194,194,0,0.8)", color:"#fff", padding:5, borderRadius:10}}>RPL</Text>
                                    <View style={{alignSelf:"flex-end", marginBottom:10, marginLeft:"53%"}}>
                                        <TouchableOpacity style={{ backgroundColor: "rgba(98,255,79,0.8)",paddingRight:10,paddingTop:5, paddingBottom:5, paddingLeft:10, width:70, borderRadius:100, justifyContent:"center"}}>
                                            <Text style={{fontSize:15, fontWeight:"bold", color:"#fff", alignItems:"center", marginLeft:5}}>Apply</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor:"#e1e1e1"
    },
    scrollView: {
        paddingHorizontal: 20,

    },
    input: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderColor: '#dbdbdb',
        padding: 10,
    },
});
