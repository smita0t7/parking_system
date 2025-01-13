// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom'; // import Router
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from './container/Theme.js'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Router>  {/* Wrap the entire app with Router here */}
//     <App />
//    <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline /> {/* Ensures baseline styling (reset) */}
//       {/* <BrowserRouter>
//         <App />
//       </BrowserRouter> */}
//     </ThemeProvider>
//   </React.StrictMode>
//   </Router>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createThemeByMode } from './container/Theme.js'; // Correct import
import './index.css';

// Create a theme instance (example: use light mode)
const theme = createThemeByMode('light'); // Change 'light' to 'noctis-obscuro' for dark mode

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures baseline styling (reset) */}
      <Router> {/* Wrap the app with Router */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
