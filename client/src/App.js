import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './container/Theme';  // Correct import for ThemeProvider
import { SnackbarProvider } from 'notistack';
import { CssBaseline, Box, Container } from '@mui/material';

// Importing components
import HomePage from './components/HomePage';
import CreateParkingSlot from './components/CreateParkingSlot';
import UpdateParkingSlotInfo from './components/UpdateParkingSlotInfo';
import ShowParkingSlotDetails from './components/ShowParkingSlotDetails';
import ShowParkingSlotList from './components/ShowParkingSlotList';
import SearchParkingSlots from './components/SearchParkingSlots';
import ExportParkingSlot from './components/ExportParkingSlots';  // Correct import for ExportParkingSlot
import QRCodePage from './components/QRCodePage';
//import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SlotCard from './components/SlotCard';  // Renamed import

const App = () => {
  return (
    <ThemeProvider>  {/* Use ThemeProvider here */}
      <CssBaseline /> {/* Ensures global styling is applied */}
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Container component="main" flex="1" className="box-container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/create-parking-slot" element={<CreateParkingSlot />} />
              <Route path="/parking-slot-details/:id" element={<ShowParkingSlotDetails />} />
              <Route path="/update-parking-slot/:id" element={<UpdateParkingSlotInfo />} />
              
              <Route path="/parking-slot-list" element={<ShowParkingSlotList />} />
              <Route path="/search-parking-slots" element={<SearchParkingSlots />} />
              <Route path="/export-parking-slot" element={<ExportParkingSlot />} />
              <Route path="/qrcode" element={<QRCodePage />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </Container>
          {/* <Footer /> */}
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
