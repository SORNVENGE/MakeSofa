
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'
import { useSelector, useDispatch } from 'react-redux'
import ListUserActions from '../Redux/ListUserRedux'

const AnimationScreen = props => {
    const [ListUser, setListUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // redux
    const data = useSelector((state) => state)
    // connect to api
    const dispatch = useDispatch()

    //componetdidmount
    useEffect(() => {
        dispatch(ListUserActions.listUserRequest());
    }, []);

    //componetwillreciveprops
    useEffect(() => {
        const { fetching, error, payload } = data.listUser
        if (fetching == false && error == null && payload) {
            if (payload) {
                setIsLoading(false);
                setListUser(payload)
            }
        }
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color='blue' />
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
           {ListUser.map(eachListUser=>{
               return (
               <View>
                   <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>{eachListUser.name}</Text>
                   <Text style={{color:'red',fontWeight:'bold',fontSize:17}}>{eachListUser.email}</Text>
               </View>
               );
           })}
        </View>
    )
}
export default AnimationScreen;