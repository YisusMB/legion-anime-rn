import React, { useRef } from "react";
import {View, Dimensions, StyleSheet, Image, Animated, TouchableOpacity} from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Anime } from "../utils/types";
// import { Text } from './index'
import Text from './Text'
const windowWidth = Dimensions.get('window').width

export default function AnimeCard(props: Anime) {
    const favoriteAnimation = useRef(new Animated.Value(1)).current;
    const favoriteAnimationFill = useRef(new Animated.Value(0)).current;

    const toggleFavoriteIcon = () => {
        Animated.timing(favoriteAnimation, { toValue: (favoriteAnimation as any)._value !== 1 ? 1 : 0, duration: 300, useNativeDriver: false }).start();
    }
    const toggleFavoriteIconFill = () => {
        Animated.timing(favoriteAnimationFill, { toValue: (favoriteAnimationFill as any)._value !== 1 ? 1 : 0, duration: 300, useNativeDriver: false }).start();
    }

    const toggleFavorite = () => {
        toggleFavoriteIcon()
        toggleFavoriteIconFill()
    }

    return (
        <View style={AnimeCardStyles.container}>
            <View style={AnimeCardStyles.imageContainer}>
                <Image
                    resizeMode={'cover'}
                    borderRadius={AnimeCardStyles.imageContainer.borderRadius}
                    source={{ uri: props.image }}
                    style={AnimeCardStyles.image} />
                <View style={AnimeCardStyles.animeInfoContainer}>
                    <View style={AnimeCardStyles.iconsContainer}>
                        <TouchableOpacity onPress={toggleFavorite}>
                            <Animated.View style={{ opacity: favoriteAnimation, transform: [{ scale: favoriteAnimation }] }}>
                                <MaterialIcons name="favorite-outline" style={{ fontSize: 20, color: 'red', marginRight: 10 }} />
                            </Animated.View>
                            <Animated.View style={{ opacity: favoriteAnimationFill, position: 'absolute', zIndex: favoriteAnimationFill, transform: [{ scale: favoriteAnimationFill }] }}>
                                <MaterialIcons name={'favorite'} style={{ fontSize: 20, color: 'red', marginRight: 10 }} />
                            </Animated.View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <FontAwesome5 name="eye" style={{ fontSize: 18, color: 'white', marginRight: 10 }} />
                            <Text style={{ fontSize: 15 }}>{props.viewCount.toString()}</Text>
                        </View>
                    </View>
                    <View style={AnimeCardStyles.animeDescriptionContainer}>
                        <Text numberOfLines={1}>{props.title}</Text>
                        <Text style={{ fontSize: 15 }}>Episodio: {props.lastSeenEpisode}</Text>
                    </View>
                </View>
            </View>
            <View style={AnimeCardStyles.buttonsContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {}}
                    style={AnimeCardStyles.iconActionButton}
                >
                    <FontAwesome5 name="eye-slash" style={AnimeCardStyles.iconAction} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {}}
                    style={AnimeCardStyles.iconActionButton}
                >
                    <FontAwesome5 name="play" style={AnimeCardStyles.iconAction} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {}}
                    style={AnimeCardStyles.iconActionButton}
                >
                    <FontAwesome5 name="list" style={AnimeCardStyles.iconAction} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const AnimeCardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: windowWidth * .9,
        height: 170,
        backgroundColor: 'rgb(55,46,46)',
        borderRadius: 170/4,
        marginVertical: 15,
        alignItems: "center",
    },
    imageContainer: {
        width: '82%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'cyan',
        borderRadius: 170/4.5
    },
    image: {
        flex: 1,
        width: '100%',
    },
    animeInfoContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        borderRadius: 170/4.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    iconsContainer: {
        width: 'auto',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    animeDescriptionContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    buttonsContainer: {
        width: '18%',
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'cyan',
        // borderRadius: 170/4.5,
        alignItems: 'center',
        paddingRight: 10,
    },
    iconActionButton: {
    },
    iconAction: {
        fontSize: 17,
        color: 'white',
    },
})

AnimeCard.defaultProps = {
    id: 0,
    isFavorite: false,
    viewCount: 0,
    title: '',
    image: '',
    lastSeenEpisode: 0,
    description: '',
}