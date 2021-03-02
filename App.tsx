import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/utils/navigationTypes';
import AnimeDetailsScreen from './src/screens/animeDetailsScreen';
import HomeScreen from './src/screens/homeScreen';
import {
    useFonts,
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';
import {ActivityIndicator, Button, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {MaterialIcons} from "@expo/vector-icons";
import AnimeStack from './src/components/AnimeStack';

const colors = {
    primary: 'rgb(28,23,23)',
    secondary: 'rgb(55,46,46)',
    white: 'rgb(252, 251, 251)'
}

const MyTheme = {
    dark: true,
    colors: {
        primary: colors.white,
        background: colors.primary,
        card: colors.primary,
        text: 'rgb(252, 251, 251)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const AnimeDetailsScreeOptions = {
    // headerTitle: (props: DetailsScreenNavigationProp) => <LogoTitle {...props} />,
    // headerRight: () => (
    //     <Button
    //         onPress={() => alert('This is a button!')}
    //         title="Info"
    //         color="#fff"
    //     />
    // ),
    // headerLeft: () => (
    //     <Button
    //         onPress={() => alert('This is a button!')}
    //         title="Info"
    //         color="#fff"
    //     />
    // ),
    headerBackTitleVisible: false,
    headerTitle: 'Hi!',
}

function App() {

    let [fontsLoaded] = useFonts({
        PTSans_400Regular,
        PTSans_400Regular_Italic,
        PTSans_700Bold,
        PTSans_700Bold_Italic,
    })
    if (!fontsLoaded) {
        return <ActivityIndicator/>;
    } else {
        return (
            // <NavigationContainer theme={MyTheme}>
            <>
                <StatusBar translucent={false} style="light" />
                <AnimeStack />
            </>
            //     // <Stack.Navigator>
            //         <Stack.Screen options={{ headerTitle: "Recientes", headerTitleAlign: 'left',
            //             headerLeft: () => (
            //                 <TouchableOpacity
            //                     activeOpacity={1}
            //                     style={{ marginLeft: 5 }}
            //                     onPress={() => alert('This is a button!')}
            //                 >
            //                     <MaterialIcons name="menu" style={{ color: 'white', fontSize: 30 }} />
            //                 </TouchableOpacity>
            //             ),
            //             headerRight: () => (
            //                 <TouchableOpacity
            //                     activeOpacity={1}
            //                     style={{ marginRight: 5 }}
            //                     onPress={() => alert('This is a button!')}
            //                 >
            //                     <MaterialIcons name="notifications" style={{ color: 'white', fontSize: 30 }} />
            //                 </TouchableOpacity>
            //             ),
            //         }} name="Home" component={AnimeStack}/>
            //         {/*<Stack.Screen name="AnimeDetails" options={AnimeDetailsScreeOptions}*/}
            //         {/*              component={AnimeDetailsScreen}/>*/}
            //     {/*</Stack.Navigator>*/}
            // {/*// </NavigationContainer>*/}
        );
    }
}

export default App