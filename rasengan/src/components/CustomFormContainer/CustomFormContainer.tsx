import React from 'react';

import { CustomForm, CustomFormTitle } from './CustomFormContainer.styled';

import { CustomFormContainerProps } from './CustomFormContainer.types';


const CustomFormContainer = ({ title, children }: CustomFormContainerProps) => (
  <CustomForm>
    <CustomFormTitle>{title}</CustomFormTitle>
    {children}
  </CustomForm>
);

export default CustomFormContainer;
