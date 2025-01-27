import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DetailsSlot = () => {
  const [slot, setSlot] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`https://parking-system-j82e.onrender.com/api/lots/${id}`) // Use correct API
      .then((res) => {
        setSlot(res.data);
        console.log('slot details', res.data);
      })
      .catch((error) => {
        console.error('Error fetching slot details:', error.message);
        enqueueSnackbar('Error fetching slot details!', { variant: 'error' });
      });
}, [id, enqueueSnackbar]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://parking-system-j82e.onrender.com/api/lots/${id}`)
      .then(() => {
        enqueueSnackbar('Parking slot deleted successfully!', { variant: 'success' });
        navigate('/slots');
      })
      .catch((err) => {
        console.error('Error deleting parking slot:', err);
        enqueueSnackbar('Failed to delete the parking slot. Please try again.', { variant: 'error' });
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={
                  slot.imageUrl ||
                  'https://www.google.com/imgres?q=parking%20system%20with%20cars%20sunset%20aesthetic%20pictures%20of%20high%20resolution&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fsmart-systems-parking-management-solid-color-background-4k-ultra-hd_964851-139796.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fsmart-systems-parking-management-solid-color-background-4k-ultra-hd_172863802.htm&docid=DIG6eMVwTaE_KM&tbnid=luN4-tCmC5I0LM&vet=12ahUKEwjBtZOYjZWLAxUNSWwGHSIHIzY4ChAzegQIIhAA..i&w=626&h=351&hcb=2&ved=2ahUKEwjBtZOYjZWLAxUNSWwGHSIHIzY4ChAzegQIIhAA'
                }
                alt={slot.customerName || 'Default Slot Image'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Slot No: {slot.slotNumber || 'N/A'}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">Vehicle Type: {slot.vehicleType || 'N/A'}</Typography>
              <Typography variant="body1">Customer Name: {slot.customerName || 'N/A'}</Typography>
              <Typography variant="body1">Phone Number: {slot.phoneNumber || 'N/A'}</Typography>
              <Typography variant="body1">Vehicle Number: {slot.vehicleNumber || 'N/A'}</Typography>
              <Typography variant="body1">Duration: {slot.duration || 'N/A'} hours</Typography>
              <Typography variant="body1">Total Rent: {slot.totalRent || 0} Rupees</Typography>
              <Typography variant="body1">Arrival Time: {slot.arrivalTime || 'N/A'}</Typography>
              <Typography variant="body1">Booking Date: {slot.bookingDate || 'N/A'}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/slots"
            variant="outlined"
          >
            Back to Parking Slots
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-slot/${slot._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Slot
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Slot
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this parking slot? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DetailsSlot;