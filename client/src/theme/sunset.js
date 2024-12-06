// src/theme/sunset.js
import { createTheme } from '@mui/material/styles';

const sunsetColors = {
  base: '#2d1e2f',
  surface: '#3b273e',
  overlay: '#4a3150',
  muted: '#85727c',
  subtle: '#b39ba4',
  text: '#f4e4f7',
  love: '#f25563',
  gold: '#f7a856',
  amber: '#f9d276',
  plum: '#9d77cf',
  violet: '#c79bf3',
  highlightLow: '#36263a',
  highlightMed: '#52384e',
  highlightHigh: '#6d4d63',
};

const sunsetTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: sunsetColors.base,
      paper: sunsetColors.surface,
    },
    primary: {
      main: sunsetColors.violet,
    },
    secondary: {
      main: sunsetColors.plum,
    },
    error: {
      main: sunsetColors.love,
    },
    warning: {
      main: sunsetColors.gold,
    },
    info: {
      main: sunsetColors.amber,
    },
    success: {
      main: sunsetColors.plum,
    },
    text: {
      primary: sunsetColors.text,
      secondary: sunsetColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h2: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h3: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h4: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h5: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h6: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: sunsetColors.surface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=JetBrains+Mono:wght@400;700&display=swap');
      `,
    },
  },
});

export default sunsetTheme;
