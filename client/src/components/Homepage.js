import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <Container 
            maxWidth="lg" 
            sx={{
                textAlign: 'center',
                py: 5,
                backgroundColor: '#f4f4f4', // Neutral light gray for background
                borderRadius: 2,
                boxShadow: 3,
                position: 'relative',
                zIndex: 1,
                mt: 3, // Space between Navbar and Section
                mb: 3, // Space between Footer and Section
            }}
        >
            {/* Title with animation */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography variant="h2" component="h1" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Parking System Management
                </Typography>
            </motion.div>
            
            {/* Subtitle with animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Typography variant="h4" color="textSecondary" gutterBottom>
                    Book your parking spots with ease
                </Typography>
            </motion.div>

            {/* Button with gentle hover animation */}
            <Box mt={4}>
                <motion.div
                    whileHover={{ opacity: 0.8 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button 
                        component={Link} 
                        to="/CreateSlotList" 
                        color="primary" 
                        variant="contained"
                        sx={{
                            padding: '12px 24px', 
                            fontSize: '1.2rem', 
                            borderRadius: '50px', 
                            backgroundColor: '#007bff', // Blue button color
                            '&:hover': {
                                backgroundColor: '#0056b3', // Darker blue on hover
                            },
                            transition: 'background-color 0.3s ease, opacity 0.3s ease',
                        }}
                    >
                        View Slots
                    </Button>
                </motion.div>
            </Box>

            {/* Feature Section */}
            <Grid container spacing={4} mt={6} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        sx={{
                            background: '#c0c0d0', // Light gray background for the card
                            borderRadius: 2, 
                            boxShadow: 2, 
                            padding: 3, 
                            transition: 'transform 0.3s ease', 
                            '&:hover': { transform: 'scale(1.05)' }
                        }}
                    >
                        <Typography variant="h6" color="primary" gutterBottom>
                            Fast & Easy
                        </Typography>
                        <Typography color="textSecondary">
                            Find available parking spots in seconds. No more circling around for hours!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        sx={{
                            background: '#c0c0d0', 
                            borderRadius: 2, 
                            boxShadow: 2, 
                            padding: 3, 
                            transition: 'transform 0.3s ease', 
                            '&:hover': { transform: 'scale(1.05)' }
                        }}
                    >
                        <Typography variant="h6" color="primary" gutterBottom>
                            Secure Parking
                        </Typography>
                        <Typography color="textSecondary">
                            Your parking spot is reserved, ensuring a safe and guaranteed space.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        sx={{
                            background: '#c0c0d0', 
                            borderRadius: 2, 
                            boxShadow: 2, 
                            padding: 3, 
                            transition: 'transform 0.3s ease', 
                            '&:hover': { transform: 'scale(1.05)' }
                        }}
                    >
                        <Typography variant="h6" color="primary" gutterBottom>
                            Easy Payment
                        </Typography>
                        <Typography color="textSecondary">
                            Pay online through our secure gateway. Hassle-free and quick.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Homepage;
