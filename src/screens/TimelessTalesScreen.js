import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import BigLogo from '../assets/svg/BigLogo';
import SmallLogo from '../assets/svg/SmallLogo';

const TimelessTalesScreen = ({ navigation }) => {

    return (
        <View
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
                Choose one word and discover the Holland story hidden behind it.
            </Text>
            <SmallLogo/>
            <TouchableOpacity onPress={()=>{navigation.navigate('TalesChoose')}} style={{backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 18, width: '90%', borderRadius: 100}}>
                <Text style={{fontSize: 18,  fontWeight: 'bold'}}>
                    Begin
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default TimelessTalesScreen;
