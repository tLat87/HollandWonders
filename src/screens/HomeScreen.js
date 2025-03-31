import { Image, ScrollView, Text, TouchableOpacity, Vibration, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import OficialBuilding from '../assets/svg/OficialBuilding';
import SearchSvg from '../assets/svg/SearchSvg';
import RightArrow from '../assets/svg/RightArrow';
import SmallBlackArrow from '../assets/svg/SmallBlackArrow';
import HidenSvg from '../assets/svg/HidenSvg';
import FloverSvg from '../assets/svg/FloverSvg';
import CustleSvg from '../assets/svg/CustleSvg';

const locations =
    {
        "HistoricalLandmarks": [
            {
                "name": "De Haar Castle",
                "loc":"Kasteellaan 1, 3455 RR Utrecht, Netherlands",
                "img": require('../assets/img/1/Rectangle31.png'),
                "description": "Nestled in the countryside near Utrecht, De Haar Castle is a breathtaking medieval-style fortress that looks straight out of a fairytale. Originally dating back to the 14th century, it was rebuilt in the late 19th century by architect Pierre Cuypers, the mastermind behind Amsterdam’s Central Station and the Rijksmuseum. Surrounded by lush gardens, moats, and hidden passageways, De Haar is a true symbol of luxury and romance, offering visitors a glimpse into the lives of Dutch nobility."
            },
            {
                "name": "Muiden Castle",
                "loc":"Herengracht 1, 1398 AA Muiden, Netherlands",
                "img": require('../assets/img/1/Rectangle2.png'),
                "description": "One of the best-preserved medieval castles in the Netherlands, Muiderslot is a fortress with a rich history of battles, sieges, and noble gatherings. Built in the late 13th century to defend the country’s trade routes, it later became a cultural hub for poets and artists. Today, visitors can explore its grand halls, climb the towers, and even witness medieval reenactments that bring history to life."
            },
            {
                "name": "Delft",
                "loc":"Markt 87, 2611 GS Delft, Netherlands",
                "img": require('../assets/img/1/Rectangle3.png'),
                "description": "Known for its charming canals, Delft is a city where history, art, and craftsmanship come together. The birthplace of Johannes Vermeer, this town has inspired countless artists with its picturesque streets and golden light. Delft is also home to the famous blue-and-white Delftware pottery, still crafted using techniques from the 17th century. A visit here feels like stepping into a Dutch Golden Age painting."
            },
            {
                "name": "Dom Tower",
                "loc":"Domplein 21, 3512 JC Utrecht, Netherlands",
                "img": require('../assets/img/1/Rectangle34.png'),
                "description": "Standing at 112 meters, the Dom Tower of Utrecht is the tallest and oldest church tower in the Netherlands. Originally part of a grand cathedral, the tower was separated from the main church after a devastating storm in the 17th century. Today, it remains the most iconic landmark of Utrecht, offering a stunning panoramic view of the city for those who brave the 465-step climb."
            }
        ],
        "NaturalWonders": [
            {
                "name": "Keukenhof",
                "img": require('../assets/img/2/Rectangle35.png'),
                "loc":"Stationsweg 166A, 2161 AM Lisse, Netherlands",
                "description": "Every spring, Keukenhof transforms into a mesmerizing floral wonderland, showcasing millions of tulips, daffodils, and hyacinths. Located in Lisse, this 32-hectare park is a celebration of Dutch horticulture, attracting visitors from all over the world. Beyond the flower beds, visitors can stroll through themed gardens, admire flower sculptures, and take picturesque boat rides through the surrounding tulip fields."
            },
            {
                "name": "De Hoge Veluwe",
                "loc":"Houtkampweg 9, 6731 AV Otterlo, Netherlands",
                "img": require('../assets/img/2/Rectangle36.png'),
                "description": "A striking contrast to the Netherlands’ urban landscapes, De Hoge Veluwe National Park is a sprawling mix of dense forests, shifting sand dunes, and heathlands. Home to red deer, wild boars, and countless bird species, it’s a paradise for nature lovers. The park also houses the Kröller-Müller Museum, which boasts an impressive Van Gogh collection. With free white bikes available to explore its vast landscapes, it’s an unforgettable retreat into nature."
            },
            {
                "name": "Frisian Islands",
                "img": require('../assets/img/2/Rectangle37.png'),
                "loc":"UNESCO World Heritage, Friesland, Netherlands",
                "description": "The Wadden Islands, stretching along the northern coast, are a UNESCO-listed paradise where land and sea constantly reshape each other. From the untouched beaches of Terschelling to the seal colonies of Texel, these islands offer a peaceful escape from the mainland. Each island has its own charm, with cycling routes, charming villages, and opportunities for mudflat hiking across the seabed during low tide."
            },
            {
                "name": "Kinderdijk",
                "img": require('../assets/img/2/Rectangle37.png'),
                "loc":"Nederwaard 1, 2961 AS Kinderdijk, Netherlands",
                "description": "No place in the Netherlands captures the country’s deep relationship with water like Kinderdijk. This UNESCO World Heritage site features 19 beautifully preserved windmills from the 18th century, originally built to prevent flooding. Whether exploring by bike or boat, visitors can immerse themselves in Dutch engineering history while taking in the stunning landscape of waterways and fields."
            }
        ],
        "ArchitecturalMarvels": [
            {
                "name": "Rotterdam’s Cube Houses",
                "img": require('../assets/img/3/Rectangle39.png'),
                "loc":"Overblaak 70, 3011 MH Rotterdam, Netherlands",
                "description": "Rotterdam is known for its daring modern architecture, and nothing exemplifies this better than the iconic Cube Houses. Designed by architect Piet Blom, these tilted, cube-shaped homes are an experiment in urban living. Each house is designed to maximize space while defying traditional architectural norms. Visitors can even step inside a fully furnished Cube House to experience life inside these futuristic dwellings."
            },
            {
                "name": "Van Gogh Museum",
                "img": require('../assets/img/3/Rectangle40.png'),
                "loc":"Museumplein 6, 1071 DJ Amsterdam, Netherlands",
                "description": "Dedicated to one of the greatest painters in history, the Van Gogh Museum in Amsterdam holds over 200 of his works, including Sunflowers, The Bedroom, and Almond Blossoms. More than just an art collection, the museum offers an emotional journey through Van Gogh’s turbulent life, from his struggles with mental illness to his revolutionary use of color and brushwork."
            },
            {
                "name": "Anne Frank House",
                "img": require('../assets/img/3/Rectangle41.png'),
                "loc":"Prinsengracht 263-267, 1016 GV Amsterdam, Netherlands",
                "description": "Few places in the world carry such a profound historical weight as the Anne Frank House in Amsterdam. This small annex, where Anne and her family hid during World War II, has been preserved as a museum, with the original diary on display. Walking through its narrow rooms is a deeply moving experience that reminds visitors of the resilience of hope even in the darkest times."
            },
            {
                "name": "Efteling",
                "img": require('../assets/img/3/Rectangle42.png'),
                "loc":"Europalaan 1, 5171 KW Kaatsheuvel, Netherlands",
                "description": "Efteling is no ordinary amusement park—it’s an enchanting world inspired by European myths and folklore. With beautifully themed rides, fairytale forests, and immersive storytelling, it’s a magical experience for visitors of all ages. Whether stepping into the legend of the Flying Dutchman or wandering through a forest of talking trees, Efteling brings childhood dreams to life."
            }
        ],
        "HiddenUnusual": [
            {
                "name": "Fort Pampus",
                "img": require('../assets/img/4/Rectangle43.png'),
                "loc":"Forteiland Pampus, 1398 PX Muiden, Netherlands",
                "description": "Sitting on an artificial island in the IJmeer, Fort Pampus is a 19th-century fortress that was once part of Amsterdam’s defense line. Today, it’s an eerie yet fascinating historical site where visitors can explore underground tunnels, climb its old battlements, and learn about its role in the Netherlands’ military history."
            },
            {
                "name": "Marken",
                "loc":"Havenbuurt 19, 1156 AL Marken, Netherlands",
                "img": require('../assets/img/4/Rectangle44.png'),
                "description":"Marken is a former island turned peninsula where traditional Dutch life remains intact. With wooden houses on stilts, fishing boats docked along the harbor, and residents wearing traditional costumes during festivals, Marken feels like stepping into a time capsule. A short boat ride from Volendam, it’s a charming escape into the past."
            },
            {
                "name": "Begijnhof",
                "loc":"Begijnhof 30, 1012 WT Amsterdam, Netherlands",
                "img": require('../assets/img/4/Rectangle45.png'),
                "description":"Tucked away behind an unassuming doorway in the heart of Amsterdam, Begijnhof is a peaceful courtyard surrounded by historic houses. Once home to a Catholic sisterhood, this secret garden remains a place of quiet reflection amidst the city’s busy streets. The oldest wooden house in Amsterdam can also be found here, adding to the site’s timeless charm."
            },
            {
                "name": "Aalsmeer Flower Auction",
                "img": require('../assets/img/4/Rectangle46.png'),
                "loc":"Legmeerdijk 313, 1431 GB Aalsmeer, Netherlands",
                "description":"Flowers are synonymous with the Netherlands, and the Aalsmeer Flower Auction is where it all happens. The largest flower market in the world, it handles millions of blooms daily, with transactions happening in a thrilling, high-speed bidding system. Watching the process unfold is like witnessing a well-orchestrated ballet of colors, logistics, and technology."
            }
        ]
    }


const HomeScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("HistoricalLandmarks");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredLocations, setFilteredLocations] = useState(locations[activeTab]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === "") {
            setFilteredLocations(locations[activeTab]);
        } else {
            const filtered = locations[activeTab].filter((loc) =>
                loc.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredLocations(filtered);
        }
    };

    const truncateDescription = (text, wordLimit = 6) => {
        return text.split(' ').slice(0, wordLimit).join(' ') + '...';
    };

    useEffect(() => {
        setFilteredLocations(locations[activeTab]);
    }, [activeTab]);

    return (
        <ScrollView style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D9D9D9', borderRadius: 25, padding: 10, marginVertical: 20 }}>
                <SearchSvg />
                <TextInput
                    placeholder="Search locations"
                    placeholderTextColor="#000"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    style={{ color: '#000', flex: 1 }}
                />
                <View style={{ backgroundColor: '#FFCB03', padding: 10, borderRadius: 39, alignSelf: 'flex-start' }}>
                    <SmallBlackArrow />
                </View>
            </View>

            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>🏰 Historical Landmarks</Text>
            <ScrollView style={{ flexDirection: 'row', marginBottom: 20}} horizontal>
                <TouchableOpacity onPress={() => setActiveTab('HistoricalLandmarks')} style={{ backgroundColor: activeTab === 'HistoricalLandmarks' ? '#A6CE39' : '#444', padding: 15, borderRadius: 15, marginRight: 10 }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 39, alignSelf: 'flex-start' }}>
                        <OficialBuilding/>
                    </View>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 8 }}>Historical Landmarks</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('NaturalWonders')} style={{ backgroundColor: activeTab === 'NaturalWonders' ? '#A6CE39' : '#444', padding: 15, borderRadius: 15, marginRight: 10 }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 39, alignSelf: 'flex-start' }}>
                        <FloverSvg/>
                    </View>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 8 }}>Natural Wonders</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('ArchitecturalMarvels')} style={{ backgroundColor: activeTab === 'ArchitecturalMarvels' ? '#A6CE39' : '#444', padding: 15, borderRadius: 15, marginRight: 10 }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 39, alignSelf: 'flex-start' }}>
                        <CustleSvg/>
                    </View>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 8 }}>Architectural Marvels</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('HiddenUnusual')} style={{ backgroundColor: activeTab === 'HiddenUnusual' ? '#A6CE39' : '#444', padding: 15, borderRadius: 15 }}>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 39, alignSelf: 'flex-start' }}>
                        <HidenSvg/>
                    </View>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 8 }}>Hidden and Unusual Places</Text>
                </TouchableOpacity>
            </ScrollView>

            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Locations for you.</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {filteredLocations.map((loc, index) => (
                    <TouchableOpacity key={index} onPress={() => { navigation.navigate('LocationInfo', { loc }) }} style={{ backgroundColor: '#FFCC33', width: '48%', padding: 15, borderRadius: 15, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 39, alignSelf: 'flex-start' }}>
                                {activeTab === 'HistoricalLandmarks' && <OficialBuilding />}
                                {activeTab === 'NaturalWonders' && <FloverSvg />}
                                {activeTab === 'ArchitecturalMarvels' && <CustleSvg />}
                                {activeTab === 'HiddenUnusual' && <HidenSvg />}
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', width: '70%', marginLeft: 8 }}>{loc.name}</Text>
                        </View>
                        <Text style={{ color: 'black' }}>{truncateDescription(loc.description)}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
