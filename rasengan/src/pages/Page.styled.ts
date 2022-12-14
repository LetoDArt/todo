import { Box, styled } from '@mui/material';


export const PageBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: 'calc(100% - 64px)',
  margin: 'auto',
  padding: '32px 0',
  overflowY: 'auto',
}));

export const CenteredContainer = styled(Box)(() => ({
  maxWidth: '1440px',
  minWidth: '320px',
  display: 'grid',
  margin: 'auto',
}))

export const ShadowedContainer = styled(Box)(() => ({
  margin: '0 auto auto 0',
  borderRadius: '10px',
  boxShadow: '4px 4px 8px 8px rgba(34, 60, 80, 0.2)',
  backgroundColor: '#faffff',
}))
