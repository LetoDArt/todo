import { Box, Button, styled } from '@mui/material';


export const MatterListContainer = styled(Box)(() => ({
  width: 'calc(100% - 48px)',
  height: 'calc(100% - 48px)',
  display: 'grid',
  padding: '24px',
  borderRadius: '10px',
  boxShadow: '4px 4px 8px 8px rgba(34, 60, 80, 0.2)',
  backgroundColor: '#faffff',
  gridTemplateRows: 'auto 1fr',
  gridRowGap: '24px',
  overflow: 'auto',
}));

export const HideButtonContainer = styled(Box)(() => ({
  width: '100%',
  display: 'grid',
}));

export const ButtonLeft = styled(Button)(() => ({
  display: 'grid',
  margin: 'auto 0 auto auto'
}));

export const ListContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  overflowY: 'auto',
}));
