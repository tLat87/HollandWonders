import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RightArrow from '../assets/svg/RightArrow';

const FinalScreen = ({ navigation, route }) => {
    const { data } = route.params;
    return (
        <View style={{  backgroundColor: '#000',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 16,}}>
            {/*<TouchableOpacity onPress={()=>{navigation.pop(4)}} style={{*/}
            {/*    borderRadius: 20,*/}
            {/*    transform: [{scaleX: -1}],*/}
            {/*    padding: 10,*/}
            {/*    position: 'absolute',*/}
            {/*    top: 30,*/}
            {/*    left: 16,*/}
            {/*}}>*/}
            {/*    <RightArrow/>*/}
            {/*</TouchableOpacity>*/}
            <Text style={{color: '#fff', fontSize: 20,fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>
                📜 Final Thought: {data.final}
            </Text>

        </View>
    )
}

export default FinalScreen;
