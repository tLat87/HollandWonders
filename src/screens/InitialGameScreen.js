import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import SmallLogo from '../assets/svg/SmallLogo';
import HidenSvg from '../assets/svg/HidenSvg';
import ShopSvg from '../assets/svg/ShopSvg';

const InitialGameScreen = ({ navigation }) => {

    return (
        <View
            style={{
                backgroundColor: '#000',
                flex: 1,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Shop')}} style={{ backgroundColor: '#fff', padding: 16, borderRadius: 39, alignSelf: 'flex-start' }}>
                    <ShopSvg/>
                </TouchableOpacity>
            <Text style={{color: '#fff', textAlign: 'center'}}>
                In our mini-game you will throw various objects with a slingshot at the silhouettes of these same objects, trying to hit the contours exactly. For each successful hit you get 1 coin, which can be spent in the game store on new skins for objects. The shop has many unique skins, such as traditional Dutch windmills, wooden clogs and famous tulips            </Text>
            <SmallLogo/>
            <TouchableOpacity onPress={()=>{navigation.navigate('Game')}} style={{backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 18, width: '90%', borderRadius: 100}}>
                <Text style={{fontSize: 18,  fontWeight: 'bold'}}>
                    Begin
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default InitialGameScreen;
