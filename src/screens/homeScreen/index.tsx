import {Button, FlatList, SafeAreaView, View} from "react-native";
import * as React from "react";
import { AnimeCard, Text } from '../../components'
import {StackNavigationProp} from "@react-navigation/stack";
import { HomeScreenNavigationProp } from "../../utils/navigationTypes";
import { Anime } from "../../utils/types";

type HomeProps = {
    navigation: HomeScreenNavigationProp;
};

const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const AnimeList: Anime[] = [
    {id: '1', lastSeenEpisode: getRandomNumber(50),  description: 'siempre sale algo asi', isFavorite: false, viewCount: getRandomNumber(10000), title: 'Attack on Titan', image: 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.0-9/136752539_2175377755930245_1538059469488008542_o.jpg?_nc_cat=104&ccb=3&_nc_sid=e3f864&_nc_eui2=AeHFqESKVPptXze5O_JK97pPMfQPdn451C0x9A92fjnULckDTcH5JvSYAtuXwF7NaCpXkf5tuINT7Lmrp0pRd4NV&_nc_ohc=b_i4qWQUbosAX_BhUAm&_nc_ht=scontent.fmex7-1.fna&oh=5a9b8f7390374cd47da1695266109179&oe=604A8F68' },
    {id: '2', lastSeenEpisode: getRandomNumber(50),  description: 'siempre sale algo asi', isFavorite: false, viewCount: getRandomNumber(10000), title: 'Demon Slayer', image: 'https://i.imgur.com/9jqLUMo.jpg' },
    {id: '3', lastSeenEpisode: getRandomNumber(50),  description: 'siempre sale algo asi', isFavorite: false, viewCount: getRandomNumber(10000), title: 'Seven Deadly Sins', image: 'https://comic-watch.com/wp-content/uploads/2019/04/seven-deadly-sins-season-3-banner.jpg' },
    {id: '4', lastSeenEpisode: getRandomNumber(50),  description: 'siempre sale algo asi', isFavorite: false, viewCount: getRandomNumber(10000), title: 'My Hero Academia', image: 'https://i.pinimg.com/originals/b7/2c/af/b72cafa2569e374cb225546460ca333c.jpg' },
]

export default function HomeScreen({ navigation }: HomeProps) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
                data={AnimeList}
                renderItem={({ item }: { item: Anime }) => <AnimeCard {...item} navigation={navigation} />} />
        </SafeAreaView>
    );
}