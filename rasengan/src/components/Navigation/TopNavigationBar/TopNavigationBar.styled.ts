import { Box, styled } from '@mui/material';

export const TopNavigationBarContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto',
  width: '100%',
  height: '50px',
  maxWidth: '1440px',
  minWidth: '320px',
}))

export const TopNavigationBarContent = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
}))

