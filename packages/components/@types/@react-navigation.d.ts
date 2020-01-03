declare module '@react-navigation/core' {
  export * from 'react-navigation';
}

declare module '@react-navigation/web' {
  export function createBrowserApp(
    Component: NavigationNavigator<{}, NavigationProp<NavigationState>>,
  ): NavigationContainer;

  export const Link: React.FC<{
    params?: {};
    routeName: string;
  }>;
}
