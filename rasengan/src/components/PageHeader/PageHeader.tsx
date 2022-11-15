import React from 'react';
import { Box, Button } from '@mui/material';

import { ButtonContainer, HeaderItself, PageHeaderContainer } from './PageHeader.styled';

import { PageHeaderProps } from './PageHeader.types';


const PageHeader = ({ title, buttonText, buttonFunction }: PageHeaderProps) => (
    <PageHeaderContainer>
      <Box>
        <HeaderItself>{title}</HeaderItself>
      </Box>
      <ButtonContainer>
        <Button variant='contained' onClick={buttonFunction}>{buttonText}</Button>
      </ButtonContainer>
    </PageHeaderContainer>
  );

export default PageHeader;
