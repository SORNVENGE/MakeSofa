import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuLeft: [
                {
                    title: "Home",
                    iconType: "Entypo",
                    iconName: "home"
                },
                {
                    title: "Account",
                    iconType: "FontAwesome5",
                    iconName: "user-alt"
                },
                {
                    title: "Favorith",
                    iconType: "AntDesign",
                    iconName: "hearto"
                },
                {
                    title: "Setting",
                    iconType: "SimpleLineIcons",
                    iconName: "settings"
                },
                {
                    title: "About us",
                    iconType: "Entypo",
                    iconName: "info-with-circle"
                },
                {
                    title: "Logout",
                    iconType: "FontAwesome5",
                    iconName: "power-off"
                },
            ]
        }
    }
    handleOnClickEachMenu=(item,index)=>{
        Actions.drawerClose();

    }
    renderMeunuLeft = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>this.handleOnClickEachMenu(item,index)} style={{ flexDirection: 'row', alignItems: 'center', padding: 20,backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,elevation: 5, }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Icon type={item.iconType} name={item.iconName} style={{ color: index==0?"#000066": 'black', fontSize: 23 }} />
                </View>
                <View style={{ flex: 5, justifyContent: 'center' }}>
                    <Text style={{fontSize:17,fontWeight:index==0?"bold":'normal',color:index==0?"#000066":'black'}}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,elevation: 5,flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', borderRadius: 50, alignItems: 'center', padding: 10 }}>
                        <Image
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                            source={{ uri: "https://images.unsplash.com/photo-1577409873799-29f8be1311dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }}
                        />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SORN VENG E</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'grey' }}>Fack Account </Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.menuLeft}
                    numColumns={1}
                    renderItem={this.renderMeunuLeft}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
export default connect(null, null)(DrawerScreen)
