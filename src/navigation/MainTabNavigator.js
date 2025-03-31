import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen';
import BookScreen from '../screens/BookScreen';
import TimelessTalesScreen from '../screens/TimelessTalesScreen';
import InitialGameScreen from '../screens/InitialGameScreen';
import GRAYBook from '../assets/svg/GRAYBook';
import GRAYTwo from '../assets/svg/GRAYTwo';
import GRAYSettings from '../assets/svg/GRAYSettings';
import GRAYList from '../assets/svg/GRAYList';
import GRAYItemsSquare from '../assets/svg/GRAYItemsSquare';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#000000' },
                headerTitle: () => (
                    <Text style={{color:'#fff', fontWeight: '900', fontSize: 24}}>
                        Timeless Tales of Holland
                    </Text>
                ),
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
                tabBarIcon: ({ focused }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        IconComponent = GRAYList
                    }if (route.name === 'TimelessTales') {
                        IconComponent = GRAYTwo
                    }if (route.name === 'Settings') {
                        IconComponent = GRAYSettings
                    }if (route.name === 'Book') {
                        IconComponent = GRAYBook
                    }if (route.name === 'InitialGame') {
                        IconComponent = GRAYItemsSquare
                    }

                    return <IconComponent color={focused ? '#fff' : '#727272'} />;
                },
            })}
        >

            <Tab.Screen
                name="TimelessTales"
                component={TimelessTalesScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Book"
                component={BookScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="InitialGame"
                component={InitialGameScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
