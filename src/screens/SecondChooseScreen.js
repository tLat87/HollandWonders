import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ThirdScreen from './ThirdScreen';

const SecondChooseScreen = ({ navigation, route }) => {
    const {data} = route.params;
    return (
        <ScrollView style={{  backgroundColor: '#000',
            flex: 1,
            paddingHorizontal: 16,}}>
            <Text style={{color: '#fff', fontSize: 20,fontWeight: 'bold', marginBottom: 10}}>
                The Ghost of the Green Dunes
            </Text>
            <Image source={data['second'].img} style={{width:'100%', height: 200, borderRadius: 20}}/>
            <Text style={{color: '#fff', fontSize: 16, marginBottom: 20, marginTop: 10}}>
                {data['second'].text}
                 </Text>
            <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 8}}>
                🔀 Choose an outcome...
            </Text>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Third', {data})}} style={{ backgroundColor: '#FFCC33', width: '48%', padding: 15, borderRadius: 39, marginBottom: 10 }}>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', width: '70%', marginLeft:8,  }}>{data['second'].btns[0]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Third', {data})}} style={{ backgroundColor: '#FFCC33', width: '48%', padding: 15, borderRadius: 39, marginBottom: 10 }}>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', width: '70%', marginLeft:8 }}>{data['second'].btns[1]}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SecondChooseScreen;
