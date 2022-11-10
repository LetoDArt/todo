import React from 'react';

import { LinksContainer, NavigationBarContainer, OneLink } from './NavigationBar.styled';

import { LINKS } from './NavigationBar.consts';


const NavigationBar = () => (
  <NavigationBarContainer>
    <LinksContainer>
      {LINKS.map((link) => (
        <OneLink key={link?.id} to={link?.link}>{link?.label}</OneLink>
      ))}
    </LinksContainer>
  </NavigationBarContainer>
);

export default NavigationBar;