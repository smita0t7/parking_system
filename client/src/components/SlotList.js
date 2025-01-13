import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Grid, Button, Container, CircularProgress, Box } from '@mui/material';

import SlotCard from './SlotCard'; // Assuming SlotCard component is already created

function SlotList() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://parkingsystem-8xdu.onrender.com/api/lots') // Your slots API URL
      .then((res) => {
        console.log('Fetched slots:', res.data);
        setSlots(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching slots:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Slot List
      </Typography>

      <Button
        component={Link}
        to="/add-slot" // Adjust the path as per your routing
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add New Slot
      </Button>

      {loading ? (
        // Show a loading spinner while data is being fetched
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {slots.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No slots found!
              </Typography>
            </Grid>
          ) : (
            slots.map((slot, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SlotCard slot={slot} /> {/* Pass slot data to SlotCard */}
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}

export default SlotList;