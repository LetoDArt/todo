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
  marginRight: '24px',
  minWidth: '50px',
  color: '#42aaff',
  textDecoration: 'none',
  '&:last-child': {
    margin: 0,
  }
}))

export const InfoContainer = styled(Box)(() => ({
  display: 'grid',
  margin: 'auto 0',
  width: '100%',
  gridTemplateColumns: 'auto auto',
  justifyContent: 'space-between',
}))
