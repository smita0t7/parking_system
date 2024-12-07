// src/theme/playfulRetro.js
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
    fontFamily: '"Comic Sans MS", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Permanent Marker", cursive',
    },
    h2: {
      fontFamily: '"Permanent Marker", cursive',
    },
    h3: {
      fontFamily: '"Permanent Marker", cursive',
    },
    h4: {
      fontFamily: '"Permanent Marker", cursive',
    },
    h5: {
      fontFamily: '"Permanent Marker", cursive',
    },
    h6: {
      fontFamily: '"Permanent Marker", cursive',
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
    MuiFooter: {
      styleOverrides: {
        root: {
          backgroundColor: retroColors.overlay,
          color: retroColors.text,
          borderTop: `4px solid ${retroColors.teal}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '30px',
          padding: '10px 20px',
          background: `linear-gradient(90deg, ${retroColors.teal}, ${retroColors.pink})`,
          color: '#fff',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            background: `linear-gradient(90deg, ${retroColors.pink}, ${retroColors.teal})`,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Comic+Sans+MS&display=swap');
      `,
    },
  },
});

export default retroTheme;
