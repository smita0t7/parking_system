import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createThemeByMode } from './container/Theme.js'; // Correct import for theme
import './index.css';

// Create a theme instance (example: use light mode)
// You can change 'light' to 'noctis-obscuro' for dark mode
const theme = createThemeByMode('light'); 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Apply theme to the app */}
      <CssBaseline /> {/* Ensures baseline styling (reset) */}
      <Router> {/* Wrap the app with Router for routing functionality */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
