// src/theme/newFreshTheme.js
import { createTheme } from '@mui/material/styles';

const modernColors = {
  base: '#f4f4f9',
  surface: '#c0c0d0',
  overlay: '#c0c0d0',
  muted: '#9090a0',
  subtle: '#606070',
  text: '#303030',
  primary: '#005f73',
  secondary: '#0a9396',
  error: '#ae2012',
  warning: '#bb3e03',
  info: '#3a86ff',
  success: '#3d5a80',
  highlight: '#edf2f4',
};

const newFreshTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: modernColors.base,
      paper: modernColors.surface,
    },
    primary: {
      main: modernColors.primary,
    },
    secondary: {
      main: modernColors.secondary,
    },
    error: {
      main: modernColors.error,
    },
    warning: {
      main: modernColors.warning,
    },
    info: {
      main: modernColors.info,
    },
    success: {
      main: modernColors.success,
    },
    text: {
      primary: modernColors.text,
      secondary: modernColors.subtle,
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
    h1: {
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: modernColors.overlay,
          color: modernColors.text,
          borderBottom: `3px solid ${modernColors.primary}`,
        },
      },
    },
    MuiFooter: {
      styleOverrides: {
        root: {
          backgroundColor: modernColors.overlay,
          color: modernColors.text,
          borderTop: `3px solid ${modernColors.primary}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 600,
          borderRadius: '6px',
          padding: '10px 18px',
          backgroundColor: modernColors.primary,
          color: '#ffffff',
          '&:hover': {
            backgroundColor: modernColors.secondary,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');

        body {
          margin: 0;
          padding: 0;
          background-color: ${modernColors.base};
          color: ${modernColors.text};
          font-family: 'Nunito', sans-serif;
          line-height: 1.8;
        }
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '24px',
          borderRadius: '10px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
});

export default newFreshTheme;
