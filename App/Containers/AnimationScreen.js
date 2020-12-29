
    import React, { useState, useEffect,useRef,useMemo } from 'react'
    import { ScrollView, Text, Image, View,ActivityIndicator } from 'react-native'
    import { Images } from '../Themes'
    import { useSelector,useDispatch } from 'react-redux'
    // import TestActions from '../Redux/TestRedux'
    // import Testing from '../Components/Testing'
    // Styles
    
    const  AnimationScreen = props =>{
        const [page, setPage] = useState(1);
        // const [commitHistory, setCommitHistory] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        // const loadMoreCommit = () => {setPage(page + 1)};
    
        // redux
        const data = useSelector((state)=> state)
        // connect to api
        // const dispatch = useDispatch()
    
        //componetdidmount
        useEffect(() => {
            // dispatch(TestActions.testRequest());
        }, []);
    
        //componetwillreciveprops
        useEffect(() =>{
            // const { fetching, error, payload } = data.test
            // if (fetching == false && error == null && payload) {
            //     if (payload) {
            //         setCommitHistory(payload)
            //         setIsLoading(false)
            //     }
            // }
        });
        
        if (isLoading) {
            return (
                <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
                    <ActivityIndicator size="large" color='blue' />
                </View>
            );
        }
        // return (
        //     <View style={{flex:1}}>
        //         <Text style={{fontSize:15,color:'black'}}>{commitHistory.rate.limit}</Text>
        //     </View>
        // )
    }
    export default  AnimationScreen;