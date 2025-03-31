import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ThirdScreen = ({ navigation, route }) => {
    const {data} = route.params;
    return (
        <ScrollView style={{  backgroundColor: '#000',
            flex: 1,
            paddingHorizontal: 16,}}>
            <Text style={{color: '#fff', fontSize: 20,fontWeight: 'bold', marginBottom: 10}}>
                The Ghost of the Green Dunes
            </Text>
            <Image source={{uri: data['third'].img}} style={{width:'100%', height: 200, borderRadius: 20}}/>
            <Text style={{color: '#fff', fontSize: 16, marginBottom: 20, marginTop: 10}}>
                {data['third'].text}
            </Text>
            <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 8}}>
                🔀 Choose an outcome...
            </Text>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Final', {data})}} style={{ backgroundColor: '#FFCC33', width: '48%', padding: 15, borderRadius: 39, marginBottom: 10 }}>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', width: '70%', marginLeft:8,  }}>{data['third'].btns[0]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Final',  {data})}} style={{ backgroundColor: '#FFCC33', width: '48%', padding: 15, borderRadius: 39, marginBottom: 10 }}>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', width: '70%', marginLeft:8 }}>{data['third'].btns[1]}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ThirdScreen;
