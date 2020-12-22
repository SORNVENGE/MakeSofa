import React,{Component} from 'react';
import {View,Text,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import { Colors, Images, ApplicationStyles, Fonts } from '../Themes'
import { Icon } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'

class FooterScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            listTabs: [
                { title: 'Home', iconName: 'home', iconType: 'FontAwesome', status: true, screenName: 'HomeScreen' },
                { title: 'Sofa', iconName: 'couch', iconType: 'FontAwesome5', status: false, screenName: 'Sofa' },
                { title: 'Chair', iconName: 'chair', iconType: 'FontAwesome5', status: false, screenName: 'Chair' },
                { title: 'Service', iconName: 'gift-sharp', iconType: 'Ionicons', status: false, screenName: 'ToyScreen' },
            ],
        }
    }
    handleOnButtonOpen = (screen_name) => {
        // alert("test")
        Actions.reset(screen_name);
    }
    
    

    render() {
        const { data } = this.props.getFooter
        const { listTabs } = this.state
        const { height } = Dimensions.get('window');
        var screen = ""
        if (data) {
            let { statusFooter, screenName } = data
            screen = screenName
            if (!statusFooter) {
                return false;
            }
        }
        return (
            <View style={[ApplicationStyles.mainFooterContainer, {alignItems: 'flex-end', paddingTop: Platform.OS == "ios" ? 4 : 0, marginBottom: Platform.OS === 'ios' && height >= 812 ? 30 : 0 }]}>
                {
                    listTabs.map((item, index) => {
                        var status = false
                        if ((data.screenName == 'HomeScreen' || data.screenName == 'HomeScreen') && item.screenName == 'HomeScreen') {
                            status = true
                        } else if ((data.screenName == 'ProductDetailScreen') && item.screenName == 'ProductDetailScreen') {
                            status = true
                        } else if ((data.screenName == 'ToyScreen') && item.screenName == 'ToyScreen') {
                            status = true
                        } else if ((data.screenName == 'CardScreen') && item.screenName == 'CardScreen') {
                            status = true
                        }

                        return (
                            <TouchableOpacity onPress={()=>this.handleOnButtonOpen(item.screenName)} style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                                <Icon type={item.iconType} name={item.iconName} style={{ color: status ? 'red' : 'black', fontSize: item.iconName == 'appstore1' ? 27 : 30, }} />
                                <Text style={{ marginTop: 3, width: '100%', textAlign: 'center', fontSize: status ? 12 : 10, color: status ? "#000066" : '#a6a6b0', fontWeight: status ? '600' : 'normal' }}> {item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        getFooter: state.footer

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FooterScreen)