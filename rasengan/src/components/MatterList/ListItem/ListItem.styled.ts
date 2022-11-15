import { Box, Checkbox, styled } from '@mui/material';

import { THE_MAIN_BLUE, THE_NOT_IMPORTANT_GRAY } from '../../../consts/styles.consts';


export const ListItemContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  margin: '8px 8px 24px 8px',
  padding: '12px',
  boxShadow: '4px 4px 8px 8px rgba(34, 60, 80, 0.2)',
  borderRadius: '7px',
}));

export const CheckBoxContainer = styled(Box)(() => ({
  display: 'flex',
}));

export const CheckBoxStyled = styled(Checkbox)(() => ({
  margin: 'auto 0',
}));

export const MatterContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  justifyContent: 'space-between'
}));

export const MatterInfo = styled(Box)(() => ({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridRowGap: '16px',
}));

export const MatterTitle = styled('h3')<{ checked: boolean}>(({ checked }) => ({
  margin: 0,
  fontFamily: '"Kalam", cursive',
  fontSize: '20px',
  color: checked ? THE_NOT_IMPORTANT_GRAY : THE_MAIN_BLUE,
}));

export const MatterDate = styled(Box)(() => ({
  textAlign: 'left',
  color: THE_NOT_IMPORTANT_GRAY,
}));

export const MatterDescription = styled(Box)<{ checked: boolean}>(({ checked }) => ({
  textAlign: 'left',
  verticalAlign: 'top',
  maxWidth: '400px',
  fontFamily: "'Varela Round', sans-serif",
  lineHeight: '30px',
  marginBottom: '12px',
  color: checked ? THE_NOT_IMPORTANT_GRAY : THE_MAIN_BLUE,
}));

export const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
