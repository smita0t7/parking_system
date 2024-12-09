import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // import Router

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>  {/* Wrap the entire app with Router here */}
    <App />
   <React.StrictMode>
    <ThemeProvider theme={blueLagoonTheme}>
      <CssBaseline /> {/* Ensures baseline styling (reset) */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
  </Router>
);
