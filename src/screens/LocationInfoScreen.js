import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LocSvg from '../assets/svg/LocSvg';
import CopySvg from '../assets/svg/CopySvg';
import SmallBlackArrow from '../assets/svg/SmallBlackArrow';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const LocationInfoScreen = ({ navigation, route }) => {
    const { loc } = route.params;

    return (
        <ScrollView style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16 }}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>
                {loc.name}
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, width: '100%', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LocSvg />
                    <Text style={{ color: '#fff', fontSize: 16, marginLeft: 8, width: '80%' }}>
                        {loc.loc}
                    </Text>
                </View>
                <CopySvg />
            </View>

            <View>
                <Image source={loc.img} style={{ alignSelf: 'center', marginTop: 20 }} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('MapScreen', { latitude: loc.latitude, longitude: loc.longitude })}
                    style={{
                        borderRadius: 20,
                        transform: [{ scaleX: -1 }],
                        padding: 10,
                        position: 'absolute',
                        backgroundColor: '#9DC742',
                        top: 30,
                        right: 26,
                    }}>
                    <SmallBlackArrow />
                </TouchableOpacity>
            </View>

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 20 }}>
                {loc.description}
            </Text>

            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                style={{
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 18,
                    marginBottom: 30,
                    alignSelf: 'center',
                    width: '90%',
                    borderRadius: 100,
                    marginTop: 50,
                }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LocationInfoScreen;
