import { Box, styled } from '@mui/material';


export const PageBox = styled(Box)(() => ({
  display: 'grid',
  width: '100%',
  height: '100%',
  maxWidth: '1440px',
  minWidth: '320px',
  margin: 'auto',
}));

export const CenteredContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto',
}))

export const ShadowedContainer = styled(Box)(() => ({
  borderRadius: '10px',
  boxShadow: '4px 4px 8px 8px rgba(34, 60, 80, 0.2)',
  backgroundColor: '#faffff',
}))