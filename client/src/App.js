import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Container } from '@mui/material';
import theme from './container/Theme'; // Ensure the correct import path
import { SnackbarProvider } from 'notistack';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import SlotList from './components/SlotList';
import SlotDetail from './components/DetailsSlot';
import CreateSlot from './components/CreateSlot';
import SlotEdit from './components/UpdateSlot';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';
import SearchPage from './components/SearchSlot';
import QRCodePage from "./components/QRCodePage";

const App = () => {
    return (
        <ThemeProvider theme={theme}>  {/* Ensure ThemeProvider wraps everything */}
            <CssBaseline />
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Box display="flex" flexDirection="column" minHeight="100vh">
                    <Navbar />
                    <Container component="main" flex="1">
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/slots" element={<SlotList />} />
                            <Route path="/add-slot" element={<CreateSlot />} />
                            <Route path="/edit-slot/:id" element={<SlotEdit />} />
                            <Route path="/slot-detail/:id" element={<SlotDetail />} />
                            <Route path="/export" element={<ExportPage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/qrcodes" element={<QRCodePage />} />
                            <Route path="*" element={<div>404 - Page Not Found</div>} />
                        </Routes>
                    </Container>
                    <Footer />
                </Box>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
