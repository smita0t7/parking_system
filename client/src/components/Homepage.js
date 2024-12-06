import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Homepage = () => {
    return (
        <Container maxWidth ="lg" sx={{textAlign: 'center', py: 5}}>
            <Typography variant="h2" component="h1" color="primary" gutterBottom>
                Welcome to Rental Management System 
            </Typography>
            <Typography variant="h4" gutterBottom>
            Manage your rentals efficiently and effectively.
            </Typography>
            <Box mt={4}>
        <Button 
          component={Link} 
          to="/parkinglot-list" 
          color="primary" 
          variant="contained"
        >
          View Rooms
        </Button>
      </Box>
        </Container>
    );
};

export default Homepage;