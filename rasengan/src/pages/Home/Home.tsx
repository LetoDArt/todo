import React from 'react';

import { PageBox } from '../Page.styled';
import { GetStartedButton, HomeContainer, SloganContainer, SloganLine } from './Home.styled';

const Home = () => (
  <PageBox>
    <HomeContainer>
      <SloganContainer>
        <SloganLine>Start<br/> planning your life<br/> with us</SloganLine>
      </SloganContainer>
      <GetStartedButton to='/login'>Get Started</GetStartedButton>
    </HomeContainer>
  </PageBox>
);

export default Home;