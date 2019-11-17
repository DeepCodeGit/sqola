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

export default class KonselingKu extends React.Component {

    constructor() {
        super();

        this.displayData = [];

        this.state = {
            showdata : this.displayData,
            postVal : ""
        }

        this.appendData = this.appendData.bind(this);
        this.prependData = this.prependData.bind(this);
        this.handleChange = this.handleChange.bind(this);

    };

    appendData() {
        this.displayData.push(<div  id="display-data"><Text>{this.state.postVal}</Text></div>);
        this.setState({
            showdata : this.displayData,
            postVal : ""
        });
    }

    prependData() {
        this.displayData.unshift(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
        this.setState({
            showdata : this.displayData,
            postVal : ""
        });
    }

    handleChange(e) {
        let getTextAreaValue = e.target.value;
        this.setState({
            postVal :getTextAreaValue
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={{flex:.09, backgroundColor: "#fff", marginTop:30}}>
                    <TouchableOpacity style={{marginLeft:20}}
                                      onPress= {() => {Actions.DashboardScreen(); }}
                    >
                        <Ionicons size={30} name="md-arrow-dropleft" color="#f04447"/>
                    </TouchableOpacity>
                    <Text style={{alignSelf:"center", marginTop:"-7%", fontSize:17, fontWeight:"bold"}}>KonselingKu</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={{marginTop:10 }}>
                        <View style={{alignSelf:"flex-start",flexDirection:"column",paddingTop:10, paddingBottom:10}}>
                            <View style={{flexDirection:'row', alignItems:"center"}}>
                                <Image style={{width:35,height:35}} source={require("../../assets/face_co.png")}/>
                                <Text style={{color:"#919191",fontSize:13, marginLeft:5}}>10:22 - BK SMKN 5</Text>
                            </View>
                            <Text style={{borderRadius:20, backgroundColor:"#ffffff", padding:15, marginTop:5}}>Halo!, kamu bisa konsultasikan permasalahan kamu kepada kami</Text>
                        </View>

                        <View style={{alignSelf:"flex-end",flexDirection:"column", paddingTop:10, paddingBottom:10}}>
                            <View style={{alignItems:"center",flexDirection:'row'}}>
                                <Text style={{color:"#919191",fontSize:13, marginRight:5}}>10:22 - Kamu</Text>
                                <Image style={{width:35,height:35}} source={require("../../assets/face_co2.png")}/>
                            </View>
                            <Text style={{borderRadius:20, backgroundColor:"#f04447", padding:15, color:"#fff",marginTop:5}}> Ashiaapp bu! </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{flexDirection:"row", height:"7%",alignItems:"center", justifyContent:"center", backgroundColor:"#ffffff", padding:"1%", marginTop:10}}>
                    <TextInput onChange={this.handleChange} placeholder={"Ketikan sesuatu.."} value={this.state.postVal} style={{width:"80%",height:"80%",paddingLeft:10, paddingRight:7.5,paddingTop:2, paddingBottom:2,
                        borderRadius:10,
                        fontSize: 15
                    }}/>
                    <TouchableOpacity
                        onClick = {this.appendData}
                    >
                        <Ionicons style={{marginLeft:15, marginTop:5}} name="md-send" color="#f04447" size={30}/>
                    </TouchableOpacity>
                </View>
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
