import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // Генерация случайных координат
    const getRandomCoordinates = () => {
        // Задаем диапазон для широты и долготы (например, для широты от -90 до 90, для долготы от -180 до 180)
        const randomLatitude = Math.random() * 180 - 90;
        const randomLongitude = Math.random() * 360 - 180;
        setLatitude(randomLatitude);
        setLongitude(randomLongitude);
    };

    // Вызываем функцию при монтировании компонента
    useEffect(() => {
        getRandomCoordinates();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}>
                <Marker coordinate={{ latitude, longitude }} title="Location" />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen;
