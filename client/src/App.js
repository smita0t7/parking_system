// src/App.js
import React from 'react';
import { Box } from '@mui/material'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ParkingLots from './pages/ParkingLots';
import Reservations from './pages/Reservation';
import User from './pages/User';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parking-lots" element={<ParkingLots />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
