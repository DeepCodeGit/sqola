import * as React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView, KeyboardAvoidingView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {render} from "react-native-web";
import {Actions} from "react-native-router-flux";

export default class Info extends React.Component{
    render() {
        return(
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={{flex:.5, backgroundColor: "#fff", marginTop:30}}>
                    <TouchableOpacity style={{marginLeft:20}}
                                      onPress= {() => {Actions.DashboardScreen(); }}
                    >
                        <Ionicons size={30} name="md-arrow-dropleft" color="#f04447"/>
                    </TouchableOpacity>
                    <Text style={{alignSelf:"center", marginTop:"-7%", fontSize:17, fontWeight:"bold"}}>Informasi</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={{marginTop:20 ,backgroundColor: "#fff", borderRadius:5, padding:5}}>
                        <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10, borderRadius:10 }}>
                            <View syle={{flexDirection:"row"}}>
                                <Image style={{width:35, height:35}} source={require('../../assets/face_co.png')}/>
                                <Text style={{color:"#292929",fontSize:17, fontWeight:"bold"}}>Wakasek. Kesiswaan</Text>
                                <Text style={{fontSize:12, color:"#9c9c9c"}}><Ionicons name="md-person"/> Pak Rahmat</Text>
                                <View style={{borderRadius:10,marginTop:10,padding:10, backgroundColor:"rgba(0,0,0,0.05)"}}>
                                    <Text style={{fontWeight:"bold"}}>Kegiatan Wisuda Akhir tahun</Text>
                                    <View>
                                        <Text>Diberitahukan, untuk angkatan ke-10 kegiatan kewisudaan akan dilaksanakan di lingkungan sekolah</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{alignSelf:"flex-end", marginBottom:-5, marginLeft:"62%", padding:10}}>
                                        <TouchableOpacity style={{ backgroundColor: "rgba(255,38,26,0.8)",paddingRight:10,paddingTop:5, paddingBottom:5, paddingLeft:10, width:90, borderRadius:100, justifyContent:"center"}}>
                                            <Text style={{fontSize:15, fontWeight:"bold", color:"#fff", alignItems:"center", marginLeft:5}}>Penting</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:20 ,backgroundColor: "#fff", borderRadius:5, padding:5}}>
                        <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10, borderRadius:10 }}>
                            <View syle={{flexDirection:"row"}}>
                                <Image style={{width:35, height:35}} source={require('../../assets/face_co.png')}/>
                                <Text style={{color:"#292929",fontSize:17, fontWeight:"bold"}}>Wakasek. Kesiswaan</Text>
                                <Text style={{fontSize:12, color:"#9c9c9c"}}><Ionicons name="md-person"/> Ibu Fatimah</Text>
                                <View style={{borderRadius:10,marginTop:10,padding:10, backgroundColor:"rgba(0,0,0,0.05)"}}>
                                    <Text style={{fontWeight:"bold"}}>Kegiatan Maulid Nabi 1441 H</Text>
                                    <View>
                                        <Image style={{width:"100%", height:150, marginTop:10, borderRadius:5}} source={require('../../assets/kegiatan.jpg')}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{alignSelf:"flex-end", marginBottom:-5, marginLeft:"52%", padding:10}}>
                                        <TouchableOpacity style={{ backgroundColor: "rgba(131,255,68,0.8)",paddingRight:10,paddingTop:5, paddingBottom:5, paddingLeft:10, width:125, borderRadius:100, justifyContent:"center"}}>
                                            <Text style={{fontSize:15, fontWeight:"bold", color:"#fff", alignItems:"center", marginLeft:5}}>Dokumentasi</Text>
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
        flex: 1,
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
