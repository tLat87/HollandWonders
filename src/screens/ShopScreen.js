import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Alert, Vibration} from 'react-native';
import CoinSvg from '../assets/svg/CoinSvg';
import RightArrow from '../assets/svg/RightArrow';
import WHITEChees from '../assets/svg/WHITEChees';
import WHITEMelnica from '../assets/svg/WHITEMelnica';
import WhiteShip from '../assets/svg/WhiteShip';
import WhiteDolhpin from '../assets/svg/WhiteDolhpin';
import {useDispatch, useSelector} from 'react-redux';
import {subtractBalance} from '../redux/slices/balanceSlice';
import {buyItem} from '../redux/slices/purchasesSlice';

const ShopScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance.value);
    const purchasedItems = useSelector((state) => state.purchases.items);


    const items = [
        { id: 'cheese', icon: <WHITEChees/>, color: '#E78C3F', price: 20 },
        { id: 'windmill', icon: <WHITEMelnica/>, color: '#F8C144', price: 20 },
        { id: 'boat', icon: <WhiteShip/>, color: '#A5C860', price: 20 },
        // { id: 'flower', icon: <WhiteDolhpin/>, color: '#DC4C64', price: 20 }
    ];

    const handleBuy = (itemName, price) => {
        if (purchasedItems.includes(itemName)) {
            Alert.alert('Already purchased!');
            return;
        }

        if (balance >= price) {
            dispatch(subtractBalance(price));
            dispatch(buyItem(itemName));
            Vibration.vibrate(100);
        } else {
            Alert.alert('Not enough coins!');
            Vibration.vibrate(300);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/*<TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.storeButton}>*/}
                {/*   <RightArrow/>*/}
                {/*</TouchableOpacity>*/}
                <View style={styles.coinContainer}>
                    <Text style={styles.coinText}>{balance}</Text>
                   <CoinSvg/>
                </View>
            </View>

            <View style={styles.grid}>
                {items.map((item) => (
                    <View key={item.id} style={[styles.item, { backgroundColor: item.color }]}>
                        {item.icon}
                        <TouchableOpacity
                            style={styles.buyButton}
                            onPress={() => handleBuy(item.id, item.price)}
                            disabled={purchasedItems.includes(item.id)}
                        >
                            {purchasedItems.includes(item.id) ? (
                                <Text style={styles.checkIcon}>✔️</Text>
                            ) : (
                                <>
                                    <Text style={styles.priceText}>{item.price}</Text>
                                    <CoinSvg/>
                                </>
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    storeButton: {
        borderRadius: 20,
        transform: [{scaleX: -1}],
        padding: 10,
    },
    storeIcon: {
        fontSize: 24,
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
    },
    coinText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5,
    },
    coinIcon: {
        fontSize: 18,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 15,
    },
    item: {
        width: 150,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 50,
    },
    itemIcon: {
        fontSize: 48,
        color: '#fff',
    },
    buyButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5,
    },
    checkIcon: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ShopScreen;
