import React, { useState } from 'react';

import { Button } from '@mui/material';
import { PageBox } from '../Page.styled';
import { ProfileContainer } from './Profile.styled';
import ProfileParody from '../../components/ProfileParody/ProfileParody';

import { useGetProfileInitials, useLogout } from './Profile.hooks';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';


const Profile = () => {
  const [readonly, setReadOnly] = useState<boolean>(true);

  const logout = useLogout();
  const { initials, states } = useGetProfileInitials();

  const edit = () => setReadOnly(!readonly);

  return (
    <PageBox>
      <ProfileContainer>
        <ProfileParody initials={initials}/>
        <RegistrationForm
          initialStates={states}
          readonly={readonly}
          submition={(user) => console.log(user)}
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
