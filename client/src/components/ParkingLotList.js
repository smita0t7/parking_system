// src/components/ParkingLotList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const ParkingLotList = () => {
  const [parkingLots, setParkingLots] = useState([]);

  useEffect(() => {
    const fetchParkingLots = async () => {
      try {
        const response = await api.get('/parking-lot/all');
        setParkingLots(response.data);
      } catch (error) {
        console.error('Error fetching parking lots:', error);
      }
    };
    fetchParkingLots();
  }, []);

  return (
    <div>
      <h2>Available Parking Lots</h2>
      <ul>
        {parkingLots.map(lot => (
          <li key={lot._id}>
            <h3>{lot.name}</h3>
            <p>Location: {lot.location}</p>
            <p>Total Slots: {lot.totalSlots}</p>
            <p>Available Slots: {lot.availableSlots}</p>
            <p>Price per Hour: ${lot.pricePerHour}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingLotList;
