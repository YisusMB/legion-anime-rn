import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    AnimeDetails: { animeId: number, image: string | number, lastSeenEpisode: number | null };
};

export const Stack = createStackNavigator<RootStackParamList>();

export type HomeScreenNavigationProp =  StackNavigationProp<RootStackParamList, 'Home'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'AnimeDetails'>;

export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AnimeDetails'>

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'AnimeDetails'>;
