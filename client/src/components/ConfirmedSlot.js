import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';


const ConfirmedSlot = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.slot) {
    return <Typography variant="h6">No slot data available.</Typography>;
  }

  const { slot } = state;

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
        Slot Confirmation
      </Typography>

      <List>
        {Object.entries(slot).map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText primary={key} secondary={Array.isArray(value) ? value.join(', ') : value} />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ mt: 3 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default ConfirmedSlot;