import { Box, styled } from '@mui/material';
import { THE_SECONDARY_GRAY } from '../../consts/styles.consts';


export const ProfileParodyContainer = styled(Box)(() => ({
  width: 320,
  height: 320,
  backgroundColor: THE_SECONDARY_GRAY,
  borderRadius: '50%',
  display: 'grid',
}));

export const CharacterContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto',
  fontFamily: "'Kalam', cursive",
  fontSize: '216px',
  lineHeight: '216px'
}));
