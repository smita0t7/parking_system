import { createTheme } from '@mui/material/styles';

const lightPalette = {
  mode: 'light',
  primary: { main: '#00b8d4' },
  secondary: { main: '#1de9b6' },
  background: { default: '#ffffff', paper: '#ffffff' },
  text: { primary: '#000000', secondary: '#4f4f4f' },
};

const darkPalette = {
  mode: 'dark',
  primary: { main: '#00e5ff' },
  secondary: { main: '#00bfa5' },
  background: { default: '#002f36', paper: '#004d5e' },
  text: { primary: '#ffffff', secondary: '#000000' },
};

const theme = createTheme({
  palette: lightPalette, // Using the light mode for now
  typography: { fontFamily: 'Arial, sans-serif' },
});

console.log('Theme applied:', theme); // Debugging log

export default theme;
