import { Box, styled } from '@mui/material';


export const PageHeaderContainer = styled(Box)(() => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  justifyContent: 'space-between',

  '@media (max-width: 650px)': {
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: 'none',
    justifyContent: 'unset',
    gridRowGap: '24px',
  }
}))

export const HeaderItself = styled('h1')(() => ({
  fontFamily: "'Kalam', cursive",
  margin: 0,
}))

export const ButtonContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto 0 auto auto'
}))
