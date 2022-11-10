import React from 'react';
import { Button, TextField } from '@mui/material';

import { InputContainer } from './Login.styled';
import { CenteredContainer, PageBox, ShadowedContainer } from '../Page.styled';
import CustomFormContainer from '../../components/CustomFormContainer/CustomFormContainer';


const Login = () => (
  <PageBox>
    <CenteredContainer>
      <ShadowedContainer>
        <CustomFormContainer title='Log In'>
          <InputContainer>
            <TextField variant='outlined' label='Email' />
            <TextField variant='outlined' label='Password' />
            <Button type='submit' variant='contained'>Login</Button>
          </InputContainer>
        </CustomFormContainer>
      </ShadowedContainer>
    </CenteredContainer>
  </PageBox>
);

export default Login;