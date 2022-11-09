import React from 'react';

import { NavigationContainer } from './Navigation.styled';
import TopNavigationBar from './TopNavigationBar/TopNavigationBar';

import { NavigationPropTypes } from './Navigation.types';


const Navigation = ({ children }: NavigationPropTypes) => (
  <NavigationContainer>
    <TopNavigationBar/>
    {children}
  </NavigationContainer>
);

export default Navigation;
