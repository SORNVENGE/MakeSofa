import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions, Drawer } from 'react-native-router-flux';
import { connect } from 'react-redux'


// import each screen 
import FooterActions from '../Redux/FooterRedux';
import HeaderActions from '../Redux/HeaderRedux';
import HomeScreen from '../Containers/HomeScreen'
import ProductDetailScreen from '../Containers/ProductDetailScreen'
import DrawerScreen from '../Containers/DrawerScreen'
import LoginScreen from '../Containers/LoginScreen'
import AnimationScreen from '../Containers/AnimationScreen'

class NavigationRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onEnter = (statusFooter, statusHeader, titleHeader, screenName) => {
        this.props.setHeader({ statusHeader: statusHeader, titleHeader: titleHeader, screenName: screenName })
        this.props.setFooter({ statusFooter: statusFooter, screenName: screenName })
    }

    render() {
        return (
            <Router>
                <Drawer contentComponent={DrawerScreen}>
                    <Scene key="root">
                        <Scene onEnter={() => this.onEnter(true, false, 'HomeScreen', 'HomeScreen')} key='HomeScreen' component={HomeScreen} hideNavBar={true} initial={true}></Scene>
                        <Scene onEnter={() => this.onEnter(false, true, 'ProductDetailScreen', 'ProductDetailScreen')} key='ProductDetailScreen' component={ProductDetailScreen} hideNavBar={true}></Scene>
                        <Scene onEnter={() => this.onEnter(false, true, 'LoginScreen', 'LoginScreen')} key='LoginScreen' component={LoginScreen} hideNavBar={true} ></Scene>
                        <Scene onEnter={() => this.onEnter(false, true, 'AnimationScreen', 'AnimationScreen')} key='AnimationScreen' component={AnimationScreen} hideNavBar={true}></Scene>
                    </Scene>
                </Drawer>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeader: (data) => dispatch(HeaderActions.setHeaderRequest(data)),
        setFooter: (statusFooter) => dispatch(FooterActions.setFooterRequest(statusFooter)),
    }
}
export default connect(null, mapDispatchToProps)(NavigationRouter)
