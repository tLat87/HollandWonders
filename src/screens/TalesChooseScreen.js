import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RightArrow from '../assets/svg/RightArrow';

const stories = {
    "Golden Age": {
        color: "#FA801B",
        data: {
            "Story 1": "In the 17th century, the Netherlands experienced its Golden Age, when it became one of the world’s most powerful maritime nations. Dutch trade flourished, with the Dutch East India Company dominating the spice trade. This period also marked a surge in art, as masters like Rembrandt and Vermeer captured the nation’s prosperity on canvas.",
            "Story 2": "The Golden Age brought a cultural revolution, with the rise of Dutch art, science, and philosophy. Intellectuals like Spinoza challenged conventional thinking, while Dutch art schools produced many legendary painters. The nation’s thriving economy funded innovations in architecture and design.",
            "Story 3": "Politically, the Golden Age was marked by the rise of the Dutch Republic. This new form of government, independent from Spanish rule, allowed the country to thrive, while the Netherlands’ navy controlled sea routes, ensuring dominance over European trade and colonial expansion."
        }
    },
    "Water Pumps": {
        color: "#FFCB03",
        data: {
            "Story 1": "To manage the constant threat of flooding, the Dutch developed water pumps that allowed them to drain vast areas of land. These pumps enabled the creation of polders—land reclaimed from the sea—forming a critical part of the Netherlands’ landscape and economy.",
            "Story 2": "The invention of the wind-powered water pump was a game-changer in the 16th century. The Dutch were able to pump water from fields, protecting farmland from flooding and enabling agriculture to flourish in what would otherwise have been uninhabitable land.",
            "Story 3": "The country’s ingenuity in managing water is exemplified by the extensive system of dikes and pumps along the coast. This infrastructure has not only helped protect the Netherlands from flooding but also allowed the Dutch to expand their territory by draining the sea."
        }
    },
    "Orange Houses": {
        color: "#9BC93B",
        data: {
            "Story 1": "The House of Orange-Nassau has long been central to Dutch history. From the 16th century, the royal family played a key role in the Dutch struggle for independence. The color orange became a symbol of this family, with celebrations and holidays often marked by orange decorations across the country.",
            "Story 2": "The orange color is not just a royal symbol, but also a representation of national unity. During major events like King’s Day, entire cities turn orange as the Dutch celebrate their monarchy and national pride, a tradition that dates back to the 19th century.",
            "Story 3": "In the 16th century, William of Orange, the leader of the Dutch revolt against Spanish rule, became an iconic figure. His leadership in the Eighty Years’ War paved the way for Dutch independence and the rise of the House of Orange as the country’s ruling dynasty."
        }
    },
    "Spice Trade": {
        color: "#EF1251",
        data: {
            "Story 1": "In the 17th century, the Dutch East India Company controlled the spice trade, bringing wealth and power to the Netherlands. Spices like pepper, nutmeg, and cloves were in high demand, and the Dutch monopoly on these goods ensured their dominance in international markets.",
            "Story 2": "The Netherlands became a global trade hub, thanks to the spice trade. Dutch merchants established trading posts in exotic lands like Indonesia and India, transforming Amsterdam into one of the most important financial centers of the time.",
            "Story 3": "The spice trade also led to the Dutch establishment of colonies in the East Indies. The riches from the spice trade fueled the country’s economic growth, but it also sparked conflict, as European powers competed for control of these valuable commodities."
        }
    },
    "Free City of Amsterdam": {
        color: "#0096D9",
        data: {
            "Story 1": "Amsterdam was granted the status of a free city in the early 16th century, a privilege that allowed it to govern itself and thrive as a major trading hub. Its independence played a key role in its rise as a financial and cultural center in Europe.",
            "Story 2": "Amsterdam’s autonomy allowed it to develop a robust economy based on international trade. By the 17th century, the city was the center of Europe’s banking and shipping industries, attracting merchants and artists from around the world.",
            "Story 3": "The status of “free city” also fostered an environment of tolerance and innovation. Amsterdam became a haven for thinkers, artists, and religious refugees, and its cultural scene flourished with groundbreaking works in art, philosophy, and science."
        }
    }
};

const TalesChooseScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#000', flex: 1, padding: 16, paddingTop: '40%'}}>
            {/*<TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position:'absolute', top: 0, left: 16, transform: [{scaleX: -1}],}}>*/}
            {/*    <RightArrow/>*/}
            {/*</TouchableOpacity>*/}
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                {Object.entries(stories).map(([title, { color, data }]) => (
                    <TouchableOpacity
                        key={title}
                        style={{
                            backgroundColor: color,
                            padding: 20,
                            borderRadius: 122,
                            width: "100%",
                            marginBottom: 10,
                            alignItems: "center"
                        }}
                        onPress={() => navigation.navigate("Story", { title, data })}
                    >
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>{title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default TalesChooseScreen;
