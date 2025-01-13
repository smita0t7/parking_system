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

  const [open, setOpen] = React.useState(false); // Move state initialization here

  if (!state?.slot) {
    return <Typography variant="h6">No slot data available.</Typography>;
  }

  const { slot } = state;

  // Filter out empty or undefined fields
  const filteredSlotDetails = Object.entries(slot).filter(
    ([key, value]) => value !== '' && value !== null && value !== undefined
  );

  const handleDelete = () => {
    // Add delete API logic here
    console.log('Deleting slot:', slot);
    setOpen(false);
    navigate('/'); // Navigate to the home page after deletion
  };

  const handleEdit = () => {
    navigate('/CreateSlot', { state: { slot } }); // Pass the slot data to the "Create Slot" page
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
        Slot Confirmation
      </Typography>

      <List>
        {filteredSlotDetails.map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText
              primary={key}
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
            Are you sure you want to delete this slot? This action cannot be undone.
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