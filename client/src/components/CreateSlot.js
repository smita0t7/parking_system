import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const CreateSlot = () => {
  const navigate = useNavigate();

  const [slot, setSlot] = useState({
    slotNumber: '',
    type: '',
    duration: '',
    rentPerHour: 50, // Fixed rate per hour
    totalRent: 0, // Calculated total rent
    customerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation rules
    const validations = {
      customerName: /^[A-Za-z ]*$/, // Allows only alphabets and spaces
      phoneNumber: /^[0-9]*$/, // Only numbers
      vehicleNumber: /^[A-Za-z0-9]*$/, // Alphanumeric
      slotNumber: /^[0-9]*$/, // Numbers only
      duration: /^[0-9]*$/, // Numbers only
      location: /^[A-Za-z0-9 ,.-]*$/, // Alphanumeric and common punctuation
    };

    if (validations[name] && !validations[name].test(value)) {
      return; // Reject invalid input dynamically
    }

    // Update the state if validation passes
    setSlot((prevSlot) => ({
      ...prevSlot,
      [name]: value,
      totalRent: name === 'duration' ? (parseInt(value, 10) || 0) * prevSlot.rentPerHour : prevSlot.totalRent,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation for required fields
    if (!slot.customerName || !slot.phoneNumber || !slot.slotNumber || !slot.type || !slot.duration) {
      alert("Please fill in all required fields correctly.");
      return;
    }

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

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Customer Name"
          name="customerName"
          variant="outlined"
          type="text"
          value={slot.customerName}
          onChange={handleChange}
          error={!/^[A-Za-z ]*$/.test(slot.customerName)}
          helperText={!/^[A-Za-z ]*$/.test(slot.customerName) ? "Only alphabets and spaces are allowed" : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          variant="outlined"
          type="tel"
          value={slot.phoneNumber}
          onChange={handleChange}
          error={!/^[0-9]*$/.test(slot.phoneNumber)}
          helperText={!/^[0-9]*$/.test(slot.phoneNumber) ? "Only numbers are allowed" : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Vehicle Number"
          name="vehicleNumber"
          variant="outlined"
          value={slot.vehicleNumber}
          onChange={handleChange}
          error={!/^[A-Za-z0-9]*$/.test(slot.vehicleNumber)}
          helperText={!/^[A-Za-z0-9]*$/.test(slot.vehicleNumber) ? "Only alphanumeric characters are allowed" : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Location/Area Name"
          name="location"
          variant="outlined"
          value={slot.location}
          onChange={handleChange}
          error={!/^[A-Za-z0-9 ,.-]*$/.test(slot.location)}
          helperText={!/^[A-Za-z0-9 ,.-]*$/.test(slot.location) ? "Only valid location names are allowed" : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Slot Number"
          name="slotNumber"
          variant="outlined"
          type="number"
          value={slot.slotNumber}
          onChange={handleChange}
          error={!/^[0-9]*$/.test(slot.slotNumber)}
          helperText={!/^[0-9]*$/.test(slot.slotNumber) ? "Only numbers are allowed" : ""}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Vehicle Type</InputLabel>
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

        <TextField
          fullWidth
          label="Duration (in hours)"
          name="duration"
          variant="outlined"
          type="number"
          value={slot.duration}
          onChange={handleChange}
          error={!/^[0-9]*$/.test(slot.duration)}
          helperText={!/^[0-9]*$/.test(slot.duration) ? "Only numbers are allowed" : ""}
          required
          sx={{ mb: 2 }}
        />

        <Typography variant="body1" sx={{ mb: 2 }}>
          Total Rent: {slot.totalRent} Rupees
        </Typography>

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
