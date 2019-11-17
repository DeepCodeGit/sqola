import * as React from 'react';
import {Vibration,ScrollView,Alert,AsyncStorage ,StyleSheet, Text, View, TextInput, Image, Button, Dimensions, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import {Divider} from "react-native-paper";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal, { SlideAnimation,ModalContent } from 'react-native-modals';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {StackRouter} from 'react-navigation';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {createAppContainer, StackNavigator} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
/*=== View ===*/
import KonselingKu from './KonselingKu';
import RuangCendekiawan from './RuangCendekiawan';
import Info from './Info';
import Saranin from './Saranin';
import JobVacancy from './JobVacancy';
/*--- View ---*/

export default class Dashboard extends React.Component{
    render() {
        return (
            <ScrollView>
                <View style={{paddingLeft:15, paddingRight:15, backgroundColor:"#f8f8f8"}}>
                    <TopNavbar />
                    <FeatureBar />
                    <ExtendCendekiawan/>
                    <Divider style={{marginTop:40}}/>
                    <ExtendedJob/>
                </View>
            </ScrollView>
        );
    }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout(startTime, 500);
    return "0"+h + ":" + m + ":" + s;
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }  // add zero in front of numbers < 10
    return i;
}

class TopNavbar extends React.Component{
    state = {
        modalVisible: false
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    loadCendikiawan = () => {
      Linking.openURL()
    };

    render() {

        return(
            <View style={{ flex: 1 , flexDirection:'column',height:200, marginTop:50, alignItems: 'center',}}>
                <Modal
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onTouchOutside={() => {
                        this.setState({ modalVisible: false });
                    }}
                    swipeDirection={['up', 'down']} // can be string or an array
                    swipeThreshold={200} // default 100
                    onSwipeOut={(event) => {
                        this.setState({ visible: false });
                    }}
                >
                    <ModalContent>
                        <View style={{width:"100%"}}>
                            <BarcodeScannerExample/>
                        </View>
                    </ModalContent>
                </Modal>
                <View style={{padding:10, borderTopLeftRadius:5,borderTopRightRadius:5, flexDirection:'row', width:"100%",height: 30,backgroundColor:'#c9111c',justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{textAlign:'left', color:'#fff'}}>
                        Hai, Muhammad!
                    </Text>
                    <Text style={{textAlign:'right', color:'#fff'}}>
                        {startTime()}
                    </Text>
                </View>
                <View style={{ padding:15,borderBottomRightRadius:5, borderBottomLeftRadius:5,backgroundColor:'#d6221d', width:"100%", height:75, alignItems:'stretch', flexDirection:'row'}}>
                    <TouchableOpacity
                        style={{justifyContent:'center', width:"25%", alignItems:'center',padding:"auto"}}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <Ionicons size={30} color="#ffff" name="md-qr-scanner"/>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Absen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center',width:"25%" ,alignItems:'center',padding:"auto"}}
                        onPress= {() => {Actions.RuangCendikiawanScreen(); }}
                    >
                        <Ionicons size={35} color="#ffff" name="md-contacts"/>
                        <Text style={{fontSize:12,color:'#fff', fontWeight:'bold'}}>Cendikiawan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center', width:"25%",alignItems:'center',padding:"auto"}}
                         onPress= {() => {Actions.InfoScreen(); }}
                    >

                        <Ionicons size={30} color="#ffff" name="md-paper"/>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center',width:"25%", alignItems:'center',padding:"auto"}}>
                        <Ionicons size={30} color="#ffff" name="md-log-out"/>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class FeatureBar extends React.Component {
    state = {
        modalVisible: false,
        hasCameraPermission: null,
        scanned: false,
        modalVisibleCendikiawan:false,
        modalVisibleSaranin : false
    };
    setModalVisibleCendikiawan(visible){
        this.setState({modalVisibleCendikiawan:true});
    }

    setModalVisible
    async componentDidMount() {
        this.getPermissionsAsync();
    }
    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    setModalVisibleSaranin(visible) {
        this.setState({ modalVisible: visible });
    }
    render(){
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return(
            /*<View style={{ marginTop: 220 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>*/
            <View style={{flex:1, justifyContent:'center', alignItems:'center' ,flexDirection:'row', marginTop:160, flexWrap:"wrap", position:"absolute",alignSelf:"center", textAlign:"center"}}>
                <Modal
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onTouchOutside={() => {
                        this.setState({ modalVisible: false });
                    }}
                    swipeDirection={['up', 'down']} // can be string or an array
                    swipeThreshold={200} // default 100
                    onSwipeOut={(event) => {
                        this.setState({ visible: false });
                    }}
                >
                    <ModalContent>
                        <View style={{width:"100%"}}>
                            <BarcodeScannerExample/>
                        </View>
                    </ModalContent>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibleCendikiawan}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                    onTouchOutside={() => {
                        this.setState({ modalVisibleCendikiawan: false });
                    }}
                    style={{width:"100%"}}
                >
                    <View>
                        <RuangCendekiawan/>
                    </View>
                </Modal>

                <TouchableOpacity style={{justifyContent:'center', flexBasis:"25%", alignItems:'center',padding:"auto"}}
                   onPress={() => {
                       this.setModalVisible(!this.state.modalVisible);
                   }}
                >
                    <Ionicons style={{backgroundColor:"#d6221d", padding:10, borderRadius:100}} size={25} color="#ffff" name="md-qr-scanner"/>
                    <Text style={{color:'#373737', marginTop:5}}>Absen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',flexBasis:"25%" ,alignItems:'center',padding:"auto"}}
                   onPress= {() => {Actions.RuangCendikiawanScreen(); }}
                >
                    <Ionicons style={{backgroundColor:"#d6221d", padding:10, borderRadius:100}} size={25} color="#ffff" name="md-contacts"/>
                    <Text style={{color:'#373737', marginTop:5}}>Cendikiawan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center', flexBasis:"25%",alignItems:'center',padding:"auto"}}
                                  onPress= {() => {Actions.InfoScreen(); }}
                >
                    <Ionicons style={{backgroundColor:"#d6221d", padding:10, borderRadius:100}} size={25} color="#ffff" name="md-paper"/>
                    <Text style={{color:'#373737', marginTop:5}}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:"17.5%",justifyContent:'center',flexBasis:"25%", alignItems:'center',padding:"auto"}}
                                  onPress={() => {
                                      this.setModalVisibleSaranin(!this.state.modalVisibleSaranin);
                                  }}
                >
                    <Ionicons style={{backgroundColor:"#d6221d", padding:10, borderRadius:100}} size={25} color="#ffff" name="md-chatboxes"/>
                    <Text style={{color:'#373737', marginTop:5}}>Saranin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',flexBasis:"25%", alignItems:'center',padding:"auto"}}
                                  onPress= {() => {Actions.KonselingKuScreen(); }}
                >
                    <Ionicons style={{backgroundColor:"#d6221d", padding:10, borderRadius:100}} size={25} color="#ffff" name="md-hand"/>
                    <Text style={{color:'#373737', marginTop:5}}>KonselingKu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:"17.5%",justifyContent:'center',flexBasis:"25%", alignItems:'center',padding:"auto"}}
                                  onPress= {() => {Actions.JobVacancyScreen(); }}
                >
                    <Ionicons style= {{backgroundColor:"#d6221d", padding:10, borderRadius:100}} size={25} color="#ffff" name="md-briefcase"/>
                    <Text style={{color:'#373737', marginTop:5}}>Jobs</Text>
                </TouchableOpacity>
            </View>

        );
    }
}


class SaraninScannerExample extends React.Component {

    state = {
        hasCameraPermission: null,
        scanned: false,
        modalVisible2Saranin: false
    };

    setModalVisibleSaranin(visible) {
        this.setState({modalVisible2Saranin: visible});
    }
    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };
    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View
                style={{
                    width:300,
                    height:300
                }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {
                    scanned && (

                        Vibration.vibrate(500),

                            <View style={{justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                                <Image source={require('../../assets/checkmark.gif')} style={{width:300,height:300, marginTop:"-10%"}}/>
                                <Text style={{fontSize:35, marginTop: "-20%", fontWeight:"bold", color:"#48ac23", paddingBottom:10}}>Sukses Abasdasdsen!</Text>
                                <View style={{backgroundColor:"#fff", width:250, height: 50 }}>

                                </View>
                            </View>
                    )}
            </View>
        );
    }

    handleBarCodeScannedSaranin = ({ type, data }) => {
        this.setState({ scanned: true , modalVisibleSaranin : true});
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function fungsiWaktu() {
            var d = new Date();
            var h = addZero(d.getHours());
            var m = addZero(d.getMinutes());
            var s = addZero(d.getSeconds());
            return h + ":" + m + ":" + s;
        }
        /*const request = require('request');
        const url = "https://api.chat-api.com/instance79047/sendMessage?token=r3qok5znnp8pi6re";
        const datas = {
            phone:'0895602255485',
            body :'Test'
        };
        request({
            url:url,
            method:"POST",
            json:datas
        });*/

        return(
            <Modal
                modalAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                transparent={false}
                visible={this.state.modalVisibleSaranin}
                onTouchOutside={() => {
                    this.setState({ modalVisibleSaranin: false });
                }}
                swipeDirection={['up', 'down']} // can be string or an array
                swipeThreshold={200} // default 100
                onSwipeOut={(event) => {
                    this.setState({ modalVisibleSaranin: false });
                }}
            >
                <ModalContent>
                    <View style={{width:"100%"}}>
                        <SaraninScannerExample/>
                    </View>
                </ModalContent>
            </Modal>
        );
    };
}


class BarcodeScannerExample extends React.Component {

    state = {
        hasCameraPermission: null,
        scanned: false,
        modalVisible2: false
    };

    setModalVisible(visible) {
        this.setState({modalVisible2: visible});
    }
    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };
    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View
                style={{
                    width:300,
                    height:300
                }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {
                    scanned && (

                        Vibration.vibrate(500),

                    <View style={{justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <Image source={require('../../assets/checkmark.gif')} style={{width:300,height:300, marginTop:"-10%"}}/>
                        <Text style={{fontSize:35, marginTop: "-20%", fontWeight:"bold", color:"#48ac23", paddingBottom:10}}>Sukses Absen!</Text>
                        <View style={{backgroundColor:"#fff", width:250, height: 50 }}>

                        </View>
                    </View>
                )}
            </View>
        );
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true , modalVisible2 : true});
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function fungsiWaktu() {
            var d = new Date();
            var h = addZero(d.getHours());
            var m = addZero(d.getMinutes());
            var s = addZero(d.getSeconds());
            return h + ":" + m + ":" + s;
        }
        Alert.alert(`Sukses terdata`,`Anda berhasil absen pada ${fungsiWaktu()}`);
        this.setModalVisible(true);
        /*const request = require('request');
        const url = "https://api.chat-api.com/instance79047/sendMessage?token=r3qok5znnp8pi6re";
        const datas = {
            phone:'0895602255485',
            body :'Test'
        };
        request({
            url:url,
            method:"POST",
            json:datas
        });*/

        return(
            <Modal
                modalAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                transparent={false}
                visible={this.state.modalVisible}
                onTouchOutside={() => {
                    this.setState({ modalVisible2: false });
                }}
                swipeDirection={['up', 'down']} // can be string or an array
                swipeThreshold={200} // default 100
                onSwipeOut={(event) => {
                    this.setState({ modalVisible2: false });
                }}
            >
                <ModalContent>
                    <View style={{width:"100%"}}>
                        <BarcodeScannerExample/>
                    </View>
                </ModalContent>
            </Modal>
        );
    };
}



class Error extends React.Component{

    render() {
        return (
            <div>
                <Dialog>
                    <DialogContent>
                        <View>
                            <Text>
                                Sepertinya ada hal yang terjadi :(
                            </Text>
                            <Text>
                                Pesan Error :
                            </Text>
                        </View>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

}

class ExtendCendekiawan extends React.Component{
    render() {
        return(
            <View style={{marginTop:180}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons  size={25} color="#eb0007" name="md-contacts"/>
                    <Text style={{color:"#4b4b4b",marginLeft:10, fontWeight:'bold', fontSize:20}}>Bantu pertanyaan temanmu</Text>
                </View>
                <View style={{padding:10}}>
                    <Divider/>
                </View>
                <View style={{paddingLeft:25,paddingRight:25,paddingTop:25,marginTop:5 , border:1, borderColor:"#4b4b4b",borderRadius:10 , backgroundColor:"#fff"}}>
                    <Text style={{fontSize:18, fontWeight:"bold"}}>Apa yang dimaksud ExceptionNullPointer?</Text>
                    <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingBottom:10}}>
                        <Image style={{width: 35, height: 35}} source={require('../../assets/face_co.png')}/>
                        <Text style={{marginLeft:10, fontSize:16, color:"#5a5a5a"}}>Arfiana Nuraini - XII RPL 3 </Text>
                    </View>
                    <Text style={{lineHeight:17, letterSpacing:0.7, fontSize:15.2}}>Setelah saya belajar mengenai JAVA, saya mendapati Error bagian Try & Catch, mungkin teman-teman disini bisa membantu saya. Terimakasih</Text>
                    <Divider style={{marginTop:10}}/>
                    <View style={{marginTop:10, flexDirection:"row", alignItems: 'center'}}>
                        <TextInput placeholder={"Jawab Yuk.."} style={{width:"90%",paddingLeft:10, paddingRight:7.5,paddingTop:2, paddingBottom:2,
                            marginTop: 7,
                            backgroundColor: 'transparent',
                            borderRadius:50,
                            borderColor: 'gray',
                            borderWidth: 1,
                            fontSize: 15}}
                        />
                        <TouchableOpacity style={{backgroundColor:"#eb0007", width:30, height:30, justifyContent:"center", alignItems: "center", borderRadius:50, marginLeft:10, marginTop:5}}>
                            <Ionicons size={15} name="md-send" color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
class ExtendedJob extends React.Component{
    render() {
        return (
            <View style={{marginTop:30}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons  size={25} color="#eb0007" name="md-briefcase"/>
                    <Text style={{color:"#4b4b4b",marginLeft:10, fontWeight:'bold', fontSize:20}}>Ada jobs untuk kamu, nih!</Text>
                </View>
                <View style={{padding:10}}>
                    <Divider/>
                </View>
                <View style={{marginTop:20 ,backgroundColor: "#fff", borderRadius:5, padding:5}}>
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
            </View>
        );
    }

}
class Scanner extends React.Component{
    render() {
        return(
            <View>
                {/*<QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={QRCodeScanner.Constants.FlashMode.torch}
                    topContent={
                        <Text style={styles.centerText}>
                            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                        </Text>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                    }
                />*/}
                <Text>asd</Text>
            </View>
        );
    }
}


const { width } = Dimensions.get('window');
const qrSize = width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
    },
    description: {
        fontSize: width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
    cancel: {
        fontSize: width * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
});