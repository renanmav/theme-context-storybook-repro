import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, Button } from 'react-native';
import { StackComponent, Themed, useTheme } from 'react-navigation';

import { ThemeConstants, ThemeContext } from '../../utils/Theme';

import Link from './Link';
import Header from './Header';

const ScrollView = styled.ScrollView`
  background-color: ${p => (p.theme.themeName === 'light' ? p.theme.white : p.theme.primary)};
  height: 200%;
`;
const Body = styled.View`
  background-color: ${p => (p.theme.themeName === 'light' ? p.theme.white : p.theme.primary)};
`;
const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0 24px;
`;
const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${p => p.theme.almostBlack};
`;
const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${p => p.theme.grey};
`;
const Highlight = styled.Text`
  font-weight: 700;
`;

const Home: StackComponent = () => {
  return (
    <>
      <Themed.StatusBar />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionTitle>Code sharing using Monorepo</SectionTitle>
              <SectionDescription>
                Edit <Highlight>packages/components/App.tsx</Highlight> to change this screen and then come back to see
                your edits (in the phone or the browser).
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Web support via react-native-web</SectionTitle>
              <SectionDescription>
                Run <Highlight>yarn web</Highlight> to open this app in the browser.
              </SectionDescription>
              <SectionDescription>
                It will share the same code from mobile, unless you create platform-specific files using the{' '}
                <Highlight>.web.tsx</Highlight> extension (also supports <Highlight>.android</Highlight>,{' '}
                <Highlight>.ios</Highlight>, <Highlight>.native</Highlight>, etc).
              </SectionDescription>
              <Link routeName="Detail" title="Go to Details" />
            </SectionContainer>
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ChangeThemeButton: React.FC = () => {
  const theme = useTheme();
  const colors = ThemeConstants[theme];
  const { themeName, changeTheme } = useContext(ThemeContext);

  return (
    <Button
      title={themeName === 'light' ? 'lights off' : 'lights on'}
      onPress={() => changeTheme()}
      color={colors.label}
    />
  );
};

Home.navigationOptions = () => ({
  headerTitle: 'Home',
  headerLeft: ChangeThemeButton,
});

export default Home;
