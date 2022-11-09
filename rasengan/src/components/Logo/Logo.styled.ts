import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const TopNavigationBarLogoContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto 0',
  width: '100px',
}))

export const TopNavigationBarLogoLink = styled(Link)(() => ({
  display: 'grid',
  textDecoration: 'none',
  color: '#fff',
  lineHeight: '15px',
  fontSize: '13px',
  fontFamily: "'Dancing Script', cursive",
}))

export const TopNavigationBarLogoLine = styled(Box)(() => ({
  display: 'grid',
  textDecoration: 'none',
  fontFamily: "'Dancing Script', cursive",
}))
