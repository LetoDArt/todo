import { styled } from '@mui/material';
import { THE_MAIN_BLUE } from '../../consts/styles.consts';


export const CustomForm = styled('form')(() => ({
  display: 'grid',
  padding: '24px',
  gridTemplateRows: 'auto auto',
  gridRowGap: '24px',
}))

export const CustomFormTitle = styled('h3')(() => ({
  margin: 0,
  fontFamily: "'Kalam', cursive",
  fontWeight: 700,
  fontSize: '36px',
  color: THE_MAIN_BLUE,
}))
