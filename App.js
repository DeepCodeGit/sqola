import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    default as AppRegistry
} from 'react-native';
import * as Font from 'expo-font';
import  LoginView from "./Views/Navigation/LoginView";
import Dashboard from "./Views/Navigation/Dashboard";
import {SafeAreaContext, SafeAreaProvider} from "react-native-safe-area-context";
import {createStackNavigator} from "react-navigation-stack";
import RuangCendekiawan from "./Views/Navigation/RuangCendekiawan";
import Info from "./Views/Navigation/Info";
import KonselingKu from "./Views/Navigation/KonselingKu";
import JobVacancy from "./Views/Navigation/JobVacancy";
import {createAppContainer, StackNavigator} from "react-navigation";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class App extends React.Component{

    render() {
        return (
            <Dashboard/>
        );
    }

}


