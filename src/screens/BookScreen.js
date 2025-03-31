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
            img: "https://s3-alpha-sig.figma.com/img/8cef/f29e/76f6dde15e20c34ec90a9cb57d90403a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TD8F~AoeYWK9hKYFMDqmmEYpwd2GMNamHHEEIR0-foHmbSH~KKeAltbBIM7BmrQrTln7xUbxc1UHP3byTZs8pJo8aTE4gXDkqkC~PNSvvDvmafSmfU6b6RyF9zUNEyXCTFqJNkIu-Vs6UOB7fhs3ovKSQQK7nsr6U-s2GTZURZR~eKiLYXjz3aWRj6hFWD9sESrizwsQjZXOZ6znpeTGGsXvUIaHkxm7HFbOyDILPCSZWBXNjREJ2Qn8Ubxh2igyZ~yEilGOYs-33coj8nBdWJxyRmbZZElwmgLZP2qRwV1S10xPddeBzJfqcdNFLnUm45Qge7BQO0hYX9uGMSUZWw__",
            btns: [
                'Signal back with his own lantern.',
                'Ignore it and turn away.'
            ]
        },
        second: {
            text: "🔹 As Willem lifted his lantern, the ghostly ship changed course—heading straight toward him. A deep voice called out, offering him a choice: join the crew and gain untold riches, or turn away and forget he ever saw them.",
            img:"https://s3-alpha-sig.figma.com/img/4c3e/f7bc/8dd3251eccb71025c1d6c590a8e62389?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o17bo~sgQVl5CMWBCRN8aqEj7H8jjJ6TYd4b~SkHgXC7YeeXSFxz~2m~MHC5hMsVKJqgNH8iFD0xSVZSfasL2Q3GdnWKpt-zY5UZXAGVODPAEiCvWcdgJouI2wh3su6~ktP9x~6tBILOcn9HjPHW-AhXERfFjLsiRd1v0Ly7IxKDMWM70bUmfFAJHLmuAvXeNb8XYoa26737G2bUrxIlPepVfMbM3R0zDCC2Pvmoz5jVnSS6e0ymRxiXUGLRiIKz5naHhsHt-EGD6suNW7t1PRptY2GHXTUZ4ggpcXcmaPzBIe9k~11E5-wWjyMzKac7cqUkyIlpAh~5XelbFYXstA__",
            btns: [
                'Step aboard the ghost ship and embrace his fate.',
                'Refuse and try to escape before it’s too late.'
            ]
        },
        third: {
            text: "🔹 The crew welcomed Willem, revealing that they were once ordinary sailors, tricked into a cursed existence. He was now one of them, doomed to sail the Zuiderzee forever—unless he could find a way to break the curse.",
            img:"https://s3-alpha-sig.figma.com/img/99bd/5117/a89d5b3c9bd465ce07313d26690531c4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rO8n96yKz0jswnrmeChkvwl4DQ2NcpQwF3vjYEx8tTEo~T02XiQ~S-9ThNhJJWLtNHs5jdpFjw9eymv8JdTMjkxYGL8tNxxJTuCei~N73o0--0coVlgiwNfbnOED8nEFRPqTR9ucPwuTLlA0NQ8Z7lfFKC8AroKdINCVT-oSCRCtangPMQrr3OwGvNdipjpt6YFTZRxhSwCZh~xFVvpkQb7u9iXmwnkqU9epAHtzDnWFfDiUTYOcNRTx90jZsTgymAfO7pjfpGtNRlpG54-EStdqvISvH-N9Wd6a4diVHF~V2L6OXox8mUqC9jXGf2zd9mLNhhoNX2HsFCCcSelLVQ__",
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
            img:"https://s3-alpha-sig.figma.com/img/daf1/7ebe/30d9b3e31452360afc7dd578a2adbd18?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s4zzTiJdEUviRcX1CKzgJHIgXusHHldccZh9QMCSl08QVpsY9knEQs-AYv3NpWmwZROu09dRRmWw0vKtI8up-djXOLEIrGNUO4Bn52VWIVgCOOfhbjS8y3OwKWEyRdEAbCXcFEsHnvv7kjTXmqRWI44V6lx0JIV0~7mDm7FB5TwCw4Eqi~L4k1XKq5giyelSOXtBGV4jnxjWZ-TDLx3~x9B3E7DZkiduxFDOMTG6JTWjoChwKNbsOZSMW8YfOSgo7yNOnjkeRfQQk~W8e7SCjjkWrT0GDXchH8AQFms36BVbRiTOnCuAA4qhU~V0wOcdbQoUNngzAzJ7LCy4ekTIyQ__",
            btns: [
                'Approach the ghost and listen to the mysterious voice.',
                'Leave the place and try to find your way out of the fog.'
            ]
        },
        second: {
            text:"🔹 The ghost freezes before you, and its voice comes as a whisper: “Whoever completes the construction will free me from eternal wandering.” He points to the old remains of the dam, swallowed by sand and water.",
            img:"https://s3-alpha-sig.figma.com/img/0cdd/007d/58c8e711d6c8fc566074a91da1a338ac?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V0c2AuJfeM1Nbqhb~X18Vj3Zi2t3sBRvi-lzz5YrNv0Onn5fR11ITT9VE0MqsRgQyQyNREwfHtOmcthDXpucI7lQDXZc6Ra8KclT3bppUEdsgNEyrxi3hIfodGv1HYbfEQ0IZSR-kof~nWDZtzHvwEI1ze~Bd-PXJb~Z5R1hXzBBdlsdXbiOr9ujW4pnryo7LB2If20qSeT-ue-0B1Q-PX7~SL3fvCvEa1i20GLlNSvmQ1zUQkcxdr1ESzw6rPZgbF7iSs3U4ugOZjbAd7tpQJPN8kxt5fVEyGiS8tJBzka8dYqB2y~~66tkmxld1366Lq03dJwBVa8NNjo~0C~-5g__",
            btns: [
                'Try to rebuild the old dam.',
                'Flee from the ghost and return to a safe place.'
            ]
        },
        third: {
            text: "🔹 As you restore part of the dam, the ground vibrates. Suddenly, the ghost appears, calm at first, then bitter. “Your help has freed me, but I remain here as part of this land.” It vanishes, leaving only a gust of wind.",
            img:"https://s3-alpha-sig.figma.com/img/0597/81f2/18ddbc4cb51a81a7445f17fc71d95e7f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ocr1IFMsfft5~MOnXgMoYjIg~lV6a4EwDsEsBdDiJwnQTYeXh6qujnDKbotpOfdSdeSvQxf44LKkIxY3aGLnMMELEyA5MI6XxIq8DEHoayUFZPcviwl5MEXNTZ-wxIeT6E4myX6d8dn~mIgdj3AlpDYWQyIvmnMbJqqX3kt9CpKTWuKfjGsnLqRHrZPMeVi1VykzAQrda9aCjEpd37IR5ZwDcQQM4N2eiNwDaRpR1ZqGWOH78849wt~LyJNMfWWEyRYdeEphYEauDKkMzW808MtPXwppa0MMo0pzY0scj161fqDLAZ8UhEOL-SR3EyCTnGxW0vBwau078oCTzdZNuA__",
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
            img:"https://s3-alpha-sig.figma.com/img/d812/9881/10e378b99aeea2d80c3a3bb0acaac780?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ej6ET1p-P8ZlPVVM5dZzz7iDGXzBbrxkkOieK7CeoSXtUl~TaREdoF--rjtwo1R7w-KOCJA0sRO7Y5vUiBPCfSyFGhvCzDpT9Wy~FUD2xttPKIwQCqURAyiHy6SWram10uJfOEKnlK5FS-rIiC0hzGMD9vLVtC0emlDKZrQmi~UzXJG3m92bdaQ977jyDxzx-va-n7gTfNb4Oy0tuFZKs8cHym2nK048v6Jpfw2C34qPBeDie8sxYL3ujiBWrldIfw1mDjNSRoCba6Ck~4YYIk7PxHGd3CpASsBtymM9-BdMKH0KrCuuUbrhWOB3X6EpEVrtPLnPWzKzUbI07rCfiQ__",
            btns: [
                'Investigate the lighthouse and climb to the top.',
                'Ignore the stories and leave the area.'
            ]
        },
        second: {
            text:"🔹 As you climb the tower, the air grows colder. At the top, you see a faint light flickering from the beacon. As you approach, the ghostly figure of Pieter appears, staring at the light with an intense gaze.",
            img:"https://s3-alpha-sig.figma.com/img/eaa2/aa90/a20981f3ac89a99f9e737fb4f33ac5ff?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eyr0K-rLcBoCYZBuqzhTMb4Lw1etAK~WeLFAxCU~uTs-8hsIvjcjwOMNDzQLCi6GGIdT0bnJt69wErWif496fEGZrMxPi6Hnl8DStsNUIAhW6SXpbjdVP38aACIIkoyuc6bhERzxWT0qO4wLzQyVJ4-15XvKDpPUAH7IKMZxv4J7F2Xy6BiTWsZD8V4gDZS1L6MiOh9X4m9b7SuZN~Rfp~SqM1weCBBV9NBOk4Vxo8RTIwHij0xJPw8Ljv59nacHPUg5qYujMFTLkXuolmFsZDKqM26xQj1Ym~HkI43Sc6vDLesQOKuCgqJypwY~Bex0up3tbc0Qv9nLgxpsR4HfYQ__",
            btns: [
                'Ask the ghost why he haunts the lighthouse.',
                'Attempt to extinguish the beacon to end the cycle.'
            ]
        },
        third: {
            text: "🔹 Pieter’s eyes lock with yours. “I tried to save them… but I failed,” he whispers. “Now I am forever bound to this place, cursed to guide ships that no longer sail.” He turns to the beacon, and you feel a heavy sadness fall over you.",
            img:"https://s3-alpha-sig.figma.com/img/98fe/fd52/b7e707f3a845758cd1792127a897a031?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nxmFBvsmA0HjaC~lnTK5ac1yDYA8ZX7b8LKf0JQg9r4stwdKHrr0v1OXSEQnZcLjdsTEALBKFUnt8uUGDfIutiYkN9yo4uRbmyS2j~11PkLqCxGVh5Uvkc81kIW7c8ahcSO1ICgtXux2ehNj0Npp5jVIcCpDGBFyJ~UgWaVzXbDZ8PWF7RkFz0Dl1BFGHhT078x3M1X8aESbfmlxqblBUU0uvWohbCrSRScn7mD74bxtVj8llCkoN6Jv7vG2uRxrrLoqvqhPlmhP-9v9tK6uvExSATuPcx9GoMFN1VgW~HJMN2G2XXBqTzE2qbTlwKcipmZFnUflUgdyvn~qLeHy5w__",
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
