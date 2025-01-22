import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';
import SlotCard from './SlotCard';  // You need to create this component for displaying slot details.

function ShowParkingSlotList() {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
        .get('https://parking-system-j82e.onrender.com/api/lots')  // Replace with your backend API URL for parking slots
        .then((res) => {
            setSlots(res.data);
            setLoading(false);
        })
        .catch((err) => {
            setError('Error loading parking slots, please try again later.');
            setLoading(false);
            console.error("Error fetching parking slots:", err); // Log the error for debugging
        });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" color="primary" gutterBottom>
                Parking Slots List
            </Typography>

            <Button 
                component={Link}
                to="/create-parking-slot"  // Link to the page where users can add a new parking slot
                color="primary"
                variant="contained"
                sx={{ mb: 4 }}
                aria-label="Add new parking slot"
            >
                Add New Parking Slot
            </Button>

            {loading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress aria-live="polite" />
                </Box>
            ) : error ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <Typography variant="h6" color="error">{error}</Typography>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {slots.length === 0 ? (
                        <Grid item xs={12}>
                            <Typography variant="h6" color="text.secondary">
                                No Parking Slots found!
                            </Typography>
                        </Grid>
                    ) : (
                        slots.map((slot) => (
                            <Grid item xs={12} sm={6} md={4} key={slot._id}>
                                <SlotCard slot={slot} />
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </Container>
    );
}

export default ShowParkingSlotList;
