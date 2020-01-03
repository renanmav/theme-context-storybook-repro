import { Platform } from 'react-native';
import { createAppContainer, NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBrowserApp } from '@react-navigation/web';

import { routes } from './Routes';

const MainNavigator = createStackNavigator(routes);

let Router: NavigationContainer;

if (Platform.OS !== 'web') {
  Router = createAppContainer(MainNavigator);
} else {
  Router = createBrowserApp(MainNavigator);
}

export default Router;
