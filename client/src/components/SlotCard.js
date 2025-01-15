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
//       <Link to={`/slot-detail/${slot.slotNumber}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           image={
//             slot.imageUrl ||
//             'https://via.placeholder.com/200?text=Parking+Slot+Image'
//           }
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
//           to={`/slot-detail/${slot.slotNumber}`}
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

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SlotCard = ({ room }) => {
  // Use the static image URL for now
  const imageUrl = "https://roohtravel.com/wp-content/uploads/2023/07/thailand_hotels_with_pool.jpeg";

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
      aria-labelledby={`room-card-${room._id}`}
    >
      {/* Room Image */}
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}  // Use static image URL
        alt="Room"
        loading="lazy"
        sx={{ objectFit: 'cover' }}
      />

      {/* Room Details */}
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          variant="h6"
          component="div"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 600 }}
          id={`room-card-${room._id}`}
        >
          <Link
            to={`/room-details/${room._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label={`Go to Room ${room.room_number} details`}
          >
            Room {room.room_number} - {room.room_type}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Floor: {room.floor_number}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
          Rent: <strong>${room.rent}</strong> / month
        </Typography>
        <Typography
          variant="subtitle2"
          color={room.availability ? 'success.main' : 'error.main'}
          sx={{ mt: 1 }}
          aria-label={`Room ${room.room_number} is ${room.availability ? 'Available' : 'Occupied'}`}
        >
          {room.availability ? 'Available' : 'Occupied'}
        </Typography>
        {room.tenant_name && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Tenant: {room.tenant_name}
          </Typography>
        )}
      </CardContent>

      {/* Action Button */}
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/rooms/${room._id}`}
          variant="contained"
          color="primary"
          size="medium"
          fullWidth
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
          }}
          aria-label={`View details for Room ${room.room_number}`}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default SlotCard;