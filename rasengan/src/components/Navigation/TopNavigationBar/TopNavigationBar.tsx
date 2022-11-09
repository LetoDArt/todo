import React from 'react';
import { TopNavigationBarContainer, TopNavigationBarContent, } from './TopNavigationBar.styled';

import Logo from '../../Logo/Logo';
import NavigationBar from './NavigationBar/NavigationBar';

const TopNavigationBar = () => (
  <TopNavigationBarContainer>
    <TopNavigationBarContent>
      <Logo/>
      <NavigationBar/>
    </TopNavigationBarContent>
  </TopNavigationBarContainer>
);

export default TopNavigationBar;