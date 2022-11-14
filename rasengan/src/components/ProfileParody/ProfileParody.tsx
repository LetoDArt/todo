import React from 'react';

import { CharacterContainer, ProfileParodyContainer } from './ProfileParody.styled';
import { ProfileParodyProps } from './ProfileParody.types';

const ProfileParody = ({ initials }: ProfileParodyProps) => (
  <ProfileParodyContainer>
    <CharacterContainer>
      {initials}
    </CharacterContainer>
  </ProfileParodyContainer>
);

export default ProfileParody;
