import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: ${p => (p.theme.themeName === 'light' ? p.theme.lightGrey : p.theme.softPurple)};
`;

const HeaderText = styled.Text`
  font-size: 36px;
  font-weight: 600;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeaderText>This is RN Web monorepo</HeaderText>
    </Wrapper>
  );
};

export default Header;
