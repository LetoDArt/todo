import React from 'react';

import { NavigationContainer } from './Navigation.styled';

import { NavigationPropTypes } from './Navigation.types';
import TopNavigationBar from './TopNavigationBar/TopNavigationBar';

const Navigation = ({ children }: NavigationPropTypes) => (
  <NavigationContainer>
    <TopNavigationBar/>
    {children}
  </NavigationContainer>
);

export default Navigation;