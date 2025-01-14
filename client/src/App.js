// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeModeProvider } from './components/ThemeModeProvider';
import { SnackbarProvider } from 'notistack';
import { CssBaseline, Box, Container } from '@mui/material';

import HomePage from './components/HomePage';
import SlotList from './components/SlotList';  // List of slots
import SlotDetail from './components/DetailsSlot';  // Detail of a slot
import SlotAdd from './components/CreateSlot';  // Add a new slot
import SlotEdit from './components/UpdateSlot';  // Edit a slot
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';
import SearchPage from './components/SearchSlot';

const App = () => {
    return (
        <ThemeModeProvider>
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
                        <Container component="main" flex="1" className="box-container">
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                <Route path="/slots" element={<SlotList />} />
                                <Route path="/add-slot" element={<SlotAdd />} />
                                <Route path="/edit-slot/:id" element={<SlotEdit />} />
                                <Route path="/slot-detail/:id" element={<SlotDetail />} />
                                <Route path="/export" element={<ExportPage />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="*" element={<div>404 - Page Not Found</div>} />
                            </Routes>
                        </Container>
                        <Footer />
                    </Box>
            </SnackbarProvider>
        </ThemeModeProvider>
    );
};

export default App;