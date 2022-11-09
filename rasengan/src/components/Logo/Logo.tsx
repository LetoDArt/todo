import React from 'react';

import { TopNavigationBarLogoContainer, TopNavigationBarLogoLine, TopNavigationBarLogoLink } from './Logo.styled';


const Logo = () => (
  <TopNavigationBarLogoContainer>
    <TopNavigationBarLogoLink to='/'>
      <TopNavigationBarLogoLine>
        To Do
      </TopNavigationBarLogoLine>
      <TopNavigationBarLogoLine>
        or
      </TopNavigationBarLogoLine>
      <TopNavigationBarLogoLine>
        Not To Do
      </TopNavigationBarLogoLine>
    </TopNavigationBarLogoLink>
  </TopNavigationBarLogoContainer>
);

export default Logo;