import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
// import Splash from "./src/screens/Splash";
import BackgroundMusic from "./src/components/BackgroundMusic";
import ShopSvg from "./src/assets/svg/ShopSvg.tsx";
import ShopScreen from "./src/screens/ShopScreen";
import TalesChooseScreen from "./src/screens/TalesChooseScreen";
import StoryScreen from "./src/screens/StoryScreen";
import FirstChooseScreen from "./src/screens/FirstChooseScreen";
import SecondChooseScreen from "./src/screens/SecondChooseScreen";
import ThirdScreen from "./src/screens/ThirdScreen";
import FinalScreen from "./src/screens/FinalScreen";
import LocationInfoScreen from "./src/screens/LocationInfoScreen";
import MapScreen from "./src/screens/MapScreen";
import RightArrow from "./src/assets/svg/RightArrow.tsx";
import GameScreen from "./src/screens/GameScreen";
import WelcomeScreen from "./src/navigation/WelcomeScreen";


const Stack = createStackNavigator();

const leftCu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginLeft: 16, transform: [{scaleX: -1}]}}>
            <RightArrow/>
        </TouchableOpacity>
        )
    }

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <BackgroundMusic />
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', },
                        headerLeft: leftCu,
                        headerTitle: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', width: '100%'}}>
                            {/*<Text>*/}
                            {/*    Wonders of Holland*/}
                            {/*</Text>*/}
                            </View>
                        ),
                        headerShadowVisible: false,
                    }}>

                        {/*<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />

                        <Stack.Screen name="Shop" component={ShopScreen} options={{ }} />
                        <Stack.Screen name="TalesChoose" component={TalesChooseScreen} options={{ }} />
                        <Stack.Screen name="Story" component={StoryScreen} options={{ }} />

                        <Stack.Screen name="FirstChoose" component={FirstChooseScreen} options={{ }} />
                        <Stack.Screen name="SecondChoose" component={SecondChooseScreen} options={{ }} />
                        <Stack.Screen name="Third" component={ThirdScreen} options={{ }} />
                        <Stack.Screen name="Final" component={FinalScreen} options={{ }} />

                        <Stack.Screen name="LocationInfo" component={LocationInfoScreen} options={{ }} />
                        <Stack.Screen name="MapScreen" component={MapScreen} options={{ }} />

                        <Stack.Screen name="Game" component={GameScreen} options={{ }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
