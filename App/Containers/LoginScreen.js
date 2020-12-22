import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import { Images, Color } from "../Themes";
import { Icon, Container, Content } from 'native-base';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container style={{ paddingTop: 30 }}>
                <Content>
                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Images.logoLogin} style={{
                                width: 160,
                                height: 160,
                            }} />
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>KING OF SOFA</Text>
                        </View>
                        <View style={{ backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', margin: 15, borderRadius: 20, backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 5 }}>
                                    <Icon type="FontAwesome5" name="user-tie" style={{ color: '#000066', fontSize: 22 }} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <TextInput
                                        style={{
                                            height: 48,
                                            borderColor: 'gray',
                                            placeholderTextColor: 'gray',
                                            fontSize: 16,
                                            color: 'black',
                                        }}
                                        underlineColorAndroid="transparent"
                                        placeholder="Username"
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', margin: 15, marginTop: 0, borderRadius: 20, backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 5 }}>
                                    <Icon type="FontAwesome5" name="unlock" style={{ color: '#000066', fontSize: 22 }} />
                                </View>
                                <View style={{ flex: 4 }}>
                                    <TextInput
                                        style={{
                                            height: 48,
                                            borderColor: 'gray',
                                            placeholderTextColor: 'gray',
                                            fontSize: 16,
                                            color: 'black',
                                        }}
                                        underlineColorAndroid="transparent"
                                        placeholder="Password"
                                    />
                                </View>
                                <TouchableOpacity delayPressIn={0} style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 15 }}>
                                    <Icon type="FontAwesome5" name="eye-slash" style={{ color: '#000066', fontSize: 22 }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity delayPressIn={0} style={{ alignItems: 'flex-end', marginRight: 20 }}>
                                <Text style={{ color: '#000066', fontWeight: 'bold' }}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity delayPressIn={0} style={{ margin: 15, padding: 10, alignItems: 'center', borderRadius: 18, backgroundColor: '#000066', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>LOG IN</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: '#000066' }}>Not Register yet? Please.</Text>
                            <TouchableOpacity delayPressIn={0} onPress={() => alert("sign up")}>
                                <Text style={{ color: '#000066', fontWeight: 'bold' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 20 }}>
                            <View style={{ flex: 2.5, borderBottomColor: 'black', borderBottomWidth: 0.6, marginBottom: 8 }}>
                            </View>
                            <View style={{}}>
                                <Text>OR</Text>
                            </View>
                            <View style={{ flex: 2.5, borderBottomColor: 'black', borderBottomWidth: 0.6, marginBottom: 8 }}>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 20 }}>
                            <TouchableOpacity delayPressIn={0} style={{ marginRight: 10, flex: 2, justifyContent: 'center', alignItems: 'center', padding: 10, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, }}>
                                <View style={{ marginRight: 10 }}>
                                    <Icon type="FontAwesome" name="facebook-official" style={{ color: '#000066', fontSize: 22 }} />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity delayPressIn={0} style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 10, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, }}>
                                <View style={{ marginRight: 10 }}>
                                    <Icon type="AntDesign" name="google" style={{ color: '#000066', fontSize: 22 }} />
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Google</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>

            </Container>
        );
    }
}