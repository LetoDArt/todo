import { createTheme } from '@mui/material';

import { THE_MAIN_BLUE } from '../consts/styles.consts';


export const customMainTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: THE_MAIN_BLUE,
        },
        root: {
          fontFamily: "'Varela Round', sans-serif",
          '&:not(.Mui-error):hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: THE_MAIN_BLUE,
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: THE_MAIN_BLUE,
            },
          },
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: THE_MAIN_BLUE,
          fontFamily: "'Kalam',cursive",
          '&.Mui-focused': {
            color: THE_MAIN_BLUE,
          },
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: THE_MAIN_BLUE,
          fontFamily: "'Kalam',cursive",
          fontSize: '16px',
        },
        contained: {
          textTransform: 'capitalize',
        }
      }
    }
  }
});