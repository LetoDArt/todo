import React from 'react';
import { LinksContainer, NavigationBarContainer, OneLink } from './NavigationBar.styled';


const NavigationBar = () => (
  <NavigationBarContainer>
    <LinksContainer>
      <OneLink to='/login'>Log In</OneLink>
      <OneLink to='/signup'>Sign Up</OneLink>
    </LinksContainer>
  </NavigationBarContainer>
);

export default NavigationBar;