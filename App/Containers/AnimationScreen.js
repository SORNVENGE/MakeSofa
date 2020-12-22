import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableHighlight,
    TextInput,StyleSheet} from 'react-native';

export default class AnimationScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Wellcome Animation screen</Text>
            </View>
        );
    }
}