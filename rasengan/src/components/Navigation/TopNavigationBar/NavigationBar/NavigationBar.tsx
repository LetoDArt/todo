import React from 'react';

import { LinksContainer, NavigationBarContainer, OneLink } from './NavigationBar.styled';

import { useNavigationLinks } from './NavigationBar.hooks';


const NavigationBar = () => {
  const links = useNavigationLinks();

  return (
    <NavigationBarContainer>
      <LinksContainer>
        {links.map((link) => (
          <OneLink key={link?.id} to={link?.link}>{link?.label}</OneLink>
        ))}
      </LinksContainer>
    </NavigationBarContainer>
  );
}

export default NavigationBar;
