import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, MenuItem, Button, Typography, Grid, Paper, Container, FormControl, InputLabel, Select } from '@mui/material';

const CreateSlot = () => {
    const navigate = useNavigate();
    const [slot, setSlot] = useState({
        slotNumber: Math.floor(Math.random() * 1000) + 1,
        vehicleType: '',
        customerName: '',
        phoneNumber: '',
        vehicleNumber: '',
        duration: '',
        rentPerHour: 50,
        totalRent: 0,
        arrivalTime: '',
        bookingDate: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onChange = (e) => {
        const { name, value } = e.target;
        setSlot((prev) => ({
            ...prev,
            [name]: value,
            ...(name === 'duration' && {
                totalRent: (parseInt(value, 10) || 0) * parseInt(prev.rentPerHour || 0, 10),
            }),
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear previous errors

        // Validation
        if (!slot.vehicleType || !slot.customerName || !slot.phoneNumber || !slot.vehicleNumber || !slot.duration) {
            setError('Please fill all required fields.');
            setLoading(false);
            return;
        }

        try {
            await axios.post('https://parkingsystem-8xdu.onrender.com/api/lots', slot);
            alert('Slot created successfully!');
            setSlot({
                slotNumber: Math.floor(Math.random() * 1000) + 1,
                vehicleType: '',
                customerName: '',
                phoneNumber: '',
                vehicleNumber: '',
                duration: '',
                rentPerHour: 50,
                totalRent: 0,
                arrivalTime: '',
                bookingDate: '',
            });
            navigate('/slots');
        } catch (err) {
            setError(err.response?.data || 'Failed to create slot. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Create New Parking Slot
            </Typography>
            <Paper sx={{ padding: 3 }}>
                <form onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        label="Customer Name *"
                        name="customerName"
                        value={slot.customerName}
                        onChange={onChange}
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Phone Number *"
                        name="phoneNumber"
                        value={slot.phoneNumber}
                        onChange={onChange}
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Vehicle Number *"
                        name="vehicleNumber"
                        value={slot.vehicleNumber}
                        onChange={onChange}
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Vehicle Type *</InputLabel>
                        <Select
                            name="vehicleType"
                            value={slot.vehicleType}
                            onChange={onChange}
                            variant="outlined"
                            required
                        >
                            <MenuItem value="Car">Car</MenuItem>
                            <MenuItem value="Bike">Bike</MenuItem>
                            <MenuItem value="Truck">Truck</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Duration (in hours) *"
                        name="duration"
                        type="number"
                        value={slot.duration}
                        onChange={onChange}
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Total Rent: {slot.totalRent} Rupees
                    </Typography>
                    <TextField
                        fullWidth
                        label="Arrival Time"
                        name="arrivalTime"
                        type="time"
                        value={slot.arrivalTime}
                        onChange={onChange}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Booking Date"
                        name="bookingDate"
                        type="date"
                        value={slot.bookingDate}
                        onChange={onChange}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        margin="normal"
                    />
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item xs={6}>
                            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                                {loading ? 'Creating...' : 'Create Slot'}
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate('/slots')}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                    {error && (
                        <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                            {typeof error === 'object' ? JSON.stringify(error) : error}
                        </Typography>
                    )}
                </form>
            </Paper>
        </Container>
    );
};

export default CreateSlot;