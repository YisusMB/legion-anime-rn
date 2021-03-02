import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import AnimeDetailsScreen from "../screens/animeDetailsScreen";
import HomeScreen from "../screens/homeScreen";

const stackNavigator = createSharedElementStackNavigator({
    Home: HomeScreen,
    AnimeDetailsScreen,
},{
    defaultNavigationOptions: {
      cardStyleInterpolator: ({ current: { progress } }) => {
          return { cardStyle: { opacity: progress } };
      },
      cardStyle: {
        backgroundColor: 'transparent',
      }
    },
    initialRouteName: 'Home',
    headerMode: 'none',
})

export default createAppContainer(stackNavigator)