import React, { useState } from 'react';
import { Button } from '@mui/material';

import { PageBox } from '../Page.styled';
import { ProfileContainer } from './Profile.styled';
import ProfileParody from '../../components/ProfileParody/ProfileParody';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { useDataChanger, useGetProfileInitials, useLogout } from './Profile.hooks';

import { UserWithoutId } from '../../types/user.types';


const Profile = () => {
  const [readonly, setReadOnly] = useState<boolean>(true);

  const logout = useLogout();
  const changeUser = useDataChanger();
  const { initials, states } = useGetProfileInitials();

  const edit = () => setReadOnly(!readonly);

  const submition = (user: UserWithoutId) => {
    edit();
    changeUser(user);
  }

  return (
    <PageBox>
      <ProfileContainer>
        <ProfileParody initials={initials}/>
        <RegistrationForm
          initialStates={states}
          readonly={readonly}
          submition={submition}
        >
          <>
            <Button
              variant='contained'
              color={!readonly ? 'error' : 'primary'}
              onClick={edit}
            >
              {readonly ? 'Change date' : 'Cancel'}
            </Button>
            <Button
              variant='contained'
              type={readonly ? 'button' : 'submit'}
              onClick={readonly ? logout : undefined}
              color={readonly ? 'error' : 'success'}
            >
              {readonly ? 'Log out' : 'Apply'}
            </Button>
          </>
        </RegistrationForm>
      </ProfileContainer>
    </PageBox>
  );
}

export default Profile;
