// src/index.js or src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import sunsetTheme from './theme/sunset'; // Import your custom theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={sunsetTheme}>
      <CssBaseline /> {/* Ensures baseline styling (reset) */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);