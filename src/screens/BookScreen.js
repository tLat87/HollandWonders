import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import SmallLogo from '../assets/svg/SmallLogo';
import SmallBlackArrow from '../assets/svg/SmallBlackArrow';
import UpArrow from '../assets/svg/UpArrow';

const stories = [
    { title: "The Ghost Ship of the Zuiderzee", color: "#A6CE39" },
    { title: "The Ghost of the Green Dunes", color: "#E37D32" },
    { title: "The Phantom Lighthouse Keeper", color: "#FCCC33" }
];

const data = {
    "The Ghost Ship of the Zuiderzee": {
        first: {
            text: "🔹 For centuries, sailors spoke of a ghostly ship appearing on the Zuiderzee, doomed to wander forever. It was said that those who saw it would either receive great fortune—or never return from their next voyage.\n" +
                "\n" +
                "One night, young fisherman Willem spotted the ship on the horizon. As he stared in awe, a lantern on the ship flickered, as if calling to him.",
            img: require('../assets/img/fb7951ca4502588dffef156aa0e5fb8d9119eb27.jpg'),
            btns: [
                'Signal back with his own lantern.',
                'Ignore it and turn away.'
            ]
        },
        second: {
            text: "🔹 As Willem lifted his lantern, the ghostly ship changed course—heading straight toward him. A deep voice called out, offering him a choice: join the crew and gain untold riches, or turn away and forget he ever saw them.",
            img: require('../assets/img/daf17ebe30d9b3e31452360afc7dd578a2adbd18.jpg'),
            btns: [
                'Step aboard the ghost ship and embrace his fate.',
                'Refuse and try to escape before it’s too late.'
            ]
        },
        third: {
            text: "🔹 The crew welcomed Willem, revealing that they were once ordinary sailors, tricked into a cursed existence. He was now one of them, doomed to sail the Zuiderzee forever—unless he could find a way to break the curse.",
            img: require('../assets/img/c11f490d699bd429a49142d889d7a69dca47455a.jpg'),
            btns: [
                'He embraces eternity on the ship, becoming part of the legend.',
                'He searches for the ship’s original captain, hoping to lift the curse.'
            ]
        },
        final: "Some legends are warnings, others are temptations. But one thing is certain—the Ghost Ship of the Zuiderzee will sail forever."
    },
    "The Ghost of the Green Dunes": {
        first: {
            text: "🔹 In the 17th century, a village near the Green Dunes vanished after a failed attempt to tame the sea. The villagers built a dam to protect their homes, but a fierce storm flooded everything just as they finished.\n" +
                "\n" +
                "Now, on certain nights, the ghost of a villager who never completed his task wanders the dunes, his voice echoing through the fog.",
            img: require('../assets/img/b2518f2ac100e905946e53b833d349906fcb7362.jpg'),
            btns: [
                'Approach the ghost and listen to the mysterious voice.',
                'Leave the place and try to find your way out of the fog.'
            ]
        },
        second: {
            text:"🔹 The ghost freezes before you, and its voice comes as a whisper: “Whoever completes the construction will free me from eternal wandering.” He points to the old remains of the dam, swallowed by sand and water.",
            img: require('../assets/img/ad3f1c3eeb1adc476ff2937e2c93aafa643808ea.jpg'),
            btns: [
                'Try to rebuild the old dam.',
                'Flee from the ghost and return to a safe place.'
            ]
        },
        third: {
            text: "🔹 As you restore part of the dam, the ground vibrates. Suddenly, the ghost appears, calm at first, then bitter. “Your help has freed me, but I remain here as part of this land.” It vanishes, leaving only a gust of wind.",
            img: require('../assets/img/059781f218ddbc4cb51a81a7445f17fc71d95e7f.jpg'),
            btns: [
                'You leave the dunes, but will always remember that the place has become a little less sinister.',
                'You feel the curse still lives on and decide to stay, hoping to complete the task.'
            ]
        },
        final:"The legend of the Ghost of the Green Dunes serves as a reminder of how uncontrollable forces of nature can conceal eternal secrets and lead to paths of restoration or destruction.",
    },
    "The Phantom Lighthouse Keeper": {
        first: {
            text: "🔹 In the 16th century, fisherman Jan was lost at sea during a storm near Zeeland. Despite desperate cries, no one could reach him. His body was never found.\n" +
                "\n" +
                "Since then, on stormy nights, sailors hear Jan’s ghost calling out, warning ships of the dangers. Some claim to see his shadowy figure, forever searching for peace.",
            img: require('../assets/img/99bd5117a89d5b3c9bd465ce07313d26690531c4.jpg'),
            btns: [
                'Investigate the lighthouse and climb to the top.',
                'Ignore the stories and leave the area.'
            ]
        },
        second: {
            text:"🔹 As you climb the tower, the air grows colder. At the top, you see a faint light flickering from the beacon. As you approach, the ghostly figure of Pieter appears, staring at the light with an intense gaze.",
            img: require('../assets/img/021d6b92683bd4bd5ce80270c348c8560441ab0b.jpg'),
            btns: [
                'Ask the ghost why he haunts the lighthouse.',
                'Attempt to extinguish the beacon to end the cycle.'
            ]
        },
        third: {
            text: "🔹 Pieter’s eyes lock with yours. “I tried to save them… but I failed,” he whispers. “Now I am forever bound to this place, cursed to guide ships that no longer sail.” He turns to the beacon, and you feel a heavy sadness fall over you.",
            img: require('../assets/img/9f5d22f84d0e48c9d3259aee43ed0e652cfc7489.jpg'),
            btns: [
                'You stay with him and light the beacon, becoming part of the curse.',
                'You help him understand that his duty is over, and he vanishes into the fog.'
            ]
        },
        final: "Some say the lighthouse still flickers in the fog, its keeper forever waiting for redemption, while others claim the curse is merely an echo of an unfulfilled task. Only time will tell if the cycle can be broken."
    },
}

const BookScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#000', flex: 1, alignItems: 'center', paddingHorizontal: 16, paddingTop: 30 }}>
            <SmallLogo />
            <Text style={{ color: '#fff', textAlign: 'center', marginVertical: 10 }}>
                Step into the shadows of Holland’s haunted past…
            </Text>

            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                {stories.map((story, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {navigation.navigate('FirstChoose', {data: data[story.title]})}}
                        style={{
                            backgroundColor: story.color,
                            width: '100%',
                            padding: 30,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: -20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}>{story.title}</Text>
                        <View style={{
                            backgroundColor: '#fff',
                            width: 35,
                            height: 35,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <UpArrow/>
                        </View>
                    </TouchableOpacity>
                ))}

                <View style={{
                    backgroundColor: '#FCCC33',
                    width: '100%',
                    padding: 30,
                    height: 200,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>
                        Every path hides a story worth discovering.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default BookScreen;
