import { Box, styled } from '@mui/material';

import { THE_MAIN_BLUE } from '../../../consts/consts';

export const TopNavigationBarContainer = styled(Box)(() => ({
  display: 'grid',
  width: '100%',
  height: '50px',
  backgroundColor: THE_MAIN_BLUE,
}))

export const TopNavigationBarContent = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  width: '100%',
  height: '100%',
  maxWidth: '1440px',
  minWidth: '320px',
  margin: 'auto',
  justifyContent: 'space-between',
}))

