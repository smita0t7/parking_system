import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField, MenuItem, Button, FormControlLabel, Checkbox, Container,
  Typography, Grid, Paper, CircularProgress
} from '@mui/material';

const CreateParkingSlot = () => {
  const navigate = useNavigate();
  const [slot, setSlot] = useState({
    customerName: '', phoneNumber: '', vehicleNumber: '', vehicleType: 'Car', duration: '',
    arrivalTime: '', bookingDate: '', rentPerHour: 50
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setSlot((prevSlot) => ({
      ...prevSlot,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate duration
    if (slot.duration <= 0) {
      setError('Duration must be a positive number.');
      setLoading(false);
      return;
    }

    axios
      .post('http://yourapiurl.com/api/lots', slot) // Adjust with your API endpoint
      .then(() => {
        alert('Parking slot created successfully!');
        setSlot({
          customerName: '', phoneNumber: '', vehicleNumber: '', vehicleType: 'Car', duration: '',
          arrivalTime: '', bookingDate: '', rentPerHour: 50
        });
        setError('');
        navigate('/lots'); // Redirect to a listing or relevant page
      })
      .catch((err) => {
        const errorMessage = err.response?.data || 'Failed to create parking slot. Please try again.';
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, [slot, navigate]);

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create New Parking Slot
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
        Please fill in the details below to create a new parking slot.
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Customer Name *"
                variant="outlined"
                fullWidth
                name="customerName"
                value={slot.customerName}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number *"
                variant="outlined"
                fullWidth
                name="phoneNumber"
                value={slot.phoneNumber}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Vehicle Number *"
                variant="outlined"
                fullWidth
                name="vehicleNumber"
                value={slot.vehicleNumber}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Vehicle Type *"
                variant="outlined"
                fullWidth
                name="vehicleType"
                value={slot.vehicleType}
                onChange={onChange}
                required
              >
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Bike">Bike</MenuItem>
                <MenuItem value="Truck">Truck</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Duration (hours) *"
                variant="outlined"
                fullWidth
                name="duration"
                type="number"
                value={slot.duration}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Arrival Time"
                variant="outlined"
                fullWidth
                name="arrivalTime"
                type="datetime-local"
                value={slot.arrivalTime}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Booking Date"
                variant="outlined"
                fullWidth
                name="bookingDate"
                type="date"
                value={slot.bookingDate}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
            {loading ? <CircularProgress size={24} /> : 'Create Parking Slot'}
          </Button>

          <Button
            variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }} onClick={() => navigate('/lots')}
          >
            Cancel
          </Button>
        </form>

        {error && <Typography color="error" variant="body2" sx={{ mt: 2 }}>{error}</Typography>}
      </Paper>
    </Container>
  );
};

export default React.memo(CreateParkingSlot);
