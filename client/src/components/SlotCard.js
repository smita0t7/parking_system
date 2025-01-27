import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
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
      <Link to={`/slot-detail/${slot._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={slot.imageUrl || 'data:image/jpeg;base64,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'}
          alt={`Slot Number: ${slot.slotNumber}`}
          sx={{ objectFit: 'cover', width: '100%' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" color="primary" gutterBottom>
            Slot Number: {slot.slotNumber || 'N/A'}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Status: {slot.status || 'Available'}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            Location: {slot.location || 'Unknown'}
          </Typography>
        </CardContent>
      </Link>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/slot-detail/${slot._id}`} // Updated to use `_id`
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