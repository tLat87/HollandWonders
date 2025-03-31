import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Импортируем необходимые хуки
import { toggleVibration, toggleMusic, resetSettings } from '../redux/slices/settingsSlice';
import {resetPurchases} from '../redux/slices/purchasesSlice';
import {resetBalance} from '../redux/slices/balanceSlice'; // Импортируем действия из слайса настроек

const SettingsScreen = () => {
    const dispatch = useDispatch();
    const vibrationEnabled = useSelector(state => state.settings.vibration); // Получаем состояние вибрации из Redux
    const musicEnabled = useSelector(state => state.settings.music); // Получаем состояние музыки из Redux

    // Функция для сброса настроек
    const handleReset = () => {
        dispatch(resetSettings()); // Сброс всех настроек
        dispatch(resetPurchases())
        dispatch(resetBalance())
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* Настройка музыки */}
                <View style={styles.header}>
                    <Text style={styles.title}>MUSIC</Text>
                    <Switch
                        value={musicEnabled}
                        onValueChange={() => dispatch(toggleMusic())} // Переключаем музыку
                        thumbColor={'white'}
                        trackColor={{ true: 'lightgreen', false: 'gray' }}
                    />
                </View>

                {/* Настройка вибрации */}
                <View style={styles.optionRow}>
                    <Text style={styles.title}>VIBRATION</Text>
                    <Switch
                        value={vibrationEnabled}
                        onValueChange={() => dispatch(toggleVibration())} // Переключаем вибрацию
                        thumbColor={'white'}
                        trackColor={{ true: 'lightgreen', false: 'gray' }}
                    />
                </View>
            </View>

            {/* Кнопка сброса настроек */}
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetText}>Reset settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        width: '90%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    resetButton: {
        marginTop: 20,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 16,
    },
    resetText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default SettingsScreen;
