import { Box, styled } from '@mui/material';

import { THE_MAIN_BLUE } from '../../consts/styles.consts';


export const ModalContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#faffff',
  width: '300px',
  padding: '24px',
  borderRadius: '10px',

  '&:focus-visible': {
    outline: 'none',
  }
}));

export const ModalTitle = styled('h1')(() => ({
  margin: 0,
  fontFamily: "'Kalam', cursive",
  fontWeight: 700,
  fontSize: '36px',
  color: THE_MAIN_BLUE,
  textAlign: 'center',
}));

export const ModalForm = styled('form')(() => ({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridRowGap: '24px',
}));

export const ButtonContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  justifyContent: 'space-between',
}));
