import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native';

// Here goes all screen props for stack navigator
type RootStackParamList = {
    Home: undefined;
    Details: { animeId: number, image: string | number, lastSeenEpisode: number | null };
};

type HomeScreenNavigationProp =  StackNavigationProp<RootStackParamList, 'Home'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;


type HomeProps = {
    navigation: HomeScreenNavigationProp;
};

type DetailsProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
}

function HomeScreen({ navigation }: HomeProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', { animeId: 1, image: 'hi', lastSeenEpisode: null })}
            />
        </View>
    );
}

function DetailsScreen({ navigation, route }: DetailsProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{JSON.stringify(route.params)}</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;