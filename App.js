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
import Index from './Views/Index';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class App extends React.Component{
    render() {
        return (
            <Index/>
        );
    }
}

