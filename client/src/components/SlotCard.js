import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SlotCard = ({ parkingSlot }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: 3,
        boxShadow: 4,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8,
        },
      }}
      role="article"
      aria-labelledby={`slot-card-${parkingSlot._id}`}
    >
      {/* Parking Slot Details */}
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          variant="h6"
          component="div"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 600 }}
          id={`slot-card-${parkingSlot._id}`}
        >
          <Link
            to={`/slot-details/${parkingSlot._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label={`Go to Parking Slot ${parkingSlot._id} details`}
          >
            Parking Slot {parkingSlot._id}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Customer: {parkingSlot.customerName}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Vehicle: {parkingSlot.vehicleType} - {parkingSlot.vehicleNumber}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
          Duration: {parkingSlot.duration} hours
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
          Rent: <strong>${parkingSlot.totalRent}</strong>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
          Arrival Time: {new Date(parkingSlot.arrivalTime).toLocaleString()}
        </Typography>
      </CardContent>

      {/* Action Button */}
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/parking-slot-details/${parkingSlot._id}`}
          variant="contained"
          color="primary"
          size="medium"
          fullWidth
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
          }}
          aria-label={`View details for Parking Slot ${parkingSlot._id}`}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default SlotCard;
