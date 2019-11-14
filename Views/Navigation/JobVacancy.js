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

export default class JobVacancy extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={{flex:.12, backgroundColor: "#fff", marginTop:30}}>
                    <TouchableOpacity style={{marginLeft:20}}>
                        <Ionicons size={30} name="md-arrow-dropleft" color="#f04447"/>
                    </TouchableOpacity>
                    <Text style={{alignSelf:"center", marginTop:"-7%", fontSize:17, fontWeight:"bold"}}>Job Vacancy</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={{marginTop:20 ,backgroundColor: "#fff", borderRadius:5, padding:5}}>
                        <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10, borderRadius:10 }}>
                            <View syle={{flexDirection:"row"}}>
                                <Image style={{width:200, height:100}} source={require('../../assets/face_co.png')}/>
                                <Text style={{color:"#292929",fontSize:17, fontWeight:"bold"}}>PT. Nutrifood Indonesia</Text>
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
                                    <Text style={{margin:10,fontWeight:"bold",backgroundColor: "rgba(235,235,0,0.8)", color:"#fff", padding:5, borderRadius:10}}>RPL</Text>
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
