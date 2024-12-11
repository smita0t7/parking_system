// src/theme/playfulRetroResponsive.js
import { createTheme } from '@mui/material/styles';

const retroColors = {
  base: '#fdf4dc',
  surface: '#ffefc3',
  overlay: '#ffe29b',
  muted: '#d4b483',
  subtle: '#9c6644',
  text: '#332e3c',
  love: '#c23b22',
  gold: '#d9a441',
  amber: '#f6b042',
  teal: '#49beb7',
  pink: '#f178b6',
  highlightLow: '#fff7e0',
  highlightMed: '#ffebc0',
  highlightHigh: '#ffd994',
};

const retroTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: retroColors.base,
      paper: retroColors.surface,
    },
    primary: {
      main: retroColors.teal,
    },
    secondary: {
      main: retroColors.pink,
    },
    error: {
      main: retroColors.love,
    },
    warning: {
      main: retroColors.gold,
    },
    info: {
      main: retroColors.amber,
    },
    success: {
      main: retroColors.teal,
    },
    text: {
      primary: retroColors.text,
      secondary: retroColors.subtle,
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: retroColors.overlay,
          color: retroColors.text,
          borderBottom: `4px solid ${retroColors.teal}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 700,
          borderRadius: '10px',
          padding: '8px 16px',
          background: `linear-gradient(45deg, ${retroColors.teal}, ${retroColors.pink})`,
          color: '#fff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            background: `linear-gradient(45deg, ${retroColors.pink}, ${retroColors.teal})`,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto+Mono&display=swap');

        body {
          margin: 0;
          padding: 0;
          background-color: ${retroColors.base};
          color: ${retroColors.text};
          font-family: 'Poppins', sans-serif;
          line-height: 1.5;
        }
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default retroTheme;

