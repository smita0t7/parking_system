import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ConfirmedSlot = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // State for the confirmation dialog
  const [open, setOpen] = React.useState(false);

  // If no slot data is passed through the state, display a fallback message
  if (!state?.slot) {
    return <Typography variant="h6">No parking slot details available.</Typography>;
  }

  const { slot } = state;

  // Filter slot details to exclude empty or undefined fields
  const filteredSlotDetails = Object.entries(slot).filter(
    ([key, value]) => value !== '' && value !== null && value !== undefined
  );

  // Function to handle slot deletion
  const handleDelete = () => {
    // Replace this with an actual API call for deletion
    console.log('Deleting slot:', slot);
    setOpen(false); // Close the dialog
    navigate('/'); // Navigate to the home page after deletion
  };

  // Function to handle slot editing
  const handleEdit = () => {
    navigate('/CreateSlot', { state: { slot } }); // Redirect to the slot creation page with current slot data
  };

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
        Parking Slot Details
      </Typography>

      <List>
        {filteredSlotDetails.map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText
              primary={key.replace(/_/g, ' ').toUpperCase()} // Format key for better readability
              secondary={Array.isArray(value) ? value.join(', ') : value}
            />
          </ListItem>
        ))}
      </List>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEdit}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </Stack>

      {/* Delete Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this parking slot? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConfirmedSlot;
