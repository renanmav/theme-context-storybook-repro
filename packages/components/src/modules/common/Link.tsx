import React from 'react';
import { Platform, Text, Button } from 'react-native';
import { withNavigation, NavigationScreenConfigProps } from 'react-navigation';
import { Link as WebLink } from '@react-navigation/web';

interface LinkProps {
  title: string;
  routeName: string;
  params?: {};
}

const LinkWeb: React.FC<LinkProps> = ({ title, routeName, params }) => {
  return (
    <WebLink routeName={routeName} params={params}>
      <Text>{title}</Text>
    </WebLink>
  );
};

const LinkMobile: React.FC<LinkProps & NavigationScreenConfigProps<any>> = ({
  navigation,
  title,
  params,
  routeName,
}) => {
  return <Button title={title} onPress={() => navigation.navigate({ routeName, params })} />;
};

const LinkComponent = Platform.OS === 'web' ? LinkWeb : (withNavigation(LinkMobile) as React.FC<LinkProps>);

export default LinkComponent;
