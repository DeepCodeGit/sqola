import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, Image, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import {render} from "react-native-web";

export default class Info extends React.Component{
    render() {
        return(
            <View>
                <ImageBackground source={require("../../assets/image.png")} style={{width: "100%", height: '30%'}}>
                    <Text>Inside</Text>
                </ImageBackground>
            </View>
        );
    }
}