// src/components/ThemeModeProvider.js
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createThemeByMode } from '../container/Theme';

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState('noctis-obscuro'); // Default to dark theme

  // Retrieve the existing typography from the default theme
  const existingTheme = useTheme();
  const existingTypography = existingTheme?.typography;

  // Toggle between themes
  const toggleTheme = () => {
    setMode((prevMode) =>
      prevMode === 'noctis-obscuro' ? 'noctis-hibernus' : 'noctis-obscuro'
    );
  };

  // Memoize the theme object for performance
  const theme = useMemo(() => createThemeByMode(mode, existingTypography), [
    mode,
    existingTypography,
  ]);

  // Debugging theme changes
  useEffect(() => {
    console.log(`Theme mode changed to: ${mode}`);
  }, [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};