import React, { createContext, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Define light and dark theme palettes with an updated white background
const lightPalette = {
  mode: 'light',
  primary: {
    main: '#00b8d4', // Vibrant cyan for primary
  },
  secondary: {
    main: '#1de9b6', // Teal for secondary
  },
  background: {
    default: '#ffffff', // Pure white background
    paper: '#ffffff', // White paper background for containers/cards
  },
  text: {
    primary: '#000000', // Black for high contrast on white
    secondary: '#4f4f4f', // Medium gray for secondary text
  },
};

const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#00e5ff', // Bright cyan primary
  },
  secondary: {
    main: '#00bfa5', // Aqua secondary
  },
  background: {
    default: '#002f36', // Dark teal background
    paper: '#004d5e', // Vibrant dark cyan for cards/containers
  },
  text: {
    primary: '#ffffff', // White text for high contrast on dark
    secondary: '#000000', // Light gray for secondary text
  },
};

// Create theme by mode
export const createThemeByMode = (mode) => {
  const palette = mode === 'noctis-obscuro' ? darkPalette : lightPalette;

  return createTheme({
    palette,
    typography: {
      // Retain default typography
    },
  });
};

// Create a context to provide the theme to the app
const ThemeContext = createContext();

// ThemeProvider component that wraps MuiThemeProvider and provides theme
export const ThemeProvider = ({ children }) => {
  const theme = useMemo(() => createThemeByMode('light'), []); // Static light theme
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>; // Proper return statement
};
