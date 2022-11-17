import React from 'react';

import { RegistrationButton } from './Registration.styled';
import { CenteredContainer, PageBox } from '../Page.styled';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { useRegisterRequester } from '../hooks';

import { registrationFormikInitialValues } from './Registration.consts';


const Registration = () => {
  const register = useRegisterRequester();

  return (
    <PageBox>
      <CenteredContainer>
        <RegistrationForm
          initialStates={registrationFormikInitialValues}
          submition={register}
          title='Sign Up'
        >
          <RegistrationButton type='submit' variant='contained'>Sign up</RegistrationButton>
        </RegistrationForm>
      </CenteredContainer>
    </PageBox>
  );
}

export default Registration;
