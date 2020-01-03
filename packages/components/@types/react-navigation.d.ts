import React from 'react';
import { NavigationComponent } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';

declare module 'react-navigation' {
  /**
   * These components types are created to abstract their typing,
   * since there are different types of navigation, e.g., stack, tab, drawer, ...
   */
  export type StackComponent<ScreenProps = any, NavigationPropType = any> = React.FC<ScreenProps> &
    NavigationComponent<NavigationStackOptions, NavigationPropType>;
}
