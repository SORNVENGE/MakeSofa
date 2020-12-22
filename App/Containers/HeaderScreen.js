import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../Themes';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';

class HeaderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClickOnMenu = () => {
        const { data } = this.props.getHeader;
        if (data) {
            let { screenName } = data
            if (screenName == "HomeScreen") {
                Actions.drawerOpen()
            }
            else {
                Actions.pop()
            }
        }
    }
    handleClickOnCart = () => {
        Actions.LoginScreen();
    }
    handleClickOnFavorite = () => {
        alert("Favorith");
    }

    render() {
        const { data } = this.props.getHeader;
        var title = "", screen = "", isMenuIcon = true, isLoginScreen = true;
        if (data) {
            let { titleHeader, screenName, statusHeader } = data
            title = titleHeader;
            screen = screenName;
            if (screen == "HomeScreen") {
                isMenuIcon = true
            }
            if (screenName == "ProductDetailScreen" ) {
                isMenuIcon = false
            }
            if (screenName == "LoginScreen" || screenName == "AnimationScreen") {
                isLoginScreen = false,
                isMenuIcon = false
            }
            if (!statusHeader) {
                return false;
            }
        }

        return (
            <View style={{
                height: 56, backgroundColor: Colors.bgHeader, justifyContent: 'center',
                shadowColor: Colors.bgHeader,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.9,
                shadowRadius: 10,
                elevation: 50
            }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity style={{ height: 56, flex: 2, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                        {isMenuIcon ?
                            <Icon onPress={() => this.handleClickOnMenu()} type="Entypo" name="menu" style={{ color: 'black', fontSize: 25, paddingLeft: 20 }} />
                            :
                            <Icon onPress={() => this.handleClickOnMenu()} type="MaterialIcons" name="keyboard-arrow-left" style={{ color: 'black', fontSize: 30, paddingLeft: 20 }} />
                        }
                        {isMenuIcon ? null
                            :
                            <View><Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{screen == "ProductDetailScreen" ? "Product Detail" : ""}</Text></View>
                        }
                    </TouchableOpacity>


                    {isLoginScreen ?
                        <View style={{ flexDirection: 'row', width: '40%' }}>
                            <TouchableOpacity onPress={() => this.handleClickOnCart()} style={{ flex: 1, position: 'relative', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon type="AntDesign" name="shoppingcart" style={{ color: 'black', fontSize: 25, paddingRight: 5 }} />
                                <Text style={{ backgroundColor: 'red', borderRadius: 50, paddingRight: 2, paddingLeft: 2, color: 'white', position: 'absolute', top: 10, right: -4, fontWeight: 'bold', fontSize: 13 }}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleClickOnFavorite()} style={{ flex: 0.5, alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Icon type="MaterialIcons" name="notifications" style={{ color: 'black', fontSize: 26, paddingRight: 20 }} />
                            </TouchableOpacity>
                        </View>
                        : null}



                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        getHeader: state.header
    }
}
export default connect(mapStateToProps, null)(HeaderScreen)
