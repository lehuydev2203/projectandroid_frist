import { createStackNavigator } from 'react-navigation';
import { Flat } from './ScrollView';

export const Flat1 = createStackNavigator({
  Home: {
    screen: Flat,
  },
}, {
    initialRouteKey: "Home",
    mode: 'modal',
    headerMode: 'none',
  });