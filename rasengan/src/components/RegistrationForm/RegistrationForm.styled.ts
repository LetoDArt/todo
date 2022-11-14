import { Box, Button, styled } from '@mui/material';

export const RegistrationContainer = styled(Box)(() => ({
  width: '450px',
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1fr 1fr',
  gridRowGap: '24px',
  gridColumnGap: '24px',

  '@media (max-width: 650px)': {
    gridTemplateColumns: 'none',
    width: '280px',
  }
}))

export const RegistrationButton = styled(Button)(() => ({
  '@media (min-width: 651px)': {
    gridColumn: 'span 2',
  }
}))
