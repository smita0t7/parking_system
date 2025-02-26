// import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, Box, Container } from '@mui/material';
// import theme from './container/neonGlowTheme'; // Ensure the correct import path
// import { SnackbarProvider } from 'notistack';
// import { Routes, Route } from 'react-router-dom';

// import HomePage from './components/HomePage';
// import SlotList from './components/SlotList';
// import SlotDetail from './components/DetailsSlot';
// import CreateSlot from './components/CreateSlot';
// import SlotEdit from './components/UpdateSlot';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import ExportPage from './components/ExportPage';
// import SearchPage from './components/SearchSlot';
// import QRCodePage from "./components/QRCodePage";

// const App = () => {
//     return (
//         <ThemeProvider theme={theme}>  {/* Ensure ThemeProvider wraps everything */}
//             <CssBaseline />
//             <SnackbarProvider
//                 maxSnack={3}
//                 anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                 }}
//             >
//                 <Box display="flex" flexDirection="column" minHeight="100vh">
//                     <Navbar />
//                     <Container component="main" flex="1">
//                         <Routes>
//                             <Route exact path="/" element={<HomePage />} />
//                             <Route path="/slots" element={<SlotList />} />
//                             <Route path="/add-slot" element={<CreateSlot />} />
//                             <Route path="/edit-slot/:id" element={<SlotEdit />} />
//                             <Route path="/slot-detail/:id" element={<SlotDetail />} />
//                             <Route path="/export" element={<ExportPage />} />
//                             <Route path="/search" element={<SearchPage />} />
//                             <Route path="/qrcodes" element={<QRCodePage />} />
//                             <Route path="*" element={<div>404 - Page Not Found</div>} />
//                         </Routes>
//                     </Container>
//                     <Footer />
//                 </Box>
//             </SnackbarProvider>
//         </ThemeProvider>
//     );
// };

// export default App;

import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Container, Button } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Routes, Route } from 'react-router-dom';

import { createThemeByMode } from './container/neonGlowTheme'; // Correct import

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
import About from './components/About';

const App = () => {
    // State to manage theme mode (dark/light)
    const [mode, setMode] = useState('dark'); // Default to dark mode

    // Memoize theme for performance optimization
    const theme = useMemo(() => createThemeByMode(mode), [mode]);

    // Function to toggle between dark and light theme
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={theme}>  
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
                        {/* Theme Toggle Button */}
                        <Box display="flex" justifyContent="center" my={2}>
                            <Button variant="contained" onClick={toggleTheme}>
                                Toggle {mode === 'dark' ? 'Light' : 'Dark'} Mode
                            </Button>
                        </Box>
                        
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/slots" element={<SlotList />} />
                            <Route path="/add-slot" element={<CreateSlot />} />
                            <Route path="/edit-slot/:id" element={<SlotEdit />} />
                            <Route path="/slot-detail/:id" element={<SlotDetail />} />
                            <Route path="/export" element={<ExportPage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/qrcodes" element={<QRCodePage />} />
                            <Route path="/about" element={<About/>} />
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
