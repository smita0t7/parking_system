// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import sunsetTheme from './theme/sunset';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import Footer from './components/Footer';
import Footer from './components/Footer';
import Footer from './components/Footer';
import Footer from './components/Footer';


const App = () => {
  return (
    <ThemeProvider theme={sunsetTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/book-list' element={<ShowBookList />} />
              <Route path='/create-book' element={<CreateBook />} />
              <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
              <Route path='/show-book/:id' element={<ShowBookDetails />} />
              <Route path='/notes/*' element={<NotesPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
