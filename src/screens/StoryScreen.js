import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import RightArrow from '../assets/svg/RightArrow';

const StoryScreen = ({ navigation, route }) => {
    const { title, data } = route.params;
    const storiesArray = Object.entries(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < storiesArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <View style={{ backgroundColor: '#000', flex: 1, padding: 16, paddingTop: '40%', alignItems: 'center' }}>
            {/* Кнопка назад */}
            <TouchableOpacity onPress={() => navigation.goBack()}
                              style={{ position: 'absolute', top: 0, left: 16, transform: [{ scaleX: -1 }] }}>
                <RightArrow />
            </TouchableOpacity>

            {/* Заголовок категории */}
            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 22, marginBottom: 16 }}>
                {title}
            </Text>

            {/* Заголовок истории */}
            <Text style={{ textAlign: 'center', color: '#FEC107', fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
                {storiesArray[currentIndex][0]}
            </Text>

            {/* Текст истории */}
            <ScrollView style={{ marginBottom: 20, paddingHorizontal: 10 }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>
                    {storiesArray[currentIndex][1]}
                </Text>
            </ScrollView>

            {currentIndex < storiesArray.length - 1 && (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 18,
                        marginBottom: 30,
                        width: '90%',
                        borderRadius: 100
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Next</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default StoryScreen;
