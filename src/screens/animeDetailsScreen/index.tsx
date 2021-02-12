import { Text, View } from "react-native";
import * as React from "react";
import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "../../utils/navigationTypes";

type DetailsProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
}

export default function AnimeDetailsScreen({ route }: DetailsProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{JSON.stringify(route.params)}</Text>
        </View>
    );
}