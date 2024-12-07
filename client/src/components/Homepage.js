import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Homepage = () => {
    return (
        <Container maxWidth ="lg" sx={{textAlign: 'center', py: 5}}>
            <Typography variant="h2" component="h1" color="primary" gutterBottom>
                Parking System Management
            </Typography>
            <Typography variant="h4" gutterBottom>
            Book your parking lots
            </Typography>
            <Box mt={4}>
        <Button 
          component={Link} 
          to="/parkinglot-list" 
          color="primary" 
          variant="contained"
        >
          View slots
        </Button>
      </Box>
        </Container>
    );
};

export default Homepage;