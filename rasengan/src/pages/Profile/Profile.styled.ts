import { Box, styled } from '@mui/material';

export const ProfileContainer = styled(Box)(() => ({
  width: 'calc(100% - 48px)',
  height: '100%',
  maxWidth: '1440px',
  minWidth: '320px',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridColumnGap: '24px',
  margin: '0 auto',
  padding: '0 24px',

  '@media (max-width: 925px)': {
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'none',
    gridRowGap: '24px',
  }
}))
