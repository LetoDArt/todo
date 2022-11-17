import { Box, styled } from '@mui/material';


export const TodoContainer = styled(Box)(() => ({
  width: 'calc(100% - 48px)',
  height: '100%',
  maxWidth: '1440px',
  minWidth: '320px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridRowGap: '24px',
  margin: '0 auto',
  padding: '0 24px'
}))
