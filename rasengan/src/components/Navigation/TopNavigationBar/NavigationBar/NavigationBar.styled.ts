import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';


export const NavigationBarContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto 0',
  width: '100%',
}))

export const LinksContainer = styled(Box)(() => ({
  display: 'inline',
  margin: 0,
  padding: 0,

}))

export const OneLink = styled(Link)(() => ({
  display: 'inline',
  marginRight: '12px',
  minWidth: '50px',
  color: '#fff',
  textDecoration: 'none',
  padding: '5px 10px',
  borderRadius: '5px',
  fontFamily: "'Kalam', cursive",

  '&:hover': {
    backgroundColor: '#fff',
    color: '#42aaff',
  },

  '&:last-child': {
    margin: 0,
  }
}))
