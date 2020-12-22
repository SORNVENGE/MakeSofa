import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Images, Colors, Metrics, Fonts } from "../Themes";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { Icon } from 'native-base';
import HeaderDrawerScreen from './HeaderDrawerScreen'
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusLoading: true,
            category: [
                {
                    title: 'NanCy best Chair',
                    url: "https://images2.imgix.net/p4dbimg/11/images/7270-31eizjllx6xaa6jjmgg1oq.jpg?trim=color&trimcolor=FFFFFF&trimtol=5&w=1024&h=768&fm=pjpg&auto=format",
                    rate: 4.8,
                    branch: "FABILIA",
                    price: 239.70,

                },
                {
                    title: 'Dophone best Chair',
                    url: "https://i.pinimg.com/originals/91/14/a7/9114a73c600c6f22e3f4989a1c926033.jpg",
                    rate: 3.5,
                    branch: "LACOST",
                    price: 139.30,

                },
                {
                    title: 'Mondy best Chair',
                    url: "https://i.pinimg.com/640x/ab/41/2d/ab412d7c1dc33bb035a4b6ac3f9a63d4.jpg",
                    rate: 6.6,
                    branch: "PETRO",
                    price: 120.90,

                },
                {
                    title: 'Kayu Mano best Chair',
                    url: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Flancer%2Fcolor%2F650_656-b.jpg?width=878&height=600&scale=both&trim.threshold=80",
                    rate: 4.2,
                    branch: "PETRO",
                    price: 90.50,

                },
                {
                    title: 'Ottoman best Chair',
                    url: "https://cdn.shopify.com/s/files/1/2660/5236/products/KYLIPESF_AC_1400x.jpg?v=1590679864",
                    rate: 6.5,
                    branch: "FABILIA",
                    price: 290.40,

                },
                {
                    title: 'Giogia best Chair',
                    url: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fsherrill%2Fcolor%2Ftraditional%20-%20sherrill_3061-3%20ada%20cream%20gr9-bp1d9tj31lecmhwmrhmcp0q.jpg?width=878&height=600&scale=both&trim.threshold=80",
                    rate: 7.3,
                    branch: "GUESCY",
                    price: 180.50,

                },
            ],
        }
    }
    handleOnEachMenuClick = (item,index) => {
        Actions.ProductDetailScreen({item:item});
    }

    renderMeunuOption = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => this.handleOnEachMenuClick(item, index)}
                style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    width: "44%",
                    height: width / 1.4,
                    backgroundColor: 'white',
                    shadowOffset: { width: 2, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 5,
                    margin: 10,
                    marginTop: 5
                }}
            >
                <View style={{ width: '100%', height: '100%', flexDirection: "column", backgroundColor: Colors.white }}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image
                            style={{ width: width / 2.6, height: 145, borderRadius: 15,resizeMode: 'contain' }}
                            source={{ uri: item.url }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View style={{ paddingLeft: 10, flex: 2 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>{item.title}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10, flexDirection: 'row',alignItems: 'flex-start' }}>
                            <View>
                                <Icon type="AntDesign" name="star" style={{ color: 'orange', fontSize: 13,paddingTop:3,paddingRight:5 }} />
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>({item.rate})</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 6, paddingLeft: 10 }}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 12 }}>{item.branch} PRODUCT</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 2, paddingLeft: 10, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>${item.price}</Text>
                        </View>
                        <View style={{ alignItems: 'center', backgroundColor: '#000066', marginRight: 10, borderRadius: 50, width: 25 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center', marginBottom: 1 }}>+</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderDrawerScreen/>
                <ScrollView style={{ padding: 10 }}>
                    <FlatList
                        data={this.state.category}
                        numColumns={2}
                        renderItem={this.renderMeunuOption}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={{}}>
                        <Text></Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getHeader: state.header
    }
}
export default connect(mapStateToProps, null)(HomeScreen)
