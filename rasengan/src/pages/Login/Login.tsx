import React from 'react';

import { PageBox } from '../Page.styled';
import { LoginContainer } from './Login.styled';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => (
  <PageBox>
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  </PageBox>
);

export default Login;