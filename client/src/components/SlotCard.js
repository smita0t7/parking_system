import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const getUniqueSlotNumber = (slotId) => {
  const storedSlotNumbers = JSON.parse(localStorage.getItem('slotNumbers')) || {};
  if (storedSlotNumbers[slotId]) {
    return storedSlotNumbers[slotId];
  }

  let num;
  const assignedNumbers = new Set(Object.values(storedSlotNumbers));
  do {
    num = Math.floor(Math.random() * 1000) + 1;
  } while (assignedNumbers.has(num));

  storedSlotNumbers[slotId] = num;
  localStorage.setItem('slotNumbers', JSON.stringify(storedSlotNumbers));

  return num;
};

const SlotCard = ({ slot }) => {
  const [slotNumber, setSlotNumber] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (slot?._id) {
      setSlotNumber(getUniqueSlotNumber(slot._id));
    }
  }, [slot]);

  const handleViewDetails = () => {
    navigate(`/slot-detail/${slot._id}`, { state: { slotNumber } });
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={slot.imageUrl || 'https://as1.ftcdn.net/v2/jpg/07/11/03/64/1000_F_711036401_SQ9QT9X3M7ljOGvH0qMxLwSgmjgTkLy9.jpg'}
        alt={`Slot Number: ${slotNumber}`}
        sx={{ objectFit: 'cover', width: '100%' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          Slot Number: {slotNumber !== null ? slotNumber : 'N/A'}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Status: {slot.status || 'Available'}
        </Typography>
        {slot.customerName && (
          <Typography variant="body2" color="text.secondary">
            Customer: {slot.customerName}
          </Typography>
        )}
      </CardContent>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          onClick={handleViewDetails}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default SlotCard;
