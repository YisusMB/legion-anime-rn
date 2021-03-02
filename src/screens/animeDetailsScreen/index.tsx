import { Text, View, Image, Dimensions } from "react-native";
import * as React from "react";
import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "../../utils/navigationTypes";
import {SharedElement} from "react-navigation-shared-element";
import { TouchableOpacity } from "react-native";

type DetailsProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
}

// @ts-ignore
function AnimeDetailsScreen({ navigation }) {
    const item = navigation.getParam('item')
    const { width, height } = Dimensions.get('window')
    console.log(item, 'item ?')
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width, height: 200, backgroundColor: 'red' }}>
                <View style={{ flex: 1 }}>
                    <Text>
                        Regresar
                    </Text>
                </View>
            </TouchableOpacity>
            <Text>Details Screen</Text>
            <View>
                <SharedElement style={{ flex: 1 }} id={item.id}>
                    {/*<View style={{ position: 'absolute', flex: 1, zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)' }}/>*/}
                    <Image style={{ width: width, height: 200 }} source={{ uri: item.image }} />
                </SharedElement>
            </View>
            {/*<Text>{JSON.stringify(route.params)}</Text>*/}
        </View>
    );
}

// @ts-ignore
AnimeDetailsScreen.sharedElements = navigation => {
    const item = navigation.getParam('item')
    return [item.id]
}

export default AnimeDetailsScreen