import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // import Router
import { ThemeProvider, CssBaseline } from '@mui/material';
import sunsetTheme from './theme/sunset'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>  {/* Wrap the entire app with Router here */}
    <App />
   <React.StrictMode>
    <ThemeProvider theme={sunsetTheme}>
      <CssBaseline /> {/* Ensures baseline styling (reset) */}
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
    </ThemeProvider>
  </React.StrictMode>
  </Router>
);
