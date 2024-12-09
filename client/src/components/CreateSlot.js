import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const CreateSlot = () => {
  const navigate = useNavigate();

  const [slot, setSlot] = useState({
    slotNumber: '',
    type: '',
    maxCapacity: '',
    duration: '', // Add duration field
    rentPerHour: 50, // Fixed rate per hour
    totalRent: 0, // Calculated total rent
    status: 'Available',
    customerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    vehicleType: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedSlot = { ...slot, [name]: value };

    // Calculate total rent dynamically when duration is updated
    if (name === 'duration') {
      const hours = parseInt(value, 10) || 0;
      updatedSlot.totalRent = hours * updatedSlot.rentPerHour;
    }

    setSlot(updatedSlot);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Save data in state and redirect to the confirmation page
    navigate('/confirmedSlot', { state: { slot } });
  };

  const handleCancel = () => {
    navigate('/');
  };

  

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: 'auto',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        mb={3}
        color="primary"
      >
        Create Parking Slot
      </Typography>


      <TextField
  fullWidth
  label="Customer Name"
  name="customerName"
  variant="outlined"
  type="text"
  value={slot.customerName}
  onChange={handleChange}
  sx={{ mb: 2 }}
  pattern={{
    pattern: "^[A-Za-z ]+$", // Allows only letters and spaces
    title: "Only alphabets and spaces are allowed",
  }}
/>

        


        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          variant="outlined"
          type='tel'
          value={slot.phoneNumber}
          onChange={handleChange}
          sx={{ mb: 2 }}
          />
        <TextField
          fullWidth
          label="Vehicle Number"
          name="vehicleNumber"
          variant="outlined"
          value={slot.vehicleNumber}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* Location Details */}
        <TextField
          fullWidth
          label="Location/Area Name"
          name="location"
          variant="outlined"
          value={slot.location}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

<form onSubmit={handleSubmit}>
        {/* Slot Details */}
        <TextField
          fullWidth
          label="Slot Number"
          name="slotNumber"
          variant="outlined"
          type='number'
          value={slot.slotNumber}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Vehicle Type </InputLabel>
          <Select
            name="type"
            value={slot.type}
            onChange={handleChange}
            required
          >
            <MenuItem value="Car">Car</MenuItem>
            <MenuItem value="Bike">Bike</MenuItem>
            <MenuItem value="Truck">Truck</MenuItem>
            <MenuItem value="EV Charging">EV Charging</MenuItem>
          </Select>
        </FormControl>

        {/* Replace rentPerHour with duration */}
        <TextField
          fullWidth
          label="Duration (in hours)"
          name="duration"
          variant="outlined"
          type="number"
          value={slot.duration}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        {/* Display total rent dynamically */}
        <Typography variant="body1" sx={{ mb: 2 }}>
          Total Rent: {slot.totalRent} Rupees
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: '48%' }}
          >
            Book Slot
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            sx={{ width: '48%' }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateSlot;