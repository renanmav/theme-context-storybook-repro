import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, Button } from 'react-native';
import { NavigationScreenProp, StackComponent } from 'react-navigation';

const ContentWrapper = styled.View`
  padding: 24px;
`;
const Title = styled.Text`
  font-size: ${p => p.theme.heading3Size}px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${p => p.theme.almostBlack};
`;
const Content = styled.Text`
  font-size: ${p => p.theme.body1Size}px;
  line-height: ${p => p.theme.body1Size * 1.2}px;
  text-align: justify;
  color: ${p => p.theme.darkGrey};
  margin-bottom: 20px;
`;

interface DetailProps {
  navigation: NavigationScreenProp<any, any>;
}

const Detail: StackComponent<DetailProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ContentWrapper>
        <Title>Detail</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tempus elit. Maecenas elementum justo
          ut leo euismod, at iaculis ligula imperdiet. Nulla consequat ipsum non metus rhoncus elementum. Curabitur eu
          enim vel justo finibus tristique eget quis tellus. Nunc congue sed quam in lacinia. Vivamus fringilla
          elementum ante, ultrices feugiat velit vestibulum sit amet. Fusce tempor, ante et vulputate ullamcorper, risus
          quam porta massa, vehicula volutpat mauris nunc id nisl. Sed tortor magna, vehicula ac tortor ut, commodo
          condimentum velit. Donec nec diam id nisl egestas congue. Vestibulum ac lacus accumsan, venenatis orci vel,
          ultricies enim. Proin vitae elementum dui.
        </Content>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ContentWrapper>
    </SafeAreaView>
  );
};

Detail.navigationOptions = {
  header: null,
};

export default Detail;
