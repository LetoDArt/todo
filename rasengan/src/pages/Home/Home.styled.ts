import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';


export const HomeContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto',
}))

export const SloganContainer = styled(Box)(() => ({
  transform: 'rotate(-15deg)',
  marginBottom: '48px',
}))

export const SloganLine = styled(Box)(() => ({
  color: '#42aaff',
  fontSize: '72px',
  fontFamily: "'Dancing Script', cursive",
}))

export const GetStartedButton = styled(Link)(() => ({
  display: 'grid',
  margin: 'auto',
  padding: '15px 30px',
  textDecoration: 'none',
  backgroundColor: '#42aaff',
  color: '#fff',
  borderRadius: '7px',

  '&:hover': {
    opacity: '.5',
  }
}))

