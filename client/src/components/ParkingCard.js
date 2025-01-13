// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const ParkingCard = ({ title, description }) => {
//     return (
//         <Box 
//             sx={{
//                 background: '#c0c0d0', // Light gray background for the card
//                 borderRadius: 2, 
//                 boxShadow: 2, 
//                 padding: 3, 
//                 transition: 'transform 0.3s ease', 
//                 '&:hover': { transform: 'scale(1.05)' }
//             }}
//         >
//             <Typography variant="h6" color="primary" gutterBottom>
//                 {title}
//             </Typography>
//             <Typography color="textSecondary">
//                 {description}
//             </Typography>
//         </Box>
//     );
// };

// export default ParkingCard;

import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const SlotCard = ({ slot }) => {
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
      <img
        src="https://via.placeholder.com/200" // Placeholder for parking slot image
        alt="Parking Slot"
        style={{ height: 200, objectFit: 'cover', width: '100%' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          <Link to={`/show-slot/${slot._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {slot.name}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {slot.location}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Capacity: {slot.capacity}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Price: ${slot.price}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/detail/${slot._id}`}
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

