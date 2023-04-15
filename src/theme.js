import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#4ee1a0',
    },
  },
  typography: {
    h1: {
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
    },
    h2: {
      fontFamily: 'Space Grotesk',
    },
    fontFamily: 'Space Grotesk',
  },
});