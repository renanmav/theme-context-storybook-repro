import { NavigationRouteConfigMap, NavigationSwitchProp } from '@react-navigation/core';

import Home from '../modules/common/Home';
import Detail from '../modules/common/Detail';

export const routes: NavigationRouteConfigMap<{}, NavigationSwitchProp> = {
  Home: {
    screen: Home,
    path: '',
  },
  Detail: {
    screen: Detail,
    path: 'detail',
  },
};
