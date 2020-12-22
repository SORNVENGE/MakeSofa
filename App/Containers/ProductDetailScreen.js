import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import Loading from '../Components/Loading'
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Images, Colors, Metrics, Fonts } from "../Themes";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { Icon } from 'native-base';
class ProductDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusLoading: true,
            item: this.props.item,
        }
    }
    componentWillMount = () => {
        setTimeout(() => {
            this.setState({ statusLoading: false })
        }, 1000)
    }


    render() {
        const { statusLoading, item } = this.state
        // if (statusLoading) return <Loading />
        return (
            <View style={{ flex: 1, alignItems: 'center', position: 'relative' }}>
                <TouchableOpacity style={{
                    alignItems: "center",
                    width: "90%",
                    height: width / 1.4,
                    backgroundColor: 'white',
                    // shadowOffset: { width: 2, height: 3 },
                    // shadowOpacity: 0.5,
                    // shadowRadius: 5,
                    // elevation: 5,
                    margin: 20,
                    // marginTop: 5
                }}>
                    <View style={{ width: '100%', height: '100%', flexDirection: "column", backgroundColor: Colors.white }}>
                        <View style={{ alignItems: 'center', marginTop: 10, backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5,borderTopLeftRadius:20,borderTopRightRadius:20 }}>
                            <Image
                                style={{ width: width / 1, height: 180, borderRadius: 15, resizeMode: 'contain' }}
                                source={{ uri: item.url }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginLeft: 0 }}>
                                <View style={{ paddingLeft: 10, flex: 1 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: '#000066', alignItems: 'center', justifyContent: 'center', borderRadius: 10, paddingTop: 5, paddingBottom: 5 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>${item.price}</Text>
                                </View>
                            </View>
                            <View style={{ margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Description :</Text>
                                <Text>From mental health and psychiatric facilities to hospitals, waiting rooms and other healthcare
                                settings, we’ve furnished countless environments with products that have safety at their core and
                                warmth in their style. Ultimately, our goal is to create Behavioral Health furniture that is durable,
                                    functional, customizable and, above all, inviting.</Text>
                            </View>
                        </View>


                        {/* Cart buttom  */}
                        <View style={{ backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, marginTop:10,borderBottomLeftRadius:20,borderBottomRightRadius:20,paddingBottom:30 }}>
                            <View style={{ flexDirection: 'row',marginTop:15 }}>
                                <View style={{ flex: 0.5, flexDirection: 'row',marginLeft:20 }}>
                                    <TouchableOpacity style={{ backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, width: 28, alignItems: 'center', borderRadius: 50 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>-</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}><Text>01</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, width: 28, alignItems: 'center', borderRadius: 50 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>+</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 2 }}>Total : ${item.price}</Text>

                                </View>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, marginTop: 20, borderRadius: 15, backgroundColor: '#000066', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5,marginLeft:20,marginRight:20 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 17, fontWeight: 'bold' }}>Add to cart</Text>
                            </TouchableOpacity>

                        </View>




                    </View>


                </TouchableOpacity>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        getHeader: state.header
    }
}
export default connect(mapStateToProps, null)(ProductDetailScreen)
