import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationBar from './NavigationBar/NavigationBar';
import { TopNavigationBarContainer, TopNavigationBarContent, } from './TopNavigationBar.styled';

const TopNavigationBar = () => (
  <TopNavigationBarContainer>
    <TopNavigationBarContent>
      <Logo/>
      <NavigationBar/>
    </TopNavigationBarContent>
  </TopNavigationBarContainer>
);

export default TopNavigationBar;