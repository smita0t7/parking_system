// src/pages/ParkingLots.js
import React from 'react';
import ParkingLotList from '../components/ParkingLotList';
import ParkingLotForm from '../components/ParkingLotForm';

const ParkingLots = () => {
  return (
    <div>
      <h1>Parking Lots</h1>
      <ParkingLotForm />
      <ParkingLotList />
    </div>
  );
};

export default ParkingLots;
