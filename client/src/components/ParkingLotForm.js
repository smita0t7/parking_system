// src/components/ParkingLotForm.js
import React, { useState } from 'react';
import api from '../api';

const ParkingLotForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [totalSlots, setTotalSlots] = useState('');
  const [pricePerHour, setPricePerHour] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/parking-lot/create', {
        name,
        location,
        totalSlots,
        pricePerHour,
      });
      // Reset the form or handle success message
      alert('Parking lot created successfully!');
    } catch (error) {
      console.error('Error creating parking lot:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Parking Lot</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Total Slots"
        value={totalSlots}
        onChange={(e) => setTotalSlots(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price per Hour"
        value={pricePerHour}
        onChange={(e) => setPricePerHour(e.target.value)}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default ParkingLotForm;
