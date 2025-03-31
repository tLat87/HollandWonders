// import React, { useRef, useState, useEffect } from "react";
// import {
//     View,
//     Animated,
//     PanResponder,
//     TouchableOpacity,
//     Text,
//     StyleSheet,
//     Dimensions,
// } from "react-native";
// import SvgTarget1 from '../assets/svg/WhiteDolhpin'; // Замените на реальный путь
// import SvgTarget2 from '../assets/svg/WhiteShip'; // Замените на реальный путь
// import SvgTarget3 from '../assets/svg/WHITEChees'; // Замените на реальный путь
// import SvgTarget4 from '../assets/svg/WHITEMelnica';
// import WhiteShip from '../assets/svg/WhiteShip';
// import LineSvg from '../assets/svg/LineSvg';
// import SmallLogo from '../assets/svg/SmallLogo';
// import ORANGEFlove from '../assets/svg/ORANGEFlove'; // Замените на реальный путь
//
// const { width, height } = Dimensions.get("window");
//
// const GameScreen = ({ navigation, route }) => {
//
//     const rotation = useRef(new Animated.Value(0)).current;
//     const arrowPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
//     const [arrowVisible, setArrowVisible] = useState(false);
//     const bowRotation = useRef(0);
//
//     const [targets, setTargets] = useState([
//         { id: 1, top: 90, left: 20, width: 80, height: 80, visible: true, angleRange: [-40, -20], Svg: SvgTarget1 },
//         { id: 2, top: 20, right: 70, width: 80, height: 80, visible: true, angleRange: [10, 18], Svg: SvgTarget2 },
//         { id: 3, top: 200, right: 10, width: 80, height: 80, visible: true, angleRange: [30, 40], Svg: SvgTarget3 },
//         { id: 4, top: 320, left: 10, width: 80, height: 80, visible: true, angleRange: [-55, -40], Svg: SvgTarget4 },
//     ]);
//
//     const panResponder = PanResponder.create({
//         onMoveShouldSetPanResponder: () => true,
//         onPanResponderMove: (_, gesture) => {
//             let angle = Math.max(-90, Math.min(90, gesture.dx / 2));
//             rotation.setValue(angle);
//             bowRotation.current = angle;
//         },
//     });
//
//     const shootArrow = () => {
//         setArrowVisible(true);
//         let angleRad = (bowRotation.current * Math.PI) / 180;
//         let velocityX = Math.sin(angleRad) * width;
//         let velocityY = -Math.cos(angleRad) * height;
//
//         Animated.timing(arrowPosition, {
//             toValue: { x: velocityX, y: velocityY },
//             duration: 1000,
//             useNativeDriver: true,
//         }).start(() => {
//             setArrowVisible(false);
//             arrowPosition.setValue({ x: 0, y: 0 });
//
//             setTimeout(() => {
//                 checkHit();
//             }, 1000);
//         });
//     };
//
//     const checkHit = () => {
//         let angle = bowRotation.current;
//         let updatedTargets = targets.map(target => {
//             if (target.visible && angle >= target.angleRange[0] && angle <= target.angleRange[1]) {
//                 return { ...target, visible: false };
//             }
//             return target;
//         });
//
//         setTargets(updatedTargets);
//
//         if (updatedTargets.every(target => !target.visible)) {
//             navigation.goBack();
//         }
//     };
//
//     return (
//         <View style={{ flex: 1, backgroundColor: '#000' }}>
//             {/* Убираем отображение таймера */}
//             {/* <View style={styles.timerContainer}>
//                 <Text style={styles.timerText}>{timeLeft}s</Text>
//             </View> */}
//
//             {targets.map(target =>
//                     target.visible && (
//                         <View
//                             key={target.id}
//                             style={{
//                                 position: "absolute",
//                                 top: target.top,
//                                 left: target.left || undefined,
//                                 right: target.right || undefined,
//                                 width: target.width,
//                                 height: target.height
//                             }}
//                         >
//                             <target.Svg width={target.width} height={target.height} />
//                         </View>
//                     )
//             )}
//
//             <View style={{width:30, height:200, backgroundColor: '#FFCB03', borderRadius: 20, position: 'absolute', bottom: -70, left: '15%'}}/>
//             <View style={{width:30, height:200, backgroundColor: '#9DC742', borderRadius: 20, position: 'absolute', bottom: -70, right: '15%'}}/>
//             <View style={{position: 'absolute', bottom: 100, alignSelf: 'center'}}>
//                 <LineSvg/>
//             </View>
//
//             <Animated.View
//                 style={{
//                     transform: [{ rotate: rotation.interpolate({ inputRange: [-90, 90], outputRange: ["-90deg", "90deg"] }) }],
//                     position: "absolute",
//                     bottom: 100,
//                     alignSelf: "center",
//                 }}
//                 {...panResponder.panHandlers}
//             >
//                 <ORANGEFlove />
//             </Animated.View>
//
//             {arrowVisible && (
//                 <Animated.View
//                     style={{
//                         position: "absolute",
//                         bottom: 80,
//                         left: width / 2,
//                         transform: [
//                             { translateX: arrowPosition.x },
//                             { translateY: arrowPosition.y },
//                         ],
//                     }}
//                 >
//                    <SmallLogo/>
//                 </Animated.View>
//             )}
//
//             <TouchableOpacity onPress={shootArrow} style={styles.shootButton}>
//                 <Text style={styles.shootText}>SHOOT</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     shootButton: {
//         position: "absolute",
//         bottom: 30,
//         alignSelf: "center",
//         backgroundColor: "#FFDC00",
//         padding: 10,
//         borderRadius: 10,
//     },
//     shootText: {
//         fontWeight: "bold",
//         fontSize: 16,
//     },
// });
//
// export default GameScreen;

import React, { useRef, useState, useEffect } from "react";
import {
    View,
    Animated,
    PanResponder,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";
import { useDispatch, useSelector } from 'react-redux'; // Импортируем необходимые хуки
import { addBalance } from '../redux/slices/balanceSlice'; // Импортируем действие для добавления баланса

import SvgTarget1 from '../assets/svg/WhiteDolhpin'; // Замените на реальный путь
import SvgTarget2 from '../assets/svg/WhiteShip'; // Замените на реальный путь
import SvgTarget3 from '../assets/svg/WHITEChees'; // Замените на реальный путь
import SvgTarget4 from '../assets/svg/WHITEMelnica';

import LineSvg from '../assets/svg/LineSvg';
import SmallLogo from '../assets/svg/SmallLogo';
import ORANGEFlove from '../assets/svg/ORANGEFlove';
import CoinSvg from '../assets/svg/CoinSvg'; // Замените на реальный путь

const { width, height } = Dimensions.get("window");

const GameScreen = ({ navigation, route }) => {
    const dispatch = useDispatch(); // Хук для диспетчеризации действий
    const balance = useSelector(state => state.balance.value); // Получаем текущее значение баланса
    const purchasedItems = useSelector((state) => state.purchases.items); // Получаем список купленных предметов

    const rotation = useRef(new Animated.Value(0)).current;
    const arrowPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [arrowVisible, setArrowVisible] = useState(false);
    const bowRotation = useRef(0);

    // Базовые цели
    const BASE_TARGETS = [
        { id: 1, top: 90, left: 20, width: 80, height: 80, visible: true, angleRange: [-40, -20], Svg: SvgTarget1 },

    ];

    // Дополнительные цели, которые появляются только если они куплены
    const EXTRA_TARGETS = [];

    if (purchasedItems.includes('cheese')) {
        EXTRA_TARGETS.push({ id: 2, top: 20, right: 70, width: 80, height: 80, visible: true, angleRange: [10, 18], Svg: SvgTarget2 });
    }
    if (purchasedItems.includes('windmill')) {
        EXTRA_TARGETS.push({ id: 3, top: 200, right: 10, width: 80, height: 80, visible: true, angleRange: [30, 40], Svg: SvgTarget3 });
    }
    if (purchasedItems.includes('boat')) {
        EXTRA_TARGETS.push({ id: 4, top: 320, left: 10, width: 80, height: 80, visible: true, angleRange: [-55, -40], Svg: SvgTarget4 });
    }

    const targets = [...BASE_TARGETS, ...EXTRA_TARGETS];

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            let angle = Math.max(-90, Math.min(90, gesture.dx / 2));
            rotation.setValue(angle);
            bowRotation.current = angle;
        },
    });

    const shootArrow = () => {
        setArrowVisible(true);
        let angleRad = (bowRotation.current * Math.PI) / 180;
        let velocityX = Math.sin(angleRad) * width;
        let velocityY = -Math.cos(angleRad) * height;

        Animated.timing(arrowPosition, {
            toValue: { x: velocityX, y: velocityY },
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setArrowVisible(false);
            arrowPosition.setValue({ x: 0, y: 0 });

            setTimeout(() => {
                checkHit();
            }, 1000);
        });
    };

    const checkHit = () => {
        let angle = bowRotation.current;
        let updatedTargets = targets.map(target => {
            if (target.visible && angle >= target.angleRange[0] && angle <= target.angleRange[1]) {
                dispatch(addBalance(10)); // Добавляем 10 к балансу за попадание
                return { ...target, visible: false };
            }
            return target;
        });

        if (updatedTargets.every(target => !target.visible)) {
            navigation.goBack();
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            {targets.map(target =>
                    target.visible && (
                        <View
                            key={target.id}
                            style={{
                                position: "absolute",
                                top: target.top,
                                left: target.left || undefined,
                                right: target.right || undefined,
                                width: target.width,
                                height: target.height
                            }}
                        >
                            <target.Svg width={target.width} height={target.height} />
                        </View>
                    )
            )}

            <View style={{width:30, height:200, backgroundColor: '#FFCB03', borderRadius: 20, position: 'absolute', bottom: -70, left: '15%'}}/>
            <View style={{width:30, height:200, backgroundColor: '#9DC742', borderRadius: 20, position: 'absolute', bottom: -70, right: '15%'}}/>
            <View style={{position: 'absolute', bottom: 100, alignSelf: 'center'}}>
                <LineSvg/>
            </View>

            <Animated.View
                style={{
                    transform: [{ rotate: rotation.interpolate({ inputRange: [-90, 90], outputRange: ["-90deg", "90deg"] }) }],
                    position: "absolute",
                    bottom: 100,
                    alignSelf: "center",
                }}
                {...panResponder.panHandlers}
            >
                <ORANGEFlove />
            </Animated.View>

            {arrowVisible && (
                <Animated.View
                    style={{
                        position: "absolute",
                        bottom: 80,
                        left: width / 2,
                        transform: [
                            { translateX: arrowPosition.x },
                            { translateY: arrowPosition.y },
                        ],
                    }}
                >
                    <SmallLogo/>
                </Animated.View>
            )}

            <TouchableOpacity onPress={shootArrow} style={styles.shootButton}>
                <Text style={styles.shootText}>SHOOT</Text>
            </TouchableOpacity>

            {/* Отображаем текущий баланс */}
            <View style={styles.balanceContainer}>
                <CoinSvg/>
                <Text style={styles.balanceText}>{balance}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shootButton: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        backgroundColor: "#FFDC00",
        padding: 10,
        borderRadius: 10,
    },
    shootText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    balanceContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 100,
        left: 55,
        transform: [{ translateX: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        borderRadius: 5,
    },
    balanceText: {
        color: "#FFF",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default GameScreen;
