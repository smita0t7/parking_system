import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  TextField, MenuItem, Button, FormControlLabel, Checkbox, Container,
  Typography, Grid, Paper, CircularProgress
} from '@mui/material';

const UpdateParkingSlotInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [slot, setSlot] = useState({
    customerName: '', phoneNumber: '', vehicleNumber: '', vehicleType: 'Car', duration: '',
    arrivalTime: '', bookingDate: '', rentPerHour: 50
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get(` https://parking-system-j82e.onrender.com/api/lots`) // Replace with your API endpoint
      .then((res) => {
        setSlot(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch parking slot details. Please try again.');
        setLoading(false);
        console.error('Error fetching parking slot details:', err);
      });
  }, [id]);

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

    if (slot.duration <= 0) {
      setError('Duration must be a positive number.');
      setLoading(false);
      return;
    }

    axios
      .put(`https://parking-system-j82e.onrender.com/api/lots${id}`, slot) // Replace with your API endpoint
      .then(() => {
        alert('Parking slot updated successfully!');
        navigate(`/lots/${id}`);
      })
      .catch((err) => {
        const errorMessage = err.response?.data || 'Failed to update parking slot. Please try again.';
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, [slot, id, navigate]);

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Update Parking Slot
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
        Update the details of the parking slot below.
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            {/* Customer Name */}
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

            {/* Phone Number */}
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

            {/* Vehicle Number */}
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

            {/* Vehicle Type */}
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

            {/* Duration */}
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

            {/* Arrival Time */}
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

            {/* Booking Date */}
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

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Update Parking Slot'}
              </Button>
            </Grid>

            {/* Cancel Button */}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate('/lots')}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Error Message */}
        {error && <Typography color="error" variant="body2" sx={{ mt: 2 }}>{error}</Typography>}
      </Paper>
    </Container>
  );
};

export default React.memo(UpdateParkingSlotInfo);
