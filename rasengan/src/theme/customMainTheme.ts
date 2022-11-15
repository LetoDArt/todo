import { createTheme } from '@mui/material';

import { THE_ERROR_RED, THE_MAIN_BLUE, THE_NOT_IMPORTANT_GRAY, THE_SUCCESS_GREEN } from '../consts/styles.consts';


export const customMainTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: THE_MAIN_BLUE,
        },
        root: {
          fontFamily: "'Varela Round', sans-serif",
          '&:not(.Mui-error):not(.Mui-disabled):hover': {
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
        },
        containedError: {
          backgroundColor: THE_ERROR_RED,
        },
        containedSuccess: {
          backgroundColor: THE_SUCCESS_GREEN,
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          textAlign: 'left',
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: THE_NOT_IMPORTANT_GRAY,
          },
        }
      }
    }
  }
});
