// import { createTheme } from '@mui/material/styles';

// const lightPalette = {
//   mode: 'light',
//   primary: { main: '#00b8d4' },
//   secondary: { main: '#1de9b6' },
//   background: { default: '#ffffff', paper: '#ffffff' },
//   text: { primary: '#000000', secondary: '#4f4f4f' },
// };

// const darkPalette = {
//   mode: 'dark',
//   primary: { main: '#00e5ff' },
//   secondary: { main: '#00bfa5' },
//   background: { default: '#002f36', paper: '#004d5e' },
//   text: { primary: '#ffffff', secondary: '#000000' },
// };

// const theme = createTheme({
//   palette: lightPalette, // Using the light mode for now
//   typography: { fontFamily: 'Arial, sans-serif' },
// });

// console.log('Theme applied:', theme); // Debugging log

// export default theme;

import { createTheme } from '@mui/material/styles';

const neonGlowColors = {
  base: '#0d0f17',
  surface: '#16191f',
  accent: '#00ffc6',
  vibrantPink: '#ff007f',
  neonYellow: '#ffea00',
  textPrimary: '#ffffff',
  textSecondary: '#b3b3b3',
  error: '#ff1744',
  warning: '#ff9100',
  success: '#00e676',
  info: '#2979ff',
  overlay: '#212121',
  lightBase: '#f5f5f5',
  lightSurface: '#ffffff',
  lightTextPrimary: '#000000',
  lightTextSecondary: '#757575',
  lightAccent: '#6200ea',
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: neonGlowColors.base,
      paper: neonGlowColors.surface,
    },
    primary: {
      main: neonGlowColors.accent,
    },
    secondary: {
      main: neonGlowColors.vibrantPink,
    },
    error: {
      main: neonGlowColors.error,
    },
    warning: {
      main: neonGlowColors.warning,
    },
    info: {
      main: neonGlowColors.info,
    },
    success: {
      main: neonGlowColors.success,
    },
    text: {
      primary: neonGlowColors.textPrimary,
      secondary: neonGlowColors.textSecondary,
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: neonGlowColors.lightBase,
      paper: neonGlowColors.lightSurface,
    },
    primary: {
      main: neonGlowColors.lightAccent,
    },
    secondary: {
      main: neonGlowColors.vibrantPink,
    },
    error: {
      main: neonGlowColors.error,
    },
    warning: {
      main: neonGlowColors.warning,
    },
    info: {
      main: neonGlowColors.info,
    },
    success: {
      main: neonGlowColors.success,
    },
    text: {
      primary: neonGlowColors.lightTextPrimary,
      secondary: neonGlowColors.lightTextSecondary,
    },
  },
});

// Export a function to create the theme based on mode
export const createThemeByMode = (mode) => {
  return mode === 'dark' ? darkTheme : lightTheme;
};
