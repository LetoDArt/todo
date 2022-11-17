import React from 'react';

import { TopNavigationBarLogoContainer, TopNavigationBarLogoLine, TopNavigationBarLogoLink } from './Logo.styled';


const Logo = () => (
  <TopNavigationBarLogoContainer>
    <TopNavigationBarLogoLink to='/'>
      <TopNavigationBarLogoLine>
        To Do<br />Or<br />Not To Do
      </TopNavigationBarLogoLine>
    </TopNavigationBarLogoLink>
  </TopNavigationBarLogoContainer>
);

export default Logo;
