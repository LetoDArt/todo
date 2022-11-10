import React from 'react';

import { CenteredContainer, PageBox, ShadowedContainer } from '../Page.styled';
import CustomFormContainer from '../../components/CustomFormContainer/CustomFormContainer';


const Registration = () => (
  <PageBox>
    <CenteredContainer>
      <ShadowedContainer>
        <CustomFormContainer title='Sign Up'>
          <div>Registration</div>
        </CustomFormContainer>
      </ShadowedContainer>
    </CenteredContainer>
  </PageBox>
);

export default Registration;