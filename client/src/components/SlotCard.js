// import React from 'react';
// import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
// import { Link } from 'react-router-dom';

// const SlotCard = ({ slot }) => {
//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'transform 0.2s, box-shadow 0.2s',
//         borderRadius: 2,
//         boxShadow: 3,
//         '&:hover': {
//           transform: 'scale(1.05)',
//           boxShadow: 6,
//         },
//       }}
//     >
//       <Link to={`/slot-detail/${slot._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           image={slot.imageUrl || 'https://as1.ftcdn.net/v2/jpg/07/11/03/64/1000_F_711036401_SQ9QT9X3M7ljOGvH0qMxLwSgmjgTkLy9.jpg'}
//           alt={`Slot Number: ${slot.slotNumber}`}
//           sx={{ objectFit: 'cover', width: '100%' }}
//         />
//         <CardContent sx={{ flexGrow: 1 }}>
//           <Typography variant="h6" component="div" color="primary" gutterBottom>
//             Slot Number: {slot.slotNumber || 'N/A'}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary">
//             Status: {slot.status || 'Available'}
//           </Typography>
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{
//               mt: 1,
//               overflow: 'hidden',
//               textOverflow: 'ellipsis',
//               display: '-webkit-box',
//               WebkitLineClamp: 3,
//               WebkitBoxOrient: 'vertical',
//             }}
//           >
//             Location: {slot.location || 'Unknown'}
//           </Typography>
//         </CardContent>
//       </Link>
//       <Box sx={{ p: 2, mt: 'auto' }}>
//         <Button
//           component={Link}
//           to={`/slot-detail/${slot._id}`} // Updated to use `_id`
//           variant="contained"
//           color="primary"
//           size="small"
//           fullWidth
//         >
//           View Details
//         </Button>
//       </Box>
//     </Card>
//   );
// };

// export default SlotCard;


import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const getUniqueSlotNumber = (slotId) => {
  const storedSlotNumbers = JSON.parse(localStorage.getItem('slotNumbers')) || {};

  if (storedSlotNumbers[slotId]) {
    return storedSlotNumbers[slotId]; // Return the stored slot number if already assigned
  }

  let num;
  const assignedNumbers = new Set(Object.values(storedSlotNumbers)); // Get all assigned numbers
  do {
    num = Math.floor(Math.random() * 1000) + 1;
  } while (assignedNumbers.has(num)); // Ensure uniqueness

  storedSlotNumbers[slotId] = num; // Assign the number to this slot ID
  localStorage.setItem('slotNumbers', JSON.stringify(storedSlotNumbers)); // Save to localStorage

  return num;
};

const SlotCard = ({ slot }) => {
  const [slotNumber, setSlotNumber] = useState(null);

  useEffect(() => {
    if (slot?._id) { // Ensure slot ID exists before assigning
      setSlotNumber(getUniqueSlotNumber(slot._id));
    }
  }, [slot]);

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
      <Link to={`/slot-detail/${slot._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
          {slot.customerName && ( // Display customer name if available
            <Typography variant="body2" color="text.secondary">
              Customer: {slot.customerName}
            </Typography>
          )}
        </CardContent>
      </Link>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/slot-detail/${slot._id}`}
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
