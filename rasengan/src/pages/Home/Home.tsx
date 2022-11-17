import React from 'react';

import { CenteredContainer, PageBox } from '../Page.styled';
import { GetStartedButton, SloganContainer, SloganLine } from './Home.styled';

const Home = () => (
  <PageBox>
    <CenteredContainer>
      <SloganContainer>
        <SloganLine>Start<br/> planning your life<br/> with us</SloganLine>
      </SloganContainer>
      <GetStartedButton to='/login'>Get Started</GetStartedButton>
    </CenteredContainer>
  </PageBox>
);

export default Home;