import React from 'react';

import { CustomForm, CustomFormTitle } from './CustomFormContainer.styled';

import { CustomFormContainerProps } from './CustomFormContainer.types';


const CustomFormContainer = ({ title, submit, children }: CustomFormContainerProps) => (
  <CustomForm onSubmit={submit}>
    <CustomFormTitle>{title}</CustomFormTitle>
    {children}
  </CustomForm>
);

export default CustomFormContainer;
