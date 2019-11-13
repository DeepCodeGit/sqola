import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView} from "react-native";
import React,{useState} from 'react';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function LoginView(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const funcLogin = () => {
        if( username === "123" && password === "123" ){
            alert('Benar');
            Alert.alert(
                'Alert Title',
                'My Alert Msg'
            );
        }
        else{
            alert("Salah");
        }
    }
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/icon.png')} />
            <KeyboardAvoidingView>
                <View style={styles.row}>
                    {/*<Text style={styles.title} >Nomor Induk Siswa</Text>*/}
                    <TextInput style={styles.input1} value={username} onChangeText={(text)=>setUsername(text)}  placeholder={"NIS"}/>
                </View>
                <View style={styles.row}>
                    {/*<Text style={styles.title}>Password</Text>*/}
                    <TextInput secureTextEntry={true} value={password} placeholder={"Password"} onChangeText={(text) => setPassword(text)}  style={{padding: 7,
                        marginTop: 7,
                        backgroundColor: 'transparent',
                        borderRadius:50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        textAlign: 'center',
                        fontSize: 15}} />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={()=>{funcLogin()}} style={styles.btn} title="Login" color="#ff5c5c">
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 30}}><Text
                style={{fontSize: 13, color: 'gray', textDecorationLine: 'underline'}}>Lupa
                Password..?</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    row:{
        textAlign: 'left',
        marginTop:20,
        width: screenWidth/1.3
    },
    title:{
        color:'gray',
        fontSize:12,
        marginLeft:13
    },
    img:{
        marginTop: screenHeight/8,
        width:screenWidth/4.5,
        height:screenHeight/3
    },
    input1:{
        padding: 7,
        marginTop:0,
        backgroundColor: 'transparent',
        borderRadius:50,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    },
    input2:{
        padding: 7,
        marginTop: 7,
        backgroundColor: 'transparent',
        borderRadius:50,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 15
    },
    btn:{
        width: screenWidth/2,
        height:45,
        color:'white',
        borderRadius: 50,
        marginTop:screenHeight/10,
        backgroundColor: '#ed5353',
        textAlign:'center',
        alignItems: 'center',
        justifyContent:'center'
    }
});

export default LoginView;